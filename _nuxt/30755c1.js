(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{942:function(n,t,e){"use strict";e.r(t);e(46);var o=e(1071),c=e.n(o),r=e(1072),l=e.n(r),d={name:"Unity_view",components:{VModal:c.a,Unity:l.a},computed:{},data:function(){return{intervalID:null}},mounted:function(){var n=this;window.addEventListener("fn",this.unityWatch),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("fn",n.unityWatch)}))},methods:{hide:function(){clearInterval(this.intervalID),this.$modal.hide("unity-modal")},unityWatch:function(n){},onClickF:function(){this.$refs.gameInstance.contentWindow.VK_MovementDirec(.15,0)},onClickB:function(){this.$refs.gameInstance.contentWindow.VK_MovementDirec(-.15,0)},onClickL:function(){this.$refs.gameInstance.contentWindow.VK_MovementDirec(0,.4)},onClickR:function(){this.$refs.gameInstance.contentWindow.VK_MovementDirec(0,-.4)},onClickS:function(){this.$refs.gameInstance.contentWindow.VK_MovementDirec(0,0)},onClickImg:function(){this.intervalID=setInterval(function(){console.log("Hi HI"),document.getElementById("ImgBase64").innerHTML=this.$refs.gameInstance.contentWindow.ImageBase64()}.bind(this),100)},onClickStopStream:function(){clearInterval(this.intervalID)}}},m=e(11),component=Object(m.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("modal",{attrs:{id:"unity-modal",name:"unity-modal",draggable:!0,clickToClose:!1,width:1200,height:800}},[e("div",[e("button",{on:{click:n.hide}},[n._v("hide")]),n._v(" "),e("iframe",{ref:"gameInstance",attrs:{width:"100vw",scorlling:"no",border:"0",src:"/VKBuild/index.html",frameborder:"0"}}),n._v(" "),e("button",{on:{click:function(t){return n.onClickF()}}},[n._v("Forward")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickB()}}},[n._v("Backward")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickL()}}},[n._v("TurnLeft")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickR()}}},[n._v("TurnRight")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickS()}}},[n._v("Stop")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickImg()}}},[n._v("Image")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickStopStream()}}},[n._v("Stop Stream")]),n._v(" "),e("p",{attrs:{id:"ImgBase64"}},[n._v("0")])])])}),[],!1,null,null,null);t.default=component.exports}}]);