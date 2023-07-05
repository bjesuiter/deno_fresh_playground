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
    "$fresh/": "https://github.com/marvinhagemeister/fresh/raw/async_server_components/",
  }
```

### Useful Fresh URls for testing

(Replace the branch name at the end with the branch you want to try)

- Fresh Repo/main Branch: https://github.com/denoland/fresh/raw/main/
- Marvinhagemeister/main Branch: https://github.com/marvinhagemeister/fresh/raw/main/
