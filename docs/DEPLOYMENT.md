# نشر النسخة التجريبية

هذه النسخة لا تحتاج إلى قاعدة بيانات أو ملفات صوت أو متغيرات بيئية.

## GitHub

```bash
npm install
git init
git add .
git commit -m "Namaa live simulation"
```

بعد إنشاء مستودع جديد:

```bash
git remote add origin https://github.com/USERNAME/namaa-live-simulation.git
git branch -M main
git push -u origin main
```

## Vercel

1. اختر **Add New Project**.
2. اربط مستودع GitHub.
3. اترك Environment Variables فارغة.
4. اضغط **Deploy**.

## الربط المستقبلي

عند الانتقال إلى التشغيل الحقيقي، يُستبدل ملف `src/data/demo.ts` بطبقة API وقاعدة بيانات، ويُستخدم مخزن مستقل للصوت. يوجد تصور مبدئي للهيكل في `docs/future-database-schema.prisma`.
