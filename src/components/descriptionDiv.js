import { arrayProjects } from "../assets/text-content";
import { dashboards, scripts_price } from "../assets/prices";

function description(parentDiv) {
  const div = document.createElement("div");

  for (let i = 0; i < arrayProjects.length; i++) {
    const project = document.createElement("article");
    project.setAttribute("id", `langES`);
    project.className = "divForModules";
    div.appendChild(project);
  }

  const allProjectsDiv = div.querySelectorAll("article");
  const projectsInDiv = [...allProjectsDiv];
  const iterator = projectsInDiv.entries();

  projectsInDiv.forEach(() => {
    let index = iterator.next().value;
    let x = index[1];
    const divA = document.createElement("div");
    divA.className = "parrafos";
    const divB = document.createElement("div");
    divB.className = "parrafos";
    const divC = document.createElement("div");
    divC.className = "parrafos";
    const divD = document.createElement("div");
    divD.className = "parrafos";
    const divE = document.createElement("div");
    divE.className = "parrafos";
    const divF = document.createElement("div");
    divF.className = "parrafos";

    const description1 = document.createElement("h3");
    const description2 = document.createElement("h3");
    const description3 = document.createElement("h3");
    const description4 = document.createElement("h3");
    const description6 = document.createElement("h3");

    x.appendChild(divA);
    x.appendChild(divB);
    x.appendChild(divC);
    x.appendChild(divD);
    x.appendChild(divE);
    divA.appendChild(description1);
    divB.appendChild(description2);
    divC.appendChild(description3);
    divD.appendChild(description4);
    divE.appendChild(description6);

    arrayProjects.map((e) => {
      switch (e.id === x.getAttribute("id")) {
        case true:
          description1.textContent = e.projectDescription1;
          e.projectDescription1_array.forEach((item) => {
            const divRenglon = document.createElement("div");
            const span = document.createElement("span");
            span.textContent = "\u2B52";
            span.setAttribute("style", "color:chocolate;");
            const renglon = document.createElement("p");
            renglon.textContent = item;
            divA.appendChild(divRenglon);
            divRenglon.appendChild(span);
            divRenglon.appendChild(renglon);
          });

          description2.textContent = e.projectDescription2;
          e.projectDescription2_array.forEach((item) => {
            const divRenglon = document.createElement("div");
            const span = document.createElement("span");
            span.textContent = "\u2B52";
            span.setAttribute("style", "color:red;");
            const renglon = document.createElement("p");
            renglon.textContent = item;
            divB.appendChild(divRenglon);
            divRenglon.appendChild(span);
            divRenglon.appendChild(renglon);
          });

          description3.textContent = e.projectDescription3;
          e.projectDescription3_array.forEach((item) => {
            const divRenglon = document.createElement("div");
            const span = document.createElement("span");
            span.textContent = "\u2B52";
            span.setAttribute("style", "color:darkcyan;");
            const renglon = document.createElement("p");
            renglon.textContent = item;
            divC.appendChild(divRenglon);
            divRenglon.appendChild(span);
            divRenglon.appendChild(renglon);
          });

          description4.textContent = e.projectDescription4;
          e.projectDescription4_array.forEach((item) => {
            const divRenglon = document.createElement("div");
            const span = document.createElement("span");
            span.textContent = "\u2B52";
            span.setAttribute("style", "color:darkmagenta;");
            const renglon = document.createElement("p");
            renglon.textContent = item;
            divD.appendChild(divRenglon);
            divRenglon.appendChild(span);
            divRenglon.appendChild(renglon);
          });

          description6.textContent = e.projectDescription6;
          const divRenglon1 = document.createElement("div");
          const renglon1 = document.createElement("p");
          renglon1.textContent = e.projectDescription6_array[0];
          renglon1.insertAdjacentHTML(
            "beforeend",
            `<span> us$ ${dashboards}  ${e.projectDescription6_array[1]}</span>`,
          );
          const divRenglon2 = document.createElement("div");
          const renglon2 = document.createElement("p");
          renglon2.textContent = e.projectDescription6_array[2];
          renglon2.insertAdjacentHTML(
            "beforeend",
            `<span> us$ ${scripts_price}  ${e.projectDescription6_array[3]}</span>`,
          );

          divE.appendChild(divRenglon1);
          divE.appendChild(divRenglon2);
          divRenglon1.appendChild(renglon1);
          divRenglon2.appendChild(renglon2);


          if (x.getAttribute("id") === "langES") {
            x.classList.add("show");
          } else {
            x.classList.add("hide");
          }
          break;
        case false:
          break;
      }
    });
  });

  parentDiv.appendChild(div);
}

export { description };
