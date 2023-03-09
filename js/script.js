const menus = document.getElementById("menu");
const action = document.getElementById("actions");

menus.addEventListener("click", () => {
  hundlmanu();
});
function hundlmanu(){
menus.classList.toggle("is-active");
action.classList.toggle("is-active")
}