import{f as e,R as a,r as t,a as l}from"./vendor.dc822ef6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const n={apiKey:"AIzaSyCe--c-ejazh0y64YG-pZsRgweOqkUNfu8",authDomain:"nawalogin-bcb9e.firebaseapp.com",projectId:"nawalogin-bcb9e",storageBucket:"nawalogin-bcb9e.appspot.com",messagingSenderId:"492524653566",appId:"1:492524653566:web:0309bb86169d8961ee8eaf",measurementId:"G-R75T04G248"};e.initializeApp(n);const s=e.auth(),c=new e.auth.GoogleAuthProvider;c.setCustomParameters({prompt:"select_account"});const r=()=>s.signInWithPopup(c).then((e=>{})).catch((e=>{"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."===e.message&&console.warn("Already exists email address.")}));function m({user:e}){return a.createElement("div",{className:"sidebar"},a.createElement("div",{className:"logo_content"},a.createElement("div",{className:"logo"},a.createElement("i",{className:"bx bxl-dev-to bx-tada bx-rotate-90"}),a.createElement("div",{className:"logo_name"},"Developer")),a.createElement("i",{className:"bx bx-menu",id:"btn"})),a.createElement("ul",{className:"nav_list"},a.createElement("li",null,a.createElement("a",{href:"#"},a.createElement("i",{className:"bx bx-search-alt",style:{color:"#5e5e5e"}}),a.createElement("input",{type:"text",placeholder:"Search..."}))),a.createElement("li",null,a.createElement("a",{href:"#home"},a.createElement("i",{className:"bx bx-home-alt",style:{color:"#5e5e5e"}}),a.createElement("span",{className:"links_name"},"Home"))),a.createElement("li",null,a.createElement("a",{href:"#html5"},a.createElement("i",{className:"bx bxl-html5",style:{color:"#dd4b25"}}),a.createElement("span",{className:"links_name"},"HTML5"))),a.createElement("li",null,a.createElement("a",{href:"#css3"},a.createElement("i",{className:"bx bxl-css3",style:{color:"#1572b7"}}),a.createElement("span",{className:"links_name"},"CSS3"))),a.createElement("li",null,a.createElement("a",{href:"#javascript"},a.createElement("i",{className:"bx bxl-javascript",style:{color:"#ffc100"}}),a.createElement("span",{className:"links_name"},"JavaScript"))),a.createElement("li",null,a.createElement("a",{href:"#react"},a.createElement("i",{className:"bx bxl-react bx-spin bx-rotate-180",style:{color:"#61dafb"}}),a.createElement("span",{className:"links_name"},"React"))),a.createElement("li",null,a.createElement("a",{href:"#nodejs"},a.createElement("i",{className:"bx bxl-nodejs",style:{color:"#87bf01"}}),a.createElement("span",{className:"links_name"},"NodeJS"))),a.createElement("li",null,a.createElement("a",{href:"#vitejs"},a.createElement("i",null,a.createElement("img",{className:"bx vitejs",src:"https://vitejs.dev/logo.svg"})),a.createElement("span",{className:"links_name"},"ViteJS"))),a.createElement("li",null,a.createElement("a",{href:"#jquery"},a.createElement("i",{className:"bx bxl-jquery",style:{color:"#1e75a8"}}),a.createElement("span",{className:"links_name"},"jQuery")))),a.createElement("div",{className:"profile_content"},a.createElement("div",{className:"profile"},a.createElement("img",{src:e.photoURL,alt:""}),a.createElement("div",{className:"profile_details"},a.createElement("div",{className:"name_job"},a.createElement("div",{className:"name"},a.createElement("p",null,e.displayName)),a.createElement("div",{className:"job"}," ",a.createElement("p",null,"Developers")))),a.createElement("i",{className:"bx bx-log-out",onClick:()=>s.signOut()}))))}function i(){return a.createElement("div",{className:"sidebar"},a.createElement("div",{className:"logo_content"},a.createElement("div",{className:"logo"},a.createElement("i",{className:"bx bxl-dev-to bx-tada bx-rotate-90"}),a.createElement("div",{className:"logo_name"},"Developer")),a.createElement("i",{className:"bx bx-menu",id:"btn"})),a.createElement("ul",{className:"nav_list"},a.createElement("li",null,a.createElement("a",{href:"#"},a.createElement("i",{className:"bx bx-search-alt",style:{color:"#5e5e5e"}}),a.createElement("input",{type:"text",placeholder:"Search..."}))),a.createElement("li",null,a.createElement("a",{href:"#home"},a.createElement("i",{className:"bx bx-home-alt",style:{color:"#5e5e5e"}}),a.createElement("span",{className:"links_name"},"Home"))),a.createElement("li",null,a.createElement("a",{href:"#html5"},a.createElement("i",{className:"bx bxl-html5",style:{color:"#dd4b25"}}),a.createElement("span",{className:"links_name"},"HTML5"))),a.createElement("li",null,a.createElement("a",{href:"#css3"},a.createElement("i",{className:"bx bxl-css3",style:{color:"#1572b7"}}),a.createElement("span",{className:"links_name"},"CSS3"))),a.createElement("li",null,a.createElement("a",{href:"#javascript"},a.createElement("i",{className:"bx bxl-javascript",style:{color:"#ffc100"}}),a.createElement("span",{className:"links_name"},"JavaScript"))),a.createElement("li",null,a.createElement("a",{href:"#react"},a.createElement("i",{className:"bx bxl-react bx-spin bx-rotate-180",style:{color:"#61dafb"}}),a.createElement("span",{className:"links_name"},"React"))),a.createElement("li",null,a.createElement("a",{href:"#nodejs"},a.createElement("i",{className:"bx bxl-nodejs",style:{color:"#87bf01"}}),a.createElement("span",{className:"links_name"},"NodeJS"))),a.createElement("li",null,a.createElement("a",{href:"#vitejs"},a.createElement("i",null,a.createElement("img",{className:"bx vitejs",src:"https://vitejs.dev/logo.svg"})),a.createElement("span",{className:"links_name"},"ViteJS"))),a.createElement("li",null,a.createElement("a",{href:"#jquery"},a.createElement("i",{className:"bx bxl-jquery",style:{color:"#1e75a8"}}),a.createElement("span",{className:"links_name"},"jQuery")))),a.createElement("div",{className:"profile_content"},a.createElement("div",{className:"profile"},a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/2829/2829758.png",alt:""}),a.createElement("div",{className:"profile_details"},a.createElement("div",{className:"name_job"},a.createElement("div",{className:"name"},"User"),a.createElement("div",{className:"job"},"Developers"))),a.createElement("i",{className:"bx bx-log-in",onClick:r}))))}function o(){const[l,n]=t.exports.useState(null);return t.exports.useEffect((()=>{e.auth().onAuthStateChanged((e=>{n(e)}))}),[]),a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"},a.createElement("img",{src:"/React_Coding_Login/assets/logo.ecc203fb.svg",className:"App-logo",alt:"logo"})),l?a.createElement(m,{user:l}):a.createElement(i,null))}l.render(a.createElement(a.StrictMode,null,a.createElement(o,null)),document.getElementById("root"));
