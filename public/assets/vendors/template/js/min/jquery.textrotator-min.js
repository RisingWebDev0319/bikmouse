!function(t){t.textRotator=function(e,n){var l={random:!1,fadeIn:1e3,fadeOut:500,duration:5e3,easingin:"swing",easingout:"swing"},i=this;i.settings={},i.globals={child_select:1,$child_select:null};var a=t(e),e=e;i.init=function(){i.settings=t.extend({},l,n),i.settings.random&&i._shuffle(a.children()),i.globals.$child_select=a.find("li:nth-child("+i.globals.child_select+")"),i._fadeIn()},i._fadeIn=function(){i.globals.$child_select.fadeIn({duration:i.settings.fadeIn,easing:i.globals.$child_select.data("easingin")?i.globals.$child_select.data("easingin"):i.settings.easingin,complete:function(){a.find("li").length>1&&i._fadeOut()}})},i._shuffle=function(t){var e=t.get(),n=function(t){return Math.floor(Math.random()*t)},l=$.map(e,function(){var t=n(e.length),l=$(e[t]).clone(!0)[0];return e.splice(t,1),l});t.each(function(t){$(this).replaceWith($(l[t]))})},i._fadeOut=function(){var t=i.globals.$child_select.data("duration")?i.globals.$child_select.data("duration"):i.settings.duration;i.globals.$child_select.delay(t).fadeOut({duration:i.settings.fadeOut,easing:i.globals.$child_select.data("easingout")?i.globals.$child_select.data("easingout"):i.settings.easingout,complete:function(){i.globals.$child_select.index()+1==a.children().length?(console.log("last"),i.globals.$child_select=a.children().first()):i.globals.$child_select=i.globals.$child_select.next("li"),i._fadeIn()}})},i.init()},t.fn.textRotator=function(t){return this.each(function(){if(void 0==$(this).data("textRotator")){var e=new $.textRotator(this,t);$(this).data("textRotator",e)}})}}(jQuery);