# Lakshmi Kannikanti — personal website

Local, unpublished website. The site files are in `dist/` and require no build step.

## Preview

Open PowerShell in this website folder and run:

```powershell
node preview.cjs
```

Visit http://127.0.0.1:3020 in a browser. Keep PowerShell open while testing; press Ctrl+C to stop. Refresh the browser after editing files. The server accepts connections only from this computer.

Alternatively, open `dist/index.html` directly in a browser. The website works without the preview server, including navigation and the resume link. Google Fonts requires an internet connection; offline, system fonts are used.

## Editing

- `dist/index.html`: content and sections; add future project articles inside `.project-list`, following the existing entry structure.
- `dist/styles.css`: colors, typography, and desktop/mobile layouts.
- `dist/script.js`: mobile navigation and footer year.
- `Resume.txt`: text source for website content. The resume link opens `dist/resume.pdf`, copied from the supplied PDF. Replace this PDF when your resume changes.

Typography uses Montserrat headings and Roboto body text. Layout and colors are inspired by https://aneesh-rai.com/, credited in the footer. No photo or LinkedIn link is included. The resume link opens the supplied PDF in the same tab; use the browser Back button to return.

## Review before publishing

Test the navigation, mobile menu (including Escape), email link, resume link, and footer credit. Review the resume facts and wording. Resize the browser to inspect desktop and phone layouts. This local version has not been published.

## GitHub publishing from this folder

This folder is already a Git checkout connected to
https://github.com/lkannika-123/lkannika-123.github.io.git on main.
Keep editing here. Codex can commit and push reviewed changes directly from this
folder; no copying to another checkout or uploading files by hand is needed.

The proposed GitHub Actions workflow validates the site and deploys only dist/
after a push to main. The public URL will be https://lkannika-123.github.io/.
The website PDF and email address will be public, as will committed source code
because this repository is public. Duplicate local resume sources are ignored.

### First release

1. Ask Codex to prepare a release. It checks the remote, runs
   `node scripts/check-site.cjs`, and presents the changed files and test results.
2. Review the preview and changes. Explicitly approve the push when ready.
3. Codex commits and pushes only the approved files, then checks deployment status.
4. The repository must use **Settings > Pages > Build and deployment > Source >
   GitHub Actions**. Pages is enabled, but its source could not be verified without
   authentication during setup. Include any required setting change in your first
   release approval. Git write authentication also remains untested until a push.

### Future updates

Ask Codex to make the changes and prepare them for review. After you approve the
specific release, Codex handles the commit and push; GitHub Actions publishes it.
Local saves alone never publish. The review rule is recorded in AGENTS.md for
future Codex sessions. It is a collaborator instruction, not a GitHub-enforced
branch protection rule.

No push, workflow run, or GitHub settings change was performed during setup.
