<template>
  <div>
    <!-- <div style="display: flex; justify-content: flex-end; margin-top: 1em;">
      <b-form-input v-model="text" placeholder="Input Search!!!"></b-form-input>
      <b-button variant="success" style="margin: 0 11em 0 2em;"
        >Search</b-button
      >
    </div> -->
    <b-container><ProductContent /></b-container>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="POPULAR" active>
                <div
                  v-for="(popular, index) in populars"
                  :key="'popular-item' + index"
                  style="margin-bottom: 1em;"
                  :data="popular"
                >
                  <b-row>
                    <b-col cols="4">
                      <b-img :src="popular.thumbnail" fluid></b-img>
                    </b-col>
                    <b-col>
                      <b-row>
                        {{ popular.title }}
                      </b-row>
                      <b-row>
                        {{ popular.createdAt }}
                      </b-row>
                    </b-col>
                  </b-row>
                </div>
              </b-tab>
              <b-tab title="RECENT">
                <div
                  v-for="(popular, index) in populars"
                  :key="'popular-item' + index"
                  style="margin-bottom: 1em;"
                  :data="popular"
                >
                  <b-row>
                    <b-col cols="4">
                      <b-img :src="popular.thumbnail" fluid></b-img>
                    </b-col>
                    <b-col>
                      <b-row>
                        {{ popular.title }}
                      </b-row>
                      <b-row>
                        {{ popular.createdAt }}
                      </b-row>
                    </b-col>
                  </b-row>
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
              Unite WordPress Theme!
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
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'
import { productActions } from '~/constants/vuex'
import {
  ProductContent,
  // HomeFeaturePosts,
  // HomeSidebar,
} from '~/components/uncommon/Product'
export default {
  components: {
    ProductContent,
    // HomeHeader,
    // HomeFeaturePosts,
    // HomeSidebar,
  },
  async fetch({ store }) {
    console.log('start fetch')
    // this.fetchProducts()
    await store.dispatch(productActions.FETCH.DATA)
  },
  created() {
    this.populars = this.products.slice(0, 5)
    console.log('Here', this.populars)
  },
  computed: mapState({
    // count: (state) => state.count,
    products: (state) => state.product.data,
  }),
  data() {
    return {
      populars: [],
    }
  },
  methods: {
    ...mapActions({
      fetchProducts: productActions.FETCH.DATA,
    }),
    moment() {
      return moment()
    },
  },
}
</script>
