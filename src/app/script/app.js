  // Show sticky topbar on scroll
  // -----------------------------------
  var $win = $(window);
  var $doc = $(document);
  var $body = $('body');

  var stickyNavScroll;
  var stickySelector = '.navbar-sticky';

  // Setup functions based on screen
  if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
      stickyNavScroll = function() {
          var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
          if (top > 40) $(stickySelector).stop().animate({
              'top': '0'
          });

          else $(stickySelector).stop().animate({
              'top': '-80'
          });
      };
  }

  if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
      stickyNavScroll = function() {
          var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
          if (top > 40) $(stickySelector).stop().animate({
              'top': '0'
          });

          else $(stickySelector).stop().animate({
              'top': '-120'
          });
      };
  }

  // Finally attach to events
  $doc.ready(stickyNavScroll);
  $win.scroll(stickyNavScroll);


  // Sticky Navigation
  // -----------------------------------

  $(function() {

      $('.main-navbar').onePageNav({
          scrollThreshold: 0.25,
          filter: ':not(.external)', // external links
          changeHash: true,
          scrollSpeed: 750
      });

  });