if(!self.define){let e,s={};const l=(l,o)=>(l=new URL(l+".js",o).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(o,f)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const i=e=>l(e,t),r={module:{uri:t},exports:n,require:i};s[t]=Promise.all(o.map((e=>r[e]||i(e)))).then((e=>(f(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"tfjs-yolov8"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/index.html",revision:"980b8946a205df07c63dc00f6685d019"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/app.e2a3e0d0.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/chunk-vendors.46dcfcef.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/image.f0c398da.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/lang-jaJP.9ff3f562.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/lang-zhCN.6fe82a51.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/video.cd17a1ce.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/js/webcam.7e6cf7ef.js",revision:null},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/manifest.json",revision:"ee8152e5b11297a9f160bb783d478221"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/yolov8n_web_model/group1-shard4of4.bin",revision:"cb8f3d14f2640ff08db0edfdbbf46b40"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/yolov8n_web_model/metadata.yaml",revision:"c64900407334b7c9f008350b1f26e090"},{url:"//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@cf-pages/yolov8n_web_model/model.json",revision:"13252976806a3fd3b0044b5fb2fae1fc"}],{})}));
