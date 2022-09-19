(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function n(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerpolicy&&(d.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?d.credentials="include":c.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(c){if(c.ep)return;c.ep=!0;const d=n(c);fetch(c.href,d)}})();function k(){}function Ke(t){return t()}function Te(){return Object.create(null)}function _e(t){t.forEach(Ke)}function Ye(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let xe;function X(t,e){return xe||(xe=document.createElement("a")),xe.href=e,t===xe.href}function Xe(t){return Object.keys(t).length===0}function s(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function K(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function p(){return N(" ")}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ze(t){return Array.from(t.childNodes)}function ye(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let Ce;function ve(t){Ce=t}const pe=[],Ie=[],ke=[],Ee=[],et=Promise.resolve();let Se=!1;function tt(){Se||(Se=!0,et.then(Ue))}function $e(t){ke.push(t)}const we=new Set;let be=0;function Ue(){const t=Ce;do{for(;be<pe.length;){const e=pe[be];be++,ve(e),nt(e.$$)}for(ve(null),pe.length=0,be=0;Ie.length;)Ie.pop()();for(let e=0;e<ke.length;e+=1){const n=ke[e];we.has(n)||(we.add(n),n())}ke.length=0}while(pe.length);for(;Ee.length;)Ee.pop()();Se=!1,we.clear(),ve(t)}function nt(t){if(t.fragment!==null){t.update(),_e(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($e)}}const je=new Set;let ce;function it(){ce={r:0,c:[],p:ce}}function lt(){ce.r||_e(ce.c),ce=ce.p}function q(t,e){t&&t.i&&(je.delete(t),t.i(e))}function Q(t,e,n,i){if(t&&t.o){if(je.has(t))return;je.add(t),ce.c.push(()=>{je.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ie(t){t&&t.c()}function U(t,e,n,i){const{fragment:c,on_mount:d,on_destroy:m,after_update:u}=t.$$;c&&c.m(e,n),i||$e(()=>{const f=d.map(Ke).filter(Ye);m?m.push(...f):_e(f),t.$$.on_mount=[]}),u.forEach($e)}function Y(t,e){const n=t.$$;n.fragment!==null&&(_e(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(pe.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,i,c,d,m,u=[-1]){const f=Ce;ve(t);const r=t.$$={fragment:null,ctx:null,props:d,update:k,not_equal:c,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Te(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};m&&m(r.root);let h=!1;if(r.ctx=n?n(t,e.props||{},(v,b,...x)=>{const w=x.length?x[0]:b;return r.ctx&&c(r.ctx[v],r.ctx[v]=w)&&(!r.skip_bound&&r.bound[v]&&r.bound[v](w),h&&st(t,v)),b}):[],r.update(),h=!0,_e(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){const v=Ze(e.target);r.fragment&&r.fragment.l(v),v.forEach(j)}else r.fragment&&r.fragment.c();e.intro&&q(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),Ue()}ve(f)}class te{$destroy(){Y(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!Xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ot(t){let e;return{c(){e=g("div"),e.innerHTML=`<div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> 
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a href="#about me">About me</a></li> 
            <li><a href="#projects">Projects</a></li> 
            <li><a href="#technologies">Technologies</a></li> 
            <li><a href="#contact">Contact</a></li></ul></div> 
      <a href="/" class="btn btn-ghost normal-case text-xl">Leonardo Dami\xE1n Suarez</a></div> 
    <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal p-0"><li><a href="#about me">About me</a></li> 
        <li><a href="#projects">Projects</a></li> 
        <li><a href="#technologies">Technologies</a></li> 
        <li><a href="#contact">Contact</a></li></ul></div> 
    <div class="navbar-end"></div>`,o(e,"class","navbar bg-base-100")},m(n,i){S(n,e,i)},p:k,i:k,o:k,d(n){n&&j(e)}}}class ct extends te{constructor(e){super(),ee(this,e,null,ot,Z,{})}}function at(t){let e;return{c(){e=g("section"),e.innerHTML=`<div class="hero-content flex-col lg:flex-row-reverse"><img src="./profile_edit.jpeg" alt="Profile pic" class="max-w-sm rounded-lg shadow-2xl"/> 
      <div class="max-w-lg mx-8 lg:mr-32"><h1 class="text-6xl text-sky-400 font-bold font-karma">Hi, my name is Leonardo.</h1> 
        <p class="text-2xl py-6 font-lato">I&#39;m a Full Stack Web Developer. <br/> Blockchain and finance enthusiast. <br/>
        Transitioning to Web3 to work full time making the Web a more democratic and decentralized space.</p> 
        <a href="#projects" class="btn btn-primary">My projects</a></div></div>`,o(e,"id","hero"),o(e,"class","hero min-h-screen bg-base-200")},m(n,i){S(n,e,i)},p:k,i:k,o:k,d(n){n&&j(e)}}}class rt extends te{constructor(e){super(),ee(this,e,null,at,Z,{})}}function dt(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="text-5xl text-sky-400 font-bold font-lato">About me</h2> 
    <ul class="list-disc text-justify sm:mx-6 mt-12 font-lato"><li class="text-xl sm:text-2xl leading-relaxed">Technology and computer enthusiast since I was a child.</li> 
        <li class="text-xl sm:text-2xl leading-relaxed mt-4">In 2015 I entered college (B. S. in Systems Engineering) and got involved in software development.</li> 
        <li class="text-xl sm:text-2xl leading-relaxed mt-4">In 2019 I started my career as a back-end developer using mainly Microsoft technologies such as .NET C#, Entity Framework, SQL Server and IIS.</li> 
        <li class="text-xl sm:text-2xl leading-relaxed mt-4">In 2020 I got curious about the front-end world and started my journey into JavaScript, Node.js, React.js and React Native, consolidating as a Full Stack Developer at my company at that time. <br/>
            That was the year when I got into investing. First in conventional financial instruments such as stocks, options and bonds, then in Ethereum and Bitcoin as an active, and finally in DeFi.</li> 
        <li class="text-xl sm:text-2xl leading-relaxed mt-4">In 2021 I continued improving my skillset, learned TypeScript and started researching about the technology behind Ethereum. It blew my mind, so I started learning Solidity and experimenting with Smart Contracts.</li> 
        <li class="text-xl sm:text-2xl leading-relaxed mt-4">In 2022 I&#39;m implementing my knowledge to build DApps and continue broadening my expertise about the Ethereum ecosystem, such as L2 scaling and new ERC standards.</li> 
        <li class="text-xl sm:text-2xl leading-relaxed mt-4">I&#39;m currently working independently as a Full Stack Web &amp; Smart Contract Developer.</li> 
        <li class="text-xl sm:text-2xl leading-relaxed mt-4">In my spare time I like learning and experimenting with new technologies.</li> 
        <li class="text-xl sm:text-2xl font-bold leading-relaxed mt-4 text-sky-300">I&#39;m always looking for new challenges.</li></ul>`,o(e,"id","about me"),o(e,"class","p-24 xl:mx-48 grid place-items-center")},m(n,i){S(n,e,i)},p:k,i:k,o:k,d(n){n&&j(e)}}}class gt extends te{constructor(e){super(),ee(this,e,null,dt,Z,{})}}function Le(t,e,n){const i=t.slice();return i[7]=e[n],i}function Ne(t){let e,n=t[7]+"",i;return{c(){e=g("div"),i=N(n),o(e,"class","badge badge-secondary")},m(c,d){S(c,e,d),s(e,i)},p(c,d){d&16&&n!==(n=c[7]+"")&&ye(i,n)},d(c){c&&j(e)}}}function mt(t){let e,n;return{c(){e=g("a"),n=N("Repository"),o(e,"class","btn btn-disabled"),o(e,"href",t[5]),o(e,"target","_blank")},m(i,c){S(i,e,c),s(e,n)},p(i,c){c&32&&o(e,"href",i[5])},d(i){i&&j(e)}}}function ft(t){let e,n;return{c(){e=g("a"),n=N("Repository"),o(e,"class","btn btn-primary"),o(e,"href",t[5]),o(e,"target","_blank")},m(i,c){S(i,e,c),s(e,n)},p(i,c){c&32&&o(e,"href",i[5])},d(i){i&&j(e)}}}function ht(t){let e,n;return{c(){e=g("a"),n=N("Project"),o(e,"class","btn btn-disabled"),o(e,"href",t[6]),o(e,"target","_blank")},m(i,c){S(i,e,c),s(e,n)},p(i,c){c&64&&o(e,"href",i[6])},d(i){i&&j(e)}}}function ut(t){let e,n;return{c(){e=g("a"),n=N("Project"),o(e,"class","btn btn-primary"),o(e,"href",t[6]),o(e,"target","_blank")},m(i,c){S(i,e,c),s(e,n)},p(i,c){c&64&&o(e,"href",i[6])},d(i){i&&j(e)}}}function pt(t){let e,n,i,c,d,m,u,f,r,h,v,b,x,w,O,y,le,W,B,V,J=t[4],C=[];for(let _=0;_<J.length;_+=1)C[_]=Ne(Le(t,J,_));function ue(_,I){return _[5]?ft:mt}let G=ue(t),R=G(t);function se(_,I){return _[6]?ut:ht}let oe=se(t),E=oe(t);return{c(){e=g("div"),n=g("figure"),i=g("img"),d=p(),m=g("div"),u=g("h2"),f=N(t[0]),r=p(),h=g("p"),v=N(t[1]),b=p(),x=g("p"),w=N(t[2]),O=p(),y=g("div");for(let _=0;_<C.length;_+=1)C[_].c();le=p(),W=g("div"),B=g("div"),R.c(),V=p(),E.c(),X(i.src,c=t[3])||o(i,"src",c),o(i,"alt","Project"),o(i,"class","max-w-full max-h-56"),o(u,"class","card-title"),o(y,"class","grid grid-cols-4 gap-2 justify-center items-center"),o(B,"class","grid grid-cols-2 gap-4"),o(W,"class","card-actions justify-center m-2"),o(m,"class","card-body"),o(e,"class","card card-compact w-96 bg-base-100 shadow-xl")},m(_,I){S(_,e,I),s(e,n),s(n,i),s(e,d),s(e,m),s(m,u),s(u,f),s(m,r),s(m,h),s(h,v),s(m,b),s(m,x),s(x,w),s(m,O),s(m,y);for(let T=0;T<C.length;T+=1)C[T].m(y,null);s(m,le),s(m,W),s(W,B),R.m(B,null),s(B,V),E.m(B,null)},p(_,[I]){if(I&8&&!X(i.src,c=_[3])&&o(i,"src",c),I&1&&ye(f,_[0]),I&2&&ye(v,_[1]),I&4&&ye(w,_[2]),I&16){J=_[4];let T;for(T=0;T<J.length;T+=1){const ne=Le(_,J,T);C[T]?C[T].p(ne,I):(C[T]=Ne(ne),C[T].c(),C[T].m(y,null))}for(;T<C.length;T+=1)C[T].d(1);C.length=J.length}G===(G=ue(_))&&R?R.p(_,I):(R.d(1),R=G(_),R&&(R.c(),R.m(B,V))),oe===(oe=se(_))&&E?E.p(_,I):(E.d(1),E=oe(_),E&&(E.c(),E.m(B,null)))},i:k,o:k,d(_){_&&j(e),K(C,_),R.d(),E.d()}}}function vt(t,e,n){let{title:i}=e,{description:c}=e,{extra:d}=e,{image:m}=e,{technologies:u}=e,{repository:f}=e,{link:r}=e;return t.$$set=h=>{"title"in h&&n(0,i=h.title),"description"in h&&n(1,c=h.description),"extra"in h&&n(2,d=h.extra),"image"in h&&n(3,m=h.image),"technologies"in h&&n(4,u=h.technologies),"repository"in h&&n(5,f=h.repository),"link"in h&&n(6,r=h.link)},[i,c,d,m,u,f,r]}class _t extends te{constructor(e){super(),ee(this,e,vt,pt,Z,{title:0,description:1,extra:2,image:3,technologies:4,repository:5,link:6})}}function Me(t,e,n){const i=t.slice();return i[1]=e[n],i}function Ae(t){let e,n;return e=new _t({props:{title:t[1].title,description:t[1].description,extra:t[1].extra,image:t[1].image,technologies:t[1].technologies,repository:t[1].repository,link:t[1].link}}),{c(){ie(e.$$.fragment)},m(i,c){U(e,i,c),n=!0},p:k,i(i){n||(q(e.$$.fragment,i),n=!0)},o(i){Q(e.$$.fragment,i),n=!1},d(i){Y(e,i)}}}function xt(t){let e,n,i,c,d,m,u,f=t[0],r=[];for(let v=0;v<f.length;v+=1)r[v]=Ae(Me(t,f,v));const h=v=>Q(r[v],1,1,()=>{r[v]=null});return{c(){e=g("section"),n=g("h2"),n.textContent="My projects",i=p(),c=g("p"),c.textContent="These are some of the most relevant projects I've worked on over the last months.",d=p(),m=g("div");for(let v=0;v<r.length;v+=1)r[v].c();o(n,"class","font-lato text-5xl font-bold text-sky-400 "),o(c,"class","font-lato text-xl sm:text-2xl px-24 mt-8"),o(m,"class","mt-12 sm:px-24 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16"),o(e,"id","projects"),o(e,"class","py-24 grid place-items-center bg-base-200")},m(v,b){S(v,e,b),s(e,n),s(e,i),s(e,c),s(e,d),s(e,m);for(let x=0;x<r.length;x+=1)r[x].m(m,null);u=!0},p(v,[b]){if(b&1){f=v[0];let x;for(x=0;x<f.length;x+=1){const w=Me(v,f,x);r[x]?(r[x].p(w,b),q(r[x],1)):(r[x]=Ae(w),r[x].c(),q(r[x],1),r[x].m(m,null))}for(it(),x=f.length;x<r.length;x+=1)h(x);lt()}},i(v){if(!u){for(let b=0;b<f.length;b+=1)q(r[b]);u=!0}},o(v){r=r.filter(Boolean);for(let b=0;b<r.length;b+=1)Q(r[b]);u=!1},d(v){v&&j(e),K(r,v)}}}function bt(t){return[[{title:"Euphoria Club NFT Collection",description:"A landing page to mint pieces from a collection of 4,420 NFT artworks.",extra:"The Smart Contract is currently deployed on Ethereum Rinkeby testnet.",image:"./euphoriaclub.png",technologies:["TypeScript","React.js","Next.js","Solidity","Hardhat","Ethers.js","Tailwind","Vercel"],repository:"https://github.com/SuarezLDamian/euphoria-club-client",link:"https://euphoriaclub.net/"},{title:"NFTicket",description:"A DApp to buy NFT tickets for events.",extra:"The Smart Contract is currently deployed on Polygon Mumbai testnet.",image:"./nfticket.png",technologies:["TypeScript","React.js","Next.js","Solidity","Hardhat","Ethers.js","Firebase","GraphQL","RainbowKit","ChakraUI","Vercel"],repository:"https://github.com/SuarezLDamian/nfticket-client",link:"https://nfticket-client.vercel.app/"},{title:"Kame House Comic Store",description:"Back end of a desktop app for a retail store with multiple branches.",extra:"The database is hosted on Microsoft Azure.",image:"./backend.jpg",technologies:[".NET","C#","SQL","Azure"]}]]}class yt extends te{constructor(e){super(),ee(this,e,bt,xt,Z,{})}}function Fe(t,e,n){const i=t.slice();return i[7]=e[n],i}function He(t,e,n){const i=t.slice();return i[7]=e[n],i}function ze(t,e,n){const i=t.slice();return i[7]=e[n],i}function De(t,e,n){const i=t.slice();return i[7]=e[n],i}function Pe(t,e,n){const i=t.slice();return i[7]=e[n],i}function Re(t,e,n){const i=t.slice();return i[7]=e[n],i}function qe(t,e,n){const i=t.slice();return i[7]=e[n],i}function Be(t){let e,n,i,c,d,m=t[7].name+"",u,f;return{c(){e=g("div"),n=g("img"),c=p(),d=g("p"),u=N(m),f=p(),X(n.src,i=t[7].image)||o(n,"src",i),o(n,"alt",t[7].name),o(n,"height","65px"),o(n,"width","65px"),o(d,"class","font-bold mt-4"),o(e,"class","flex flex-col items-center")},m(r,h){S(r,e,h),s(e,n),s(e,c),s(e,d),s(d,u),s(e,f)},p:k,d(r){r&&j(e)}}}function Oe(t){let e,n,i,c,d,m=t[7].name+"",u,f;return{c(){e=g("div"),n=g("img"),c=p(),d=g("p"),u=N(m),f=p(),X(n.src,i=t[7].image)||o(n,"src",i),o(n,"alt",t[7].name),o(n,"height","65px"),o(n,"width","65px"),o(d,"class","font-bold mt-4"),o(e,"class","flex flex-col items-center")},m(r,h){S(r,e,h),s(e,n),s(e,c),s(e,d),s(d,u),s(e,f)},p:k,d(r){r&&j(e)}}}function Ge(t){let e,n,i,c,d,m=t[7].name+"",u,f;return{c(){e=g("div"),n=g("img"),c=p(),d=g("p"),u=N(m),f=p(),X(n.src,i=t[7].image)||o(n,"src",i),o(n,"alt",t[7].name),o(n,"height","65px"),o(n,"width","65px"),o(d,"class","font-bold mt-4"),o(e,"class","flex flex-col items-center justify-between")},m(r,h){S(r,e,h),s(e,n),s(e,c),s(e,d),s(d,u),s(e,f)},p:k,d(r){r&&j(e)}}}function Qe(t){let e,n,i,c,d,m=t[7].name+"",u,f;return{c(){e=g("div"),n=g("img"),c=p(),d=g("p"),u=N(m),f=p(),X(n.src,i=t[7].image)||o(n,"src",i),o(n,"alt",t[7].name),o(n,"height","65px"),o(n,"width","65px"),o(d,"class","font-bold mt-4"),o(e,"class","flex flex-col items-center")},m(r,h){S(r,e,h),s(e,n),s(e,c),s(e,d),s(d,u),s(e,f)},p:k,d(r){r&&j(e)}}}function We(t){let e,n,i,c,d,m=t[7].name+"",u,f;return{c(){e=g("div"),n=g("img"),c=p(),d=g("p"),u=N(m),f=p(),X(n.src,i=t[7].image)||o(n,"src",i),o(n,"alt",t[7].name),o(n,"height","65px"),o(n,"width","65px"),o(d,"class","font-bold mt-4"),o(e,"class","flex flex-col items-center")},m(r,h){S(r,e,h),s(e,n),s(e,c),s(e,d),s(d,u),s(e,f)},p:k,d(r){r&&j(e)}}}function Ve(t){let e,n,i,c,d,m=t[7].name+"",u,f;return{c(){e=g("div"),n=g("img"),c=p(),d=g("p"),u=N(m),f=p(),X(n.src,i=t[7].image)||o(n,"src",i),o(n,"alt",t[7].name),o(n,"height","65px"),o(n,"width","65px"),o(d,"class","font-bold mt-4"),o(e,"class","flex flex-col items-center")},m(r,h){S(r,e,h),s(e,n),s(e,c),s(e,d),s(d,u),s(e,f)},p:k,d(r){r&&j(e)}}}function Je(t){let e,n,i,c,d,m=t[7].name+"",u,f;return{c(){e=g("div"),n=g("img"),c=p(),d=g("p"),u=N(m),f=p(),X(n.src,i=t[7].image)||o(n,"src",i),o(n,"alt",t[7].name),o(n,"height","65px"),o(n,"width","65px"),o(d,"class","font-bold mt-4"),o(e,"class","flex flex-col items-center")},m(r,h){S(r,e,h),s(e,n),s(e,c),s(e,d),s(d,u),s(e,f)},p:k,d(r){r&&j(e)}}}function kt(t){let e,n,i,c,d,m,u,f,r,h,v,b,x,w,O,y,le,W,B,V,J,C,ue,G,R,se,oe,E,_,I,T,ne,ae=t[0],M=[];for(let a=0;a<ae.length;a+=1)M[a]=Be(qe(t,ae,a));let re=t[1],A=[];for(let a=0;a<re.length;a+=1)A[a]=Oe(Re(t,re,a));let de=t[2],F=[];for(let a=0;a<de.length;a+=1)F[a]=Ge(Pe(t,de,a));let ge=t[3],H=[];for(let a=0;a<ge.length;a+=1)H[a]=Qe(De(t,ge,a));let me=t[4],z=[];for(let a=0;a<me.length;a+=1)z[a]=We(ze(t,me,a));let fe=t[5],D=[];for(let a=0;a<fe.length;a+=1)D[a]=Ve(He(t,fe,a));let he=t[6],P=[];for(let a=0;a<he.length;a+=1)P[a]=Je(Fe(t,he,a));return{c(){e=g("section"),n=g("h2"),n.textContent="Technologies",i=p(),c=g("p"),c.innerHTML=`Throughout my career I have used a wide variety of languages, frameworks and tools. <br/>
        I&#39;m comfortable working with:`,d=p(),m=g("p"),m.textContent="Front-end",u=p(),f=g("div");for(let a=0;a<M.length;a+=1)M[a].c();r=p(),h=g("p"),h.textContent="Back-end",v=p(),b=g("div");for(let a=0;a<A.length;a+=1)A[a].c();x=p(),w=g("p"),w.textContent="Smart Contracts",O=p(),y=g("div");for(let a=0;a<F.length;a+=1)F[a].c();le=p(),W=g("p"),W.textContent="Testing",B=p(),V=g("div");for(let a=0;a<H.length;a+=1)H[a].c();J=p(),C=g("p"),C.textContent="Databases",ue=p(),G=g("div");for(let a=0;a<z.length;a+=1)z[a].c();R=p(),se=g("p"),se.textContent="Infrastructure",oe=p(),E=g("div");for(let a=0;a<D.length;a+=1)D[a].c();_=p(),I=g("p"),I.textContent="Other tools",T=p(),ne=g("div");for(let a=0;a<P.length;a+=1)P[a].c();o(n,"class","font-lato text-5xl font-bold text-sky-400"),o(c,"class","font-lato text-xl sm:text-2xl my-8"),o(m,"class","font-lato text-2xl sm:text-3xl font-bold text-sky-400"),o(f,"class","my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center"),o(h,"class","font-lato text-2xl sm:text-3xl font-bold text-sky-400"),o(b,"class","my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center"),o(w,"class","font-lato text-2xl sm:text-3xl font-bold text-sky-400"),o(y,"class","my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center"),o(W,"class","font-lato text-2xl sm:text-3xl font-bold text-sky-400"),o(V,"class","my-12 grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center"),o(C,"class","font-lato text-2xl sm:text-3xl font-bold text-sky-400"),o(G,"class","my-12 grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center"),o(se,"class","font-lato text-2xl sm:text-3xl font-bold text-sky-400"),o(E,"class","my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center"),o(I,"class","font-lato text-2xl sm:text-3xl font-bold text-sky-400"),o(ne,"class","my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center"),o(e,"id","technologies"),o(e,"class","p-24 grid place-items-center")},m(a,L){S(a,e,L),s(e,n),s(e,i),s(e,c),s(e,d),s(e,m),s(e,u),s(e,f);for(let l=0;l<M.length;l+=1)M[l].m(f,null);s(e,r),s(e,h),s(e,v),s(e,b);for(let l=0;l<A.length;l+=1)A[l].m(b,null);s(e,x),s(e,w),s(e,O),s(e,y);for(let l=0;l<F.length;l+=1)F[l].m(y,null);s(e,le),s(e,W),s(e,B),s(e,V);for(let l=0;l<H.length;l+=1)H[l].m(V,null);s(e,J),s(e,C),s(e,ue),s(e,G);for(let l=0;l<z.length;l+=1)z[l].m(G,null);s(e,R),s(e,se),s(e,oe),s(e,E);for(let l=0;l<D.length;l+=1)D[l].m(E,null);s(e,_),s(e,I),s(e,T),s(e,ne);for(let l=0;l<P.length;l+=1)P[l].m(ne,null)},p(a,[L]){if(L&1){ae=a[0];let l;for(l=0;l<ae.length;l+=1){const $=qe(a,ae,l);M[l]?M[l].p($,L):(M[l]=Be($),M[l].c(),M[l].m(f,null))}for(;l<M.length;l+=1)M[l].d(1);M.length=ae.length}if(L&2){re=a[1];let l;for(l=0;l<re.length;l+=1){const $=Re(a,re,l);A[l]?A[l].p($,L):(A[l]=Oe($),A[l].c(),A[l].m(b,null))}for(;l<A.length;l+=1)A[l].d(1);A.length=re.length}if(L&4){de=a[2];let l;for(l=0;l<de.length;l+=1){const $=Pe(a,de,l);F[l]?F[l].p($,L):(F[l]=Ge($),F[l].c(),F[l].m(y,null))}for(;l<F.length;l+=1)F[l].d(1);F.length=de.length}if(L&8){ge=a[3];let l;for(l=0;l<ge.length;l+=1){const $=De(a,ge,l);H[l]?H[l].p($,L):(H[l]=Qe($),H[l].c(),H[l].m(V,null))}for(;l<H.length;l+=1)H[l].d(1);H.length=ge.length}if(L&16){me=a[4];let l;for(l=0;l<me.length;l+=1){const $=ze(a,me,l);z[l]?z[l].p($,L):(z[l]=We($),z[l].c(),z[l].m(G,null))}for(;l<z.length;l+=1)z[l].d(1);z.length=me.length}if(L&32){fe=a[5];let l;for(l=0;l<fe.length;l+=1){const $=He(a,fe,l);D[l]?D[l].p($,L):(D[l]=Ve($),D[l].c(),D[l].m(E,null))}for(;l<D.length;l+=1)D[l].d(1);D.length=fe.length}if(L&64){he=a[6];let l;for(l=0;l<he.length;l+=1){const $=Fe(a,he,l);P[l]?P[l].p($,L):(P[l]=Je($),P[l].c(),P[l].m(ne,null))}for(;l<P.length;l+=1)P[l].d(1);P.length=he.length}},i:k,o:k,d(a){a&&j(e),K(M,a),K(A,a),K(F,a),K(H,a),K(z,a),K(D,a),K(P,a)}}}function jt(t){return[[{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",name:"HTML5"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",name:"CSS3"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",name:"JavaScript"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",name:"TypeScript"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",name:"Next.js"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",name:"React.js"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",name:"React Native"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",name:"Svelte"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",name:"Electron"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",name:"Redux"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",name:"GraphQL"},{image:"./ethers.svg",name:"Ethers.js"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",name:"Tailwind CSS"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",name:"Material UI"},{image:"./antd.svg",name:"Ant Design"},{image:"./chakra.svg",name:"Chakra UI"}],[{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",name:"JavaScript"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",name:"TypeScript"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",name:"C#"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",name:".NET Core"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",name:".NET Framework"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",name:"Node.js"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",name:"Express"}],[{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",name:"Solidity"},{image:"./hardhat.svg",name:"Hardhat"},{image:"./truffle.svg",name:"Truffle"},{image:"./the-graph.svg",name:"The Graph"},{image:"./infura_logo_black.svg",name:"Infura"},{image:"./alchemy.png",name:"Alchemy"}],[{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",name:"Mocha"},{image:"./chai.svg",name:"Chai"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",name:"Jest"}],[{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",name:"SQL Server"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",name:"MySQL"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",name:"PostgreSQL"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",name:"MongoDB"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",name:"Firebase"}],[{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",name:"AWS"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",name:"Azure"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",name:"Heroku"},{image:"./vercel.svg",name:"Vercel"}],[{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",name:"VS Code"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",name:"Visual Studio"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",name:"Git"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",name:"Docker"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",name:"Webpack"},{image:"./vite.svg",name:"Vite"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",name:"npm"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",name:"Yarn"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuget/nuget-original.svg",name:"NuGet"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",name:"eslint"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",name:"Trello"},{image:"./notion.svg",name:"Notion"},{image:"./macos.svg",name:"Mac OS"},{image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",name:"Windows"}]]}class wt extends te{constructor(e){super(),ee(this,e,jt,kt,Z,{})}}function St(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="text-5xl text-sky-400 font-bold font-lato mb-8">Contact</h2> 
    <p class="text-xl sm:text-2xl font-lato">I&#39;m always open to new opportunities. <br/> Feel free to contact me here:</p> 
    <div class="my-12 grid grid-cols-3 gap-8"><a class="flex flex-col items-center" href="https://linkedin.com/in/leonardo-damian-suarez/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin" height="65px" width="65px"/> 
            <p class="font-bold mt-4">Linkedin</p></a> 
        <a class="flex flex-col items-center" href="https://github.com/SuarezLDamian/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" height="65px" width="65px"/> 
            <p class="font-bold mt-4">GitHub</p></a> 
        <a class="flex flex-col items-center justify-between" href="mailto:suarezldamian@gmail.com"><img src="./gmail.svg" alt="Email" height="65px" width="65px"/> 
            <p class="font-bold mt-4">Email</p></a></div>`,o(e,"id","contact"),o(e,"class","p-24 grid place-items-center bg-base-200")},m(n,i){S(n,e,i)},p:k,i:k,o:k,d(n){n&&j(e)}}}class $t extends te{constructor(e){super(),ee(this,e,null,St,Z,{})}}function Ct(t){let e;return{c(){e=g("footer"),e.innerHTML="<div><p>Made with \u2764\uFE0F and <b>Svelte</b> by me</p></div>",o(e,"class","footer footer-center p-4 bg-base-300 text-base-content")},m(n,i){S(n,e,i)},p:k,i:k,o:k,d(n){n&&j(e)}}}class Tt extends te{constructor(e){super(),ee(this,e,null,Ct,Z,{})}}function It(t){let e,n,i,c,d,m,u,f,r,h,v,b,x,w,O;return n=new ct({}),c=new rt({}),m=new gt({}),f=new yt({}),h=new wt({}),b=new $t({}),w=new Tt({}),{c(){e=g("main"),ie(n.$$.fragment),i=p(),ie(c.$$.fragment),d=p(),ie(m.$$.fragment),u=p(),ie(f.$$.fragment),r=p(),ie(h.$$.fragment),v=p(),ie(b.$$.fragment),x=p(),ie(w.$$.fragment)},m(y,le){S(y,e,le),U(n,e,null),s(e,i),U(c,e,null),s(e,d),U(m,e,null),s(e,u),U(f,e,null),s(e,r),U(h,e,null),s(e,v),U(b,e,null),s(e,x),U(w,e,null),O=!0},p:k,i(y){O||(q(n.$$.fragment,y),q(c.$$.fragment,y),q(m.$$.fragment,y),q(f.$$.fragment,y),q(h.$$.fragment,y),q(b.$$.fragment,y),q(w.$$.fragment,y),O=!0)},o(y){Q(n.$$.fragment,y),Q(c.$$.fragment,y),Q(m.$$.fragment,y),Q(f.$$.fragment,y),Q(h.$$.fragment,y),Q(b.$$.fragment,y),Q(w.$$.fragment,y),O=!1},d(y){y&&j(e),Y(n),Y(c),Y(m),Y(f),Y(h),Y(b),Y(w)}}}class Et extends te{constructor(e){super(),ee(this,e,null,It,Z,{})}}new Et({target:document.getElementById("app")});
