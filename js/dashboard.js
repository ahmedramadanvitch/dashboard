// start draft section progress and count characters under input

let inputDraft = document.querySelector(".draft form input");
let progressInputDraft = document.querySelector(".draft form .progress-input-draft");
let countInputDraft = document.querySelector(".draft form .count-input-character");
let maxLengthInput = inputDraft.getAttribute("maxlength");

countInputDraft.innerHTML = maxLengthInput;

inputDraft.oninput = function () {
  // progress span
  progressInputDraft.style.width = `${ (inputDraft.value.length * 100) / maxLengthInput}%`;
  if (inputDraft.value.length <= 5) {
    progressInputDraft.style.backgroundColor = "#0075ff";
  } else if (inputDraft.value.length <= 15){
    progressInputDraft.style.backgroundColor = "#22c55e";
  } else {
    progressInputDraft.style.backgroundColor = "#f44336";
  }
  // count span
  countInputDraft.innerHTML = maxLengthInput - this.value.length;
  countInputDraft.innerHTML == 0 ? countInputDraft.classList.add("zero") : countInputDraft.classList.remove("zero");
}

// End draft section progress and count characters in input 

// ************************************************************** //

// start animate width progressBar on scrolling window in section target

let sectionTarget = document.querySelector(".target");
let progressBar = document.querySelectorAll(".progress .progress-bar");

let animateWidthProgress = () => {
  if (window.scrollY >= sectionTarget.offsetTop - 200) {
    progressBar.forEach ( (prog) => {
     prog.style.width = prog.dataset.width;
     prog.innerHTML = prog.dataset.width;
    })
   };
}

window.addEventListener("scroll", animateWidthProgress);

// End variables animate width progressBar on scrolling window in section target

// Start Increase Numbers On Scrolling in section ticket

let sectionTicket = document.querySelector(".ticket");
let numberTicket = document.querySelectorAll(".ticket .card .number-ticket");

let startedTicket = false; // Function Started ? No

let increaseNumbersSectionTicket = () => {
  if (window.scrollY >= sectionTicket.offsetTop - 200) {
    if (!startedTicket) {
      numberTicket.forEach( (num) => startCountTicket(num))
    }
    startedTicket = true;
  };
}

function startCountTicket(ele) {
  
  let numberTicketData = ele.dataset.number;

  let count = setInterval( () => {

    ele.textContent++;
    
    if (ele.textContent == numberTicketData) {
      clearInterval(count);
    }
    
    // عشان كلهم يخلصو فى وقت واحد number عدد الثوانى مقسوم على 
  }, 10);
}

window.addEventListener("scroll", increaseNumbersSectionTicket);

// End Increase Numbers On Scrolling in section ticket

// start Increase Numbers On Scrolling in section top search

let sectionSearch = document.querySelector(".top-search");
let numberSearch = document.querySelectorAll(".top-search .num-top");

let startedSearch = false; // Function Started ? No

let increaseNumbersSectionSearch = () => {
  if (window.scrollY >= sectionSearch.offsetTop - 200) {
    if (!startedSearch) {
      numberSearch.forEach( (nums) => startCountSearch(nums))
    }
    startedSearch = true;
  };
}

function startCountSearch(ele) {
  
  let numberSearchData = ele.dataset.top;

  let counter = setInterval( () => {

    ele.textContent++;
    
    if (ele.textContent == numberSearchData) {
      clearInterval(counter);
    }
    
    // عشان كلهم يخلصو فى وقت واحد numberSearchData عدد الثوانى مقسوم على 
  }, 10 / numberSearchData);
}

window.addEventListener("scroll", increaseNumbersSectionSearch);
// End Increase Numbers On Scrolling in section top search