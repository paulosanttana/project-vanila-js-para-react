import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/object/BoardGame";

const $root = document.querySelector("#app");

$root.insertAdjacentHTML("beforebegin", BoardGame(6));
