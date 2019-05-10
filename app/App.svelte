<page xmlns="tns" class="page">
    <actionBar title="My App" icon="" class="action-bar">
    </actionBar>
    <stackLayout class="p-20">
        <label text="Tap the button" class="h1 text-center"/>
        <button text="TAP" on:tap="{ onTap }" class="btn btn-primary btn-active"/>
        <label text="{ message }" class="h2 text-center" textWrap="true"/>
    </stackLayout>
</page>

<script>
    import { count } from './stores.js';
    import useLocalStorage from './useLocalStorage.js';
    useLocalStorage(count, 'count');
    let count_value;
	const unsubscribe = count.subscribe(value => {
		count_value = value;
        }
    );
    let message;
    $: message = (count_value <= 0) 
                    ? "Hoorraaay! You unlocked the Svelte-Native clicker achievement!"
                    : `${count_value} taps left`
    
    const onTap = () => count.update(n => n - 1);
</script>
