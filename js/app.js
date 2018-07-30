
/*
Drang and Drop Events:
dragstart
drag
dragenter
dragleave
dragover
drop
dragend

Drag and Drop Interface dataTranfer
*/
//EJERCICIO DRAP AND DROP

var containerPrincipal = document.getElementById("container1");
var containerPrincipal2 = document.getElementById("container2");

  $("#file").on("change", function(event){
    var selectedFile = event.target.files[0].name;
    console.log(selectedFile);
    var imageSave=document.getElementById("imageBuho4");
    imageSave.src="assets/img/"+selectedFile;
  });

$(".dragImages").mousedown(function() {
    var idImages = $(this).attr("id");
    var imageBuhoSelect = document.getElementById(idImages);
    imageBuhoSelect.ondragstart = function (event) { //Este evento se va a disparar cuando la imagen se arrastre.
        event.dataTransfer.setData('text', idImages);
    }
});

containerPrincipal.ondragover = function (event) {// Este evento se va a disparar cuando la imagen se arrastre por encima del contenedor
    event.preventDefault();
}

containerPrincipal.ondrop=function(event){// Este Evento se disparara cuando la imagen sea soltada en el contenedor
    var dropImageBuho1=event.dataTransfer.getData('text');
    event.preventDefault();
    var myElement=document.getElementById(dropImageBuho1);
    var newElementInContainer=document.createElement('img');
    newElementInContainer.src=myElement.src;
    containerPrincipal.appendChild(newElementInContainer);
}

// CONTENEDOR No.2

containerPrincipal2.ondragover = function (event) {// Este evento se va a disparar cuando la imagen se arrastre por encima del contenedor
    event.preventDefault();
}

containerPrincipal2.ondrop=function(event){// Este Evento se disparara cuando la imagen sea soltada en el contenedor
    var dropImageBuho1=event.dataTransfer.getData('text');
    event.preventDefault();
    var myElement=document.getElementById(dropImageBuho1);
    var newElementInContainer=document.createElement('img');
    newElementInContainer.src=myElement.src;
    containerPrincipal2.appendChild(newElementInContainer);
}

