import{O as N,v,B as E,p as B,k as w,i as L,s as _,b as F,c as T,d as z,e as C,A as e,M as R,n as S,l as G,m as O,f as j,g as k,h as D,j as H,o as b,V}from"./setupTouchEvents-CeKQfuwj.js";class W extends N{constructor(r){super();const l=new v,i=new Map,p=r.xr;p.addEventListener("planesdetected",c=>{const h=c.data,d=h.detectedPlanes,f=p.getReferenceSpace();let t=!1;for(const[o,n]of i)d.has(o)===!1&&(n.geometry.dispose(),n.material.dispose(),this.remove(n),i.delete(o),t=!0);for(const o of d)if(i.has(o)===!1){const n=h.getPose(o.planeSpace,f);l.fromArray(n.transform.matrix);const s=o.polygon;let a=Number.MAX_SAFE_INTEGER,m=Number.MIN_SAFE_INTEGER,x=Number.MAX_SAFE_INTEGER,y=Number.MIN_SAFE_INTEGER;for(const g of s)a=Math.min(a,g.x),m=Math.max(m,g.x),x=Math.min(x,g.z),y=Math.max(y,g.z);const I=m-a,P=y-x,A=new E(I,.01,P),X=new B({color:16777215*Math.random()}),u=new w(A,X);u.position.setFromMatrixPosition(l),u.quaternion.setFromRotationMatrix(l),this.add(u),i.set(o,u),t=!0}t&&this.dispatchEvent({type:"planeschanged"})})}}function Z(){L(e),_(e),F(e),T(e),z(e),C(e,{win:function(){j(e),k(e),D(e),H(e),e.xr.onStartButton=function(){const t=document.getElementById("OnScreenLoggerlogger"),o=document.getElementById("ar-overlay");t&&o&&o.appendChild(t)},b("setupXR good")},fail:function(){const t=document.getElementById("launch-button");t&&(t.onclick=function(){console.log("does nothing"),b("no XR")})}});const M=e.scene,r=e.camera;e.renderer;const l=new W(e.renderer);e.scene.add(l);const i=new E,p=new R({color:4500104}),c=new w(i,p);S(c),c.scale.setScalar(.05),c.onTap=(function(){console.log("meep"),this.position.y+=.01,this.randomColor()}).bind(c);function h(t){const o=Math.random()*Math.PI*2,n=Math.random()*Math.PI-Math.PI/2,s=t*Math.cos(n)*Math.cos(o),a=t*Math.cos(n)*Math.sin(o),m=t*Math.sin(n);return new V(s,a,m)}const d=.55;for(let t=0;t<104;t++){const o=new E,n=new R({color:4500104}),s=new w(o,n);S(s),s.scale.setScalar(.1);const a=h(d+Math.random()*d);s.position.set(a.x,a.y,a.z),M.add(s),e.addObject3D(s),s.onTap=(function(){console.log("meep"),this.position.y+=.01,this.randomColor()}).bind(s)}const f=new G(16777215,2,100);f.position.set(5,5,5),M.add(f),O(e.scene),r.position.z=.5,r.position.y=.5,r.position.x=.5}Z();
