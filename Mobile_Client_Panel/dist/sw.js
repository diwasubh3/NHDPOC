if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>s(e,t),c={module:{uri:t},exports:o,require:d};i[t]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CgF-HGda.css",revision:null},{url:"assets/index-CrEC9Z90.js",revision:null},{url:"index.html",revision:"a7adaec6f604ef49af9daeeec8acd346"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/192x192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"icons/512x512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.webmanifest",revision:"6de84d65c806a3a1a91112b6fb122274"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));