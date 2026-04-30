function toggleButton (arg){
  const root = arg;
  const toggle = document.createElement("button");
  toggle.className = "toggle";
  toggle.textContent = "\u{1F49A}"; // 🐶 \u{1F436} other option 🔘 U+1F518  1F49A
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