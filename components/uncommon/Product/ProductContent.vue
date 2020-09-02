<template>
  <div>
    <b-container>
      <b-row>
        <b-col
          v-for="(product, index) in products.slice(0, 4)"
          :key="'product-item' + index"
          style="margin: 1em 1em;"
          :data="product"
        >
          <b-row>
            <b-img :src="product.thumbnail" fluid></b-img>
          </b-row>
          <b-row>
            {{ product.title }}
          </b-row>
          <b-row> {{ product.price }}$ </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="(product, index) in products.slice(4, 8)"
          :key="'product-item' + index"
          style="margin: 1em 1em;"
          :data="product"
        >
          <b-row>
            <b-img :src="product.thumbnail" fluid></b-img>
          </b-row>
          <b-row>
            {{ product.title }}
          </b-row>
          <b-row> {{ product.price }}$ </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="(product, index) in products.slice(8, 12)"
          :key="'product-item' + index"
          style="margin: 1em 1em;"
          :data="product"
          ><b-row>
            <b-img :src="product.thumbnail" fluid></b-img>
          </b-row>
          <b-row>
            {{ product.title }}
          </b-row>
          <b-row> {{ product.price }}$ </b-row></b-col
        >
      </b-row>
      <b-row>
        <b-col
          v-for="(product, index) in products.slice(12, 16)"
          :key="'product-item' + index"
          style="margin: 1em 1em;"
          :data="product"
          ><b-row>
            <b-img :src="product.thumbnail" fluid></b-img>
          </b-row>
          <b-row>
            {{ product.title }}
          </b-row>
          <b-row> {{ product.price }}$ </b-row></b-col
        >
      </b-row>
      <!-- </div> -->
    </b-container>
    <div class="block">
      <span class="demonstration">When you have few pages</span>
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  computed: mapState({
    products: (state) => state.product.data,
  }),
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
