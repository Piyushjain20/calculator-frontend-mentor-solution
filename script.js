let html = document.querySelector(":root");
let toggleBtn = document.querySelectorAll("input");
let toggle = document.querySelector(".toggle-switch");
let screenElement = document.querySelector(".screen");
let button = document.querySelectorAll(".button");

toggle.addEventListener("click", () => {
  toggleBtn.forEach((e) => {
    let str = e.className;
    if (e.checked) {
      e.className = str.substring(0, str.length - 9);
      console.log(e.className);
      changeTheme(e.className);
    } else if (!str.match("disabled")) {
      e.className = str + "-disabled";
    }
  });
});
button.forEach((e) => {
  e.addEventListener("click", () => {
    addToScreen(e.id);
  });
});
document.querySelector(".del").addEventListener("click", () => {
  let str = screenElement.textContent;
  screenElement.textContent = str.substring(0, str.length - 1);
});
document.querySelector(".reset").addEventListener("click", () => {
  screenElement.textContent = "";
});
document.querySelector(".equal").addEventListener("click", () => {
  let str = screenElement.textContent;
  str = str.replace("x", "*");
  //   str = str.replace(",", "");
  screenElement.textContent = String(eval(str));
});

function changeTheme(num) {
  if (num == "one-theme") {
    html.style.setProperty("--mainBG", "hsl(222, 26%, 31%)");
    html.style.setProperty("--keypadBG", "hsl(223, 31%, 20%)");
    html.style.setProperty("--screenBG", "hsl(224, 36%, 15%)");
    html.style.setProperty("--keyBG1", "hsl(225, 21%, 49%)");
    html.style.setProperty("--keyShadow1", "hsl(224, 28%, 35%)");
    html.style.setProperty("--keyBG2", "hsl(6, 63%, 50%)");
    html.style.setProperty("--keyShadow2", "hsl(6, 70%, 34%)");
    html.style.setProperty("--keyBG3", "hsl(30, 25%, 89%)");
    html.style.setProperty("--keyShadow3", "hsl(28, 16%, 65%)");
    html.style.setProperty("--text1", " hsl(221, 14%, 31%)");
    html.style.setProperty("--text2", "hsl(0, 0%, 100%)");
    html.style.setProperty("--custom", "hsl(0, 0%, 100%)");
  } else if (num == "two-theme") {
    html.style.setProperty("--mainBG", "hsl(0, 0%, 90%)");
    html.style.setProperty("--keypadBG", "hsl(0, 5%, 81%)");
    html.style.setProperty("--screenBG", "hsl(0, 0%, 93%)");
    html.style.setProperty("--keyBG1", "hsl(185, 42%, 37%)");
    html.style.setProperty("--keyShadow1", "hsl(185, 58%, 25%)");
    html.style.setProperty("--keyBG2", "hsl(25, 98%, 40%)");
    html.style.setProperty("--keyShadow2", "hsl(25, 99%, 27%)");
    html.style.setProperty("--keyBG3", "hsl(45, 7%, 89%)");
    html.style.setProperty("--keyShadow3", "hsl(35, 11%, 61%)");
    html.style.setProperty("--text1", " hsl(60, 10%, 19%)");
    html.style.setProperty("--text2", "hsl(0, 0%, 100%)");
    html.style.setProperty("--custom", " hsl(60, 10%, 19%)");
  } else {
    html.style.setProperty("--mainBG", "hsl(268, 75%, 9%)");
    html.style.setProperty("--keypadBG", "hsl(268, 71%, 12%)");
    html.style.setProperty("--screenBG", "hsl(268, 71%, 12%)");
    html.style.setProperty("--keyBG1", "hsl(281, 89%, 26%)");
    html.style.setProperty("--keyShadow1", "hsl(285, 91%, 52%)");
    html.style.setProperty("--keyBG2", "hsl(176, 100%, 44%)");
    html.style.setProperty("--keyShadow2", "hsl(177, 92%, 70%)");
    html.style.setProperty("--keyBG3", "hsl(268, 47%, 21%)");
    html.style.setProperty("--keyShadow3", "hsl(290, 70%, 36%)");
    html.style.setProperty("--text1", "hsl(52, 100%, 62%)");
    html.style.setProperty("--text2", "hsl(0, 0%, 100%)");
    html.style.setProperty("--custom", "hsl(52, 100%, 62%)");
  }
}
function addToScreen(e) {
  screenElement.textContent = screenElement.textContent.concat(e);
}
