import photo_MN from "../assets/photo-footer.png";
import { arrayProjects } from "../assets/text-content";
import { linkedinDiv } from "./linkedinDiv";
import { email } from "../assets/personalInfo";
import { insertImg } from "./insertImage";

function footerDiv(parentDiv) {

    const footer = document.createElement("footer");
    const contactMe = document.createElement("section");

    // text
    const contactMeHeading = document.createElement("H2");
    contactMeHeading.setAttribute('id', 'f1');
    const contactMeText = document.createElement("p");
    contactMeText.setAttribute("id", 'f2');
    contactMeHeading.textContent = arrayProjects[0].headContactMe;
    contactMeText.textContent = arrayProjects[0].textContactMe;
    contactMeText.insertAdjacentHTML(
            "beforeend",
            `<span class="spanEmail"> ${email} </span> <p> o por linkedin. </p>`,
          );

     // icons
    const contactMeIcons = document.createElement("div");
    linkedinDiv(contactMeIcons);

    // image
    const mn_image = new Image();
    mn_image.src = photo_MN;
    const div = document.createElement("div");
    div.className = 'divImgPhotoInFooter';
    insertImg(
    div,
    mn_image.src,
    "maria nelly lopez image",
    "photoImg",
    "145px",
    "145px",
    );

   
    parentDiv.appendChild(footer);
    footer.appendChild(contactMe);
    contactMe.appendChild(contactMeHeading);
    contactMe.appendChild(contactMeText);
    contactMe.appendChild(contactMeIcons);
    footer.appendChild(div);


};

export { footerDiv };