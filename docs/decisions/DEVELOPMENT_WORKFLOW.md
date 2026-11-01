# ADCP 360° Development Workflow

## Incremental build loop
Prompt → Small implementation → Basic build/render check → Manual inspection → Feedback → Refinement → Next task.

For each small UI change, do not run an extensive test suite. Check only obvious compile/build blockers and whether the changed screen renders. Report what changed and provide a short **What to Check Manually** list.

Run deeper tests when specifically requested or when changes affect authentication, authorisation/RBAC, multi-role switching, financial calculations, inventory transactions, data imports, audit integrity, digital signatures or other critical business logic. Never claim comprehensive testing when only a basic check was performed.

## Git discipline
- Keep the main branch stable.
- Use feature branches for implementation and separate branches for experiments.
- Before an experiment, ensure existing work is committed or safely backed up.
- Never discard uncommitted user changes.
- Use small, descriptive commits.
- Review diffs before merging.
- Do not commit secrets, tokens, private keys, DSC PINs, production data or sensitive personal information.

## UI experiments
The Wayfind-inspired dashboard is an experiment. Preserve the current dashboard and implement alternatives on a dedicated branch. Compare screenshots and retain the ability to revert. The new experimental logo is also not approved as the permanent identity until reviewed.

## Antigravity working instructions
Inspect the existing repository before editing. Reuse the current stack if established. Work only on the requested scope. Avoid unrelated refactors. At the end of each small build report:
- Implemented
- What to Check Manually
- Known Limitations

Wait for user feedback before moving to the next screen or module.
