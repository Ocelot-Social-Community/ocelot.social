import{u as Y,g as te,h as se,i as B,j as ae,P as re,t as le,k as ie,l as F,m as q,n as ue,w as M,p as s,q as ne,R as j,v as oe,x as ce,y as ve,C as de,z as pe,A as ye,B as he,D as me,E as fe,F as x,G as ge,H as He,I as Re,J as I,K as _,L as ke}from"./app-CiKBGuFF.js";const we=["/de/","/en/","/es/","/fr/","/de/contact/","/de/contribute/","/de/donate/","/de/features/","/de/get-started/","/de/imprint/","/de/learn/","/de/privacy-policy/","/en/contact/","/en/contribute/","/en/donate/","/en/features/","/en/get-started/","/en/imprint/","/en/learn/","/en/privacy-policy/","/es/contact/","/es/contribute/","/es/donate/","/es/features/","/es/get-started/","/es/imprint/","/es/learn/","/es/privacy-policy/","/fr/contact/","/fr/contribute/","/fr/donate/","/fr/features/","/fr/get-started/","/fr/imprint/","/fr/learn/","/fr/privacy-policy/","/404.html","/de/category/","/en/category/","/es/category/","/fr/category/","/de/tag/","/en/tag/","/es/tag/","/fr/tag/","/de/article/","/en/article/","/es/article/","/fr/article/","/de/star/","/en/star/","/es/star/","/fr/star/","/de/timeline/","/en/timeline/","/es/timeline/","/fr/timeline/"],Qe="SEARCH_PRO_QUERY_HISTORY",f=Y(Qe,[]),qe=()=>{const{queryHistoryCount:a}=x,r=a>0;return{enabled:r,queryHistory:f,addQueryHistory:l=>{r&&(f.value=Array.from(new Set([l,...f.value.slice(0,a-1)])))},removeQueryHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},P=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,g=Y(xe,[]),Se=()=>{const a=U>0;return{enabled:a,resultHistory:g,addResultHistory:r=>{if(a){const l={link:P(r),display:r.display};"header"in r&&(l.header=r.header),g.value=[l,...g.value.slice(0,U-1)]}},removeResultHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},be=a=>{const r=de(),l=B(),S=pe(),u=F(0),k=q(()=>u.value>0),y=ye([]);return he(()=>{const{search:h,terminate:b}=me(),H=fe(c=>{const R=c.join(" "),{searchFilter:C=p=>p,splitWord:L,suggestionsFilter:O,...m}=r.value;R?(u.value+=1,h(c.join(" "),l.value,m).then(p=>C(p,R,l.value,S.value)).then(p=>{u.value-=1,y.value=p}).catch(p=>{console.warn(p),u.value-=1,u.value||(y.value=[])})):y.value=[]},x.searchDelay-x.suggestDelay);M([a,l],([c])=>H(c),{immediate:!0}),ge(()=>{b()})}),{isSearching:k,results:y}};var Le=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:r}){const l=se(),S=B(),u=ae(re),{enabled:k,addQueryHistory:y,queryHistory:h,removeQueryHistory:b}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:C}=Se(),L=k||H,O=le(a,"queries"),{results:m,isSearching:p}=be(O),i=ie({isQuery:!0,index:0}),v=F(0),d=F(0),T=q(()=>L&&(h.value.length>0||c.value.length>0)),D=q(()=>m.value.length>0),A=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:h.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?h.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,d.value=A.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,d.value=0},V=()=>{d.value<A.value.contents.length-1?d.value+=1:K()},N=()=>{d.value>0?d.value-=1:J()},E=e=>e.map(t=>ke(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=He[e.index]||"$content",[n,Q=""]=Re(t)?t[S.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",E([n,...o,Q])))}return e.display.map(t=>s("div",E(t)))},w=()=>{v.value=0,d.value=0,r("updateQuery",""),r("close")},X=()=>k?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),h.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{r("updateQuery",e)}},[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),b(t)}})]))])):null,Z=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>s(j,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{w()}},()=>[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>E(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),C(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=A.value.contents[d.value];y(a.queries.join(" ")),R(t),l.push(P(t)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(r("updateQuery",h.value[t]),e.preventDefault()):(l.push(c.value[t].link),w())}}}}),M([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!D.value:!T.value}],id:"search-pro-results"},a.queries.length?p.value?s(ne,{hint:u.value.searching}):D.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},n)=>{const Q=v.value===n;return s("li",{class:["search-pro-result-list-item",{active:Q}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((o,ee)=>{const $=Q&&d.value===ee;return s(j,{to:P(o),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{y(a.queries.join(" ")),R(o),w()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",W(o))])])})])})):u.value.emptyResult:L?T.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Le as default};
