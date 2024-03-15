$(document).ready(function(){
  var subimg=$('.subimg').height();
  $('.sub-banner').height(subimg)
  var primg=$('.img1').height();
  $('.pr-img').height(primg);
  var catimg_w, catimg_h;
  catimg_w=$('.cat-img').width()-30;
  catimg_h=$('.cat-img').height();
  $('.cat-item').height(catimg_h);
  $('.bg-cat').height(catimg_h-30);
  $('.bg-cat').width(catimg_w);

})
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$(document).ready(function() {
  $('#navbar-toggle').click(function() {
    $('.nav-bar').slideToggle();
  });
});

// =========== toggle

function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}


