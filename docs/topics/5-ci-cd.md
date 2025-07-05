---
sidebar_position: 4
---

# CI/CD

You’ve merged your pull request, tests are green, and everything looks good locally. Time to relax and move on? Not quite. In modern development, merging code is just the start. Your changes now enter the CI/CD pipeline—a set of automated steps that move code from your machine to production. Teams expect more than clean code; they expect you to understand and take ownership of the full lifecycle. CI/CD isn’t just jargon—it’s the core engine of DevOps, enabling fast, reliable delivery through automation and best practices.

- **Continuous Integration (CI):** The practice of regularly merging code changes into a shared repository, typically the main branch. Each merge triggers an automated build and test process to identify integration issues early.

- **Continuous Delivery (CD):** The practice of automatically preparing code for release after successful integration. This includes packaging the application, deploying to a staging environment, and running additional tests to ensure the build is always production-ready.

- **Continuous Deployment (also CD):** The practice of automatically deploying code to production once it passes all previous stages. No manual intervention is required.

## Why It Matters

Owning your part in CI/CD isn't just about following company processes — it directly improves your day-to-day experience.

- **Faster Feedback:** Your pipeline alerts you within minutes if something breaks, helping you catch issues early instead of finding out hours (or worse, days) later.
- **Less Risk, Less Stress:** Automated deployments take the pressure off "release day" and remove the chance of last-minute mistakes.
- **Real Ownership:** With the "you build it, you run it" mindset, you get to see how your code behaves in the real world — and you gain more control over the quality of what you deliver.

CI/CD isn’t a box to check. It’s a workflow that helps you and your team build and ship better software, faster. The more you understand your role in it, the more confident and capable you become.

## What’s expected from you

### Continuous Integration (CI)

This is where you have the most direct impact. Your main goal is to ensure the `main` branch is always stable and green.

- **Fixing the Build is Priority #1:** If your commit breaks the build in the `main` branch, you have broken it for _everyone_. Drop what you're doing. Fixing the build is now your most important task. A broken pipeline blocks the entire team from delivering value.
- **Your Tests are the Pipeline's Backbone:** The pipeline relies entirely on your unit and integration tests to validate your changes. If your tests are flaky or incomplete, the pipeline provides a false sense of security. Quality tests are a prerequisite for effective CI.
- **Commit Small and Often:** Large, monolithic pull requests are a nightmare for CI. They are difficult to review, and if they break the build, it's hard to pinpoint the cause. Small, atomic commits that represent a single logical change make the process smoother and debugging easier.
- **Understand Your Service's Build Process:** You don't need to be an expert, but you should understand how your application is built, tested, and packaged. Know where your dependencies are defined (`pom.xml`, `package.json`) and how to run the build script locally to diagnose issues.

### Continuous Delivery/Deployment (CD)

Your responsibility extends beyond just passing tests. You need to write code that can be deployed and operated safely and automatically.

- **Embrace Feature Flags:** Feature flags (or feature toggles) allow you to deploy code to production without releasing it to users. This decouples deployment from release, dramatically lowering the risk of a new feature causing an outage. Merging dark code is a standard, expected practice.
- **Build for Observability:** Once your code is in production, how do you know it's working? You must instrument your code. This means:
  - **Structured Logging:** Write logs that are machine-readable (e.g., JSON) and contain useful context.
  - **Metrics:** Expose key application metrics (like request latency, error rates, queue depth) so they can be monitored on dashboards.
  - **Health Checks:** Your application must provide an endpoint (e.g., `/healthz`) that tells the deployment system whether it's healthy and ready to receive traffic.

## Resources

### English Resources

- **[🎥 What is Continuous Integration?](https://youtu.be/1er2cjUq1UI?si=Rqc8pEP4wqV1l8US)**
- **[🎥 What is Continuous Delivery?](https://youtu.be/2TTU5BB-k9U?si=LTpV3mEZdiHtXOfg)**
- **[🎥 CI/CD Explained: The DevOps Skill That Makes You 10x More Valuable](https://youtu.be/AknbizcLq4w?si=wL8jrOa-ygigDNfr)**
- **[🎥 Deployment Pipelines](https://youtube.com/playlist?list=PLwLLcwQlnXBzhxIXSbtDPX78zYTgvST0B&si=JEi_UGWOvRIjAtU_)**
- **[📚 GitLab CI/CD Documentation](https://about.gitlab.com/topics/ci-cd/)**
- **[📚 What is CI/CD? by Github](https://github.com/resources/articles/devops/ci-cd)**

### Arabic Resources

- **[🎥 GitLab CI/CD from zero to hero (Arabic)](https://youtu.be/S-kpjjeDZGw?si=9IuyOqulI3BQqZoy)**
- **[🎥 شرح مفصل (CI/CD) Continuous Integration و continuous delivery و continuous deployment](https://youtu.be/l_ih7lVHBII?si=dXTSeLXWujCtJ3fu)**
- **[🎥 ما هو التكامل المستمر والنشر المستمر CI/CD](https://youtu.be/hFzSG9qNWWs?si=D2QAfu9NEgfy5hnq)**
- **[🎥 أكاديمية ترميز - CI/CD](https://youtu.be/XdaW-gVzsXo?si=xsjUUngAX9_Vu5pU)**
- **[📚 مقالات اقرأ-تك](https://eqraatech.com/tag/ci-cd/)**

### TODO

- You don't have to be an expert in CI/CD, but you should be able to understand the basics and be able to use the tools.
- Start with something simple like Github actions. CI/CD solution at the same time.
