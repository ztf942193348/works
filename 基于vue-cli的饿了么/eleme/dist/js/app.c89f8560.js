(function(e){function t(t){for(var a,o,s=t[0],u=t[1],c=t[2],v=0,d=[];v<s.length;v++)o=s[v],r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"41e2":function(e,t,n){"use strict";var a=n("d80e"),r=n.n(a);r.a},"42d8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("2f5e");var a=n("a8aa"),r=(n("3b9d"),n("c288")),i=(n("96cf"),n("3b8d")),o=(n("0aa2"),n("fe95")),s=(n("f029"),n("536d")),u=(n("1050"),n("8618")),c=(n("5324"),n("43aa")),l=(n("f471"),n("a337")),v=(n("37e9"),n("168b")),d=(n("e712"),n("962f")),f=(n("d6e1"),n("754b")),p=(n("9d3d"),n("e37f")),m=(n("9bac"),n("be24")),b=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"main"}},[n("Home"),n("List"),n("div",{staticClass:"bao"},[n("Main")],1),n("Divider"),n("Xiala"),n("None")],1),n("div",{attrs:{id:"footer"}},[n("Footer")],1)])},h=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("div",{staticClass:"address"},[n("span",{staticClass:"van-dropdown-menu__title arrow"},[n("van-icon",{attrs:{name:"location"}}),e._v("慧通产业园B9栋")],1),n("van-search",{class:1==e.navBarFixed?"navBarWrap":"",attrs:{placeholder:"搜索饿了么商家、商品名称",background:"#0085ff"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])},g=[],w={data:function(){return{value:"",navBarFixed:!1}},methods:{watchScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.navBarFixed=e>49}},mounted:function(){window.addEventListener("scroll",this.watchScroll)}},y=w,O=(n("f0298"),n("2877")),j=Object(O["a"])(y,x,g,!1,null,"569e46ae",null),k=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-grid",{attrs:{"column-num":5,border:!1}},e._l(e.tabs,function(t,a){return n("van-grid-item",{key:a,attrs:{border:"false"}},[n("van-image",{attrs:{src:t.url}}),n("span",[e._v("\n      "+e._s(t.name)+"\n  ")])],1)}),1)},E=[],$={data:function(){return{tabs:[]}},methods:{},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:t=e.sent,this.tabs=t;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},S=$,M=(n("f62b"),Object(O["a"])(S,C,E,!1,null,null,null)),P=M.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabbar",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{name:"home",icon:"home-o"}},[e._v("标签")]),n("van-tabbar-item",{attrs:{name:"search",icon:"search"}},[e._v("标签")]),n("van-tabbar-item",{attrs:{name:"friends",icon:"friends-o"}},[e._v("标签")]),n("van-tabbar-item",{attrs:{name:"setting",icon:"setting-o"}},[e._v("标签")])],1)},T=[],B={data:function(){return{active:"home"}}},D=B,N=Object(O["a"])(D,F,T,!1,null,null,null),L=N.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-Q3GS5_0 index-1xT5J_0"},[n("h3",{staticClass:"index-1qvN6_0"},[e._v("品质套餐")]),n("div",{staticClass:"index-2W67h_0"},[e._v("搭配齐全吃得好")]),n("div",{staticClass:"index-1DFa7_0"},[e._v("\n    立即抢购 >\n  ")]),n("img",{attrs:{src:"https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"}})])}],H={},W=H,X=(n("41e2"),Object(O["a"])(W,R,J,!1,null,"dc65d4e2",null)),q=X.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-divider",{style:{color:"#000",borderColor:"#999",padding:"0 130px"}},[e._v("\n  推荐商家\n")])},Q=[],Y={},z=Y,A=Object(O["a"])(z,G,Q,!1,null,null,null),I=A.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.bool?n("div",{staticClass:"xiala top"},[n("div",{on:{click:e.top}},[n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:e.option1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)],1),n("div",[e._v("距离最近")]),n("div",[e._v("品质联盟")]),n("div",[e._v("筛选")])]):n("div",{staticClass:"xiala"},[n("div",{staticClass:"van-dropdown-menu__title",on:{click:e.top}},[n("div",[e._v(e._s(e.option1[this.value1].text))])]),n("div",[e._v("距离最近")]),n("div",[e._v("品质联盟")]),n("div",[e._v("筛选")])])},U=[],V={data:function(){return{bool:!1,value1:0,option1:[{text:"综合排序",value:0},{text:"好评优先",value:1},{text:"销量最高",value:2},{text:"起送价最低",value:3},{text:"配送最快",value:4},{text:"起送价最低",value:5},{text:"配送最快",value:6},{text:"配送费最低",value:7},{text:"人均从低到高",value:8},{text:"人均从高到低",value:9},{text:"通用排序",value:10}]}},mounted:function(){var e=this;window.addEventListener("click",function(t){"van-overlay van-fade-leave van-fade-leave-active"===t.target.className&&(e.bool=!1),"van-cell__title"===t.target.className&&(e.bool=!1)})},methods:{top:function(){this.bool=!0}}},Z=V,ee=(n("a57a"),Object(O["a"])(Z,K,U,!1,null,null,null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:"http://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"}})])}],re={data:function(){return{}}},ie=re,oe=Object(O["a"])(ie,ne,ae,!1,null,null,null),se=oe.exports,ue={name:"app",components:{Home:k,List:P,Footer:L,Main:q,Divider:I,Xiala:te,None:se}},ce=ue,le=(n("034f"),Object(O["a"])(ce,_,h,!1,null,null,null)),ve=le.exports,de=n("2427"),fe=n.n(de);b["a"].use(m["a"]),b["a"].use(p["a"]),b["a"].use(d["a"]).use(f["a"]),b["a"].use(l["a"]).use(v["a"]),b["a"].use(c["a"]),b["a"].use(s["a"]).use(u["a"]),b["a"].use(o["a"]),b["a"].prototype.getData=function(){return new Promise(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe.a.get("https://www.easy-mock.com/mock/5d403de5bf069f5f10cf353f/example/list");case 2:n=e.sent,t(n.data.data.tabs);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},b["a"].use(r["a"]),b["a"].use(a["a"]),b["a"].config.productionTip=!1,new b["a"]({render:function(e){return e(ve)}}).$mount("#app")},"629d":function(e,t,n){},"64a9":function(e,t,n){},a57a:function(e,t,n){"use strict";var a=n("c56f"),r=n.n(a);r.a},c56f:function(e,t,n){},d80e:function(e,t,n){},f0298:function(e,t,n){"use strict";var a=n("42d8"),r=n.n(a);r.a},f62b:function(e,t,n){"use strict";var a=n("629d"),r=n.n(a);r.a}});
//# sourceMappingURL=app.c89f8560.js.map