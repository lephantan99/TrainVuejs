<template>
  <b-container>
    <HomeHeader />
    <!-- <b-container>
      <b-row>
        <b-col>
          <HomeFeaturePosts />
        </b-col>
        <b-col>
          <HomeSidebar />
        </b-col>
      </b-row>
    </b-container> -->
    <!-- <b-button variant="primary">OK</b-button> -->
    <div style="display: flex; margin-top: 2em; justify-content: center;">
      <p style="display: inline;">
        <b>This is a regular Page </b>and you can add any content here.
      </p>
    </div>
    <div style="padding: 5em 0;">
      <hr />
      <div style="margin-top: -27px; padding: 0 50%;">
        <b-icon-heart-fill
          type="border"
          style="color: #54397e;"
          scale="1.75"
        ></b-icon-heart-fill>
      </div>
    </div>
    <b-container v-if="blogs.length > 0">
      <b-row>
        <b-col>
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="POPULAR" active>
                <div
                  v-for="(blog, index) in blogs"
                  :key="'blog-item' + index"
                  style="margin-bottom: 1em;"
                  :data="blog"
                >
                  <b-row>
                    <b-col cols="4">
                      <b-img :src="blog.thumbnail" fluid></b-img>
                    </b-col>
                    <b-col>
                      <b-row>
                        {{ blog.title }}
                      </b-row>
                      <b-row>
                        {{ blog.createdAt }}
                      </b-row>
                    </b-col>
                  </b-row>
                </div>
              </b-tab>
              <b-tab title="RECENT">
                <div>
                  <div
                    v-for="(blog, index) in blogs"
                    :key="'blog-item' + index"
                    :data="blog"
                  >
                    <b-row>
                      <b-col cols="4">
                        <b-img :src="blog.thumbnail" fluid></b-img>
                      </b-col>
                      <b-col>
                        <b-row>
                          {{ blog.title }}
                        </b-row>
                        <b-row>
                          {{ blog.createdAt }}
                        </b-row>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <b-icon-chat-fill
                    type="border"
                    small
                    style="color: #54397e;"
                  ></b-icon-chat-fill>
                </template>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
        <b-col>
          <div>
            <h2>
              Unite WordPress Theme.
            </h2>
            <div>
              If you like this awesome and completely free WordPress wedding
              theme you can download it by clicking on button below.
              <br />
              <br />
              If you need any help with theme setup and configuration you might
              ask your question on Colorlib support forum.
            </div>
          </div>
        </b-col>
        <b-col>
          <div>
            <h2>
              Search:
            </h2>
            <div>
              You can use as many different widgets in this area as you want.
              This example text is added here using default WordPress text
              widget. This widget can be enabled via Appearance >> Widgets.
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'
import { blogActions } from '~/constants/vuex'
import {
  HomeHeader,
  // HomeFeaturePosts,
  // HomeSidebar,
} from '~/components/uncommon/Home'
export default {
  components: {
    HomeHeader,
    // HomeFeaturePosts,
    // HomeSidebar,
  },
  computed: mapState({
    // count: (state) => state.count,
    blogs: (state) => state.blog.data,
  }),
  methods: {
    ...mapActions({
      fetchBlogs: blogActions.FETCH.DATA,
    }),
    moment() {
      return moment()
    },
  },
  fetch() {
    console.log('start fetch')
    this.fetchBlogs()
    console.log('end fetch')
  },
}
</script>
