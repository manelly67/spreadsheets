import { toggleButton } from "./toggleButton";
import { content_ES } from "./content_ES";

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
}

export { homepage };