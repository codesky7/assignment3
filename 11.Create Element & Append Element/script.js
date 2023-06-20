var ul = document.getElementById('myList');

for (var i = 1; i <= 5; i++) {
  var li = document.createElement('li');
  li.textContent = i;
  ul.appendChild(li);
}
