import { lightTheme, darkTheme } from "./theme.js";

const button = document.getElementById("theme-btn");
let isDark = false;

button.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    document.body.style.backgroundColor = darkTheme.background;
    document.body.style.color = darkTheme.textColor;
  } else {
    document.body.style.backgroundColor = lightTheme.background;
    document.body.style.color = lightTheme.textColor;
  }
});
