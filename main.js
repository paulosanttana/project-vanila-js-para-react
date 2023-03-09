import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/object/BoardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#app");

$root.insertAdjacentHTML(
  "beforebegin",
  `
    ${PlayerName("Player1")}
    ${PlayerName("Player2")}
    ${BoardGame(6)}
  `
);
