Thsi app is based on the sample Svelte Native app at https://github.com/halfnelson/svelte-native/tree/master/demo

The main difference is that the counter is not lost when you quit the app and restart it. This required two changes:

* Store the counter using svelte/state, rather than just within the component
* Sync the store to the local filesystem (via the file `useLocalStorage.js`. (This uses nativescript-localstorage, which provides an API like the browser's local storage, but backed by a file on the device.) 
