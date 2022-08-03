$(document).ready(function(){
 let hiddenRow = $(".expandable");
 $(".expand-btn").click(function(){
     hiddenRow.toggleClass("hidden");
     if (hiddenRow.is(":visible")){
         $(".expand-btn").html("Уменьшить");
     }
     else{
         $(".expand-btn").html("Расширить");
     }
 });
$(".play-button").click(function(){
 $(".modal-canvas").toggleClass("hidden");
});
 $(".modal-close").click(function(){
$(".modal-canvas").toggleClass("hidden");
 });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
  

$(document).ready(function() {
    let hiddenRow = $("expandable");
    if (hiddenRow.is(":visible")){
      // видимый ли этот элемент
      $(".expand-btn").html("уменьшить");
    } else {
      $(".play-button").html("Расширить");
    }
  $(".play-buuton").click(function(){
  $(".modal-canvas")
  });
  $("modal-close").click(function () { 
      $(".modal-canvas").remove();
    });
}); // on 'click'