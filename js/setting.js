// start backup section add class active-back
let backMega = document.querySelectorAll(".backup .container .mega");

backMega.forEach((li) => {
  li.addEventListener("click",removeActiveBack);
});

function removeActiveBack () {
  // remove active class from all elements
  backMega.forEach( (li) => {
    // active هتمسح كل الكلاس اللى اسمه 
    li.classList.remove("active-backup");
    // هتضيف كلاس active على العنصر اللى هتدوس عليه
    // this === العنصر اللى هتدوس عليه ولازم تكتبها
    this.classList.add("active-backup");
  })
};
// End backup section add class active-back