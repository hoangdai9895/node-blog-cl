(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(47),c=a.n(r),l=(a(60),a(2)),s=a(3),i=a(5),u=a(4),m=a(6),p=(a(61),a(1)),d=a(17),f=a(50),h=a(10),b="https://node-blog-sv.herokuapp.com",g=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},E={isAuthenticated:!1,user:{},token:""},y=a(27),v={categories:[],category:{},loading:!1},O={posts:[],post:{},loading:!1},N=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(h.a)({},e,{isAuthenticated:!g(t.payload.user),user:t.payload.user,token:t.payload.token});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CATEGORIES_LOADING":return Object(h.a)({},e,{loading:!0});case"GET_CATEGORIES":return Object(h.a)({},e,{categories:t.payload,loading:!1});case"DELETE_CATEGORY":return Object(h.a)({},e,{categories:e.categories.filter(function(e){return e._id!==t.payload})});case"ADD_CATEGORY":return Object(h.a)({},e,{categories:[t.payload].concat(Object(y.a)(e.categories))});case"UPDATE_CATEGORY":var a=e.categories;for(var n in a)if(a[n]._id===t.payload.id){a[n].title=t.payload.title;break}return Object(h.a)({},e,{categories:a});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_LOADING":return Object(h.a)({},e,{loading:!0});case"ADD_POST":return Object(h.a)({},e,{posts:[t.payload].concat(Object(y.a)(e.posts))});case"GET_ALL_POSTS":return Object(h.a)({},e,{posts:t.payload,loading:!1});case"GET_POST":return Object(h.a)({},e,{post:t.payload,loading:!1});case"DELETE_POST":return Object(h.a)({},e,{posts:e.posts.filter(function(e){return e._id!==t.payload.id})});case"UPDATE_POST":var a=e.posts;for(var n in a)if(a[n]._id===t.payload.id){a[n].author=t.payload.editData.author,a[n].body=t.payload.editData.body,a[n].category=t.payload.editData.category,a[n].title=t.payload.editData.title,a[n].date=t.payload.editData.date;break}return Object(h.a)({},e,{posts:a});case"ADD_COMMENT":var o=e.post;return o.comments.push(t.payload),Object(h.a)({},e,{post:o});case"DELETE_COMMENT":var r=e.post.comments.map(function(e){return e._id.toString()}).indexOf(t.payload),c=e.post;return c.comments.splice(r,1),Object(h.a)({},e,{post:c});default:return e}}}),C=[f.a],j=Object(d.e)(N,{},Object(d.d)(d.a.apply(void 0,C),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),k=a(8),w=a(18);function S(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"display-4"},"Page Not Found"),o.a.createElement("p",null,"Sorry, this page does not exist"))}var T=a(9),_=a.n(T),x=a(24),D=a.n(x),R=function(e){e?_.a.defaults.headers.common.Authorization=e:delete _.a.defaults.headers.common.Authorizaton},A=a(33),P=a.n(A),G=function(e,t){return{type:"SET_CURRENT_USER",payload:{user:e,token:t}}},L=function(){return function(e){localStorage.removeItem("jwtToken"),R(!1),e(G({}))}},Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).logout=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth.isAuthenticated,t=o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.b,{className:"nav-link text-dark",to:"/node-blog-cl/posts"},"Posts")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.b,{className:"nav-link text-dark",to:"/node-blog-cl/categories"},"Categories")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.b,{className:"nav-link text-dark",to:"/node-blog-cl/logout",onClick:this.logout},"Logout"))),a=o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.b,{className:"nav-link text-dark",to:"/node-blog-cl/register"},"Sign Up")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.b,{className:"nav-link text-dark",to:"/node-blog-cl/login"},"Login")));return o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark "},o.a.createElement(k.b,{className:"navbar-brand text-dark",to:"/node-blog-cl"},"Blog"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},e?t:a))}}]),t}(n.Component),U=Object(p.b)(function(e){return{auth:e.auth}},{logoutUser:L})(Y),I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"landing"},o.a.createElement("div",{className:"dark-overlay landing-inner text-light"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 text-center mt-5 pt-5"},o.a.createElement("h1",{className:"display-4 mb-4 mt-5"},"Blog"),o.a.createElement("hr",null),o.a.createElement("p",{className:"lead display-4"}," Create Your Blog"))))))}}]),t}(n.Component),M=Object(p.b)(function(e){return{auth:e.auth}},{})(I),B=a(14),V=function(e){var t=e.name,a=e.placeholder,n=e.error,r=e.type,c=e.disabled,l=e.value,s=e.onChange;return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:r,placeholder:a,name:t,value:l,onChange:s,className:n?"form-control is-invalid":"form-control is-valid",disabled:c}),null!==n?o.a.createElement("div",{className:"invalid-feedback"},n):"")},F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};a.props.loginUser(t)},a.componentWillReceiveProps=function(e){e.auth.isAuthenticated&&a.props.history.push("/"),e.errors&&a.setState({errors:e.errors})},a.state={email:"",password:"",errors:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8 m-auto"},o.a.createElement("h1",{className:"display-4 text-center"}," Log In ")," ",o.a.createElement("p",{className:"lead text-center"},"Sign in to your Blog Account"),o.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},o.a.createElement(V,{name:"email",type:"email",placeholder:"Your Email",onChange:function(t){return e.onChange(t)}}),o.a.createElement(V,{name:"password",type:"password",placeholder:"Your password",onChange:function(t){return e.onChange(t)}}),o.a.createElement("input",{type:"submit",className:"btn btn-outline-primary btn-block mt-4",value:"Submit"}))))))}}]),t}(n.Component),W=Object(p.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){_.a.post(b+"/users/login",P.a.stringify(e)).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),R(a);var n=D()(a);t(G(n,a))}).catch(function(e){t({type:"GET_ERRORS",payload:e.response.data})})}}})(F),X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.onChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.componentDidMount=function(){e.props.auth.isAuthenticated&&e.props.history.push("/node-blog-cl")},e.state={name:"",email:"",password:"",password2:"",errors:{name:""}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"register"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8 m-auto"},o.a.createElement("h1",{className:"display-4 text-center"}," Sign Up "),o.a.createElement("p",{className:"lead text-center"},"Create your Blog account"),o.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},o.a.createElement(V,{name:"name",type:"text",placeholder:"Your name",onChange:function(t){return e.onChange(t)},error:this.state.name.length<3?this.state.errors.name:null}),o.a.createElement(V,{name:"email",type:"email",placeholder:"Your Email address",onChange:function(t){return e.onChange(t)}}),o.a.createElement(V,{name:"password",type:"password",placeholder:"Your password",onChange:function(t){return e.onChange(t)}}),o.a.createElement(V,{name:"password2",type:"password",placeholder:"Confirm your password",onChange:function(t){return e.onChange(t)},error:this.state.name.length<3?this.state.errors.name:null}),o.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(n.Component),z=Object(p.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){_.a.post(b+"/users/register",P.a.stringify(e),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(e){console.log(e.data),t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(X);function H(){return o.a.createElement("footer",{className:"bg-dark text-white p-4 text-center"},"Copyright \xa9 ",(new Date).getFullYear()," Blog")}var J=a(52),K=Object(p.b)(function(e){return{auth:e.auth}},{})(function(e){var t=e.component,a=e.auth,n=Object(J.a)(e,["component","auth"]);return o.a.createElement(w.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?o.a.createElement(t,e):o.a.createElement(w.a,{to:"/login"})}}))}),$=function(e){return function(e){e({type:"CATEGORIES_LOADING"}),_.a.get(b+"/categories").then(function(t){e({type:"GET_CATEGORIES",payload:t.data})}).catch(function(t){e({type:"GET_CATEGORIES",payload:null})})}},q=a(53),Q=a.n(q);function Z(){return o.a.createElement("div",{className:"text-center w-100"},o.a.createElement("img",{src:Q.a,alt:"loading...",style:{width:"200px",margin:"auto",display:"block"}}))}var ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).deleteCat=function(e,t){e.preventDefault(),window.confirm("Are you sure ????")&&a.props.deleteCategory(t)},a.close=function(e){e.preventDefault(),a.setState({flag:!a.state.flag})},a.edit=function(e){e.preventDefault(),a.setState({flag:!a.state.flag})},a.onChange=function(e){""!==e.target.value&&a.setState({title:e.target.value})},a.update=function(e,t){e.preventDefault(),a.setState({flag:!a.state.flag});var n={title:a.state.title};a.props.updateCategory(t,n)},a.state={title:a.props.cat.title,flag:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.cat,n=t.key;return o.a.createElement("tbody",{key:n},o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},a._id),o.a.createElement("td",null,a.title),o.a.createElement("td",null,o.a.createElement("button",{href:"#",className:"btn btn-primary mr-2",onClick:function(t){return e.edit(t)}},o.a.createElement("i",{className:"far fa-edit"})),o.a.createElement("button",{href:"#",className:"btn btn-danger mr-2",onClick:function(t){return e.deleteCat(t,a._id)}},o.a.createElement("i",{className:"far fa-trash-alt"})))),this.state.flag?o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"2"},o.a.createElement("input",{type:"text",name:"title",className:"form-control",defaultValue:a.title,onChange:function(t){return e.onChange(t)}})),o.a.createElement("td",null,o.a.createElement("button",{href:"#",className:"btn btn-success mr-2",onClick:function(t){return e.update(t,a._id)}},o.a.createElement("i",{className:"fas fa-check"})),o.a.createElement("button",{href:"#",className:"btn btn-danger",onClick:function(t){return e.close(t)}},o.a.createElement("i",{className:"fas fa-times"})))):null)}}]),t}(n.Component),te=Object(p.b)(function(e){return{auth:e.auth,categories:e.categories}},{deleteCategory:function(e){return function(t){_.a.post("".concat(b,"/categories/delete/").concat(e)).then(function(e){t({type:"DELETE_CATEGORY",payload:e.data.id})}).catch(function(e){t({type:"GET_ERRORS",payload:null})})}},updateCategory:function(e,t){return function(a){_.a.post("".concat(b,"/categories/edit/").concat(e),t).then(function(e){a({type:"UPDATE_CATEGORY",payload:e.data})}).catch(function(e){a({type:"GET_ERRORS",payload:e})})}}})(ee),ae=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.categories;return e.length>0&&e.map(function(e,t){return o.a.createElement(te,{cat:e,key:t})})}}]),t}(n.Component),ne=Object(p.b)(function(e){return{auth:e.auth}},{})(ae),oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.props.getCategories()},a.open=function(e,t){a.setState({flag:!a.state.flag}),e.preventDefault()},a.close=function(e){a.setState({flag:!a.state.flag}),e.preventDefault()},a.onChange=function(e){a.setState({title:e.target.value})},a.addCat=function(e){e.preventDefault();var t=a.props.auth.user,n={title:a.state.title,name:t._id};a.props.addCategory(n),a.setState({flag:!a.state.flag})},a.state={title:"",flag:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.categories,n=a.categories,r=a.loading;return e=null===n||r?o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"3"},o.a.createElement(Z,null)))):o.a.createElement(ne,{categories:n}),o.a.createElement("div",{className:"Categories mt-5"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"text-center display-4 text-uppercase my-3"},"Categories"),o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Id"),o.a.createElement("th",{scope:"col"},"Title"),o.a.createElement("th",{scope:"col"},"Handle",!1===this.state.flag?o.a.createElement("button",{href:"#",className:"btn btn-primary ml-2",onClick:function(e){return t.open(e)}},o.a.createElement("i",{className:"fas fa-plus"})):null)),this.state.flag?o.a.createElement("tr",null,o.a.createElement("td",null,"Title"),o.a.createElement("td",null,o.a.createElement("input",{type:"text",name:"title",className:"form-control",onChange:function(e){return t.onChange(e)}})),o.a.createElement("td",null,o.a.createElement("button",{href:"#",className:"btn btn-success mr-2",onClick:function(e){return t.addCat(e)}},o.a.createElement("i",{className:"fas fa-check"})),o.a.createElement("button",{href:"#",className:"btn btn-danger",onClick:function(e){return t.close(e)}},o.a.createElement("i",{className:"fas fa-times"})))):null),e)))}}]),t}(n.Component),re=Object(p.b)(function(e){return{categories:e.categories,auth:e.auth}},{getCategories:$,addCategory:function(e){return function(t){_.a.post(b+"/categories/add",e).then(function(e){t({type:"ADD_CATEGORY",payload:e.data})}).catch(function(e){t({type:"GET_ERRORS",payload:e})})}}})(oe),ce=function(e){return function(t){t({type:"POST_LOADING"}),_.a.get("".concat(b,"/posts/").concat(e)).then(function(e){t({type:"GET_POST",payload:e.data})}).catch(function(e){t({type:"GET_ERRORS",payload:e})})}},le=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).deleteP=function(e){window.confirm("Are you sure????")&&a.props.deletePost(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post;return o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"card mt-5",style:{width:"18rem"}},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.title),o.a.createElement("p",{className:"card-text"},t.author),o.a.createElement(k.b,{to:"/posts/".concat(t._id),className:"btn btn-primary btn-block"},"View Detail"),o.a.createElement("button",{className:"btn btn-danger  btn-block",onClick:function(){return e.deleteP(t._id)}},o.a.createElement("i",{className:"far fa-trash-alt"})),o.a.createElement(k.b,{className:"btn btn-info btn-block",to:"/posts/edit/".concat(t._id)},o.a.createElement("i",{className:"far fa-edit"})))))}}]),t}(n.Component),se=Object(p.b)(function(e){return{auth:e.auth}},{deletePost:function(e){return function(t){_.a.post("".concat(b,"/posts/delete/").concat(e)).then(function(e){console.log(e),t({type:"DELETE_POST",payload:e.data})}).catch(function(e){t({type:"GET_ERRORS",payload:e})})}}})(le),ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){a.props.getPosts()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.posts,a=t.posts;return e=t.loading?o.a.createElement(Z,null):a.map(function(e,t){return o.a.createElement(se,{post:e,key:t})}),o.a.createElement("div",{className:"contaier mt-5"},o.a.createElement("div",{className:"row"},o.a.createElement("h1",{className:"text-center display-4 text-uppercase d-block w-100"},"All posts"),o.a.createElement(k.b,{to:"/posts/add",className:"btn btn-primary"},o.a.createElement("i",{className:"fas fa-plus mr-1"})," Add Post")),o.a.createElement("div",{className:"row"},e))}}]),t}(n.Component),ue=Object(p.b)(function(e){return{posts:e.posts}},{getPosts:function(){return function(e){e({type:"POST_LOADING"}),_.a.get(b+"/posts").then(function(t){e({type:"GET_ALL_POSTS",payload:t.data})}).catch(function(t){e({type:"GET_ERRORS",payload:t})})}}})(ie),me=a(25),pe=a.n(me),de=a(26),fe=a.n(de),he=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.addPost=function(){var e={body:a.state.body,title:a.state.title,category:a.state.category,author:a.state.author};a.props.addPost(e),window.confirm("Add successully")?window.location.href="/posts":window.location.href="/posts/add"},a.state={body:"",title:"",category:"default",author:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getCategories()}},{key:"render",value:function(){var e=this,t=this.props.categories.categories;return o.a.createElement("div",{className:"container mt-5"},o.a.createElement("h1",{className:"text-center text-uppercase mt-5"},"Add Post"),o.a.createElement(k.b,{className:"btn btn-info float-left my-3",to:"/posts"},"Go back"),o.a.createElement("input",{type:"text",placeholder:"Blog title",name:"title",className:"form-control mb-3",onChange:this.onChange}),o.a.createElement("select",{name:"category",id:"",className:"custom-select mb-3 ",onChange:this.onChange},t&&t.map(function(e,t){return o.a.createElement("option",{key:t,value:e.title},e.title)})),o.a.createElement("input",{type:"text",name:"author",placeholder:"Author",className:"form-control mb-3",onChange:this.onChange}),o.a.createElement(pe.a,{editor:fe.a,data:"<p>Your content go here</p>",onChange:function(t,a){var n=a.getData();e.setState({body:n})}}),o.a.createElement("button",{className:"btn btn-primary my-3 btn-block",onClick:this.addPost},"Submit"))}}]),t}(n.Component),be=Object(p.b)(function(e){return{categories:e.categories}},{getCategories:$,addPost:function(e){return function(t){_.a.post(b+"/posts/add",e).then(function(e){t({type:"ADD_POST",payload:e.data})}).catch(function(e){t({type:"GET_ERRORS",payload:e})})}}})(he),ge=a(54),Ee=a.n(ge),ye=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).addComment=function(e){var t={text:a.state.text};a.props.addComment(e,t)},a.onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.deleteComment=function(e,t){window.confirm("Are you sure??")&&a.props.deleteComment(e,t)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){}},{key:"render",value:function(){var e,t=this;return void 0!==this.props.comments&&(e=this.props.comments.map(function(e,a){return o.a.createElement("div",{className:"comment",key:a},o.a.createElement("div",{className:"name text-left p-2"},e.name),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center bg-light p-2"},o.a.createElement("p",{className:"comment text-left  m-0 pl-3"},e.text),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return t.deleteComment(t.props.id,e._id)}},o.a.createElement("i",{className:"far fa-trash-alt"}))))})),o.a.createElement("div",{className:"list-coment"},e,o.a.createElement("hr",null),o.a.createElement("label",{htmlFor:"comment"}," Your comment"),o.a.createElement("input",{type:"text",className:"form-control",name:"text",htmlFor:"comment",placeholder:"Yout comment",onChange:this.onChange}),o.a.createElement("button",{className:"btn btn-primary btn-block my-3",onClick:function(){return t.addComment(t.props.id)}},"Send"))}}]),t}(n.Component),ve=Object(p.b)(function(e){return{posts:e.posts}},{addComment:function(e,t){return function(a){_.a.post("".concat(b,"/posts/comment/").concat(e),t).then(function(e){a({type:"ADD_COMMENT",payload:e.data.comment})}).catch(function(e){a({type:"GET_ERRORS",payload:e})})}},deleteComment:function(e,t){return function(a){_.a.post("".concat(b,"/posts/comment/").concat(e,"/").concat(t)).then(function(e){a({type:"DELETE_COMMENT",payload:e.data.comment_id})}).catch(function(e){a({type:"GET_ERRORS",payload:e})})}}})(ye),Oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={text:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getPost(this.props.match.params.id)}},{key:"render",value:function(){var e,t=this.props.post,a=t.post;return e=t.loading?o.a.createElement(Z,null):o.a.createElement("div",{className:"container mt-5"},o.a.createElement("h1",{className:"text-center text-upppercase dispaly-4"},a.title),o.a.createElement("span",{className:"inline-block "},a.author," - ",a.category," -"," ",o.a.createElement(Ee.a,{format:"DD/MM/YYYY"},a.date)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.body}}))),o.a.createElement("div",{className:"box1"},e,o.a.createElement("h3",{className:"text-center"},"Comment"),o.a.createElement("div",{className:"box-comment"},o.a.createElement("div",{className:"el "},o.a.createElement(ve,{comments:a.comments,id:a._id}))))}}]),t}(n.Component),Ne=Object(p.b)(function(e){return{post:e.posts}},{getPost:ce})(Oe),Ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.props.getPost(a.props.match.params.id),a.props.getCategories()},a.onChangeCK=function(e){a.setState({body:e.editor.getData()})},a.onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.updatePost=function(e){var t;t={body:""===a.state.body?a.props.post.post.body:a.state.body,title:""===a.state.title?a.props.post.post.title:a.state.title,category:""===a.state.category?a.props.post.post.category:a.state.category,author:""===a.state.author?a.props.post.post.author:a.state.author,date:a.state.date},a.props.updatePost(e,t),window.confirm("Edit successully")&&window.history.back()},a.state={body:"",title:"",category:"",author:"",date:new Date},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post.post,a=this.props.categories.categories;return o.a.createElement("div",null,o.a.createElement("h1",{className:"text-center text-upercase display-4 w-100"},"Edit post"),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"container mt-5"},o.a.createElement(k.b,{className:"btn btn-info float-left my-3",to:"/posts"},"Go back"),o.a.createElement("input",{type:"text",placeholder:"Blog title",defaultValue:t.title,name:"title",className:"form-control mb-3",onChange:this.onChange}),o.a.createElement("select",{name:"category",id:"",className:"custom-select mb-3 ",onChange:this.onChange},o.a.createElement("option",{value:t.category},t.category),a&&a.map(function(e,a){if(e.title!==t.category)return o.a.createElement("option",{key:a,value:e.title},e.title)})),o.a.createElement("input",{type:"text",name:"author",placeholder:"Author",defaultValue:t.author,className:"form-control mb-3",onChange:this.onChange}),o.a.createElement(pe.a,{editor:fe.a,data:t.body?t.body:"<p>Your main content</>",onChange:function(t,a){e.setState({body:a.getData()})}}),o.a.createElement("button",{className:"btn btn-primary my-3 btn-block",onClick:function(){return e.updatePost(e.props.match.params.id)}},"Submit"))))}}]),t}(n.Component),je=Object(p.b)(function(e){return{post:e.posts,categories:e.categories}},{getPost:ce,getCategories:$,updatePost:function(e,t){return function(a){_.a.post("".concat(b,"/posts/edit/").concat(e),t).then(function(e){a({type:"UPDATE_POST",payload:e.data})}).catch(function(e){a({type:"GET_ERRORS",payload:e})})}}})(Ce);if(localStorage.jwtToken){R(localStorage.jwtToken);var ke=D()(localStorage.jwtToken);j.dispatch(G(ke));var we=Date.now()/1e3;ke.exp<we&&(j.dispatch(L()),window.location.href="/login")}var Se=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:j},o.a.createElement(k.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container fixed-top px-0"},o.a.createElement(U,null))," ",o.a.createElement(w.b,{exact:!0,path:"/node-blog-cl",component:M})," ",o.a.createElement("div",{className:"container"},o.a.createElement(w.b,{exact:!0,path:"/node-blog-cl/login",component:W})," ",o.a.createElement(w.b,{exact:!0,path:"/node-blog-cl/register",component:z}),o.a.createElement(w.d,null,o.a.createElement(K,{exact:!0,path:"/node-blog-cl/posts",component:ue})," "),o.a.createElement(w.d,null,o.a.createElement(K,{exact:!0,path:"/node-blog-cl/posts/add",component:be})," "),o.a.createElement(w.d,null,o.a.createElement(K,{exact:!0,path:"/node-blog-cl/posts/:id",component:Ne})," "),o.a.createElement(w.d,null,o.a.createElement(K,{exact:!0,path:"/posts/edit/:id",component:je})," "),o.a.createElement(w.d,null,o.a.createElement(K,{exact:!0,path:"/categories",component:re})," "),o.a.createElement(w.b,{exact:!0,path:"/not-found",component:S})," ")," ",o.a.createElement("div",{className:"container-fluid px-0"},o.a.createElement(H,null))," ")," ")," ")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){e.exports=a.p+"static/media/loading.a6ec563b.gif"},55:function(e,t,a){e.exports=a(120)},60:function(e,t,a){},61:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.0d143d78.chunk.js.map