# Isa Samiezade-Yazd — M02 portfolio

Three-page static student portfolio. Built with HTML, Bootstrap 5.3.3, custom CSS, and a small JavaScript shared-navigation loader. Prepared with AI assistance; review the source and personalize the reflection before submitting.

## Run locally

From this directory: `python -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000/. Use HTTP for the shared navigation fetch; fallback links also work without JavaScript.

## Files

- `index.html`, `projects.html`, `about.html`: the three pages.
- `nav.html`: shared navigation, fetched by `assets/navigation.js`.
- `assets/styles.css`: colors, focus, responsive layout, reduced motion.
- `planning/`: original content plan and three low-fidelity wireframes.
- `assets/images/`: three original diagrams created for this portfolio with code and AI assistance, not stock images or project screenshots. They may be reused under CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/).
- `assets/vendor/`: pinned Bootstrap stylesheet and its MIT license.

## Accessibility

Language and page titles; semantic landmarks and heading order; keyboard skip link and visible focus; descriptive image alternatives; underlined text links and aria-current navigation state; flexible layouts and reduced motion. Automated checks do not establish full accessibility conformance.

## Publish

Create a new GitHub repository for this folder. Push `main`. In Settings → Pages, select Deploy from a branch, `main`, `/ (root)`. The `.nojekyll` file preserves this plain static site. WAVE screenshots and personal reflection belong in the submission document, not invented in this README.
