// const serviceNav = document.querySelector(".service-nav");

const headerNav = document.querySelector(".banner");

const topButton = document.querySelector(".topButton");
const menuButton = document.querySelector(".menuButton");
const allContent = document.querySelector(".all-content");
const wrapAll = document.querySelector(".wrap-all");
const closeButton = document.querySelector(".close-button");

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.getElementById("zalotest").href = "https://zalo.me/0961924080";
}

menuButton.addEventListener("click", function () {
  console.log("check");
  allContent.style.display = "none";
  wrapAll.style.display = "block";
});
closeButton.addEventListener("click", function () {
  allContent.style.display = "block";
  wrapAll.style.display = "none";
});
// TOP Button Click

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
topButton.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  headerNav.scrollIntoView({
    behavior: "smooth",
  });
}

//About CLick
//PC
const aboutNav = document.querySelector(".about-nav");
const aboutContent = document.querySelector(".about-content");
function handleAboutCLick(event) {
  event.preventDefault();
  aboutContent.scrollIntoView({
    behavior: "smooth",
  });
}
aboutNav.addEventListener("click", handleAboutCLick);
//MOBILE
const mobileHandleAboutCLick = (event) => {
  event.preventDefault();
  wrapAll.style.display = "none";
  allContent.style.display = "block";
  aboutContent.scrollIntoView({
    behavior: "smooth",
  });
};
const mobileAboutNav = document.querySelector(".mobile-about-nav");
mobileAboutNav.addEventListener("click", mobileHandleAboutCLick);

//Service Click
//PC
const serviceNav = document.querySelector(".service-nav");
const serviceContent = document.querySelector(".service-content");
function handleServiceCLick(event) {
  event.preventDefault();
  serviceContent.scrollIntoView({
    behavior: "smooth",
  });
}
serviceNav.addEventListener("click", handleServiceCLick);
//MOBILIE
const mobileHandleServiceCLick = (event) => {
  event.preventDefault();
  wrapAll.style.display = "none";
  allContent.style.display = "block";
  serviceContent.scrollIntoView({
    behavior: "smooth",
  });
};
const mobileServiceNav = document.querySelector(".mobile-service-nav");
mobileServiceNav.addEventListener("click", mobileHandleServiceCLick);
//Contact Click
//PC
const contactNav = document.querySelector(".contact-nav");
const footerContent = document.querySelector(".footer-content");

function handleContactClick(event) {
  event.preventDefault();
  footerContent.scrollIntoView({
    behavior: "smooth",
  });
}

contactNav.addEventListener("click", handleContactClick);
//MOBILE
const mobileHandleContactCLick = (event) => {
  event.preventDefault();
  wrapAll.style.display = "none";
  allContent.style.display = "block";
  footerContent.scrollIntoView({
    behavior: "smooth",
  });
};
const mobileContactNav = document.querySelector(".mobile-contact-nav");
mobileContactNav.addEventListener("click", mobileHandleContactCLick);
