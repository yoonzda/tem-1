$(document).ready(function(){
  panelControl();

  $(".slideContent").slick({
    arrows: true,

    prevArrow: $('.prevButton'),
    nextArrow: $('.nextButton')
  });
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