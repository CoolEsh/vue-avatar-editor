webpackJsonp([0],[,function(t,e,a){function i(t){a(10)}var n=a(0)(a(6),a(12),i,null,null);t.exports=n.exports},function(t,e,a){function i(t){a(9)}var n=a(0)(a(7),a(11),i,null,null);t.exports=n.exports},function(t,e,a){var i=a(0)(a(8),a(13),null,null,null);t.exports=i.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(4),n=a(1),s=a.n(n),r=a(2),o=a.n(r),h=a(3),c=a.n(h);a.d(e,"VueAvatar",function(){return o.a}),a.d(e,"VueAvatarScale",function(){return c.a}),i.a.config.productionTip=!1,i.a.component("vue-avatar",o.a),i.a.component("vue-avatar-scale",c.a),new i.a({el:"#app",render:function(t){return t(s.a)}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{rotation:0,scale:1}},methods:{saveClicked:function(){var t=this.$refs.vueavatar.getImageScaled();this.$refs.image.src=t.toDataURL()},onImageReady:function(){console.log("here"),this.scale=1,this.rotation=0}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var a=[],i=!0,n=!1,s=void 0;try{for(var r,o=t[Symbol.iterator]();!(i=(r=o.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){n=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(t,e,a,i,n,s){if(0===s)t.rect(e,a,i,n);else{var r=i-s,o=n-s;t.translate(e,a),t.arc(s,s,s,Math.PI,1.5*Math.PI),t.lineTo(r,0),t.arc(r,s,s,1.5*Math.PI,2*Math.PI),t.lineTo(i,o),t.arc(r,o,s,2*Math.PI,.5*Math.PI),t.lineTo(s,n),t.arc(s,o,s,.5*Math.PI,Math.PI),t.translate(-e,-a)}};e.default={props:{image:{type:String,default:""},border:{type:Number,default:25},borderRadius:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},color:{type:Array,default:function(){return[0,0,0,.5]}},scale:{type:Number,default:1},rotation:{type:Number,default:0}},data:function(){return{cursor:"cursorPointer",canvas:null,context:null,dragged:!1,imageLoaded:!1,changed:!1,state:{drag:!1,my:null,mx:null,xxx:"ab",image:{x:0,y:0,resource:null}}}},computed:{canvasWidth:function(){return this.getDimensions().canvas.width},canvasHeight:function(){return this.getDimensions().canvas.height},rotationRadian:function(){return this.rotation*Math.PI/180}},mounted:function(){var t=this;if(this.canvas=this.$refs.avatarEditorCanvas,this.context=this.canvas.getContext("2d"),this.paint(),this.image)this.loadImage(this.image);else{var e=this.svgToImage('<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><defs><style>.cls-1{fill:#000;}</style></defs><title>Upload_Upload</title><path class="cls-1" d="M32.5,1A31.5,31.5,0,1,1,1,32.5,31.54,31.54,0,0,1,32.5,1m0-1A32.5,32.5,0,1,0,65,32.5,32.5,32.5,0,0,0,32.5,0h0Z"/><polygon class="cls-1" points="41.91 28.2 32.59 18.65 23.09 28.39 24.17 29.44 31.87 21.54 31.87 40.05 33.37 40.05 33.37 21.59 40.83 29.25 41.91 28.2"/><polygon class="cls-1" points="40.66 40.35 40.66 44.35 24.34 44.35 24.34 40.35 22.34 40.35 22.34 44.35 22.34 46.35 24.34 46.35 40.66 46.35 42.66 46.35 42.66 44.35 42.66 40.35 40.66 40.35"/></svg>');e.onload=function(){var a=t.canvasWidth/2-this.width/2,i=t.canvasHeight/2-this.height/2;t.context.drawImage(e,a,i,this.width,this.height)}}},methods:{svgToImage:function(t){var e=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),a=self.URL||self.webkitURL||self,i=a.createObjectURL(e),n=new Image;return n.src=i,n},setState:function(t){var e=Math.ceil(1),a=Math.floor(1e4);this.state=t,this.state.cnt="HELLO"+Math.floor(Math.random()*(a-e))+e},paint:function(){this.context.save(),this.context.translate(0,0),this.context.fillStyle="rgba("+this.color.slice(0,4).join(",")+")";var t=this.borderRadius,e=this.getDimensions(),a=e.border,i=e.canvas.height,s=e.canvas.width;t=Math.max(t,0),t=Math.min(t,s/2-a,i/2-a),this.context.beginPath(),n(this.context,a,a,s-2*a,i-2*a,t),this.context.rect(s,0,-s,i),this.context.fill("evenodd"),this.context.restore()},getDimensions:function(){return{width:this.width,height:this.height,border:this.border,canvas:{width:this.width+2*this.border,height:this.height+2*this.border}}},onDrop:function(t){var e=this;if(t=t||window.event,t.stopPropagation(),t.preventDefault(),t.dataTransfer&&t.dataTransfer.files.length){var a=new FileReader,i=t.dataTransfer.files[0];this.changed=!0,a.onload=function(t){return e.loadImage(t.target.result)},a.readAsDataURL(i)}},onDragStart:function(t){var e=this;t=t||window.event,t.preventDefault(),this.state.drag=!0,this.state.mx=null,this.state.my=null,this.cursor="cursorGrabbing";var a=document,i=!1,n=function n(r){e.onDragEnd(r),!i&&r.targetTouches&&t.target.click(),a.removeEventListener("mouseup",n),a.removeEventListener("mousemove",s),a.removeEventListener("touchend",n),a.removeEventListener("touchmove",s)},s=function(t){i=!0,e.onMouseMove(t)};a.addEventListener("mouseup",n),a.addEventListener("mousemove",s),a.addEventListener("touchend",n),a.addEventListener("touchmove",s)},onDragEnd:function(t){this.state.drag&&(this.state.drag=!1,this.cursor="cursorPointer")},onMouseMove:function(t){if(t=t||window.event,!1!==this.state.drag){this.dragged=!0,this.changed=!0;var e=this.state.image,a=e.x,i=e.y,n=t.targetTouches?t.targetTouches[0].pageX:t.clientX,s=t.targetTouches?t.targetTouches[0].pageY:t.clientY,r={mx:n,my:s,image:e};if(this.state.mx&&this.state.my){var o=(this.state.mx-n)/this.scale,h=(this.state.my-s)/this.scale;e.y=this.getBoundedY(i-h,this.scale),e.x=this.getBoundedX(a-o,this.scale)}this.state.mx=r.mx,this.state.my=r.my,this.state.image=e}},replaceImageInBounds:function(){var t=this.state.image;t.y=this.getBoundedY(t.y,this.scale),t.x=this.getBoundedX(t.x,this.scale)},loadImage:function(t){var e=new Image,a=this;e.onload=function(){var t=a.getInitialSize(e.width,e.height);a.state.image.x=0,a.state.image.y=0,a.state.image.resource=e,a.state.image.width=t.width,a.state.image.height=t.height,a.state.drag=!1,a.$emit("vue-avatar-editor:image-ready",a.scale),a.imageLoaded=!0,a.cursor="cursorGrab"},e.onerror=function(t){return console.log("error loading image: ",t)},this.isDataURL(t)||(e.crossOrigin="anonymous"),e.src=t},getInitialSize:function(t,e){var a=void 0,i=void 0,n=this.getDimensions();return n.height/n.width>e/t?(a=this.getDimensions().height,i=t*(a/e)):(i=this.getDimensions().width,a=e*(i/t)),{height:a,width:i}},isDataURL:function(t){return null!==t&&!!t.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+=[a-z\-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@\/?%\s]*\s*$/i)},getBoundedX:function(t,e){var a=this.state.image,i=this.getDimensions(),n=Math.abs(a.width*Math.cos(this.rotationRadian))+Math.abs(a.height*Math.sin(this.rotationRadian)),s=Math.floor((n-i.width/e)/2);return s=Math.max(0,s),Math.max(-s,Math.min(t,s))},getBoundedY:function(t,e){var a=this.state.image,i=this.getDimensions(),n=Math.abs(a.width*Math.sin(this.rotationRadian))+Math.abs(a.height*Math.cos(this.rotationRadian)),s=Math.floor((n-i.height/e)/2);return s=Math.max(0,s),Math.max(-s,Math.min(t,s))},paintImage:function(t,e,a){if(e.resource){var i=this.calculatePosition(e,a);t.save(),t.globalCompositeOperation="destination-over";var n=this.getDimensions();t.translate(n.canvas.width/2,n.canvas.height/2),t.rotate(this.rotationRadian),t.translate(-n.canvas.width/2,-n.canvas.height/2),t.drawImage(e.resource,i.x,i.y,i.width,i.height),t.restore()}},transformDataWithRotation:function(t,e){var a=-this.rotationRadian;return[t*Math.cos(a)-e*Math.sin(a),t*Math.sin(a)+e*Math.cos(a)]},calculatePosition:function(t,e){t=t||this.state.image;var a=this.getDimensions(),n=t.width*this.scale,s=t.height*this.scale,r=(n-a.width)/2,o=(s-a.height)/2,h=t.x*this.scale,c=t.y*this.scale,u=this.transformDataWithRotation(h,c),d=i(u,2);return h=d[0],c=d[1],h+=e-r,c+=e-o,{x:h,y:c,height:s,width:n}},redraw:function(){this.context.clearRect(0,0,this.getDimensions().canvas.width,this.getDimensions().canvas.height),this.paint(),this.paintImage(this.context,this.state.image,this.border)},getImage:function(){var t=this.getCroppingRect(),e=this.state.image;t.x*=e.resource.width,t.y*=e.resource.height,t.width*=e.resource.width,t.height*=e.resource.height;var a=document.createElement("canvas");return a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(e.resource,-t.x,-t.y),a},getImageScaled:function(){var t=this.getDimensions(),e=t.width,a=t.height,i=document.createElement("canvas");return i.width=e,i.height=a,this.paintImage(i.getContext("2d"),this.state.image,0),i},imageChanged:function(){return this.changed},getCroppingRect:function(){var t=this.getDimensions(),e={x:t.border,y:t.border,width:t.width,height:t.height},a=this.calculatePosition(this.state.image,t.border);return{x:(e.x-a.x)/a.width,y:(e.y-a.y)/a.height,width:e.width/a.width,height:e.height/a.height}},clicked:function(t){!0===this.dragged?this.dragged=!1:this.$refs.input.click()},fileSelected:function(t){var e=this,a=t.target.files||t.dataTransfer.files;if(a.length){var i=new FileReader;this.changed=!0,i.onload=function(t){return e.loadImage(t.target.result)},i.readAsDataURL(a[0])}}},watch:{state:{handler:function(t,e){this.imageLoaded&&this.redraw()},deep:!0},scale:function(){this.imageLoaded&&(this.replaceImageInBounds(),this.redraw())},rotation:function(){this.imageLoaded&&(this.replaceImageInBounds(),this.redraw())}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{width:{type:Number,default:200},min:{type:Number,default:1},max:{type:Number,default:2},step:{type:Number,default:.01},value:{type:Number,default:0}},methods:{sendValue:function(t){this.$emit("update:value",parseFloat(t.target.value))}}}},function(t,e){},function(t,e){},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("canvas",{ref:"avatarEditorCanvas",staticClass:"cursorPointer",attrs:{width:t.canvasWidth,height:t.canvasHeight,id:"avatarEditorCanvas"},on:{dragover:function(t){t.preventDefault()},drop:t.onDrop,mousedown:t.onDragStart,touchstart:t.onDragStart,click:t.clicked}}),t._v(" "),a("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.fileSelected}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("hello")]),t._v(" "),a("vue-avatar",{ref:"vueavatar",attrs:{width:400,height:400,rotation:t.rotation,scale:t.scale},on:{"vue-avatar-editor:image-ready":t.onImageReady}}),t._v(" "),a("br"),t._v(" "),a("vue-avatar-scale",{ref:"vueavatarscale",attrs:{width:250,min:1,max:3,step:.02,value:t.scale},on:{"update:value":function(e){t.scale=e}}}),t._v(" "),a("vue-avatar-scale",{ref:"vueavatarrotate",attrs:{width:250,min:0,max:360,step:1,value:t.rotation},on:{"update:value":function(e){t.rotation=e}}}),t._v(" "),a("br"),t._v(" "),a("img",{ref:"image",attrs:{src:""}}),t._v(" "),a("button",{on:{click:t.saveClicked}},[t._v("Click")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{style:{width:t.width+"px"},attrs:{type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{input:t.sendValue}})},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.6aa7998618cb06e46b2c.js.map