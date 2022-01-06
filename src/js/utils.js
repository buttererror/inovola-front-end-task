function offCanvasEventListeners() {
  /*---canvas menu activation---*/
  window.addEventListener('resize', function () {
    document.querySelector('.offcanvas_menu_wrapper').classList.remove('active')
    document.querySelector('.off_canvas_overlay').classList.remove('active')
  });
  document.querySelector('.canvas_close').addEventListener('click', function () {
    document.querySelector('.offcanvas_menu_wrapper').classList.remove('active')
    document.querySelector('.off_canvas_overlay').classList.remove('active')
  });
  document.querySelector('.off_canvas_overlay').addEventListener('click', function () {
    document.querySelector('.offcanvas_menu_wrapper,.off_canvas_overlay').classList.remove('active')
  });

  document.querySelector(".canvas_open").addEventListener('click', function () {
    document.querySelector('.offcanvas_menu_wrapper').classList.add('active');
    document.querySelector('.off_canvas_overlay').classList.add('active');
  });
}

export {
  offCanvasEventListeners
}