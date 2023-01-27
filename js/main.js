// Start dark mood
let iconDarkMood = document.getElementById("toggle-mood");
let bigBody = document.body;
let darkModeStorage = localStorage.getItem("dark-mode");

let addDarkMode = () => {
  // to add moon class to iconMood to be moon icon
  iconDarkMood.classList.add("bi-moon-fill");
  // to add dark class to body
  bigBody.classList.add("dark");
  // to save darkMood enabled in localStorage
  localStorage.setItem("dark-mode", "enabled");
};

let removeDarkMode = () => {
  // to remove moon class from iconMood to be sun icon
  iconDarkMood.classList.remove("bi-moon-fill");
  // to remove dark class from body
  bigBody.classList.remove("dark");
  // to save darkMood disabled in localStorage
  localStorage.setItem("dark-mode", "disabled");
};

if (darkModeStorage === "enabled") {
  addDarkMode(); // set state of darkMode on page load
}

iconDarkMood.addEventListener("click", () => {

  darkModeStorage = localStorage.getItem("dark-mode"); // update darkMode when clicked !Important
  
  if (darkModeStorage === "disabled") {
    addDarkMode();
  } else {
    removeDarkMode();
  }
});

// // End dark mood


// start side bar >> active class

let linkSideBar = document.querySelectorAll(".links li");

linkSideBar.forEach((li) => {
  li.addEventListener("click", removeActive);
});

function removeActive() {
  // remove active class from all elements
  linkSideBar.forEach((li) => {
    // active هتمسح كل الكلاس اللى اسمه
    li.classList.remove("active");
    // هتضيف كلاس active على العنصر اللى هتدوس عليه
    // this === العنصر اللى هتدوس عليه ولازم تكتبها
    this.classList.add("active");
  });
}
// End side bar >> active class
// / ********************************************************** /
// start in side bar write type effect

// function for write Effect SideBar heading
let sideBarH5 = document.querySelector(".side-bar h5");
let DataTextH5 = sideBarH5.getAttribute("data-text"); // Elzero
let i = 0;

let writeEffectSideBar = () => {
      
  let writeH5 = setInterval( () => {
    sideBarH5.textContent += DataTextH5[i];
    i++;

    if (i >= DataTextH5.length) {
        clearInterval(writeH5);
    }

  }, 200);

}
window.addEventListener("load", writeEffectSideBar);

// function for write Effect heading (setting-dashboard-plans ....)
let headingH2 = document.querySelector(".heading h2");
let DataTextH2 = headingH2.getAttribute("data-header"); // Elzero
let j = 0;

let writeEffectHeading = () => {
      
  let writeHeading = setInterval( () => {
    headingH2.textContent += DataTextH2[j];
    j++;

    if (j >= DataTextH2.length) {
        clearInterval(writeHeading);
    }

  }, 200);

}
window.addEventListener("load", writeEffectHeading);

// End in side bar write type effect

// ******************************************************************************* //

// start scrollerPercentage progress in page

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");

  let progressValue = document.getElementById("progress-value");

  let scrollTop = document.documentElement.scrollTop;

  // scrollHeight >>> دى طول الصفحه كامله كلها
  // clientHeight >>> دى طول الحته اللى ظاهره ليك وشايفها قدامك بس
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((scrollTop * 100) / calcHeight);

  // scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
  scrollProgress.style.background = `conic-gradient(var(--blue-color) ${scrollValue}%, var(--bg-color) ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;
};

window.addEventListener("scroll", scrollPercentage);

// End scrollerPercentage progress in page

// **************************************************************************** //

// Start btn-up scroll to top

let btnUp = document.querySelector(".btn-up");

let btnUpScroll = () => {
  // btn-up scroll to top
  if (window.scrollY >= 250) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
};

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", btnUpScroll);

// End btn-up scroll to top
