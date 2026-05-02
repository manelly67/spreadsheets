
function insertImg(parentDiv, source, altTxt, classImg, w, h) {
  // arg1 is the parent div - arg2 is the source
  // arg3 is the alt text - arg4 is the class
  // arg5 is the width - arg6 is the height
  const img = document.createElement("img");
  img.setAttribute("src", source);
  img.setAttribute("alt", altTxt);
  img.setAttribute("width", w);
  img.setAttribute("height", h);
  img.classList.add(classImg);
  
  parentDiv.appendChild(img);
}

export { insertImg };

/* function insertImg(parentDiv){
  const mn_image = new Image();
  mn_image.src = photo_footer;
  const img = document.createElement("img");
  img.setAttribute("src", mn_image.src);
  img.setAttribute("alt", "maria nelly lopez image");
  img.setAttribute("width", "145px");
  img.setAttribute("height", "145px");

  const div = document.createElement("div");
  div.className = 'divImgPhoto';

  parentDiv.appendChild(div);
  div.appendChild(img);

};
 */

