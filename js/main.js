/**
 * VIPO - קטלוג מוצרים לרכישה קבוצתית
 * קובץ JavaScript ראשי
 */

document.addEventListener('DOMContentLoaded', function() {
    // אנימציות כניסה לדף
    animateProductCards();
    
    // אתחול חיפוש
    initSearch();
    
    // אתחול פילטרים
    initFilters();
});

/**
 * אנימציות לכרטיסי המוצרים
 */
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    // הוספת אירוע hover לכל כרטיס
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.product-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.product-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });
}

/**
 * אתחול חיפוש מוצרים
 */
function initSearch() {
    const searchInput = document.querySelector('.search-group input');
    const searchButton = document.querySelector('.search-group button');
    const productCards = document.querySelectorAll('.product-card');
    
    if (!searchInput || !searchButton) return;
    
    // חיפוש בעת לחיצה על כפתור החיפוש
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    // חיפוש בעת לחיצה על Enter
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // פונקציית חיפוש
    function performSearch(query) {
        query = query.trim().toLowerCase();
        
        if (query === '') {
            // אם החיפוש ריק, הצג את כל המוצרים
            productCards.forEach(card => {
                card.closest('.col-sm-6').style.display = 'block';
            });
            return;
        }
        
        // חיפוש בכל כרטיס
        productCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const category = card.querySelector('.product-category').textContent.toLowerCase();
            const cardContainer = card.closest('.col-sm-6');
            
            if (title.includes(query) || category.includes(query)) {
                cardContainer.style.display = 'block';
            } else {
                cardContainer.style.display = 'none';
            }
        });
    }
}

/**
 * אתחול פילטרים
 */
function initFilters() {
    const categoryItems = document.querySelectorAll('[aria-labelledby="categoryDropdown"] .dropdown-item');
    const sortItems = document.querySelectorAll('[aria-labelledby="sortDropdown"] .dropdown-item');
    const productCards = document.querySelectorAll('.product-card');
    
    // פילטר לפי קטגוריה
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim();
            
            // עדכון כפתור הקטגוריה
            document.getElementById('categoryDropdown').textContent = category;
            
            // פילטור המוצרים
            filterByCategory(category);
        });
    });
    
    // מיון מוצרים
    sortItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sortType = this.textContent.trim();
            
            // עדכון כפתור המיון
            document.getElementById('sortDropdown').textContent = sortType;
            
            // מיון המוצרים
            sortProducts(sortType);
        });
    });
    
    // פילטור לפי קטגוריה
    function filterByCategory(category) {
        const productContainers = document.querySelectorAll('.product-card');
        
        productContainers.forEach(card => {
            const cardCategory = card.querySelector('.product-category').textContent.trim();
            const cardContainer = card.closest('.col-sm-6');
            
            if (category === 'הכל' || cardCategory === category) {
                cardContainer.style.display = 'block';
            } else {
                cardContainer.style.display = 'none';
            }
        });
    }
    
    // מיון מוצרים
    function sortProducts(sortType) {
        const productsContainer = document.querySelector('.row.g-4');
        const productItems = Array.from(document.querySelectorAll('.col-sm-6'));
        
        // מיון לפי סוג
        productItems.sort((a, b) => {
            const cardA = a.querySelector('.product-card');
            const cardB = b.querySelector('.product-card');
            
            if (sortType === 'פופולריות') {
                // מיון לפי מספר משתתפים (יחסית למקסימום)
                const progressA = parseInt(cardA.querySelector('.progress-bar').style.width);
                const progressB = parseInt(cardB.querySelector('.progress-bar').style.width);
                return progressB - progressA;
            } 
            else if (sortType === 'מחיר - מהנמוך לגבוה') {
                // מיון לפי מחיר קבוצתי מהנמוך לגבוה
                const priceA = parseInt(cardA.querySelector('.group-price').textContent.replace(/[^\d]/g, ''));
                const priceB = parseInt(cardB.querySelector('.group-price').textContent.replace(/[^\d]/g, ''));
                return priceA - priceB;
            } 
            else if (sortType === 'מחיר - מהגבוה לנמוך') {
                // מיון לפי מחיר קבוצתי מהגבוה לנמוך
                const priceA = parseInt(cardA.querySelector('.group-price').textContent.replace(/[^\d]/g, ''));
                const priceB = parseInt(cardB.querySelector('.group-price').textContent.replace(/[^\d]/g, ''));
                return priceB - priceA;
            }
            else if (sortType === 'חדש ביותר') {
                // מיון לפי תגית "חדש"
                const isNewA = cardA.querySelector('.product-badge')?.textContent === 'חדש' ? 1 : 0;
                const isNewB = cardB.querySelector('.product-badge')?.textContent === 'חדש' ? 1 : 0;
                return isNewB - isNewA;
            }
            
            return 0;
        });
        
        // הוספת המוצרים הממוינים בחזרה לדף
        productItems.forEach(item => {
            productsContainer.appendChild(item);
        });
    }
}

/**
 * עדכון אוטומטי של זמן נותר
 * (בפרויקט אמיתי יש לעדכן את הזמן הנותר מהשרת)
 */
function updateRemainingTime() {
    const timeElements = document.querySelectorAll('.time-left');
    
    timeElements.forEach(element => {
        // כאן יש להוסיף לוגיקה לחישוב הזמן הנותר
        // לדוגמה: חישוב הפרש בין זמן סיום לזמן נוכחי
    });
}
