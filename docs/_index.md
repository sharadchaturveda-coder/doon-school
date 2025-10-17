---
version: 2025.10.16
origin: doon
branch: cognitive-transplant

# Doon International School - Specification-Driven Development Index

## Governance & Meta-Tools

This document serves as the governance foundation for the Doon International School website project operating under Specification-Driven Development (SDD) methodology as established in `docs/sdd.md`.

## Project Charter

**Project Name:** Doon International School Website  
**Methodology:** Specification-Driven Development (SDD)  
**Constitution:** `docs/constitution.md`  
**Technology Stack:** Next.js 14, TypeScript, Tailwind CSS, Static JSON Data

## Export Commands & Branch Policy

### Export Commands
- **System Export:** `/project.knowledge.export` - Complete project state export
- **Lessons Export:** `/project.lessons.export` - Debug insights extraction
- **Knowledge Transplant:** `/project.transplant` - Framework migration to new projects

### Branch Policy
1. **Branch Creation:** `git checkout -b [issue-slug]-[branch-name]`
2. **Work Isolation:** Each bug/experiment → separate branch `branch/[issue]`
3. **Export Before Merge:** Run lessons export before merging to master
4. **Merge Strategy:** Squash merge with distilled knowledge in commit message

## Operational Rituals

### Daily Rituals
- Review open branches against `/specs/` current state
- Update task status in `/tasks/tasks.md`
- Verify constitutional compliance before commits

### Weekly Rituals
- Audit technical debt against constitutional gates
- Update `/lessons/index.md` with new insights
- Review specification completeness metrics

### Monthly Rituals
- Full project export and archival
- Constitutional amendment review
- Technology stack evaluation against freezes

## Tool Chain
- **Testing:** Jest + React Testing Library (planned)
- **Linting:** ESLint + TypeScript strict mode
- **CI/CD:** Manual deployment with checklist verification
- **Documentation:** Markdown with version headers
- **Data Management:** Static JSON files in `/data/`

## Quality Gates
- TypeScript strict mode: Mandatory
- Test coverage: ≥ 90% (to be established)
- Constitutional compliance: No exceptions without amendment process
- Documentation sync: Updates concurrent with code changes

## Emergency Procedures
If constitutional violation required:
1. Document business justification in `/decisions/ledger.md`
2. Create emergency branch for isolation
3. Implement minimal violation scope
4. Schedule restoration plan with timeline
5. Review in post-mortem for constitutional amendment

## Knowledge Sources
- **Active Documents:** This index, constitution.md, sdd.md, workflow-final-report.md
- **Context Manifest:** `context.json` for rapid project understanding
- **Branch Context:** `branch/[issue]/context.json` for debugging focus

# END OF EXPORTED KNOWLEDGE

No reasoning beyond this line.
