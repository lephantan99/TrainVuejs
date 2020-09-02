<template>
  <div>
    <b-navbar
      style="
        background-color: #54397e !important;
        text-color: #ffffff;
        padding: 0.5rem 11rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
      "
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link class="text-light" to="/" style="text-decoration: none;">
              Sample Page
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/" style="text-decoration: none;">
              Full-Width Page
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/" style="text-decoration: none;">
              Page A
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/" style="text-decoration: none;">
              BLog
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/" style="text-decoration: none;">
              Front Page
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item style="text-footer">
            <nuxt-link class="text-light" to="/" style="text-decoration: none;">
              Unite Demo. All rights reserved. Unite Theme powered by WordPress.
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
