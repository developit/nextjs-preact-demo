# Preact example

This is a fully working example of Next.js running on [Preact](https://github.com/preactjs/preact) instead of React.

This reduces the base JavaScript weight of pages to 30kb (or far lower with additional Webpack optimizations).

## How to use

Clone this repo and run `npm install`:

```sh
git clone git@github.com:developit/next-preact
```

## How does it work?

The example takes advantage of npm/yarn aliases, which essentially allow installing `preact/compat` at `node_modules/react`.

Here's how this example repo was set up:

- Set up a basic Next.js app using `create-next-app`
- Install `preact`, uninstall `react` and `react-dom`.
- Install [preact-compat/react](https://github.com/preact-compat/react) and [preact-compat/react-dom](https://github.com/preact-compat/react-dom) for aliasing.
- Use an [npm alias](https://github.com/npm/rfcs/blob/latest/implemented/0001-package-aliases.md#detailed-explanation) to replace `react-ssr-prepass` with `preact-ssr-prepass` (also [works](https://twitter.com/sebmck/status/873958247304232961) with Yarn).
