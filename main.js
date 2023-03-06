import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#app");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforebegin", $htmlCardGame + $htmlCardGame);
