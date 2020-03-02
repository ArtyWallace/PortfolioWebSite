let feedbackModal = document.querySelector("#feedbackModal"); // feedback modal window
let introBtn = document.querySelector("#introButton"); // feedback modal window button
let worksModal = document.querySelector("#worksModal"); // works feedback window
let worksItem = document.querySelectorAll("#worksItem"); // works feedback window button

// Feedback modal
// Open
introBtn.onclick = () => {
  feedbackModal.style.display = "flex";
}

// Works modal
// Open
worksItem.forEach(element => {
  element.onclick = () => {
    worksModal.style.display = "flex";
  }
});

// Closing modal windows
window.onclick = function(event) {
  if (event.target == feedbackModal) {
    feedbackModal.style.display = "none";
  }
  if (event.target == worksModal) {
    worksModal.style.display = "none";
  }
}


// Slider Jquery
$(document).ready(function() {
  $('.instruments__slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });
});

