<template>
  <div>
    <div class="off_canvas_overlay">

    </div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="offcanvas_menu_wrapper">
              <div class="canvas_close">
                <a href="javascript:void(0)"><i class="fa fa-times"></i></a>
              </div>
              <div class="offcanvas-brand text-center mb-40">
                <a href="#">
                  <img src="" height="30" alt="">
                </a>
              </div>
              <div id="menu" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li class="menu-item-has-children active">
                    <a href="#">الرئيسية</a>
                  </li>
                  <li class="menu-item-has-children active">
                    <a href="#">التصنيفات</a>
                  </li>
                  <li class="menu-item-has-children active">
                    <a href="#">التطبيقات</a>
                  </li>
                  <li class="menu-item-has-children active">
                    <a href="#">طور التطبيق</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--====== OFFCANVAS MENU PART ENDS ======-->
    <header class="header sticky">
      <div class="container">
        <div class="header-nav-box">
          <div class="row align-items-center">
            <div class="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
              <div class="logo-box">
                <a href="#">
                  <img src="#" height="30" alt="">
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
              <div class="header-main-menu">
                <ul>
                  <li><a href="#">الرئيسية</a></li>
                  <li><a href="#">التصنيفات</a></li>
                  <li><a href="#">التطبيقات</a></li>
                  <li><a href="#">طور التطبيق</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
              <div class="btn-box text-right header-widget">
                <div class="toggle-btn ml-30 canvas_open d-lg-none d-block">
                  <i class="fa fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>