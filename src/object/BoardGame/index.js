import "./style.css";
import CardGame from "../../components/CardGame";

const BoardGame = (qtdCards) => {
  const $htmlBoardGame = CardGame();
  const $htmlContent = $htmlBoardGame.repeat(qtdCards);

  return `
  <section class="board-game">
    ${$htmlContent}
  </section>`;
};

export default BoardGame;
