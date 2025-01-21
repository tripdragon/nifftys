var M=Object.defineProperty;var S=(t,e,o)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var n=(t,e,o)=>S(t,typeof e!="symbol"?e+"":e,o);import{P as C,V as h,a as T,G as x,i as A,s as I,A as i,b as B,c as O,d as R,e as N,f as L,g as z,h as k,j as D,o as m,B as V,M as G,k as P,l as U,m as W,C as v,n as b,S as q,p as E,q as X,r as _,t as K,u as J}from"./setupTouchEvents-Cw8JrKOl.js";function Q(t){const e=new C(new h(0,1,0),0),o=new T(e,.2,16776960);t.scene.add(o),t.debugPlane=e,t.debugPlaneHelper=o,t.debugPlaneHelper.visible=t.debugSettings.showWorldPlane}function Y({store:t,type:e}){if(e==="y"){const s=new x(2,10,void 0,16711680);t.scene.add(s),t.grids.y=s}if(e==="x"){const s=new x(2,10,void 0,65280);t.scene.add(s),t.grids.x=s,s.rotation.x=Math.PI/2}if(e==="z"){const s=new x(2,10,void 0,255);t.scene.add(s),t.grids.z=s,s.rotation.z=Math.PI/2}}function Z(){A(i),I(i),B(i),O(i),R(i),N(i,{win:function(){L(i),z(i),k(i),D(i),i.xr.onStartButton=function(){i.orbitControls.enabled=!1,i.xr.currentModel&&(i.xr.currentModel.visible=!1),i.debugPlaneHelper&&(i.debugPlaneHelper.visible=!1),i.grids.toggle(!1);const c=document.getElementById("OnScreenLoggerlogger"),d=document.getElementById("ar-overlay");c&&d&&d.appendChild(c)},m("setupXR good")},fail:function(){const c=document.getElementById("launch-button");c&&(c.onclick=function(){console.log("does nothing"),m("no XR")})}}),Q(i),Y({store:i,type:"y"}),i.grids.toggle(!0);const t=i.scene,e=i.camera;i.renderer;const o=new V,a=new G({color:4500104}),s=new P(o,a);s.scale.setScalar(.5),s.visible=!1;const l=new U(16777215,2,100);l.position.set(5,5,5),t.add(l),W(i.scene),e.position.z=.5}const f=new h,g=new h;new h;class ${constructor({wobj:e,force:o,angularForce:a,type:s}){n(this,"selected",null);n(this,"type","fish");n(this,"force",null);n(this,"angularForce",null);n(this,"loopId",0);n(this,"forceWork",new h);n(this,"angularForceWork",new h);n(this,"stopRequested",!1);n(this,"otherdata",{});n(this,"startFunx",null);n(this,"midFunx",null);n(this,"doneFunx",null);this.selected=e,this.force=o,this.angularForce=a,this.type=s}decoStartFunx(e){this.startFunx=e.bind(this)}decoMidFunx(e){this.midFunx=e.bind(this)}decoDoneFunx(e){this.doneFunx=e.bind(this)}setForceAnchor(e){this.force.anchor.copy(e)}start(){this.stopRequested=!1,this.type==="impulse"?(y(this.selected,this.force.vecForce,this.force.damping),this.selected.physics.clearAcceleration()):this.type,console.log(this.selected.position),w(this.selected,this.angularForce.vecForce,this.angularForce.damping),this.selected.physics.clearAngularAcceleration(),this.startFunx&&this.startFunx();const e=this;this.loopR=function(){if(e.stopRequested===!0){e.stop();return}e.type==="spring"?te(e.selected,e.force,e.forceWork,e.force.damping):e.type==="impulse"&&y(e.selected,e.forceWork,e.force.damping),w(e.selected,e.angularForceWork,e.angularForce.damping),e.midFunx&&e.midFunx.call(e),e.selected.physics.clearAcceleration(),e.selected.physics.clearAngularAcceleration(),Math.abs(e.selected.physics.velocity.length()&&e.selected.physics.angularVelocity.length())>=1e-4?e.loopId=requestAnimationFrame(e.loopR):(e.doneFunx&&e.doneFunx.call(e),console.log("done??¿¿?¿"))},e.loopR()}stop(){this.stopRequested=!0,cancelAnimationFrame(this.loopId)}}class j{constructor({vecForce:e,damping:o,coefriction:a}){n(this,"vecForce",new h);n(this,"damping",1);n(this,"coefriction",1);this.vecForce.copy(e),this.damping=o,this.coefriction=a}}class ee{constructor({anchor:e,restLength:o,constantK:a,damping:s}){n(this,"anchor",new h);n(this,"restLength",0);n(this,"k",0);n(this,"damping",1);this.anchor.copy(e),this.restLength=o,this.k=a,this.damping=s}}function w(t,e,o=1){g.copy(e),g.divideScalar(t.physics.mass),t.physics.angularAcceleration.add(g),t.physics.angularVelocity.add(t.physics.angularAcceleration),t.physics.angularVelocity.multiplyScalar(o),t.rotation.x+=t.physics.angularVelocity.x,t.rotation.y+=t.physics.angularVelocity.y,t.rotation.z+=t.physics.angularVelocity.z}function y(t,e,o=1){f.copy(e),f.divideScalar(t.physics.mass),t.physics.acceleration.add(f),t.physics.velocity.add(t.physics.acceleration),t.physics.velocity.multiplyScalar(o),t.position.add(t.physics.velocity)}function te(t,e,o,a=1){f.copy(t.position),f.sub(e.anchor);var s=f.length(),l=s-e.restLength;f.normalize();var c=-1*e.k*l;f.multiplyScalar(c),y(t,f,a)}class r{constructor({store:e,name:o="",color:a,colorHex:s,emissive:l,emissiveHex:c,roughness:d=0,metalness:p=.5,map:H=null,renderOrder:F=0}){n(this,"color",new v(1,1,1));n(this,"emissive",new v(0,0,0));n(this,"store",null);this.name=o,a&&this.color.copy(a),s&&this.color.setHex(s),this.roughness=d,this.metalness=p,l&&this.emissive.copy(l),c&&this.emissive.setHex(c),this.map=H,this.renderOrder=F,this.store=e}copyMaterial(e){this.name=e.name,this.color.copy(e.color),this.roughness=e.roughness||0,this.metalness=e.metalness||0,this.emissive.copy(e.emissive),e.map&&(this.store.registerTexture(e.map),this.map=e.map)}applyToMaterial(e){e.color.copy(this.color),e.emissive.copy(this.emissive),e.roughness=this.roughness,e.metalness=this.metalness,e.renderOrder=this.renderOrder,e.map=this.map,e.parentPointer&&(e.parentPointer.renderOrder=this.renderOrder,console.log("this.renderOrder",this.renderOrder)),console.log("// just mashing this in here for now cause its pretty"),e.metalness=.5,e.roughness=.04}}class oe extends P{constructor({geo:o=new q(1,18,18),mat:a=new E({color:65450}),scalar:s=.1}={}){super(o,a);n(this,"isNavBubble",!0);n(this,"objectPointer",null);n(this,"dataNavItem",null);b(this),this.scale.setScalar(s),this.getBoundingSphere()}setupData({objectPointer:o,dataNavItem:a}){this.objectPointer=o,this.dataNavItem=a}computeBounds(){this.updateMatrix(),this.updateMatrixWorld(),this.geometry.computeBoundingSphere()}getBoundingSphere(){return this.geometry.boundingSphere||this.computeBounds(),this.geometry.boundingSphere}changeTheme(){this.dataNavItem.theme&&this.objectPointer.applyTheme(this.dataNavItem.theme)}changeColorAll(){this.dataNavItem.fullColor&&this.objectPointer.setColorAll(this.dataNavItem.fullColor)}onTapAuto(){this.dataNavItem.type==="fullColor"?this.changeColorAll():this.dataNavItem.type==="fullTheme"&&this.changeTheme()}}class se extends X{constructor(o){super();n(this,"isModelLoaded",!0);n(this,"isRoot",!0);n(this,"selectorMesh",null);n(this,"modelUrl","");n(this,"animations",null);n(this,"mixer",null);this.modelUrl=o}async init(o){const s=await new _().loadAsync(this.modelUrl);this.wrap(s,o)}wrap(o,a){let s=o.scene;b(s),this.add(s),this.selectorMesh=s.getObjectByName("selector_mesh")||null,this.selectorMesh&&(this.selectorMesh.rootObject=this,a&&a.raycastingGraph.add(this.selectorMesh)),this.animations=o.animations,this.mixer=o.scene.mixer}}class u{constructor({name:e,image:o,color:a,ref:s,restPosition:l,theme:c,type:d,fullColor:p}){n(this,"restPosition",new h);this.name=e||"navaitem",this.image=o||null,this.color=a||16777215,this.ref=s||null,this.fullColor=p||255,this.type=d||"fullTheme",l&&this.restPosition.copy(l),this.theme=c||null}}const ne={sizeScalar:.016,padding:.05,startPosition:new h,navs:[new u({name:"blue",image:"narf111.png",color:11206434,theme:[{name:"tounge",matProxy:new r({colorHex:255})},{name:"rivits",matProxy:new r({colorHex:16777215,metalness:1,roughness:0})},{name:"logo",matProxy:new r({colorHex:16777215,texture:null})},{name:"laces",matProxy:new r({colorHex:16776960,texture:null})},{name:"under cloth",matProxy:new r({colorHex:16711935})},{name:"over cloth",matProxy:new r({colorHex:16711935,visible:!0,renderOrder:-1})},{name:"rubber",matProxy:new r({colorHex:0})},{name:"bottom sole",matProxy:new r({colorHex:35791394,texture:"bottom1"})},{name:"inner soles",matProxy:new r({colorHex:1118481})},{name:"front tip",matProxy:new r({colorHex:16777215})}]}),new u({name:"pats",image:"narf111.png",color:11206434,theme:[{name:"tounge",matProxy:new r({colorHex:0})},{name:"rivits",matProxy:new r({colorHex:16777215,metalness:1,roughness:0})},{name:"logo",matProxy:new r({colorHex:16777215,texture:null})},{name:"laces",matProxy:new r({colorHex:16711680,texture:null})},{name:"under cloth",matProxy:new r({colorHex:255})},{name:"over cloth",matProxy:new r({colorHex:255,visible:!0,renderOrder:-1})},{name:"rubber",matProxy:new r({colorHex:16777215})},{name:"bottom sole",matProxy:new r({colorHex:1118481,texture:"bottom1"})},{name:"inner soles",matProxy:new r({colorHex:5592490})},{name:"front tip",matProxy:new r({colorHex:0})}]}),new u({name:"yellow",image:"narf222.png",color:3385890,type:"fullColor",fullColor:65518}),new u({name:"redish",image:"narf111.png",color:11206434,theme:[{name:"tounge",matProxy:new r({colorHex:16777215})},{name:"rivits",matProxy:new r({colorHex:16777215,metalness:1,roughness:0})},{name:"logo",matProxy:new r({colorHex:0,texture:null})},{name:"laces",matProxy:new r({colorHex:16711680,texture:null})},{name:"under cloth",matProxy:new r({colorHex:16711680})},{name:"over cloth",matProxy:new r({colorHex:16711680,visible:!0,renderOrder:-1})},{name:"rubber",matProxy:new r({colorHex:16777215})},{name:"bottom sole",matProxy:new r({colorHex:1118481,texture:"bottom1"})},{name:"inner soles",matProxy:new r({colorHex:5592490})},{name:"front tip",matProxy:new r({colorHex:0})}]})]};class ae extends se{constructor(o){super(o);n(this,"isTenniShoe",!0);n(this,"isShoe",!0);n(this,"navBubbles",new K);n(this,"navConfig",ne)}async init(o){await super.init(o)}addNavBubble(o){this.navBubbles.add(o)}clone({recursive:o,uniqueMaterials:a}){}attachNav(o){const a=new h;for(var s=0;s<this.navConfig.navs.length;s++){const l=new oe(.1);this.add(l),this.addNavBubble(l),l.setupData({objectPointer:this,dataNavItem:this.navConfig.navs[s]}),o.addObject3D(l),l.onTap=(function(){var d;console.log(this.name),console.log(this.name,this.data),console.log("this.dataNavItem?.name",(d=this.dataNavItem)==null?void 0:d.name),this.onTapAuto()}).bind(l);const c=.016;l.scale.setScalar(c),a.y=s*(c*2+.02)+.008,a.z=-.17,this.navConfig.navs[s].restPosition.copy(a),l.position.copy(a),l.computeBounds()}}onTap(){this.meshes.forEach((o,a)=>{o.material.color.setHex(Math.random()*16777215)})}}const re=new URL("/nifftys/assets/shoe02withselectormesh-DeNTug6p.glb",import.meta.url).href;async function ie(t){const e=new ae(re);return await e.init(t),t.scene.add(e),t.sceneGrapth.add(e),e.selectorMesh.visible=!1,e.name="tennishoeA",e.onTap=(function(){console.log("Do the on tap"),this.randomColor()}).bind(e),e.selectorMesh&&(e.selectorMesh.onTap=(function(){console.log("not a tap yet"),this.rootObject.onTap()}).bind(e.selectorMesh)),e.rotation.y=Math.PI/2,e.attachNav(t),e.physics.builder=()=>{const o=e.position.clone();e.position.y-=.1;const a=new $({wobj:e,force:new ee({anchor:o.add(new h(0,.1,0)),restLength:.1,constantK:.014,damping:.91}),angularForce:new j({vecForce:new h(0,.6,0),damping:.9281,coefriction:1}),type:"spring"});a.decoStartFunx(function(){this.selected.visible=!0,this.selected.setOpacity(0),this.otherdata.matOpacity=0,this.otherdata.fadeInRate=.02}),a.decoMidFunx(function(){this.otherdata.matOpacity+=this.otherdata.fadeInRate,this.selected.setOpacity(this.otherdata.matOpacity)}),e.physics.session=a},e}async function le(){console.log("NARF"),await Z(),J.enabled=!0;const t=[new URL("/nifftys/assets/shoe02withselectormesh-DeNTug6p.glb",import.meta.url).href],e=[];try{const o=document.getElementById("tracking-prompt");o.innerText="loading";const[a,s]=await Promise.all([i.loaders.loadGLBs(t),i.loaders.loadTextures(e)]);console.log("model loaded!!"),o.innerText="model loaded";try{if(i.loaders.modelsUrlCache[t[0]]){const c=await ie(i);i.xr.currentModel=c,o.innerText="ready",m("main ready"),c.physics.replay()}}catch(l){console.log("model missing",l),o.innerText="error ??!?!?!",m("model missing")}console.log("fish!!")}catch(o){console.error("Error loading assets:",o)}}le();
