<script setup>
defineProps({
  data: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <v-card class="mx-auto pa-3 ma-3" v-for="(item, i) in data" :key="i">
    <template v-slot:title>
      <div class="description text-h6 font-weight-black">
        {{ item.TITLE }}
      </div>
    </template>
    <v-card-text>
      <div class="description text-subtitle-1">
        {{ item.CONTENT }}
      </div>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
.description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.buy {
  &__col {
    border-radius: 24px;
    padding-bottom: 15px;
    position: relative;
    margin: 30px 12px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &__date {
      position: absolute;
      left: 78%;
      background: #fafafa;
      text-align: center;
    }

    &__title {
      font-size: 1.1rem;
    }
    &__content {
      display: flex;
      justify-content: space-between;
      padding: 2px 12px;
      align-items: center;
    }
    &__description {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 242px;
    }

    img {
      border-radius: 24px 24px 0px 0px;
    }

    &__img {
    }
  }
}
</style>
