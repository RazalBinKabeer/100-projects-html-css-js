const homeLink = document.getElementById("home-link");
const uploadLink = document.getElementById("upload-link");
const profileLink = document.getElementById("profile-link");
const videoListSection = document.getElementById("video-list");
const uploadSection = document.getElementById("upload");
const profileSection = document.getElementById("profile");

// Dummy video data
const videos = [
  { title: "Video One", uploader: "User1", url: "video1.mp4" },
  { title: "Video Two", uploader: "User2", url: "video2.mp4" },
];

function displayVideos() {
  const videosUl = document.getElementById("videos");
  videosUl.innerHTML = "";
  videos.forEach((video) => {
    const videoLi = document.createElement("li");
    videoLi.textContent = `${video.title} by ${video.uploader}`;
    videosUl.appendChild(videoLi);
  });
}

homeLink.addEventListener("click", () => {
  videoListSection.classList.remove("hidden");
  uploadSection.classList.add("hidden");
  profileSection.classList.add("hidden");
});

uploadLink.addEventListener("click", () => {
  videoListSection.classList.add("hidden");
  uploadSection.classList.remove("hidden");
  profileSection.classList.add("hidden");
});

profileLink.addEventListener("click", () => {
  videoListSection.classList.add("hidden");
  uploadSection.classList.add("hidden");
  profileSection.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", displayVideos);
