// ==UserScript==
// @name         HSLO v5
// @description  HSLO multibox edition
// @version      5.2.5
// @author       Siniri
// @match        http://agar.io/*
// @match        https://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      mgx-one.nl
// ==/UserScript==

if (location.host === `agar.io` && location.href !== `https://agar.io/`) {
  location.href = `https://agar.io/`;
  return;
 }
 const HSLO = new class {
   constructor() {
     this.method = `GET`;
     this.URL = `https://mgx-one.nl/siniri/hslo/index.php?v=`+ Math.random();
   }
   load() {
     window.stop();
     this.fetch();
   }
   fetch() {
       GM_xmlhttpRequest({
           method: this.method,
           url: this.URL,
           onload: function(e) {
               HSLO.write(e.responseText);
           }
       });
   }
   write(Html) {
     document.open();
     document.write(Html);
     document.close();
   }
 }
 HSLO.load();