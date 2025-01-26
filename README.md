# Overwolf + Svelte 5 + Vite

Template for Overwolf Native using Svelte 5 as the frontend framework and Vite as the bundler.
 
This project is based on [ntsd/overwolf-svelte-boilerplate](https://github.com/ntsd/overwolf-svelte-boilerplate)
I have borrowed a bunch of the original functionality from said project.

## Features
- Svelte(no kit) + Vite
- Overwolf Native Plugin
- In game overlay and Desktop window (Drag to move windows)
- Nano Stores by [Overwolf Nano Stores](https://github.com/ntsd/overwolf-nanostores)
- TailwindCSS
- Lucide svelte icons
- Basic OPK build support
- Quick development with hot reload and a window swapper in browser

## Getting started
Clone with [degit](https://github.com/Rich-Harris/degit):

```sh
# make copy of this repository
npx degit MrGentle/overwolf-svelte-vite "my-new-repo"

# change to project directory
cd my-new-repo

# install dependencies
npm i

# build overwolf plugin, you can now use `Load unpacked extension` to test the local plugin at `build`.
npm run build

# build publishable version
npm run build:overwolf
```