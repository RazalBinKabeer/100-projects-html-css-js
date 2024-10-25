const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentsList = document.getElementById("comments-list");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (commentText.trim()) {
    addComment(commentText);
    commentInput.value = "";
  }
});

function addComment(text) {
  const commentItem = document.createElement("li");
  commentItem.className = "comment";
  commentItem.innerHTML = `
        <p>${text}</p>
        <button class="reply-button">Reply</button>
        <form class="reply-form hidden">
            <textarea class="reply-input" placeholder="Write a reply..." required></textarea>
            <button type="submit">Post Reply</button>
        </form>
        <ul class="replies"></ul>
    `;
  commentsList.appendChild(commentItem);

  const replyButton = commentItem.querySelector(".reply-button");
  const replyForm = commentItem.querySelector(".reply-form");

  replyButton.addEventListener("click", () => {
    replyForm.classList.toggle("hidden");
  });

  replyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const replyInput = replyForm.querySelector(".reply-input");
    const replyText = replyInput.value;
    if (replyText.trim()) {
      addReply(commentItem, replyText);
      replyInput.value = "";
      replyForm.classList.add("hidden");
    }
  });
}

function addReply(commentItem, text) {
  const repliesList = commentItem.querySelector(".replies");
  const replyItem = document.createElement("li");
  replyItem.className = "reply";
  replyItem.innerHTML = `<p>${text}</p>`;
  repliesList.appendChild(replyItem);
}
