$(document).ready(function(){
  panelControl();
  slickSlide();
  headerStyle();
});

function activeAdd(target, className){
  $(target).addClass(className);
}

function activeRemove(target, className){
  $(target).removeClass(className);
}

function panelControl(){
  $("#openButton").click(function(){
    activeAdd("#menuPanel", "active");
  });
  $("#closeButton").click(function(){
    activeRemove("#menuPanel", "active");
  });
}

function slickSlide(){
  $(".slideContent").slick({
    arrows: true,

    prevArrow: $('.prevButton'),
    nextArrow: $('.nextButton')
  });
}

function headerStyle(){
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  });
}