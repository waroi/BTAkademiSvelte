import { writable } from "svelte/store";

export const itemList = [
  {
    name: "Çadır",
    id: 1,
    stock: 10,
    img: "https://contents.mediadecathlon.com/p1965826/k$34ae0e92712967891e458a652d2158ee/sq/3-kisilik-kamp-cadiri-mh100-fresh-and-black.jpg?format=auto&f=969x969",
  },
  {
    name: "Termos",
    id: 2,
    stock: 5,
    img: "https://contents.mediadecathlon.com/p2201782/k$7aea4e25ea3004a97c8bd2262a45cdc4/sq/paslanmaz-celik-doga-yuruyusu-termosu-1-litre-mavi.jpg?format=auto&f=969x969",
  },
  {
    name: "Bisiklet",
    id: 3,
    stock: 2,
    img: "https://contents.mediadecathlon.com/p2011062/k$4396938c12e7bc02d21f93def5231f0c/sq/elektrikli-katlanir-bisiklet-gri-siyah-tilt-500.jpg?format=auto&f=969x969",
  },
];

export const basket = writable(0);
export const items = writable(JSON.parse(JSON.stringify(itemList)));
