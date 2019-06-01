var transformButton = true; //переключалка
$("#menu").click(function(){
  
  if(transformButton){
    // сдвинуть обёртку, выдвинуть меню, сделать крестик
    $(".wrapper-middle").css({width: "77.6%"}, 500);
    $(".left-menu").animate({left: 0});
    $(".line1").css({
    transform: "rotate(45deg)",
    top: "50%"
  });
  $(".line2").css({
    transform: "rotate(-45deg)",
    top: "50%"
  });
  $(".line3").css({
    transform: "rotate(180deg)",
    opacity: "0",
  });
    transformButton = false;
  } else{
    // растянуть обёртку, задвинуть меню, сделать 3 полоски
    $(".wrapper-middle").css({width: "100%"}, 500);
    $(".left-menu").animate({left: "-100%"});
    $(".line1").css({
    transform: "",
    top: ""
  });
  $(".line2").css({
    transform: "",
    top: ""
  });
  $(".line3").css({
    transform: "",
    opacity: "",
  });
    transformButton = true;
  }
  //скрыть/показать одну верхушку
  $(".wrapper-top-hideMenu").slideToggle(500);
  //скрыть/показать вторую верхушку
  $(".wrapper-top-showMenu").slideToggle(500).css({display: "flex"});
});