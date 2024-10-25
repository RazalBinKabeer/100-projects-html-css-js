const posts = [];

function addPost(event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;

  const post = { title, content };
  posts.push(post);

  document.getElementById("blog-form").reset();
  displayPosts();
}

function displayPosts() {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button class="delete-button" onclick="deletePost(${index})">Delete</button>
    `;
    postsContainer.appendChild(postDiv);
  });
}

function deletePost(index) {
  posts.splice(index, 1);
  displayPosts();
}
