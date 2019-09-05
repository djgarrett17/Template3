
function slider(){
  $current= $('.slider img.active');
  if($current.length === 0){
    $('.slider img:first-child').addClass('active');
  }else{
    $next = $current.removeClass('active').next();
    if($next.length === 0){
      $('.slider img:first-child').addClass('active');
    }else{ 
      $next.addClass('active');
    }
  }
}
setInterval(slider,5000);


// $(document).ready(function(){
//   $(".menupopup").hide();
// });
// $(".hometitle").click(function(){
//   $(".menupopup").hide();
// });

// $(document).click(function(){
//   $(".menupopup").css("display", "flex");
// });

ß
$("#locationsid").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
});
