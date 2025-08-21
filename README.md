# Stack

_THE stack for getting stuff done!_

## Getting Started

- `deno run dev` to run this in watch mode.
- `deno run build` to build this project.

## TODO

- database (sqlite 99%?)
- page transition animation
- docker/k8s config
- node-cron
- auth n auth (guest/user/admin)

## Technology Choices

- Javascript
  - Client: Preact, wouter, @preact/signals
  - Server: Hono
  - Build tools: deno
  - Testing: deno test runner, Playwright.
  - Deployment: docker-compose, single container, 15s deploys
    - may change but this is super minimal config for 99% of what
      we want.
