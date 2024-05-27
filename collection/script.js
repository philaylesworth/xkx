'use strict';

function showInfo(bikes, tabletop) {
  let collection = document.querySelector('#collection');
  for (let bike of bikes) {
    let el = document.createElement('div');
    let { year, make, model, img, description } = bike;
    let bikeImage = '';
    if (img) {
      bikeImage = `<img src="images/${img}.jpg"/>`;
    }
    let thisBike = `<h2>${year} ${make} ${model}</h2>
    ${bikeImage}
    <p>${description}</p>`;
    el.innerHTML = thisBike;
    collection.appendChild(el);

    console.log(thisBike);
  }
}

Tabletop.init({
  key: '10cfYSQXsMBeTF8mOAEaijc1T5iuF2Ey0MGsbzDFjkM4',
  callback: showInfo,
  simpleSheet: true
});
