---
description: Learn automated testing practices to write reliable code and catch bugs early.
---

# Testing

You've heard about unit tests, integration tests, and TDD, but your current company has a dedicated QA team that handles all testing. You write code, they test it, and that system works fine. But as applications grow more complex and teams move faster, relying only on manual testing becomes a bottleneck that slows everyone down. You realize that while you can rely on QA teams in some companies, most modern development roles expect you to test your own code. It's time to start testing your own code.

## Why it matters

As software projects grow more complex, it becomes impossible to check everything manually. Testing—especially automated testing—is what allows teams to ship confidently and move fast without constantly breaking things.

Here's why testing matters:

- **Confidence**: Tests confirm that code behaves as expected—especially after changes.
- **Speed**: You spend less time debugging and more time building.
- **Design**: Writing testable code often leads to better structure and separation of concerns.
- **Collaboration**: Good test coverage makes onboarding easier and prevents "surprise" bugs from reaching production.

Simply put, testing is what enables **safe iteration**.

## What's expected from you

### Unit Tests

Unit tests are your first line of defense against bugs. They are small, fast, and focused—designed to check that a single function, method, or component behaves as expected in isolation. A typical unit test calls a function with a specific input and checks that the output (or side effect) is correct. Any external dependencies—like databases, APIs, or file systems—should be mocked or stubbed out to keep the test focused and fast.

As a developer, you are expected to:

- Write and maintain unit tests for the code you develop—this is not optional.
- Include relevant tests in every pull request. Submitting new code without tests is considered a red flag.
- Go beyond just increasing code coverage. Focus on testing real business logic, edge cases, and potential failure points.
- Keep your tests clear, reliable, and easy for others to read and run.

### Integration Tests

The code you write doesn't work in isolation—it interacts with databases, caches, APIs, and other services. **Integration tests** make sure these interactions behave correctly and as expected. An integration test checks how multiple parts of your system work together. For example, does your API endpoint fetch data from the database and return it properly? Does your service call another micro-service and handle its response as intended?

As a developer, you are expected to:

- Write integration tests for the features or services you build.
- Test key interactions—such as database reads/writes or service-to-service communication—to catch issues early.
- Include integration tests when adding things like new API endpoints, to check they work with their actual dependencies.
- Make sure your tests validate the contracts between different parts of the system, so behavior remains predictable as things evolve.

### TDD

Writing tests after you finish coding is helpful—but writing them _before_ or _during_ development is even better. Approaches like Test-Driven Development (TDD) make testing an essential part of the development process from the very beginning.

TDD turns the usual "code first, test later" habit on its head. It uses a focused, repeatable cycle:

1. **Red:** Start by writing a test for a small piece of functionality you want to build. The test should fail—this confirms the feature doesn't exist yet.
2. **Green:** Write just enough code to make the test pass. Don't overbuild at this stage.
3. **Refactor:** Improve the structure and clarity of the code you just wrote. Because the test is already in place, you can refactor with confidence, knowing it will catch regressions.

This cycle keeps your codebase backed by a reliable test suite. It also helps you clarify the exact requirements _before_ jumping into implementation—leading to cleaner, more intentional code.

## Resources

### English Resources

- [🎥 Modern Software Engineering Youtube Channel](https://www.youtube.com/@ModernSoftwareEngineeringYT)
- [📚 Why Developers Don't Write Unit Tests](https://www.linkedin.com/pulse/why-developers-dont-write-unit-tests-justin-bannister/)
- [📚 The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [📚 Rethinking the Testing Pyramid](https://www.wiremock.io/post/rethinking-the-testing-pyramid)
- [📚 Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

### Arabic Resources

- [🎥 يعني ايه Unit testing وليه كل الدفيلوبرز لازم يتعلموا يكتبوه - سيمي كولون | SemiColon](https://youtu.be/B9rLLcVQfpI?si=JJxWiYOWm16mjSsW)
- [🎥 ازاي بنختبر السوفتوير؟ | Software Testing](https://youtu.be/9NcvjKX-ySk?si=KXwWbIqWQ945-pca)
- [🎥 Software Testing Course in Arabic - بالعربي software testing شرح by Tresmerge](https://youtube.com/playlist?list=PLzNfs-3kBUJllCa8_6pLYDMnIlg6Lfvu4&si=CnLIMCcfRaxAWGb0)
- [🎥 Mastering Unit Testing by Yallacode](https://youtube.com/playlist?list=PLtxOBbrOOPH6pNpU-I4TJ15DrwU-hxNIz&si=PdRxKHpzrr-X3iGq)
