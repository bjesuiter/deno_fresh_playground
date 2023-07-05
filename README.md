# Deno Fresh Playground

_by [bjesuiter]()_

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Switch to arbitrary fresh version on Github (WIP)

Reason: to try new code branches with this example repo!

Replace

```json
  "imports": {
    "$fresh/": "https://deno.land/x/fresh@1.2.0/",
  }
```

with

```json
  "imports": {
    "$fresh/": "https://raw.githubusercontent.com/marvinhagemeister/fresh/async_server_components/",
  }
```

### Important: Refresh Dependencies when linking directly to git!

Run `deno task recache` to delete the old deno.lock file and generate a new one with the newest dependencies available in git!
This is needed, because `deno cache --reload` would fail with an error, when the file hashes in git have been changed to the previous time the lockfile has been generated!

### Useful Fresh URls for testing

(Replace the branch name at the end with the branch you want to try)

- Fresh Repo/main Branch: https://raw.githubusercontent.com/denoland/fresh/main/
- Marvinhagemeister/main Branch: https://raw.githubusercontent.com/marvinhagemeister/fresh/main/
