class Question {
  /**
   * @param {string} question this is the question
   * @param {string[]} choices this are the choices
   * @param {string} answer this is the answer
   */
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
  /**
   *
   * @param {string} userOpc this is the opction give it by the user
   * @returns {boolean} return a true if the answer is correct
   */
  correctAnswer(userOpc) {
    return userOpc === this.answer;
  }
}

export { Question };
