(function($) {
  
  /* ==================================================
    Drawer Menu
  ================================================== */

  $(function(){
    const openBtn = $("#menuicon");
    const openBtnActive = ".active";
    const closeBtn = $("#close");
    const overlay = $("#overlay");
    const panel = $("#hamburgerwrap");
    function panelOpen() {
      overlay.fadeIn('fast');
      panel.addClass('open');
      openBtn.addClass('active');
    }
    function panelClose() {
      overlay.fadeOut('fast');
      panel.removeClass('open');
      openBtn.removeClass('active');
    }
    openBtn.on('click',function(){
      if($(".active").length) {
        panelClose();
      } else {
        panelOpen();
      }
    });
    closeBtn.on('click',function(){
      panelClose();
    });
    overlay.on('click',function(){
      panelClose();
    });
    $(window).on('resize',function(){
      panelClose();
    });
  });

})(jQuery);



/* ==================================================
  タブ切り替え
================================================== */
// document.addEventListener('DOMContentLoaded', function(){
//   // タブに対してクリックイベントを適用
//   const tabs = document.getElementsByClassName('tab');
//   for(let i = 0; i < tabs.length; i++) {
//       tabs[i].addEventListener('click', tabSwitch);
//   }

//   // タブをクリックすると実行する関数
//   function tabSwitch(){
//       // タブのclassの値を変更
//       document.getElementsByClassName('is-active')[0].classList.remove('is-active');
//       this.classList.add('is-active');
//       // コンテンツのclassの値を変更
//       document.getElementsByClassName('is-show')[0].classList.remove('is-show');
//       const arrayTabs = Array.prototype.slice.call(tabs);
//       const index = arrayTabs.indexOf(this);
//       document.getElementsByClassName('panel')[index].classList.add('is-show');
//   };
// });