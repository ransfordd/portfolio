# Remove node_modules from Git history (GitHub 100 MB limit)

Your repo is rejecting the push because `node_modules` (or a large `.node` file inside it) was committed and exceeds GitHub's 100 MB limit. Follow **one** of the options below.

---

## Option A: Fresh history (simplest – use if you haven’t shared this repo or can force-push)

This replaces `main` with a single new commit that has no `node_modules` in history. Run in PowerShell from the repo root (`C:\Users\HP\Documents\OceanCyber\Docker\Portfolio`):

```powershell
# 1. Stop tracking node_modules (keeps folder on disk)
git rm -r --cached node_modules

# 2. Commit the removal
git add -A
git commit -m "Stop tracking node_modules"

# 3. Rewrite history to only this commit (removes all previous commits and the big file)
git checkout --orphan temp-main
git add -A
git commit -m "Portfolio without node_modules in history"

# 4. Replace main with this clean history
git branch -D main
git branch -m main

# 5. Force push (overwrites remote main)
git push -f origin main
```

After this, `node_modules` will no longer be in the repo or in history. Run `npm install` again after cloning or on another machine.

---

## Option B: Keep full history (remove only node_modules from all commits)

Use this if you need to keep existing commit history and only remove `node_modules` from every commit.

```powershell
# 1. Remove node_modules from the index
git rm -r --cached node_modules
git commit -m "Remove node_modules from tracking"

# 2. Remove node_modules from all past commits (can take a few minutes)
git filter-branch -f --index-filter "git rm -rf --cached --ignore-unmatch node_modules" --prune-empty HEAD

# 3. Force push
git push -f origin main
```

---

## Make sure it doesn’t happen again

- `.gitignore` already includes `node_modules/` and `*.node`. Do not run `git add .` without checking, or use `git add -A` only after confirming `node_modules` is ignored.
- Before committing, run: `git status` and ensure `node_modules` does not appear.
