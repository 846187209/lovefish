/**
 * Created by Administrator on 2018/11/21.
 */
import {drawBackground} from '@/assets/js/background'
import {aneObj} from '@/assets/js/ane'
import {fruitObj} from '@/assets/js/fruit'

var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;
var nowTime;
var bgPic = new Image();
var ane;

var fruit;

document.body.onload = game;
function game() {
  init();
  gameloop();
  lastTime = Date.now();
  deltaTime = 0;
}
function init() {
  can1 = document.getElementById("can1");//fishes,UI,circle,dust
  ctx1 = can1.getContext('2d');
  can2 = document.getElementById("can2");//background,ane,fruits
  ctx2 = can2.getContext('2d');
  bgPic.src = '/static/images/background.jpg';
  canWidth = can1.width;
  canHeight = can1.height;
  ane = new aneObj();
  ane.init();

  fruit = new fruitObj();
  fruit.init();
}

function gameloop() {
  window.requestAnimFrame(gameloop); //智能获取帧
  nowTime = new Date();
  deltaTime = nowTime - lastTime;
  lastTime = nowTime;
  drawBackground();
  ane.draw();
  fruit.draw();
}

export {ctx1, ctx2, canWidth, canHeight,bgPic,ane}
