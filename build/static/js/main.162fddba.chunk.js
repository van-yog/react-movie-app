(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(0),i=c(1),n=c.n(i),s=c(7),a=c.n(s),l=c(8),r=c(2),d=c(3),v=c(5),j=c(4),h=function(e){Object(v.a)(c,e);var t=Object(j.a)(c);function c(e){var o,i=e.movie,n=e.movieWillWatch;Object(r.a)(this,c),console.log("MovieItem->constructor->props",i.id),console.log("MovieItem->constructor->props",n),o=t.call(this);var s=!1;return n.forEach((function(e){e.id===i.id&&(console.log("\u0424\u0438\u043b\u044c\u043c \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0440\u0442\u0440\u0430! \u041d\u0443\u0436\u043d\u043e \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0435\u0433\u043e \u0446\u0432\u0435\u0442",i.title),s=!0)})),o.state={willWatch:s},o}return Object(d.a)(c,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,c=t.movie,i=t.removeMovie,n=t.addMovieToWillWatch,s=t.removeMovieFromWillWatch;return Object(o.jsxs)("div",{className:this.state.willWatch?"border rounded p-2 my-2 bg-light border-success":"border rounded p-2 my-2 bg-light",children:[Object(o.jsx)("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(c.backdrop_path||c.poster_path),alt:""}),Object(o.jsx)("p",{className:this.state.willWatch?"text-center font-weight-bold my-3 h5 border border-success rounded ":"text-center font-weight-bold my-3 h5",children:c.title}),Object(o.jsxs)("p",{className:"text-center",children:[" Vote average: ",c.vote_average]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between px-2",children:[Object(o.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){i(c),s(c)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),this.state.willWatch?Object(o.jsx)("button",{className:"btn btn-warning",tupe:"button",onClick:function(){e.setState({willWatch:!1}),s(c)},children:"Won't watch"}):Object(o.jsx)("button",{className:"btn btn-success",tupe:"button",onClick:function(){e.setState({willWatch:!0}),n(c)},children:"Will watch"})]})]})}}]),c}(n.a.Component),m=function(e){Object(v.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){console.log("WillWatch->render");var e=this.props,t=e.index,c=e.movieWillWatch,i=e.removeMovieFromWillWatch;return Object(o.jsxs)("div",{className:"border rounded border-success m-2 p-2 d-flex justify-content-between align-items-center",children:[Object(o.jsxs)("div",{children:[t+1,". ",this.props.movieWillWatch.title,","," ",c.vote_average]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",className:"rounded btn btn-danger",onClick:function(){return i(c)},children:"\u2716"})})]})}}]),c}(n.a.Component),u=function(e){var t=e.sort_by,c=e.updateSortBy,i=function(e){return function(){return c(e)}},n=function(e){return"nav-link ".concat(t===e?"active":"")};return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"tabs nav nav-pills mt-4",children:[Object(o.jsx)("li",{className:"nav-item mx-2",children:Object(o.jsx)("div",{className:n("popularity.desc"),onClick:i("popularity.desc"),children:"Popularity desc"})}),Object(o.jsx)("li",{className:"nav-item mx-2",children:Object(o.jsx)("div",{className:n("revenue.desc"),onClick:i("revenue.desc"),children:"Revenue desc"})}),Object(o.jsx)("li",{className:"nav-item mx-2",children:Object(o.jsx)("div",{className:n("vote_average.desc"),onClick:i("vote_average.desc"),children:"Vote average"})})]})})},b=function(e){Object(v.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return console.log("Loader->render"),Object(o.jsxs)("div",{className:"lds-spinner",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}}]),c}(n.a.Component),p=function(e){Object(v.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),console.log("App->constructor"),(e=t.call(this)).getMovies=function(){console.log("App->getMovies");fetch("".concat("https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(e.state.sort_by)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,isDownload:!0}),console.log("App-getMovies->after fetch",e.state.movies)}))},e.removeMovie=function(t){console.log("App->removeMovie");var c=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:c})},e.removeMovieFromWillWatch=function(t){console.log("App->removeMovieFromWillWatch"),console.log("movieWillWatch",e.state.movieWillWatch);var c=e.state.movieWillWatch.filter((function(e){return e.id!==t.id}));console.log("Mi DOLJNI OBNOVIT STATE I PERERISOVAT",c),e.setState({movieWillWatch:c})},e.addMovieToWillWatch=function(t){var c=[].concat(Object(l.a)(e.state.movieWillWatch),[t]);e.setState({movieWillWatch:c})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],movieWillWatch:[],countMoviesWillWatch:0,sort_by:"revenue.desc",isDownload:!1},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){console.log("App->componentDidMount"),setTimeout(this.getMovies,500)}},{key:"componentDidUpdate",value:function(e,t){console.log("App->componentDidUpdate"),t.sort_by!==this.state.sort_by&&(console.log("call api"),this.setState({isDownload:!1}),setTimeout(this.getMovies,500))}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-9",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)(u,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy})}),Object(o.jsx)("div",{className:"col-12 text-center",children:this.state.isDownload?"":Object(o.jsx)(b,{})})]}),Object(o.jsx)("div",{className:"row",children:this.state.movies.map((function(t){return Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(h,{movie:t,movieWillWatch:e.state.movieWillWatch,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch})},t.id)}))})]}),Object(o.jsxs)("div",{className:"col-3  mt-2",children:[Object(o.jsxs)("p",{className:"font-weight-bold",children:["Will watch: ",this.state.movieWillWatch.length," movies"]}),this.state.movieWillWatch.map((function(t,c){return Object(o.jsx)("div",{children:Object(o.jsx)(m,{movieWillWatch:t,index:c,removeMovieFromWillWatch:e.removeMovieFromWillWatch})},t.id)}))]})]})})}}]),c}(n.a.Component);c(14),c(15);a.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.162fddba.chunk.js.map