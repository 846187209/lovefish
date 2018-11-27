import {ctx2,bgPic,canWidth,canHeight} from '@/assets/js/main'

const drawBackground = function(){
  ctx2.drawImage(bgPic,0,0,canWidth,canHeight);
};

export{drawBackground}
