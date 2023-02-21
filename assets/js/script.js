import dataWisata from '../data/wisata.json' assert { type: 'json' };
import dataMakanan from '../data/makanan.json' assert { type: 'json' };
import dataKomentar from '../data/komentar.json' assert { type: 'json' };

const addWisata = () => {
  const wisataElement = document.getElementById('wisata');

  dataWisata.forEach((wisata) => {
    const template = `
        <h3>${wisata.name}</h3>
        <img src="./assets/img/${wisata.img}" alt="${wisata.name}">
        <p>${wisata.description}</p>
      `;
    const section = document.createElement('section');
    section.innerHTML = template;

    wisataElement.appendChild(section);
  });
};

const addMakanan = () => {
  const makananContainer = document.querySelector('.makanan__container');

  dataMakanan.forEach((makanan) => {
    const template = `
        <h3>${makanan.name}</h3>
        <img src="./assets/img/${makanan.img}" alt="">
        <p>${makanan.description}</p>
    `;
    const makananCard = document.createElement('div');
    makananCard.classList.add('makanan__card');
    makananCard.innerHTML = template;

    makananContainer.appendChild(makananCard);
  });
};

const addKomentar = () => {
  const komentarContainer = document.querySelector('.comment__container');

  dataKomentar.forEach((komentar) => {
    const template = `
        <div>
            <h3 class="comment__name">${komentar.name}</h3>
            <blockquote>"${komentar.comment}"</blockquote>
        </div>
    `;

    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.innerHTML = template;

    komentarContainer.appendChild(comment);
  });
};

async function main() {
  await addWisata();
  await addMakanan();
  await addKomentar();
}

main();
