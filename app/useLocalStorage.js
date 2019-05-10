import localStorage from 'nativescript-localstorage';

export default function useLocalStorage(store, key) {
    console.log('imported useLocalStorage');
	const json = localStorage.getItem(key);
	if (json) {
        console.log('got json');
		store.set(JSON.parse(json));
	}
    const unsubscribe = store.subscribe(current => {
        console.log('storing...' + JSON.stringify(current));
        localStorage.setItem(key, JSON.stringify(current));
    });
}