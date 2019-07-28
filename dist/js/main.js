var controller = new ScrollMagic.Controller();
var tween = TweenMax.from('#animate', 0.5, {
  autoAlpha: 0,
  scale: 0.7
});

var tween = new ScrollMagic.Scene({
  triggerElement: 'a#top',
  duration: 200,
  triggerHook: 'ovLeave'
})
  .setTween(tween)

  .addTo(controller);

controller.scrollTo(function(newpos) {
  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: newpos
    }
  });
});

$(document).on('click', "a[href^='#']", function(e) {
  var id = $(this).attr('href');
  if ($(id).length > 0) {
    e.preventDefault();
    controller.scrollTo(id);
    if (window.history && window.history.pushState) {
      history.pushState('', document.title, id);
    }
  }
});

var changeNav = new ScrollMagic.Controller();
var homeHeight = document.getElementById('sec1').offsetHeight;
var musicHeight = document.getElementById('Music').offsetHeight;

new ScrollMagic.Scene({
  triggerElement: '#sec1',
  triggerHook: 0,
  duration: homeHeight
})

  .setClassToggle('#home-link', 'newCurrent')

  .addIndicators()
  .addTo(changeNav);

new ScrollMagic.Scene({
  triggerElement: '#About',
  triggerHook: 0,
  duration: musicHeight
})

  .setClassToggle('.navbar', 'changeNav')

  .addIndicators()
  .addTo(changeNav);

new ScrollMagic.Scene({
  triggerElement: '#About',
  triggerHook: 0,
  duration: musicHeight
})

  .setClassToggle('.navbar .nav-link', 'changeColor')

  .addIndicators()
  .addTo(changeNav);

new ScrollMagic.Scene({
  triggerElement: '#About',
  triggerHook: 0,
  duration: musicHeight
})

  .setClassToggle('#about-link', 'newCurrent')

  .addIndicators()
  .addTo(changeNav);

var contactHeight = document.getElementById('Contact').offsetHeight;

new ScrollMagic.Scene({
  triggerElement: '#Music',
  triggerHook: 0,
  duration: contactHeight
})

  .setClassToggle('#music-link', 'newCurrent')

  .addIndicators()
  .addTo(changeNav);

new ScrollMagic.Scene({
  triggerElement: '#Contact',
  triggerHook: 0,
  duration: contactHeight
})

  .setClassToggle('#contact-link', 'newCurrent')

  .addIndicators()
  .addTo(changeNav);
