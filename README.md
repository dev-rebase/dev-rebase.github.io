# Dev-Rebase

[Dev-Rebase](https://dev-rebase.github.io) is a collection of concise guides that help developers bridge the gap between local experience and the expectations of international or remote tech roles. It focuses on practical knowledge around tools, workflows, and industry-standard practices used in modern software teams.

## What Inspired This Project

Many developers — especially those from underrepresented regions or local markets — face challenges not because of a lack of talent, but due to limited exposure to the practices commonly expected in global tech environments. Dev-Rebase was created to address this challenge.

The guides cover essential topics and skills that can make a meaningful difference when preparing for remote opportunities or job relocation:

- **Core Skills**: Git, Web Development, Testing.
- **Deployment & Production**: Containerization, CI/CD, Observability.
- **Learn by Doing**: Contributing to Open Source.
- **Learn from Others**: Mentorship, Global Communities.

## Built With

This site is built with [Docusaurus](https://docusaurus.io/), a modern static site generator.

## Getting Started

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

This is an open source project — contributions are welcome! If you spot errors, have topic suggestions, or want to expand the content, please open an issue or submit a pull request.
