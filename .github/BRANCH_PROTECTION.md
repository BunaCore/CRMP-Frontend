# Branch Protection Setup (GitHub)

This repository now includes PR checks, CODEOWNERS, and a PR template.
To fully enforce PR protection, enable branch rules in GitHub settings.

## 1) Open Branch Rules

- GitHub repo → **Settings** → **Branches**
- Add rule for branch name pattern: `main`

## 2) Enable Required Settings

- ✅ Require a pull request before merging
- ✅ Require approvals (at least 1)
- ✅ Dismiss stale approvals when new commits are pushed
- ✅ Require review from Code Owners
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Do not allow bypassing the above settings (for non-admins)
- ✅ Include administrators (recommended)

## 3) Select Required Status Checks

After the first workflow run, mark these checks as required:

- `Lint`
- `Build`

## 4) Validate

- Open a test PR with a failing lint/build commit.
- Confirm merge is blocked until checks pass.
- Confirm reviewer request is auto-assigned from CODEOWNERS.

## Important

Update `.github/CODEOWNERS` and replace `@OWNER_USERNAME` with a real user/team, otherwise code-owner review cannot be enforced.
