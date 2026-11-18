# מהמודרה · החותם הגדול

אתר בעברית המרכז את מסורת המהמודרה: השושלת, טקסטי שורש מתורגמים מטיבטית, הדרך, ארבע היוגות, מדיטציה מודרכת ומילון מונחים.

בנוי ב־Next.js (App Router, ייצוא סטטי) ו־React, ומתפרסם אוטומטית ל־GitHub Pages.

## פיתוח מקומי

```bash
npm install
npm run dev
```

## פרסום

ב־Settings → Pages של המאגר יש לבחור **Source: GitHub Actions**. כל push מפעיל את `.github/workflows/deploy.yml`, שבונה את האתר ומפרסם אותו.

## מבנה התוכן

- `content/lineage.ts` — מורי השושלת
- `content/texts.ts` — טקסטי השורש המתורגמים
- `content/glossary.ts` — מילון המונחים
