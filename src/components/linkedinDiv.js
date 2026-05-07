import { linkedin } from "../assets/personalInfo";
import { linkedin_Icon } from "../assets/personalInfo";
import { insertImg } from "./insertImage";


function linkedinDiv(parentDiv) {

    const linkedinLink = document.createElement("a");
    linkedinLink.setAttribute("href", linkedin);
    linkedinLink.setAttribute("target", "_blank");

    const linkedinImg = new Image();
    linkedinImg.src = linkedin_Icon;
    insertImg(
        linkedinLink,
        linkedinImg.src,
        "Linkedin",
        "iconImg",
        "30px",
        "30px"
    );


    parentDiv.appendChild(linkedinLink);

};

export { linkedinDiv };