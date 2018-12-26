/**
 * Created by 14711 on 2018/10/19.
 */
// 通过父编码查询所有的子编码
function bigPack() {
  var code= $(".code").text();
  //ajax  通过后台查询所有的子编码  并作显示
  window.location.href='/t/detail?code='+code;
}
function diyPlatform() {
  var code= $(".code").text();
  //ajax  通过后台查询所有的子编码  并作显示
  window.location.href='/interact/code/scanCode?code='+code;
}