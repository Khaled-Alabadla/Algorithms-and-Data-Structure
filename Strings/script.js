let select = document.querySelector("select");

function changeSelect(element) {
  document.querySelector("p").innerText = element.querySelector(
    `[value=${element.value}]`,
  ).innerText;
}
