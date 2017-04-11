
var dinoArray = [];

$.ajax('./db/dinosaurs.json').done( function(data) {
	dinoArray = data.dinosaurs;
	makeDOM(dinoArray);
}).fail(function(error){
	console.log("whoops! error with this file", error);
});

function makeDOM(myArrayToPrint) {
	var myDomString = "";

	for (var i=0; i<myArrayToPrint.length; i++) {
		myDomString += `<div class="dinoCard">`;
		myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
		myDomString += `<section>`;
		myDomString += `<img src="${myArrayToPrint[i].img}">`;
		myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p>`;
		myDomString += `</section>`;
		myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;

		myDomString += `</div>`;
	}
	$("#dinosaurs").append(myDomString);
}

