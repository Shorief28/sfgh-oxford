/* Students for Global Health Oxford — shared behaviour.
   Everything here is progressive enhancement: with JavaScript off,
   the navigation stays visible and all content is readable. */

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- mobile menu ------------------------------------------------ */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('mainnav');

  if (btn && nav) {
    var close = function (returnFocus) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (returnFocus) btn.focus();
    };

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      if (open) {
        close(false);
      } else {
        nav.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        var first = nav.querySelector('a');
        if (first) first.focus();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        close(true);
      }
    });

    /* close if focus or a click leaves the menu */
    document.addEventListener('click', function (e) {
      if (btn.getAttribute('aria-expanded') !== 'true') return;
      if (!nav.contains(e.target) && !btn.contains(e.target)) close(false);
    });

    /* reset state when resizing back up to desktop */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) close(false);
    });
  }

  /* ---- scroll reveal ---------------------------------------------- */
  var items = document.querySelectorAll('.rv');

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---- map animation (only when motion is welcome) ----------------- */
  var map = document.getElementById('map');
  if (map && !reduce) map.classList.add('anim');
})();
