//$(window).scrollTop()指令能知道目前狀態

//要加此行初始化才會啟用
var s = skrollr.init();

$(window).scroll(function(evt){
  if($(window).scrollTop()>0)
  $(".navbar").removeClass("navbar-top");
  else
  $(".navbar").addClass("navbar-top");
  
});