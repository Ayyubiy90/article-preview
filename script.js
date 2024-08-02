document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".share-button");
  const shareOptions = document.querySelector(".share-options");

  shareButton.addEventListener("click", () => {
    shareOptions.classList.toggle("hidden");
  });
});
