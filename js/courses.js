let sectionDiv = document.querySelector(".card");
let progressMony = document.querySelectorAll(".mony");

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
  let counters = setInterval( () => {
      
    ele.textContent++;

    if (ele.textContent == progressMonyData) {
        clearInterval(counters);
    }

  }, 1000 / progressMonyData);
}
window.addEventListener("scroll", increaseNumbersMony);