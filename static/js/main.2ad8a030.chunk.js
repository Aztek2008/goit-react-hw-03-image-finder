(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__34oX3"}},24:function(e,t,a){e.exports={Loader:"Loader_Loader__26Cwk"}},25:function(e,t,a){e.exports=a(70)},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3CYsP",SearchForm:"Searchbar_SearchForm__h-EIO",SearchFormButton:"Searchbar_SearchFormButton__2n7tM",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1i2cB",SearchFormInput:"Searchbar_SearchFormInput__2LHsN"}},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(20),c=a.n(o),l=a(10),u=a(4),m=a(5),i=a(7),s=a(6),h=a(3),g=a.n(h),p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){console.log("event.target.value",t.target.value),e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:g.a.Searchbar},n.a.createElement("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit},n.a.createElement("button",{type:"submit",className:g.a.SearchFormButton},n.a.createElement("span",{className:g.a.SearchFormButtonLabel},"Search")),n.a.createElement("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})))}}]),a}(r.Component),f=a(21),y=a.n(f),b="16768453-e9e01aacbda51e04761bf85fa",S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return y.a.get("https://pixabay.com/api/?key=".concat(b,"&q=").concat(e,"&image_type=photo&page=").concat(t,"&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},d=a(8),_=a.n(d),I=function(e){var t=e.webUrl,a=e.tags;return n.a.createElement("li",{className:_.a.ImageGalleryItem},n.a.createElement("img",{src:t,alt:a,className:_.a.ImageGalleryItemImage}))},v=a(22),E=a.n(v),F=function(e){var t=e.images;return n.a.createElement("ul",{className:E.a.ImageGallery},t.map((function(e){var t=e.id,a=e.tags,r=e.webformatURL;e.largeImageURL;return n.a.createElement(I,{key:t,tags:a,webUrl:r})})))},B=a(9),C=a.n(B),w=function(e){var t=e.thisClicked;return n.a.createElement("div",{className:C.a.ButtonContainer},n.a.createElement("button",{onClick:t,className:C.a.Button,type:"button"},"Load more"))},G=a(23),N=a.n(G),k=a(24),L=a.n(k),O=(a(68),function(){return n.a.createElement(N.a,{className:L.a.Loader,type:"ThreeDots",color:"#00BFFF",height:80,width:80})}),j=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={galleryImages:[],searchQuery:"",page:1,error:null,loading:!1},e.fetchPicturesFromApi=function(){var t=e.state,a=t.searchQuery,r=t.page;e.setState({loading:!0}),S(a,r).then((function(t){return e.setState((function(e){return{galleryImages:[].concat(Object(l.a)(e.galleryImages),Object(l.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSubmitFromQuery=function(t){e.setState({searchQuery:t,page:1,galleryImages:[]})},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchPicturesFromApi()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.galleryImages,r=e.loading;return n.a.createElement(n.a.Fragment,null,t&&n.a.createElement("p",null,"Something wrong: ",t.message," "),n.a.createElement(p,{onSubmit:this.handleSubmitFromQuery}),n.a.createElement(F,{images:a}),r&&n.a.createElement(O,null),a.length>0&&n.a.createElement(w,{thisClicked:this.fetchPicturesFromApi}))}}]),a}(r.Component);a(69);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__H9ic3",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1PD3W"}},9:function(e,t,a){e.exports={ButtonContainer:"Button_ButtonContainer__218Di",Button:"Button_Button__1_A1R"}}},[[25,1,2]]]);
//# sourceMappingURL=main.2ad8a030.chunk.js.map