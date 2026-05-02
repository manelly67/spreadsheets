import toggle_icon from "../assets/theme-light-dark.png";
import { insertImg } from "./insertImage";

function toggleButton (arg){
  const root = arg;
  const changeThemeImg = new Image();
  changeThemeImg.src = toggle_icon;
  const toggle = document.createElement("button"); 
  insertImg(
    toggle,
    changeThemeImg.src,
    "theme-light-dark",
    "iconImg",
    "30px",
    "30px"
  ); 
  toggle.className = "toggle";
  toggle.setAttribute("title", "toggle theme");
  toggle.addEventListener("click", () => {
    toggleTheme();
    startAnimation();
    setTimeout(endAnimation, 1000);
  });

  function toggleTheme() {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
  }

  function startAnimation() {
    toggle.classList.add("animate1");
  }

  function endAnimation() {
    toggle.classList.remove("animate1");
  }

  return toggle;
}

export { toggleButton };