$('html').smoothScroll(2000);

//$(document).ready(function(){
//    
//    $(".top").click(function(){
//        
//        $("html,body").animate({scrollTop:0} ,10000);
//    });
//});

/*addclass and  remove class*/

$(window).scroll(function() {
   if ($(this).scrollTop() > 50){
      $('.navbar').addClass("newclass");
   } else {
      $('.navbar').removeClass("newclass");
   }
});