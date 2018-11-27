<template>
  <div class="game">
    <div id="allCanvas">
      <canvas id="can1" class="can1" width="800" height="600"></canvas>
      <canvas id="can2" class="can2" width="800" height="600"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created: function () {
      this.$nextTick(function () {
        /*function aa(i){
         setTimeout(function(){
         console.log(new Date(),i);
         },1000)
         }
         for(var i= 0;i<5;i++){
         aa(i);
         }*/
        for (var i = 0; i < 5; i++) {
          (function (j) {
            setTimeout(function () {
              console.log(new Date, j)
            }, 1000*j)
          }(i))
        }

        //console.log(new Date,i)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
  }
</style>
<style scoped>
  .game {
    width: 800px;
    height: 600px;
    /*margin: 20px auto;*/
  }

  #allCanvas {
    width: 800px;
    height: 600px;
    position: relative;
  }

  .can1, .can2 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .can2 {
    z-index: 0;
  }
</style>
