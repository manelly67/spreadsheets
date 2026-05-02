import photo_MN from "../assets/photo-footer.png";
import { toggleButton } from "./toggleButton";
import { content_ES } from "./content_ES";
import { insertImg } from "./insertImage";

function homepage() {
  const root = document.documentElement;
  root.setAttribute("lang", "en");
  root.setAttribute("id", "root-element");
  root.className = "light";

  const divButtons = document.createElement("div");
  divButtons.className = "setButtons";
  const toggle = toggleButton(root);

  const main = document.createElement("main");
  const content = document.createElement("section");

  content_ES(content);

  document.body.appendChild(main);
  main.appendChild(divButtons);
  main.appendChild(content);

  divButtons.appendChild(toggle);
  const mn_image = new Image();
  mn_image.src = photo_MN;
  const div = document.createElement("div");
  div.className = 'divImgPhoto';
  divButtons.appendChild(div);
  insertImg(
    div,
    mn_image.src,
    "maria nelly lopez image",
    "photoImg",
    "145px",
    "145px",
  );
}

export { homepage };
