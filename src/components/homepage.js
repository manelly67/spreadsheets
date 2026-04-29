import { toggleButton } from "./toggleButton";

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


  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "INICIANDO REPOSITORIO";

  
  document.body.appendChild(main);
  main.appendChild(divButtons);
  main.appendChild(content);
  content.appendChild(mainTitle);

  divButtons.appendChild(toggle);
}

export { homepage };