const bookmarkbutton = document.querySelector('[data-js="bookmark-button"]');

bookmarkbutton.addEventListener("click", () => {
  bookmarkbutton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerParagraph = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  answerParagraph.classList.toggle("card__answer--active");
  if (answerParagraph.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
