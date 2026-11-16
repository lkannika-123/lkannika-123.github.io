# Personal website workflow

Work in this original website folder. The Git remote must remain
https://github.com/lkannika-123/lkannika-123.github.io.git.
The editable website and public PDF live in dist/. No manual uploads or second
checkout are needed. Local source resumes are ignored by Git.

## Required review before publishing

- Editing, previewing, and validating locally are authorized when requested.
- Before EVERY push, show the user the specific changed files, a concise summary,
  validation results and limitations, and the intended branch. Explain that a push
  to main triggers publication of the website and public PDF.
- Wait for the user's explicit approval of those changes before pushing. A request
  to edit, prepare, connect, or test is not approval to publish. Approval from a
  previous release does not authorize a new release. If the proposed changes grow
  after approval, obtain fresh approval of the updated release.
- Never force-push, delete remote branches, change repository visibility, or alter
  GitHub Pages settings without specific authorization.
- Stage only reviewed files. Preserve unrelated edits. Never commit credentials,
  local source resumes, temporary files, or node_modules.

## Release process for Codex

1. Inspect git status, git diff, untracked files, and origin; inspect GitHub's main
   before a release. If it has advanced, fetch and reconcile without overwriting
   local edits, then show the resulting changes for review.
2. Run node scripts/check-site.cjs. Preview with node preview.cjs and perform
   browser checks when available; report any missing checks honestly.
3. Show the review described above and wait for approval.
4. After approval, stage the reviewed files, create a descriptive commit, then
   push main to origin (normal push only). If authentication fails, report the
   blocker; never request that the user paste a token into chat or a tracked file.
5. Monitor the GitHub Pages workflow to completion when authenticated tools are
   available. Distinguish a successful push from a successful deployment.

Before the first deployment, verify Settings > Pages > Build and deployment uses
GitHub Actions. If that setting needs changing, include it in the release approval.
The expected public URL is https://lkannika-123.github.io/.
