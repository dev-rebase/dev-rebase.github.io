---
description: Automate testing and deployment with continuous integration and delivery pipelines.
---

# CI/CD

You know about CI/CD pipelines, but your current team does manual deployments. One person runs tests, builds the app, and pushes to production. It's slow but manageable for your small team. But as teams grow and deployment frequency increases, manual processes become too difficult and lead to mistakes. You realize that while manual deployments work for small teams, most professional environments expect automated pipelines.

Backend developers especially benefit from mastering CI/CD since they often manage server deployments, database migrations, and infrastructure changes. However, understanding these concepts helps all developers work more effectively in team environments. It's time to embrace CI/CD.

- **Continuous Integration (CI):** The practice of regularly merging code changes into a shared repository, typically the main branch. Each merge triggers an automated build and test process to identify integration issues early.

- **Continuous Delivery (CD):** The practice of automatically preparing code for release after successful integration. This includes packaging the application, deploying to a staging environment, and running additional tests to ensure the build is always production-ready.

- **Continuous Deployment (also CD):** The practice of automatically deploying code to production once it passes all previous stages. No manual intervention is required.

## Why it matters

Owning your part in CI/CD isn't just about following company processes — it directly improves your day-to-day experience.

- **Faster Feedback:** Your pipeline alerts you within minutes if something breaks, helping you catch issues early instead of finding out hours (or worse, days) later.
- **Less Risk, Less Stress:** Automated deployments take the pressure off "release day" and remove the chance of last-minute mistakes.
- **Real Ownership:** With the "you build it, you run it" mindset, you get to see how your code behaves in the real world — and you gain more control over the quality of what you deliver.

CI/CD isn't a box to check. It's a workflow that helps you and your team build and ship better software, faster. The more you understand your role in it, the more confident and capable you become.

## What's expected from you

You don't have to be an expert in CI/CD, but you should be able to understand the basics and be able to use the tools. The goal is to be comfortable with the fundamental concepts and workflows that enable your team to deploy safely and efficiently.

### Continuous Integration (CI)

This is where you have the most direct impact. Your main goal is to ensure the `main` branch is always stable and green.

- **Fixing the Build is Priority #1:** If your commit breaks the build in the `main` branch, you have broken it for _everyone_. Drop what you're doing. Fixing the build is now your most important task. A broken pipeline blocks the entire team from delivering value.
- **Your Tests are the Pipeline's Backbone:** The pipeline relies entirely on your unit and integration tests to validate your changes. If your tests are unreliable or incomplete, the pipeline provides a false sense of security. Quality tests are a requirement for effective CI.
- **Commit Small and Often:** Large pull requests are a nightmare for CI. They are difficult to review, and if they break the build, it's hard to find the cause. Small commits that represent a single logical change make the process smoother and debugging easier.
- **Understand Your Service's Build Process:** You don't need to be an expert, but you should understand how your application is built, tested, and packaged. Know where your dependencies are defined (`pom.xml`, `package.json`) and how to run the build script locally to diagnose issues.

### Continuous Delivery/Deployment (CD)

Your responsibility extends beyond just passing tests. You need to write code that can be deployed and operated safely and automatically.

- **Embrace Feature Flags:** Feature flags (or feature toggles) allow you to deploy code to production without releasing it to users. This separates deployment from release, greatly reducing the risk of a new feature causing an outage. Merging dark code is a standard, expected practice.

- **Write Deployment-Ready Code:** Your code should be ready to deploy at any time. This means:
  - **Configuration Management:** Use environment variables for configuration, not hardcoded values.
  - **Database Migrations:** Write backward-compatible database changes that can be deployed without downtime.
  - **Graceful Shutdowns:** Handle termination signals properly so your application can shut down cleanly during deployments.

- **Monitor Your Deployments:** You're responsible for knowing if your deployment succeeded or failed. Learn to read deployment logs and understand the metrics that matter for your application. For more information about monitoring and observability, see the [Observability](./observability.md) section.

## Start Simple

If you're new to CI/CD, begin with something easy like [GitHub Actions](https://github.com/features/actions). It combines both CI and CD in one place, making it simpler to understand without needing many tools. You can create basic setups that test your code and put it online on simple platforms. As you get more comfortable, you can add more advanced features.

## Resources

### English Resources

- [🎥 What is Continuous Integration?](https://youtu.be/1er2cjUq1UI?si=Rqc8pEP4wqV1l8US)
- [🎥 What is Continuous Delivery?](https://youtu.be/2TTU5BB-k9U?si=LTpV3mEZdiHtXOfg)
- [🎥 What are Feature Flags?](https://youtu.be/AJa2B-twtG4?si=6yMfLVnIZdUIeJyJ)
- [🎥 CI/CD Explained: The DevOps Skill That Makes You 10x More Valuable](https://youtu.be/AknbizcLq4w?si=wL8jrOa-ygigDNfr)
- [🎥 Deployment Pipelines](https://youtube.com/playlist?list=PLwLLcwQlnXBzhxIXSbtDPX78zYTgvST0B&si=JEi_UGWOvRIjAtU_)
- [📚 GitLab CI/CD Documentation](https://about.gitlab.com/topics/ci-cd/)
- [📚 What is CI/CD? by Github](https://github.com/resources/articles/devops/ci-cd)

### Arabic Resources

- [🎥 GitLab CI/CD from zero to hero (Arabic)](https://youtu.be/S-kpjjeDZGw?si=9IuyOqulI3BQqZoy)
- [🎥 GitHub Actions full course Arabic](https://youtu.be/7gJFHjXscr8?si=JXHkVi82At4UO27q)
- [🎥 شرح مفصل (CI/CD) Continuous Integration و continuous delivery و continuous deployment](https://youtu.be/l_ih7lVHBII?si=dXTSeLXWujCtJ3fu)
- [🎥 ما هو التكامل المستمر والنشر المستمر CI/CD](https://youtu.be/hFzSG9qNWWs?si=D2QAfu9NEgfy5hnq)
- [🎥 أكاديمية ترميز - CI/CD](https://youtu.be/XdaW-gVzsXo?si=xsjUUngAX9_Vu5pU)
- [📚 مقالات اقرأ-تك](https://eqraatech.com/tag/ci-cd/)
