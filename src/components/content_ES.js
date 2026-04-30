import { arrayProjects } from "../assets/text-content";
import { description } from "./descriptionDiv";

const content_ES = (arg) => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent = arrayProjects[0]['titleAbout'];
    

  const firstParr = document.createElement("div");
  const txt1 = document.createElement("p");
  txt1.textContent = arrayProjects[0]['textContentAbout'];
    
  const subtitle1 = document.createElement("h2");
  subtitle1.className= "subtitle";
  subtitle1.textContent = arrayProjects[0]['subtitle1'];

  arg.appendChild(content);
  content.appendChild(title);
  content.appendChild(firstParr);
  firstParr.appendChild(txt1);
  

  const divForParr = document.createElement("div");
  divForParr.className = "centered";
  
  content.appendChild(divForParr);
  divForParr.appendChild(subtitle1);
  description(divForParr);

  const divForHook = document.createElement("div");
  divForHook.className = 'hook';
  arrayProjects[0]['projectDescription5_array'].forEach((item)=>{
    const hook_text = document.createElement("p");
    hook_text.textContent = item;
    divForHook.appendChild(hook_text);
  });
 content.appendChild(divForHook);
  

}

export { content_ES};