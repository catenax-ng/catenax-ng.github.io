# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to deploy

This deploys through github actions!

## how to use locally

- `npm install` (only initialy needed)
- `npm start`

### Verify build before pushing remote

If there are any issues with wrong/outdated links, the github action will fail. To reduce the feedback loop, build it locally before pushing.

`npm run build`

## linting-rules

We use [markdownlint](https://www.npmjs.com/package/markdownlint) in a pre-commit hook.

### How to configure rules

[https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)  
Rules are configured in .markdownlint.json
