import { writable } from "svelte/store";

export const productsList = [
    {
        name: "Kamp Çadırı",
        id: 1,
        stock: 10,
        img: "https://contents.mediadecathlon.com/p1965826/k$34ae0e92712967891e458a652d2158ee/sq/3-kisilik-kamp-cadiri-mh100-fresh-and-black.jpg?format=auto&f=969x969"
    },
     {
        name: "Termos",
        id: 2,
        stock: 5,
        img: "https://contents.mediadecathlon.com/p2201782/k$7aea4e25ea3004a97c8bd2262a45cdc4/sq/paslanmaz-celik-doga-yuruyusu-termosu-1-litre-mavi.jpg?format=auto&f=969x969"
    },
     {
        name: "Bisiklet",
        id: 3,
        stock: 2,
        img: "https://contents.mediadecathlon.com/p2011062/k$4396938c12e7bc02d21f93def5231f0c/sq/elektrikli-katlanir-bisiklet-gri-siyah-tilt-500.jpg?format=auto&f=969x969"
    },
     {
        name: "Yoga Matı",
        id: 4,
        stock: 0,
        img: "https://contents.mediadecathlon.com/p2023720/k$6b58015d7f29aa2fa42fce5cb3e61ee6/sq/xl-yoga-mati-5mm-yesil.jpg?format=auto&f=969x969"
    },
     {
        name: "Paten",
        id: 5,
        stock: 25,
        img: "https://contents.mediadecathlon.com/p2075813/k$af322ce227f76887f3d44198cbc1baba/sq/cocuk-play-5-paten-siyah-kirmizi.jpg?format=auto&f=969x969"
    },
     {
        name: "Basketbol Şortu",
        id: 6,
        stock: 7,
        img: "https://contents.mediadecathlon.com/p2066149/k$5ab86ba9a36a47ed05bf44105caff844/sq/yetiskin-basketbol-sortu-cift-tarafli-gri-siyah-sh500r.jpg?format=auto&f=969x969"
    },
]

export const basket = writable(0);

export const products = writable(JSON.parse(JSON.stringify(productsList)));

export const basketItems = writable([]);