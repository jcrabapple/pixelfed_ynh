(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[8470],{16289:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});const a={data:function(){return{loaded:!1,showLoadMore:!0,profiles:[],page:1}},beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;axios.get("/api/pixelfed/v2/discover/profiles",{params:{page:this.page}}).then((function(s){if(0==s.data.length)return t.showLoadMore=!1,void(t.loaded=!0);t.profiles=s.data,t.showLoadMore=8==t.profiles.length,t.loaded=!0}))},prettyCount:function(t){return App.util.format.count(t)},loadMore:function(){this.loaded=!1,this.page++,this.fetchData()},thumbUrl:function(t){return t.media_attachments[0].url}}}},86445:(t,s,e)=>{"use strict";e.r(s),e.d(s,{render:()=>a,staticRenderFns:()=>r});var a=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"col-12"},[s("p",{staticClass:"font-weight-bold text-lighter text-uppercase"},[t._v("Profiles Directory")]),t._v(" "),t.loaded?s("div",{},[s("div",{staticClass:"row"},[t._l(t.profiles,(function(e,a){return s("div",{staticClass:"col-12 col-md-6 p-1"},[s("div",{staticClass:"card card-body border shadow-none py-2"},[s("div",{staticClass:"media"},[s("a",{attrs:{href:e.url}},[s("img",{staticClass:"rounded-circle border mr-3",attrs:{src:e.avatar,alt:"...",width:"40px",height:"40px"}})]),t._v(" "),s("div",{staticClass:"media-body"},[s("p",{staticClass:"mt-0 mb-0 font-weight-bold"},[s("a",{staticClass:"text-dark",attrs:{href:e.url}},[t._v(t._s(e.username))])]),t._v(" "),s("p",{staticClass:"mb-1 small text-lighter d-flex justify-content-between font-weight-bold"},[s("span",[s("span",[t._v(t._s(t.prettyCount(e.statuses_count)))]),t._v(" POSTS\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("span",[s("span",[t._v(t._s(t.prettyCount(e.followers_count)))]),t._v(" FOLLOWERS\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),s("p",{staticClass:"mb-1"},t._l(e.posts,(function(e,a){return s("span",{key:"profile_posts_"+a,staticClass:"shadow-sm"},[s("a",{staticClass:"text-decoration-none mr-1",attrs:{href:e.url}},[s("img",{staticClass:"border rounded",attrs:{src:t.thumbUrl(e),width:"62.3px",height:"62.3px"}})])])})),0)])])])])})),t._v(" "),t.showLoadMore?s("div",{staticClass:"col-12"},[s("p",{staticClass:"text-center mb-0 pt-3"},[s("button",{staticClass:"btn btn-outline-secondary btn-sm px-4 py-1 font-weight-bold",on:{click:function(s){return t.loadMore()}}},[t._v("Load More")])])]):t._e()],2)]):s("div",[t._m(0)])])])},r=[function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 d-flex justify-content-center align-items-center"},[t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])])])}]},16055:(t,s,e)=>{Vue.component("profile-directory",e(82909).default)},82909:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>i});var a=e(54500),r=e(97053),o={};for(const t in r)"default"!==t&&(o[t]=()=>r[t]);e.d(s,o);const i=(0,e(51900).default)(r.default,a.render,a.staticRenderFns,!1,null,"7b3eea1c",null).exports},97053:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>o});var a=e(16289),r={};for(const t in a)"default"!==t&&(r[t]=()=>a[t]);e.d(s,r);const o=a.default},54500:(t,s,e)=>{"use strict";e.r(s);var a=e(86445),r={};for(const t in a)"default"!==t&&(r[t]=()=>a[t]);e.d(s,r)}},t=>{t.O(0,[8898],(()=>{return s=16055,t(t.s=s);var s}));t.O()}]);