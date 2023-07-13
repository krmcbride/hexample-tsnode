This is a placeholder for projects which have a Vue app. The content of this module is essentially the output of the [Vite-based project from the Vue quickstart](https://vuejs.org/guide/quick-start.html), with some customization.

If this service will not need a Vue app, delete this `app` folder.

Note that when introducing an `app`, the root `package.json` needs the following modifications:

- The `serve` and `watch` scripts need `serve-app` and `watch-app` added to the `concurrently` tasks.
- The `workspaces` needs `app` added to the list so Lerna knows to run commands there.
