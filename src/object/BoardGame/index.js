import CardGame from "../../components/CardGame";

const BoardGame = (qtdCards) => {
  const $htmlBoardGame = CardGame().repeat(qtdCards);

  return $htmlBoardGame;
};

export default BoardGame;
