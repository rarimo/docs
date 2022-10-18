# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator

## Contributing

We welcome any and all contributions to this project, whether it is tweaking configuration, updating content, or refactoring components. In order for your contribution to be reviewed expeditiously, we ask that you follow these guidelines...

1. Create a new branch off of `main` using gitflow naming conventions (`feature/evm-contract-interface`, `bug/fix-discord-link`, `hotfix/jacob-spelled-rarimo-wrong`, etc)
1. Make your changes in small, atomic commits
1. Once your branch is ready, push to remote and open a merge request against `main`
1. Include a verbose description and screenshots (if necessary)
1. Inform Platform Engineering team that there are changes ready for review (`#tech` or `#platform-engineering`)
1. Coordinate on any comments or questions -- the platform engineering team will shepherd the change through and merge it in when ready

## Development

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Testing

```
$ yarn typecheck
```

This does a quick typecheck. We don't have any formal tests (yet) for this repo.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
