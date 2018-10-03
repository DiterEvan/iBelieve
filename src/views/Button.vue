<template>
  <div class="button-container">

    <div class="button" @click="click">
      <div class="button-icon">
        <img src="../assets/hearts/heart.png">
      </div>
      <p class="button-text">iBelieve</p>
    </div>

    <div class="button red">
      <div class="button-icon">
        <img src="../assets/hearts/heart-black.png">
      </div>
      <p class="button-text">iBelieve</p>
    </div>

  </div>
</template>

<script>

import Observer from 'observerjs';

export default {
  methods: {
    click() {
      // console.log('click!')
      Observer.emit('openApp', '*', window.parent);
    },
  },
};

</script>

<style lang="stylus">

  .button-container
    text-align center
  .button
    background #FCFCFC
    display inline-flex
    align-items center
    border-radius 50px
    padding 5px 18px
    cursor pointer
    min-width 145px
    &-icon
      margin-right 12px
    &-text
      color #000
      font-weight 500
      font-size 16px

  .button.red
    background #EB5757
    .button-text
      color #FCFCFC

</style>
