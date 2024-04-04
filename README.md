# RC-Shared-Components-Frontend

It is a comprehensive library of accessible, reusable, and composable React components that streamlines the development of modern web applications and websites. These libraries are based on Chrakra UI

## Documentation

It's the [https://chakra-ui.com](https://chakra-ui.com/) website for the latest version of Chakra UI. For older versions head over here

## Installation

    yarn

## Run the theme libray playground

    yarn storybook:themes

## Run the core library playground

    yarn storybook:core

## Development

### Tooling

- [Yarn](https://yarnpkg.com/getting-started) to manage packages and dependencies
- [Storybook](https://storybook.js.org/) for rapid UI component development and testing
- [Testing Library](https://testing-library.com/) for testing components and hooks
- [sui-mono](https://www.npmjs.com/package/@s-ui/mono) is a tool that aims to **simplify management for monorepo/multipackage projects**
- [Vitest](https://vitest.dev/) as testing framework

## Making a Pull Request?

Pull requests need only the 👍 of two or more collaborators to be merged

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

    yarn co

### Steps to PR

1. Create a new branch out of the `rewrite` branch. We follow the convention `[type/scope]`. For example `fix-accordion-hook` or `docs-menu-typo`. `type` can be either `docs`, `fix`, `feat`
2. Validate that changes comply with es-lint and cspell rules `"yarn prettier:fix",  "yarn lint:check",  "yarn lint:spell" `
3. We require 90% testing coverage, your check with `yarn test:coverage`
4. Make and commit your changes following the commit convention.
   - `feat / feature`: all changes that introduce completely new code or new features
   - `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
   - `refactor`: any code related change that is not a fix nor a feature
   - `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
   - `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
   - `test`: all changes regarding tests (adding new tests or changing existing ones)
   - `chore`: all changes to the repository that do not fit into any of the above categories
5. Use corresponding template
   Template

```
[Insert Description]

**Type of change**

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

**Pull Request Checklist:**
- [ ] I have rebased to the latest branch
- [ ] I have used conventional commit messages

**How Has This Been Tested?**

[Please describe how have you tested it?]

**My code follows the style guidelines of this project**

- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules:
- [ ] I have checked my code and corrected any misspellings
```

### Tests

All commits that fix bugs or add features need a test.

For coverage

    yarn test:coverage

To test in real time

    yarn workspace <library-name> vitest watch

    yarn workspace @aigot-ui/core vitest watch

To test with a friendly interface

    yarn test:ui
