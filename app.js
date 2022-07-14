//@ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/ui.js";
/**
 *
 * @param {UI} ui
 * @param {Quiz} quiz
 */
const renderPage = (ui, quiz) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score)
  } else {
    ui.showQuestion(quiz.getQuestionIndex().question);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(ui, quiz);
    });
    ui.showProgress(quiz.questionIndex + 1 , quiz.questions.length)
  }
};

const main = () => {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(ui, quiz);
};

main();
