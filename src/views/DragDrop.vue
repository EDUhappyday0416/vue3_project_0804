<template>
  <div>
    <div class="header">
      <div
        class="noActive"
        :class="{ active: initTab == 'currect' }"
        @click="currentChange('currect')"
      >
        currect
      </div>
      <div class="noActive" :class="{ active: initTab == 'Past' }" @click="currentChange('Past')">
        Past
      </div>
      <div
        class="noActive"
        :class="{ active: initTab == 'Waitlist' }"
        @click="currentChange('Waitlist')"
      >
        Waitlist
      </div>
    </div>
    <div class="drag" @scroll="onScroll">
      <div
        class="drag__main"
        v-for="(item, i) in getCurrentChange"
        @mouseover="showInfo = i"
        @mouseleave="showInfo = null"
        :key="i"
      >
        <div
          class="drag__card"
          @click="goPage(i)"
          :class="{
            hide: item.type == 'Past',
            show: item.type == 'currect' || item.type == 'Waitlist'
          }"
        >
          <div class="card cardLeft drag__start">
            <div class="drag__card__eventName">Event Name</div>
            <div class="drag__card__name">{{ item.event }} , {{ item.content }}</div>
            <div class="drag__card__eventName">Date</div>
            <div class="drag__card__bold">{{ item.date }}</div>
            <div class="drag__card__eventName">Type {{ item.type }}</div>
          </div>
          <div class="card cardRight">
            <div class="drag__card__eventName">Total seats</div>
            <div class="drag__card__bold">{{ item.totalSeats }}</div>
            <div class="drag__card__eventName">Seats</div>
            <div class="drag__card__bold">{{ item.Seats }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCounterStore } from '../stores/counter'
// call the action as a method of the store
const store = useCounterStore()
console.log('store', store.List)

const router = useRouter()
const route = useRoute()

const goPage = (i) => {
  router.push(`/DragDrop/${i}`)
  console.log(route.params)
}

const showInfo = ref(null)
const initTab = ref('currect')
const currentChange = (type) => {
  initTab.value = type
}
const getCurrentChange = computed(() => {
  return store.List.filter((item) => item.type == initTab.value)
})
const onScroll = (e) => {
  const { scrollTop, offsetHeight, scrollHeight } = e.target
  if (scrollTop + offsetHeight >= scrollHeight * 0.9) {
    store.increment()
  }
}
</script>

<style lang="scss" scoped>
.hide {
  background-color: #8e6e6e20;
}
.show {
  background-color: white;
}
.active {
  border-bottom: 1px solid black;
}
.noActive {
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.drag {
  height: calc(100vh - 40px);
  background-color: #f9f9f9;
  overflow: auto;
  max-height: calc(100vh - 40px);
  &__main {
    padding: 10px;
    display: flex;
  }

  /*&__main:hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }*/

  &__start {
    /*height: 60px;
        width: 100%;
        background-color: rgba(208, 223, 248, 0.384);
        text-align: center;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;*/
    cursor: pointer;
  }
  &__start:hover {
    /*height: 65px;*/
  }
  &__show {
    display: flex;
    margin: 0 6px;
    align-items: center;
    justify-content: center;
    background-color: azure;
    background-color: rgba(218, 213, 213, 0.625);
    border-radius: 0 0 5px 5px;
  }

  &__left {
    height: 60px;
    display: flex;
    width: 450px;
    flex-grow: 1;
    background-color: antiquewhite;
    border-radius: 8px;
  }
  &__right {
    height: 60px;
    display: flex;
    width: 200px;
    flex-grow: 1;
    background-color: antiquewhite;
    border-radius: 8px;
  }

  &__dash {
    border: 1px dashed #000;
    margin: 7px 0px;
  }

  &__card {
    display: flex;
    border-radius: 10px;

    &__eventName {
      font-size: 13px;
    }
    &__name {
      color: rgb(69, 115, 232);
    }
    &__bold {
      font-weight: bold;
    }
  }
}

.card {
  float: left;
  position: relative;
  /*background-color: #ffffff;*/
  padding: 0.8em;
}

.cardLeft {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 260px;
}

.cardRight {
  border-left: 0.18em dashed #e3dada;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.cardRight:before {
  top: -0.4em;
}

.cardRight:before {
  content: '';
  position: absolute;
  display: block;
  width: 0.9em;
  height: 0.9em;
  background: #f9f9f9;
  border-radius: 50%;
  left: -0.5em;
}

.cardRight:after {
  content: '';
  position: absolute;
  display: block;
  width: 0.9em;
  height: 0.9em;
  background: #f9f9f9;
  border-radius: 50%;
  left: -0.5em;
}

.cardRight:after {
  bottom: -0.4em;
}
</style>
