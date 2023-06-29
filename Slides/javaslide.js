'use strict';

const images = [
    { 'id': '1', 'url':'./Imagens/Pelé.png' },
    { 'id': '2', 'url':'./Imagens/endrick.jpg' },
    { 'id': '3', 'url':'./Imagens/palmeiras.jpeg' },
    { 'id': '4', 'url':'./Imagens/barcelona.jpeg' },
    { 'id': '5', 'url':'./Imagens/Leila.png' },
    { 'id': '6', 'url':'./Imagens/rony.png' },
    { 'id': '7', 'url':'./Imagens/neymar2.jpg' },
    { 'id': '8', 'url':'./Imagens/Fronteiras.png' },
    { 'id': '9', 'url':'./Imagens/Minecraft.png' },
    { 'id': '10', 'url':'./Imagens/dbz.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);