
$.ajax('./db/dinosaurs.json').done( function(data) {
	var dinoArray = data.dinosaurs;
	makeDOM(dinoArray);
}).fail(function(error){
	console.log("whoops! error with this file", error);
});

// writes contents in <dinoArray> to the DOM
function makeDOM(myArrayToPrint) {
	var myDomString = "";
	var myDomString = `<div class="row row-centered">`;
	var colCounter = 0;

	for (var i=0; i<myArrayToPrint.length; i++) {
		myDomString += `<div class="dinoCard col-sm-3 col">`;
		myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
		myDomString += `<section>`;
		myDomString += `<img src="${myArrayToPrint[i].img}">`;
		myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p>`;
		myDomString += `</section>`;
		myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;

		myDomString += `</div>`;

		colCounter += 1;
			if (colCounter === 3) { /// wraps this row

				myDomString += `</div>`; // end of row
				myDomString += `<div class="row">`;
				colCounter = 0;
		} // colCounter <if> 
	}
	myDomString += `</div>`;
	$("#dinosaurs").append(myDomString);
}

// handler for click event on a <dinoCard>
// changes the border on the card
// activates the text input box
$("#dinosaurs").on("click", ".dinoCard", function(e){
	$(".dinoCard").removeClass("dottedBorder");
	$(this).addClass("dottedBorder");

	$("#textbox").val("").focus();
});

$("#textbox").keyup(mirrorText);

// function mirrors whatever text user enters in the text area field
// in the bio area of the selected <dinoCard>
function mirrorText(e) {
	var selectedCard = $(".dottedBorder");
	var bio = $(".dottedBorder").find("p.bio");
	var bioTyped = $("#textbox").val();
	bio.html(bioTyped); 

	if (e.keyCode === 13) {
		$("#textbox").val("");
	}
}

