let allStars = document.querySelectorAll(".star-rating i");
// let btnStars = document.querySelector("button");
let resultRate = document.querySelector(".result-rate");
// console.log(allStars, btnStars, resultRate)
allStars.forEach( (star, index1) => {
    // addEvenListener on all stars in click
    star.addEventListener("click", () =>{
        // console.log(index1) number of index
        // do loop through allStars again
        allStars.forEach( (star, index2) => {
            // console.log(index1) number of index
            // do if condition
            if (index1 >= index2) {
                star.classList.add("active");
                // btnStars.removeAttribute("disabled");
                resultRate.innerHTML = "Thank You"
            } else {
                star.classList.remove("active");
            }
            
        })
    })
});