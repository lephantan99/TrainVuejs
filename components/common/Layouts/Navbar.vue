<template>
  <div>
    <div style="padding: 2em 8em;">
      <h1>Unite Demo</h1>
      <h5>FREE WordPress Theme</h5>
    </div>
    <b-navbar
      style="
        background-color: #54397e !important;
        text-color: #ffffff;
        padding: 0.5rem 8rem;
      "
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-brand>
        <nuxt-link class="text-light" to="/">
          My Shop
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link class="text-light" to="/introduction">
              Sản phẩm
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/contact">
              Liên hệ
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/home">
              Test
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <nuxt-link class="text-light" to="/introduction">
              <b-icon-cart-fill></b-icon-cart-fill>
              Giỏ hàng
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
