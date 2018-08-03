## Example of a serverless application solution

### The stack

- TypeScript + React client
- bundled with webpack
- served as static files from express
- running in a lambda
- with binary media support
- configured using @goserverless
- built & deployed through CodePipeline & CodeBuild

### Why?

✓ All code in a single lambda\
✓ No servers to secure/patch\
✓ No complex proxy or separate domain for binary assets\
✓ No manual configuration steps\
✓ No Jenkins

## Getting started

1. Run `yarn` to restore packages.
2. Run `yarn start` to start local development environment.

Quick deploy - from local machine (this assumes you have MFA ... which of course you do 😉)
- Run `yarn deploy-local` to create a fully-working stack.
- To remove again: `yarn undeploy-local`

_Note: API gateway gives you a URL prepended with the 'stage' (e.g. '/dev') which breaks our react app. To get around this, you'll need to set up a domain name for the API gateway stage._

## Setting up CI/CD

Branches are built by CodeBuild directly - via a GitHub webhook. This is pointed at the `buildspec-branches.yml` which just runs the build, but doesn't deploy.

The `master` branch is monitored by CodePipeline which then triggers a separate CodeBuild project. This runs the main `buildspec.yml` which builds and deploys the serverless project.
