document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".share-button");
  const shareOptions = document.querySelector(".share-options");
  const articleContent = document.querySelector(".article-content");

  shareButton.addEventListener("click", (event) => {
    event.stopPropagation();
    shareOptions.classList.toggle("hidden");
    shareButton.classList.toggle("active");

    if (window.innerWidth <= 768) {
      articleContent.style.paddingBottom = shareOptions.classList.contains(
        "hidden"
      )
        ? "20px"
        : "88px";
    }
  });

  // Close share options when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !shareButton.contains(event.target) &&
      !shareOptions.contains(event.target)
    ) {
      shareOptions.classList.add("hidden");
      shareButton.classList.remove("active");
      if (window.innerWidth <= 768) {
        articleContent.style.paddingBottom = "20px";
      }
    }
  });

  // Adjust layout on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      articleContent.style.paddingBottom = "20px";
    } else if (!shareOptions.classList.contains("hidden")) {
      articleContent.style.paddingBottom = "88px";
    }
  });
});
