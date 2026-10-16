# Repository workflow

- Work on main. Do not create or push additional branches unless the user explicitly requests them.
- Configure repository-local commit validation with `git config core.hooksPath .githooks`.
- Every update uses calendar versioning: YY.M.D.NUM. Use America/Chicago for the release date, unpadded month/day, and a positive sequence number scoped to this repository and day.
- Find the highest existing release sequence for that day in Git history, CHANGELOG.md and VERSION; use the next number.
- Record the current version as one line in the root VERSION file. Keep CHANGELOG.md in English, newest release first, with concrete user-facing changes for every update.
- The entire commit message must be Release followed by one space and the exact VERSION value. The original UMich Add files commit is the sole preserved exception.
- Historical versions already recorded in the changelog remain stable. Rewrite published history only when the user explicitly authorizes it; use an exact force-with-lease when that is required.
- Build the model worker before the viewer bundle. Verify navigation and loading regressions, local/offline byte integrity, SEO and applicable browser behavior after changes.
- Preserve CAD geometry and original source data when changing website interaction. Keep camera pivots ground-aligned, disable inertia, and make rotation an explicit interaction.

- Use English filenames for all project files and generated deliverables. Update references when renaming files.

- For browser checks of UI or interaction shared by all four campus sites, use UChicago or UW. Avoid loading the heavier UMich model for shared-interface checks; use it only when validation is specific to UMich geometry or data. Keep checks necessary and concise.
