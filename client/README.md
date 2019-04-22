# Frontend Development Instruction

This application is bootstraped with [electron-forge](https://electronforge.io/).

The application uses ES6 syntax, with stage-0 propossals. It's a standard React + Redux application using the [ducks pattern](https://github.com/erikras/ducks-modular-redux)

## Prepare

You need `node.js` and you need to install two packages globally:

`npm install -g node-gyp`

and

`npm install -g electron-forge`

Then `cd` into this directory, run `npm install`.

## Build

For dev build, run `npm start`

To build for your own platform, run `npm run build`