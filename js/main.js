const articleBtn = document.querySelector(".article-share-btn");
const articleFooter = document.querySelector(".article-footer");
const articleShare = document.querySelector(".article-share");
const articleAvatar = document.querySelector(".article-author-avatar");
const articleInfo = document.querySelector(".article-info");
const toolTip = document.querySelector(".article-btn-tooltip");

let active = false;

articleBtn.addEventListener("click", toggleBtn);
window.addEventListener("resize", removeCallout);

function toggleBtn() {
  if (window.innerWidth < 768) {
    if (!active) {
      articleFooter.classList.add("bg-dark");
      articleBtn.classList.add("btn-dark");
      articleShare.style.display = "flex";
      articleAvatar.style.display = "none";
      articleInfo.style.display = "none";
      active = true;
    } else {
      articleFooter.classList.remove("bg-dark");
      articleBtn.classList.remove("btn-dark");
      articleShare.style.display = "none";
      articleAvatar.style.display = "block";
      articleInfo.style.display = "block";
      active = false;
    }
  } else {
    if (!active) {
      articleBtn.classList.add("btn-dark");
      toolTip.style.display = "flex";
      active = true;
    } else {
      articleBtn.classList.remove("btn-dark");
      toolTip.style.display = "none";
      active = false;
    }
  }
}

function removeCallout() {
  if (window.innerWidth < 768) {
    articleFooter.classList.remove("bg-dark");
    articleBtn.classList.remove("btn-dark");
    articleShare.style.display = "none";
    articleAvatar.style.display = "block";
    articleInfo.style.display = "block";
    active = false;
  } else {
    articleBtn.classList.remove("btn-dark");
    toolTip.style.display = "none";
    active = false;
  }
}
