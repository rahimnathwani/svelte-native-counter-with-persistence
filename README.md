## What this is

This app is based on the sample Svelte Native app at [svelte-native/tree/master/demo](https://github.com/halfnelson/svelte-native/tree/master/demo)

The main difference is that the counter is not lost when you quit the app and restart it. This required two changes:

* Store the counter using svelte/state, rather than just within the component
* Sync the store to the local filesystem (via the file `useLocalStorage.js`. (This uses nativescript-localstorage, which provides an API like the browser's local storage, but backed by a file on the device.) 

## To use it

1. Install NativeScript from the [instructions](https://docs.nativescript.org/start/quick-setup)
2. Clone the repo and `cd` into the folder
3. Run `npm install`
4. Connect your smartphone or start your emulator
5. Run `tns run android --bundle`
