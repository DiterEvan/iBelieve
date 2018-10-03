<template>
  <div>

    <div class="overlay" @click="click"></div>

    <div class="heart" @click="click">
      <img src="../assets/hearts/heart-big.png" @click.stop>
    </div>

  </div>
</template>

<script>

import Observer from 'observerjs';

document.onkeydown = (e) => {
  const evt = e || window.event;
  let isEscape = false;
  if ('key' in evt) {
    isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    Observer.emit('closeApp', '*', window.parent);
  }
};

export default {
  methods: {
    click() {
      // console.log('click!');
      Observer.emit('closeApp', '*', window.parent);
    },
  },
};

</script>

<style lang="stylus">

  .overlay
    background rgba(#212121, .5)
    position fixed
    height 100%
    width 100%

  .heart
    position: fixed;
    width 100%
    bottom 0
    transform: translateY(20%);
    img
      width 100%
      max-width 400px
      display block
      margin auto

  @media(min-width: 700px)
    .heart
      transform: translateY(15%);
      img
        float: right;
        transform: translateX(25%);

  @media(min-width: 900px)
    .heart
      img
        max-width 500px

</style>
