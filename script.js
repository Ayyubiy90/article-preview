document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".share-button");
  const shareOptions = document.querySelector(".share-options");
  const articleContent = document.querySelector(".article-content");

  shareButton.addEventListener("click", (event) => {
    event.stopPropagation();
    shareOptions.classList.toggle("hidden");
    shareButton.classList.toggle("active");
    articleContent.classList.toggle("share-active");
  });

  // Close share options when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !shareButton.contains(event.target) &&
      !shareOptions.contains(event.target)
    ) {
      shareOptions.classList.add("hidden");
      shareButton.classList.remove("active");
      articleContent.classList.remove("share-active");
    }
  });
});
