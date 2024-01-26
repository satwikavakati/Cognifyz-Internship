function openImage(image){
    var popupc = document.getElementById("image-container");
    var popupimage = document.getElementById("imagepopup");
    popupimage.src=image.src;
    popupc.style.display="block";
}
function closeImage(image) {
  var  popupimage =document.getElementById("image-container");
  popupimage.style.display="none"
    
}