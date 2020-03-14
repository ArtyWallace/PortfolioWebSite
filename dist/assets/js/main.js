let introHeight = document.querySelector("#intro").scrollHeight; // height of intro block 
let fixedBar = document.getElementsByClassName("fixed");
let feedbackModal = document.querySelector("#feedbackModal"); // feedback modal window
let introBtn = document.querySelector("#introButton"); // feedback modal window button
let worksModal = document.querySelector("#worksModal"); // works modal window
let worksItem = document.querySelectorAll("#worksItem"); 
let aboutBtn = document.querySelector("#aboutBtn");
let works = document.querySelector("#worksInner");
let anchors = document.querySelectorAll('a[href*="#"]'); // anchors for sliding between blocks
let burger = document.querySelector("#burger");
let hiddenNav = document.querySelector("#hiddenNav");


//=============== Smooth slide to anchor ============================//
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    let block = anchor.getAttribute('href').substr(1);
    
    document.getElementById(block).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


burger.onclick = () => {
  if (burger.classList.contains("show")) {
    hiddenNav.style.display = "none";
    burger.classList.remove("show");
  } else {
      hiddenNav.style.display = "block";
      burger.classList.add("show");

  } 

}


// Feedback modal
// Open
introBtn.onclick = () => {
  feedbackModal.style.display = "flex";
}

aboutBtn.onclick = () => {
  feedbackModal.style.display = "flex";
}

// Works modal
// Open
// worksItem.forEach(element => {
//   element.onclick = () => {
//     worksModal.style.display = "flex";
//   }
// });

// Closing modal windows
window.onclick = function(event) {
  if (event.target == feedbackModal) {
    feedbackModal.style.display = "none";
  }
  // if (event.target == worksModal) {
  //   worksModal.style.display = "none";
  // }
}



for (i = 0; i < worksItem.length; i++) {
  let item = worksItem[i];
  item.addEventListener("mouseover", function() {
    let drop = document.createElement("div");
    let title = document.createElement("div");

    drop.classList.add("works__drop");
    title.classList.add("drop__title");

    drop.id = "drop";
    title.id = "dropTitle";

    drop.appendChild(title);
    item.appendChild(drop);

    works.style.marginBottom = "60px";
  });
  item.addEventListener("mouseout", function() {
    let drop = document.getElementById("drop");

    item.removeChild(drop);
    works.style.marginBottom = "100px";
  });
}