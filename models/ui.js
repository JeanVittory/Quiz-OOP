class UI {
  constructor() {}
  /**
   *
   * @param {string} question question to render
   */
  showQuestion(question) {
    const questionTitle = document.querySelector(".question");
    questionTitle.innerText = question;
  }
  /**
   *
   * @param {string[]} choices choices to render
   */
  showChoices(choices, callback) {
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerText = "";
    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.classList.add("button");
      button.addEventListener("click", () => callback(choice));
      optionsContainer.append(button);
    });
  }

  /**
   * 
   * @param {number} score this is the final score of the user 
   */
  showScores(score) {
    const resultContainer = document.querySelector(".quiz-card");
    resultContainer.innerHTML = `<h2>Tu puntaje fue de</h2> <p>${score}</p>`;
  }
  /**
   * 
   * @param {number} currentIndex 
   * @param {number} totalIndex 
   */
  showProgress(currentIndex, totalIndex){
    const progress = document.querySelector(".progress")
    progress.innerHTML = `Question ${currentIndex} of ${totalIndex}`
  }
}

export { UI };
