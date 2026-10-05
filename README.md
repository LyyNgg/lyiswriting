# ly is writing

A simple static blog about apps, written from a product perspective. Plain HTML + CSS, no build step.

## Writing a new post

1. Copy `posts/_template.html` to `posts/<app-name>.html`.
2. Fill in the `[brackets]`: app card, sections, pros/cons, PM take.
3. Put screenshots in `assets/` and reference them as `../assets/<file>.png`.
4. Add a `<li>` for the post at the top of the list in `index.html`.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Publishing

Works as-is on GitHub Pages (Settings → Pages → deploy from branch, root folder), Vercel, or Netlify.
