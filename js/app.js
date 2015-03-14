//limites
document.querySelector('#btn-limites').addEventListener ('click', function () {
  document.querySelector('#limites').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back-limites').addEventListener ('click', function () {
  document.querySelector('#limites').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//derivadas
document.querySelector('#btn-derivadas').addEventListener ('click', function () {
  document.querySelector('#derivadas').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back-derivadas').addEventListener ('click', function () {
  document.querySelector('#derivadas').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//integrales
document.querySelector('#btn-integrales').addEventListener ('click', function () {
  document.querySelector('#integrales').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back-integrales').addEventListener ('click', function () {
  document.querySelector('#integrales').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//acerca de
document.querySelector('#btn-acerca-de').addEventListener ('click', function () {
  document.querySelector('#acerca-de').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back-acerca-de').addEventListener ('click', function () {
  document.querySelector('#acerca-de').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});


//headers
document.querySelector('#btn-headers').addEventListener ('click', function () {
  document.querySelector('#headers').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-headers-back').addEventListener ('click', function () {
  document.querySelector('#headers').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});
