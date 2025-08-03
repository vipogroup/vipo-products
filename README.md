# VIPO - אתר רכישה קבוצתית

אתר מודרני לרכישה קבוצתית של מוצרים שונים עם עיצוב רספונסיבי ומותאם לעברית.

## תכונות

- 🛍️ קטלוג מוצרים מעוצב ואינטראקטיבי
- 📱 עיצוב רספונסיבי מותאם למובייל (כרטיסים אופקיים)
- 🔍 מערכת חיפוש ופילטרים
- 📊 מעקב אחר התקדמות רכישה קבוצתית
- ⏰ ספירה לאחור לסיום המבצע
- 🎨 עיצוב מודרני עם אנימציות

## טכנולוגיות

- HTML5
- CSS3 (עם משתנים ו-Flexbox/Grid)
- Bootstrap 5 RTL
- JavaScript
- Font Awesome Icons
- Animate.css
- Google Fonts (Heebo)

## מבנה הפרויקט

```
vipo-group-products/
├── index.html          # דף הבית עם קטלוג המוצרים
├── css/
│   └── style.css       # עיצוב מותאם אישית
├── js/
│   └── main.js         # פונקציונליות JavaScript
└── README.md           # תיעוד הפרויקט
```

## עיצוב רספונסיבי

### מובייל (< 992px)
- כרטיסי מוצר אופקיים (תמונה בצד, מידע בצד)
- 2 מוצרים בשורה
- טקסט מותאם וקומפקטי

### טאבלט (992px - 1199px)
- כרטיסי מוצר אנכיים
- 3 מוצרים בשורה

### מחשב (≥ 1200px)
- כרטיסי מוצר אנכיים
- 4 מוצרים בשורה

## התקנה והפעלה

1. שכפל את הפרויקט:
```bash
git clone [repository-url]
cd vipo-group-products
```

2. פתח את `index.html` בדפדפן או הפעל שרת מקומי:
```bash
# עם Python
python -m http.server 8000

# עם Node.js
npx serve .
```

3. גש לכתובת: `http://localhost:8000`

## תכונות מיוחדות

- **RTL Support**: תמיכה מלאה בעברית וכיוון מימין לשמאל
- **Progressive Enhancement**: האתר פועל גם ללא JavaScript
- **Accessibility**: נגישות משופרת עם ARIA labels
- **Performance**: קוד מותאם ומהיר

## תרומה לפרויקט

1. צור Fork של הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. בצע commit לשינויים (`git commit -m 'Add amazing feature'`)
4. דחף ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## רישיון

פרויקט זה מופץ תחת רישיון MIT. ראה קובץ `LICENSE` לפרטים נוספים.

## צור קשר

VIPO Team - [info@vipo.co.il](mailto:info@vipo.co.il)

קישור לפרויקט: [https://github.com/username/vipo-group-products](https://github.com/username/vipo-group-products)
