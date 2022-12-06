function navbarf() {
	var i = document.getElementById('navlist');
	if (i.style.display == "block") {
		i.style.display = "none";
	}else {
		i.style.display = "block"
	}
}
var photos = ["bg1.jpg","bg2.jpg"];
var imgTag = document.querySelector(".services img")
var count = 0;
function next() {
	count++;
	if (count>=photos.length) {
		count = 0;
		imgTag.src = photos[count];
	}else {
	imgTag.src = photos[count];	
	}
}
function prev() {
	count--;
	if (count < 0) {
		count = photos.length -1;
		imgTag.src = photos[count];
	}else {
	imgTag.src = photos[count];	
	}	
}