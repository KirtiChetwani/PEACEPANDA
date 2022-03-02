window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 200);
};

const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

document.querySelector(".nav-list").addEventListener("click", function (e) {
  if (!e.target.classList.contains("newpage")){
    e.preventDefault();
  }
  if (e.target.classList.contains("nav-link")) {
    container.classList.remove("change");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    })
  }

});
const colors = [
  "#141313",
  "#2c2a2a",
  "#474545",
  "#696868",
  "#8b8989",
  "#afacac",
  "#cfcdcd",
];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

jQuery(document).ready(function($){
  //open popup
  $('.popup-trigger').on('click', function(event){
    event.preventDefault();
    $('.popup').addClass('is-visible');
  });
  
  //close popup
  $('.popup').on('click', function(event){
    if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.popup').removeClass('is-visible');
      }
    });
});

