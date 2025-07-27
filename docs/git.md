---
description: Learn Git workflows and collaboration practices used in professional development teams.
---

# Git

You know Git exists, you've even used basic commands, but your current team is small and everyone just pushes to main. No branches, no pull requests, no complex workflows. It works fine for your current project. But the moment you join a larger team or work on a more complex project, proper Git workflows become essential for preventing problems and maintaining code quality. You realize that while simple Git works for small teams, understanding proper Git workflows is essential for most professional development environments. It's time to master Git properly.

## Why it matters

In modern software development, working in a team is the norm. Git is the industry-standard tool for version control, allowing multiple developers to work on the same codebase without interfering with each other. Think of it as a "save" button for your entire project, but with powerful features: it tracks every change, lets you experiment with new ideas on separate "branches," and helps you merge your work back with your team's. Mastering Git is a basic skill that makes you a more effective engineer. It's a gateway to contributing to open-source projects and working with remote teams anywhere in the world. It provides a safety net for your code and a clear history of your project's evolution, which is very valuable for maintenance and debugging.

## What is expected from you

As a developer, you are expected to be comfortable with the daily commands and collaborative workflows that Git enables. While you don't need to be a Git expert who has memorized every command, you should have a solid understanding of the essentials to work efficiently in a team environment.

### Git Basics

You need to understand the Git basics because you will use them almost every day. These concepts form the foundation of your interaction with any codebase under version control.

- **Repository (Repo)**: This is the main folder for your project. The repo contains all your project files and, most importantly, a hidden sub-folder named `.git` that stores the entire history of changes.
- **Commit**: A commit is a snapshot of your repository at a specific point in time. When you `commit` your work, you are saving your staged changes along with a message describing what you did.
- **Branch**: A branch is a parallel version of your repository. You create branches to work on new features or bug fixes in isolation without affecting the main codebase (often called the `main` or `master` branch). Imagine it as a separate timeline where you can experiment freely.
- **Push**: This is how you send your committed changes from your local repository on your computer to a remote repository (like one hosted on GitHub). This makes your changes available to your teammates.
- **Pull**: This is how you fetch changes from a remote repository and merge them into your local repository. You `pull` to make sure your local version is up-to-date with the latest changes from your team.

### Branching Strategies & Workflows

A branching strategy is simply your team's set of rules for managing branches. You don't have to be an expert on every detail, but it's important to know that these strategies exist and to understand their core ideas. They bring order to the development process, ensuring everyone knows how to contribute work safely without creating problems. The strategy a team uses depends on its project size, release frequency, and overall workflow, so understanding the common patterns will help you adapt quickly in any professional environment.

- **[Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)**: This is a strong and structured workflow that uses long-running branches like `main` and `develop`, along with supporting branches for features, releases, and hotfixes (`feature`, `release`, `hotfix`). It's great for projects with scheduled releases but can be complex for simpler projects.
- **[Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)**: This is a simpler and very common approach. The core idea is that all new development happens in a dedicated `feature` branch instead of directly on the `main` branch. Once the feature is complete, it is merged into `main`. This keeps your primary branch clean and stable.
- **[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)**: A lightweight workflow perfect for teams that practice continuous deployment. You create a branch from `main` for any change (feature or fix), push it to the remote, and open a Pull Request. After review and testing, it's merged into `main` and deployed immediately.
- **[Trunk-Based Development](https://trunkbaseddevelopment.com/)**: In this strategy, developers commit directly into a single shared branch, often called `trunk` (or `main`). To avoid instability, changes are usually small and integrated frequently. This model relies heavily on strong automated testing to ensure the trunk is always releasable.

### Collaboration

Git is built for collaboration. These practices are key to working effectively with other developers.

- **[Pull Requests (PRs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) / [Merge Requests (MRs)](https://docs.gitlab.com/user/project/merge_requests/)**: This is the heart of collaboration. Instead of pushing your changes directly into the main branch, you create a Pull Request (on GitHub/Bitbucket) or Merge Request (on GitLab). This works as a formal request to merge your work. It allows your teammates to see your changes, discuss them, and suggest improvements before they are integrated.
- **Handling Merge Conflicts**: A merge conflict happens when Git can't automatically merge two branches because they both have conflicting changes on the same line of a file. You will definitely face these. The key is not to panic. Your editor will show you exactly where the conflicts are, and you simply need to edit the file to keep the version you want (yours, the other person's, or a combination of both), then commit the resolved file.
- **Commit Messages**: Clear commit messages are very important for a healthy project. They provide context for your changes, making it easier for others (and your future self) to understand the history of the codebase. A common practice is to follow the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** specification, which provides a simple set of rules for creating an explicit commit history.

## Resources

### English Resources

- [🎥 Git Tutorial by IBM Technology](https://www.youtube.com/watch?v=wpISo9TNjfU&ab_channel=IBMTechnology)
- [🎥 Git & GitHub for Beginners by Mosh](https://www.youtube.com/watch?v=8JJ101D3knE&ab_channel=ProgrammingwithMosh)
- [📚 Git & GitHub Roadmap](https://roadmap.sh/git-github)

### Arabic Resources

- [🎥 ماهو Github جيت هب؟ وما أهميته لكل مبرمج؟](https://youtu.be/PsXDzwBW2Ls?si=hK_rA1NGhTdJc533)
- [🎥 كورس تعلم Git & GitHub في ساعة](https://youtu.be/fDkR0TDR9dI?si=Y2ZPKHev0nnWd-ur)
- [🎥 الدورة الأساسية في git by أكاديمية ترميز](https://www.youtube.com/playlist?list=PLYyqC4bNbCIeCHLTRtwdLpQvle_zIavZ-)
- [🎥 Git Tutorials by Elzero Web School](https://www.youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF)
- [🎥 Mastering Git by Yallacode](https://youtube.com/playlist?list=PLtxOBbrOOPH4zeJLOdRNrP4pGft2IfMgo&si=FUgSZpw76wrnNZbM)
- [📚 Best Practices for Writing Clean Commits in Git (eqraatech.com)](https://eqraatech.com/best-practices-for-writing-clean-commits-in-git/)
- [📚 Git Commit Message Cheatsheet (eqraatech.com)](https://eqraatech.com/git-commit-message-cheatsheet/)

### Interactive Tutorials

- [Oh My Git!](https://ohmygit.org/)
- [Learn Git Branching](https://learngitbranching.js.org/)
