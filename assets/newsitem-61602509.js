import{g,i as f,j as I,r as i,x,a as d,c as r,f as e,t,b as u,w as C,F as T,d as k,T as L,q as b,s as y,_ as D}from"./index-f4233455.js";import{n as _}from"./news-031a6efc.js";import{A as M}from"./adaptive-container-114e24a6.js";const l=a=>(b("data-v-9d6ee315"),a=a(),y(),a),N={class:"container"},S={class:"banner"},B={class:"products-desc"},H=l(()=>e("div",{class:"white-line"},null,-1)),j={class:"news-container"},A={class:"news-wrapper"},F={class:"news-detail-container"},R={class:"news-tag"},U=l(()=>e("h1",{class:"tag"},"公司新闻",-1)),V=l(()=>e("div",{class:"split-line"},null,-1)),$={class:"news-content"},q=["innerHTML"],E={class:"hot-news-container"},P=l(()=>e("h1",null,"最新新闻",-1)),z=["onClick"],G={class:"hot-news-tag"},J=g({__name:"newsitem",setup(a){const p=f(),c=I();i(c.params.newsId);const s=i(_.newsMap.get(parseInt(c.params.newsId)));console.log("newsDetail是",s.value);function h(o){return o.replace(/\n/g,"<br>","<router-link>").replace(/<img/g,'<img style="width: 100%;object-fit:cover;margin:10px 0"')}const w=i(_.newsList.slice(0,4));function v(o){p.push({path:`/newsitem/${o.newsId}`})}return x(()=>{s.value=_.newsMap.get(parseInt(c.params.newsId))}),(o,m)=>(d(),r("div",N,[e("div",S,[e("div",B,[e("h1",null,t(s.value.title),1),H,e("p",null,t(s.value.desc),1)])]),u(M,null,{default:C(()=>[e("div",j,[e("div",A,[e("div",F,[e("div",R,[U,e("h1",null,t(s.value.date),1)]),V,e("div",$,[e("p",{innerHTML:h(s.value.htmlText)},null,8,q)])]),e("div",E,[P,(d(!0),r(T,null,k(w.value,(n,K)=>(d(),r("div",{class:"hot-news-item",onClick:O=>v(n)},[u(L,{class:"hot-news-img-container",src:n.imgUrl,scale:"true"},null,8,["src"]),e("h2",null,t(n.title),1),e("div",G,[e("h4",null,t(n.viewCount),1),e("p",null,t(n.date),1)])],8,z))),256))])])])]),_:1})]))}});const Y=D(J,[["__scopeId","data-v-9d6ee315"]]);export{Y as default};
