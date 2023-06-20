// a. 

document.addEventListener('click', function(event) {
  var x = event.pageX;
  var y = event.pageY;

  alert('Coordinates: (' + x + ', ' + y + ')');
});

// b. 

document.addEventListener('keydown', function(event) {
  var keyCode = event.keyCode || event.which;

  alert('Key code: ' + keyCode);
});

// c 

var myImage = document.getElementById('myImage');

myImage.addEventListener('mouseover', function() {
  myImage.src = 'https://cdn.shopify.com/s/files/1/0554/4886/2920/articles/naruto-15-choses-que-vous-ne-saviez-pas-a-propos-de-madara-uchiwa.webp?v=1679421997';
});

myImage.addEventListener('mouseout', function() {
  myImage.src = 'https://i1.sndcdn.com/avatars-za2rW5qWjt6wX6Aa-keNUcA-t500x500.jpg';
});

