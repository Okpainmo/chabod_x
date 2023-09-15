<h1>Project contribution guide.</h1>

> This file contains the contribution guide for this project. Please ensure to follow all the listed instructions strictly to ensure your pull requests are not turned down. Note that all issue titles must be in lower-case letters.

> **Remember to fork the repository and have your own copy before proceeding with any of the below instructions - It is your own forked repository that you will clone not the main project repository** 

# How to contribute.

1. Select an issue you wish to handle.
2. Assign the issue to yourself by commenting on the issue - that you are taking charge of handling it.
3. Create a new branch for that issue(create a new branch for every new issue you pick). The branch naming should follow this pattern - start with the number of the issue, followed by an underscore and then the title of that issue e.g.

> “250_light-and-dark-theme-toggle-button-is-not-responding-to-clicks”.

> There must not be any spaces between each word. Replace spaces with dashes(hyphens) except the one after the issue number that must be an underscore. 

4. Handle the issue on the new branch created and make a pull request.

> ENSURE TO MAKE A PULL REQUEST FOR EVERY ISSUE YOU RESOLVE/HANDLE.

# Commit patterns.

Commits on this project are to be well structured. The following rules must be followed when making commits, or else your pull request WILL BE CLOSED. Note that all commit messages must be in lower-case letters.

1. Every commit must be one of the following types.

- refactor - for code changes.
- assets - for the addition of assets to the project (e.g images, gifs, fonts etc)
- fix - bug fixes.
- chore - for regular or other normal activities on the repo.
- init - for new initializations of a fresh process on the repo e.g.

> “init: added tailwind-css to project”

- style: CSS only changes.
- doc: changes relating to documentation, and other related document changes
- bulk: for commits that are more than 10 files - that none of the above commit types fits with.
- delete: for processes that involve deleting any content of the repo.
- feat: for commits that involve the implementation of a new feature.

2. Commit messages should follow this pattern.

“commit-type: commit message” - e.g.

> “feat: I added the light/dark theme toggle functionality”.

Remember to keep commit messages short, simple, and straight to the point.

# Pull requests.

The following instructions will guide you on how to create pull requests for this project. Please follow them strictly to prevent your pull request from being closed/rejected.

1. Your pull request titles should be according to the following pattern, and they must all be in lower-case letters.
   “Issue **branch-name** resolved” - e.g

   > “issue 250_add-light-and-dark-theme-toggle-is-not-responding-to-clicks resolved”

2. Your pull request body should contain the following.

- A brief introduction about the issue you handled/resolved.
- How you handled the issue - a brief explanation of the method with which you handled the issue.
- Add any other comment you wish to add
- Always mention your pull request reviewer.
