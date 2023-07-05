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
    "$fresh/": "https://github.com/marvinhagemeister/fresh/tree/async_server_components/",
  }
```
