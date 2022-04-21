# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to deploy

This deploys through github actions!

## How to use locally

- `npm install` (only initially needed)
- `npm start`

### Verify build before pushing remote

If there are any issues with wrong/outdated links, the github action will fail. To reduce the feedback loop, build it locally before pushing.

`npm run build`

## How to use the documentation repository

Mini guide for proceeding with documentation on [Catena-X page](https://catenax-ng.github.io/)

- Procedures (for the Team and also for internal operators\) must be documented
- Documentation must be written as a markdown file and uploaded in a new branch on [GitHub pages](https://github.com/catenax-ng/catenax-ng.github.io)
- Process according to ‘best practices’ on GitHub:
 We use linting (check the code for programmatic and stylistic errors\)  
 **installing linting and linting-rules**  
 We use [markdownlint](https://www.npmjs.com/package/markdownlint) in a pre-commit hook.
 The 'package.json' should be extended with  
 "lint": "markdownlint --ignore node_modules *\*/\*.md"  
  **How to configure rules**  
 [https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)  
 Rules are configured in a file named '.markdownlint.json\'  
 for more detailed rules have a look at [this site](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md) as an example  
 **pre-commit hook**  
 We use ['husky'](https://typicode.github.io/husky/#/?id=bypass-hooks). After installing 'husky', the 'package.json' should be automatically extended with  
 "prepare": "husky install"  
 with 'npm run lint' the files are checked

- create a pull-request
- have the changes reviewed
- merge the branch into main branch
