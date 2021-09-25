consPhoto = document.createElement('button');
btnPhoto.innerText = 'Zmien zdjęcie';
const fieldPhoto = document.createElement('losowy');
document.body.appendChild(btnPhoto);
document.body.appendChild(fieldPhoto);

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imagesArray = [
    'will.png',
    'barbados.png'
];

btnPhoto.addEventListener('click', () => {
    fieldPhoto.innerHTML = `<img src="${imagesArray[getRandomArbitrary(0, 1)]}" style="width:200px; " >`;
});
