
window.jQuery = window.$ = window.jQuery || function(selector){
  var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];
  return {nodes:nodes,on:function(ev,fn){Array.prototype.forEach.call(nodes,function(n){n&&n.addEventListener&&n.addEventListener(ev,fn)});return this},ready:function(fn){document.addEventListener('DOMContentLoaded',fn);return this}};
};
