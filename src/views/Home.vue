<template>
  <div>
    
    <div class="overlay"></div>
    
    <div class="heart">
      <img src="../assets/hearts/heart-big.png">
    </div>

  </div>
</template>

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