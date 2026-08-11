$(document).ready(function(){
  panelControl();
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