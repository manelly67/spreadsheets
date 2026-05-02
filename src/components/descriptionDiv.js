import { arrayProjects } from "../assets/text-content";
import {
  dashboards,
  scripts_price,
  modulo_ventas,
  modulo_gastos,
  modulo_costos,
  modulo_gestion_consolid,
  hora_menos_5_en_semana,
  hora_mas_5_en_semana,
} from "../assets/prices";

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
    const description7 = document.createElement("h3");

    const divA_1 = document.createElement("div");
    divA_1.className = "displayInRow";
    const tag1 = document.createElement("div");
    tag1.className = "price-tag";
    const price1 = document.createElement("p");
    price1.textContent = `$${modulo_ventas}`;
    price1.className = "prices";

    const divB_1 = document.createElement("div");
    divB_1.className = "displayInRow";
    const tag2 = document.createElement("div");
    tag2.className = "price-tag";
    const price2 = document.createElement("p");
    price2.textContent = `$${modulo_gastos}`;
    price2.className = "prices";

    const divC_1 = document.createElement("div");
    divC_1.className = "displayInRow";
    const tag3 = document.createElement("div");
    tag3.className = "price-tag";
    const price3 = document.createElement("p");
    price3.textContent = `$${modulo_costos}`;
    price3.className = "prices";

    const divD_1 = document.createElement("div");
    divD_1.className = "displayInRow";
    const tag4 = document.createElement("div");
    tag4.className = "price-tag";
    const price4 = document.createElement("p");
    price4.textContent = `$${modulo_gestion_consolid}`;
    price4.className = "prices";

    x.appendChild(divA);
    x.appendChild(divB);
    x.appendChild(divC);
    x.appendChild(divD);
    x.appendChild(divE);
    x.appendChild(divF);

    divA.appendChild(divA_1);
    divA_1.appendChild(tag1);
    tag1.appendChild(price1);
    divA_1.appendChild(description1);

    divB.appendChild(divB_1);
    divB_1.appendChild(tag2);
    tag2.appendChild(price2);
    divB_1.appendChild(description2);

    divC.appendChild(divC_1);
    divC_1.appendChild(tag3);
    tag3.appendChild(price3);
    divC_1.appendChild(description3);
    
    divD.appendChild(divD_1);
    divD_1.appendChild(tag4);
    tag4.appendChild(price4);
    divD_1.appendChild(description4);

    divE.appendChild(description6);
    divF.appendChild(description7);


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
            `<span> US$ ${dashboards}  ${e.projectDescription6_array[1]}</span>`,
          );
          const divRenglon2 = document.createElement("div");
          const renglon2 = document.createElement("p");
          renglon2.textContent = e.projectDescription6_array[2];
          renglon2.insertAdjacentHTML(
            "beforeend",
            `<span> US$ ${scripts_price}  ${e.projectDescription6_array[3]}</span>`,
          );

          divE.appendChild(divRenglon1);
          divE.appendChild(divRenglon2);
          divRenglon1.appendChild(renglon1);
          divRenglon2.appendChild(renglon2);

          description7.textContent = e.projectDescription7;
          const divRenglon1a = document.createElement("div");
          const renglon1a = document.createElement("p");
          renglon1a.textContent = e.projectDescription7_array[0];
          renglon1a.insertAdjacentHTML(
            "beforeend",
            `<span> US$ ${hora_menos_5_en_semana}  ${e.projectDescription7_array[1]}</span>`,
          );
          const divRenglon2a = document.createElement("div");
          const renglon2a = document.createElement("p");
          renglon2a.textContent = e.projectDescription7_array[2];
          renglon2a.insertAdjacentHTML(
            "beforeend",
            `<span> US$ ${hora_mas_5_en_semana}  ${e.projectDescription7_array[3]}</span>`,
          );

          divF.appendChild(divRenglon1a);
          divF.appendChild(divRenglon2a);
          divRenglon1a.appendChild(renglon1a);
          divRenglon2a.appendChild(renglon2a);

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
