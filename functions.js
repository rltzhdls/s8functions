


$('.why_nav li span').click(function(e) {
    e.preventDefault();
  
    let $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li p').removeClass('show');
        $this.parent().parent().find('li p').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


$(function() {
    $('.why_nav li').click(function() {
      $('.why_nav li').not(this).removeClass('active')
      $(this).toggleClass('active')
    })
});


$('.intro_nav li .intro_nav__show').click(function(e) {
    e.preventDefault();
  
    let $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .intro_nav__drop').removeClass('show');
        $this.parent().parent().find('li .intro_nav__drop').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
 

$('.tab_nav span').on('click', function() {
    $($($(this).data('href'))[0]).addClass('active').siblings('.active').removeClass('active');
});


$(function() {
    $('.statistic_nav li').click(function() {
      $('.statistic_nav li').not(this).removeClass('active')
      $(this).toggleClass('active')
    })
});


$(function() {
    $('.intro_nav__show').click(function() {
      $('.intro_nav__show').not(this).removeClass('active')
      $(this).toggleClass('active')
    })
});


$(function() {
    $('.intro_nav__drop span').click(function() {
      $('.intro_nav__drop span').not(this).removeClass('active')
      $(this).toggleClass('active')
    })
});
  



$('.info__dropdown li span').click(function(e) {
    e.preventDefault();
  
    let $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li div').removeClass('show');
        $this.parent().parent().find('li div').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


$(".info__dropdown li").click(function(){
    $(this).toggleClass("active").siblings().removeClass("active");
});


$(".menu__mobile").click(function(){
    $(this).toggleClass("active");
    $('.intro_nav').toggleClass("active");
});

$(".intro_nav__show span").click(function(){
    $('.intro_nav').removeClass("active");
    $('.menu__mobile').toggleClass("active");
});


$(".intro_nav__drop span").click(function(){
    $('.intro_nav').removeClass("active");
    $('.menu__mobile').toggleClass("active");
});





  
$('.streams_icon').on('click', function() {
    $('.streams').toggleClass('active');
});



// Faq

$('.faq li span').click(function(e) {
    e.preventDefault();
  
    let $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li p').removeClass('show');
        $this.parent().parent().find('li p').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });
  
  $(".faq li").click(function(){
    $(this).toggleClass("active").siblings().removeClass("active");
  });
  



  
$('.mobile').on('click', function() {
    $(this).toggleClass('active');
    $('.nav__main').toggleClass('active');
});