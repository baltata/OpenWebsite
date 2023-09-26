// element that will be wrapped
var el = document.querySelectorAll('.exercice');

for (i = 0; i < el.length; ++i) {

// create wrapper container
var wrapper = document.createElement('div');
  wrapper.classList.add('conteneurExercice');

// insert wrapper before el in the DOM tree
el[i].parentNode.insertBefore(wrapper, el[i]);

// move el into wrapper
wrapper.appendChild(el[i]);
}
