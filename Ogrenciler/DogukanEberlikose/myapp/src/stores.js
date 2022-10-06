import { writable } from 'svelte/store';

export const products = writable([
    {id:1, title:"kampcadiri", count:10},
    {id:2, title:"sandalye", count:30},
    {id:3, title:"mat", count:20},
])

export const cardCount = writable(0);

