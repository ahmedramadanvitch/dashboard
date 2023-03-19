let sectionDiv = document.querySelector(".projects > div");
let progressBar = document.querySelectorAll(".progress .progress-bar");
 
let animateWidthProgress = () => {
    if (window.scrollY >= sectionDiv.offsetTop - 200) {
        progressBar.forEach( (prog) => {
            prog.style.width = prog.dataset.width
        });
    }
}

window.addEventListener("scroll", animateWidthProgress);


// Start Increase Numbers On Scrolling

let progressMony = document.querySelectorAll(".progress-flex .mony");

let startedMony = false; // Function Started ? No

let increaseNumbersMony = () => {
  if (window.scrollY >= sectionDiv.offsetTop - 200) {
    if (!startedMony) {
        progressMony.forEach( (nums) => startCountMony(nums));
    }
    startedMony = true;
  };
}

function startCountMony(ele) {
  
  let progressMonyData = ele.dataset.mony;
  let counter = setInterval( () => {
      
    ele.textContent++;

    if (ele.textContent == progressMonyData) {
        clearInterval(counter);
    }

  }, 100 / progressMonyData);
}
window.addEventListener("scroll", increaseNumbersMony);

// End Increase Numbers On Scrolling