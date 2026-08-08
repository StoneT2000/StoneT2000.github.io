This is my website containing a collection of my projects and related work. Go to https://stoneztao.com to take a look.

## Local development

```bash
npm install
npm start
```

Then open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Resume PDF

To compile the resume PDF, download [typst](https://typst.app/) and run:

```bash
typst -w public/files/Stone_Tao_CV.typ public/files/Stone_Tao_CV.pdf
```
