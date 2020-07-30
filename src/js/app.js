document.addEventListener('DOMContentLoaded', () => {

  //Nav 
  const navEls = {
    navDesktop: $('.ports-desktop-header'),
    navLevel2: $('.ports-desktop-header .nav-level-2'),
    level2Trigger: $('.ports-desktop-header .level-2-trigger'),
    ordinaryLinks: $('.ports-desktop-header .ports-link'),
    searchTrigger: $('.ports-desktop-header .search-trigger'),
    navMobile: $('.ports-mobile-header'),
    mobileMenuTrigger: $(".ports-mobile-header .mobile-menu-trigger")
  }
  navEls.navDesktop.mouseleave(function () {
    navEls.navDesktop.removeClass('show-level-2')
    navEls.navDesktop.removeClass('show-search')
  });
  navEls.navLevel2.mouseleave(function () {
    navEls.navDesktop.removeClass('show-level-2')
  });
  navEls.ordinaryLinks.mouseenter(function () {
    navEls.navDesktop.removeClass('show-search')
  });
  navEls.level2Trigger.mouseenter(function () {
    navEls.navDesktop.addClass('show-level-2')
  });
  navEls.searchTrigger.mouseenter(function () {
    navEls.navDesktop.addClass('show-search')
  });
  navEls.mobileMenuTrigger.click(function () {
    navEls.navMobile.toggleClass('show-menu');
  })
  $(".click-toggle").click(function (e) {
    e.preventDefault();
    const $target = $('.'+this.dataset.targetClass);
    const className = this.dataset.toggleClass;
    
    $target.toggleClass(className);
  })





});
