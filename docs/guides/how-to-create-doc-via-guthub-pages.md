---
title: How To Create Documentation via GitHub Pages
/slug: how-to-create-doc-via-guthub-pages
---

**This is a short guide on how to create GitHub Pages and how to get them published.<br/>If you want to add some documentation for a Catena-X project/product, please follow the below mentioned steps.**

# General information

- The documentation web site (this site itself) is built with [Docusaurus2](https://docusaurus.io/), a modern static website generator.
- To start developing your own pages, you should first install the Docusaurus development server by installing nodejs, for further information please visit following pages:<br/>
  - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm<br/>
  - https://nodejs.org/de/download/
- The Documentation is written as a markdown file. 
- We use markdownlint in a pre-commit hook.
  - [How to configure markdown rules](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
- Contributions are done via pull request.
- Please follow the style we are already using in the existing pages.

# Step by Step Description

Within the Catena-X GitHub organization, the repository "_catenax-ng.github.io_" can be found here:<br/>
https://github.com/catenax-ng/catenax-ng.github.io
  
1. Create a new branch
2. Pull the repo
3. Create your pages

:::caution
If there are any issues with wrong/outdated links, the later deployment via github action will fail.<br/>To reduce the feedback loop, build it locally before pushing.
:::

4. Check them locally by<br/>
     - using `npm run build`
     - starting the development server with `npm start`, your default browser then should automatically start with [http://localhost:3000](http://localhost:3000)

:::tip
Start the  Docusaurus server in an own instance of your git bash/command line.
The pages then will automatically be rendered and reloaded in your browser.
:::

5. Add your changes
6. Commit your changes
7. Push your changes
8. Create a pull request and assign to DevSecOps team for approval
9. Merge into main branch after a colleague from DevSecOps approved
10. The page(s) will be deployed through github actions and get visible for public
