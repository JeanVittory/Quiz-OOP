//ts-check
import { Question } from "./question.js";
class Quiz {
  questionIndex = 0;
  score = 0;
  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question}
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  /**
   *
   * @param {string} answer
   */
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }
}

export { Quiz };
