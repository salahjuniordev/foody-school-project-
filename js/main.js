(function(){
var BP=768, W=390;
var mobile=document.querySelector('.mobile'), frame=document.querySelector('.mobile-frame');
function fit(){
  var w=window.innerWidth;
  // nav.html is a mobile-only page: send desktop visitors home
  if(!document.querySelector('.desktop') && w>=BP){ location.replace('index.html'); return; }
  // phones narrower than 390px: scale the mobile design down to fit
  if(frame){ frame.style.zoom = (w<W && w<BP) ? (w/W) : 1; }
}
fit(); window.addEventListener('resize',fit);
})();
