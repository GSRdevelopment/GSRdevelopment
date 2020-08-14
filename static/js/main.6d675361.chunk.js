(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{150:function(e,t,a){e.exports=a(280)},179:function(e,t,a){},181:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(60),o=a.n(c),i=a(9),l=a(10),s=a(12),m=a(11),u=a(8),p=a(14),d=a(25),E=a(26),j=a.n(E),f=a(49),b=a(120),h=a.n(b).a.create({baseURL:"http://localhost:3001"}),g=a(121),v=a.n(g)()(),A=function(){return function(){var e=Object(f.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/projects");case 2:a=e.sent,t({type:"FETCH_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=(a(179),a(24)),O=a(62),y=a.n(O),I=function(){return r.a.createElement("header",{className:"ui stackable menu"},r.a.createElement(C.a,{to:"/",className:"header",id:"logo"},r.a.createElement("img",{className:"page-images",src:y.a,alt:"gsr-logo"}),r.a.createElement("div",{className:"header-title-container"},r.a.createElement("div",null,"GUSTAVO RIOS"),r.a.createElement("div",null,"{fullStack webDeveloper}"))),r.a.createElement("div",{className:"right menu"},r.a.createElement(C.a,{to:"/",className:"item"},"Portfolio"),r.a.createElement(C.a,{to:"/about",className:"item"},"About me"),r.a.createElement(C.a,{to:"/resume",className:"item"},"Resume")))},P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.fetchProjects()},e}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(I,null),"Portfolio")}}]),a}(r.a.Component),w=Object(p.b)(null,{fetchProjects:A})(P),N=function(){return r.a.createElement("div",null,r.a.createElement(I,null),"About Me")},k=function(){return r.a.createElement("div",null,r.a.createElement(I,null),"Resume")},x=(a(181),a(116)),J=a(122),R=a.n(J),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.onImageUpload(t[0].dataURL)},e.onError=function(e,t){console.log(e,t)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(R.a,{onChange:this.onChange,maxNumber:1,multiple:!0,maxFileSize:5242880,acceptType:["jpg","gif","png"],onError:this.onError},(function(e){var t=e.imageList,a=e.onImageUpload;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{key:e.key},r.a.createElement("div",null,r.a.createElement("img",{id:"submittedImage",style:{width:"100%",maxWidth:"160px"},src:e.dataURL})),r.a.createElement("div",{className:"ui primary button",style:{marginTop:"10px"},onClick:e.onUpdate},"Update"))})),r.a.createElement("div",{id:"img-upload-button",style:{marginTop:"10px"},className:"ui primary button",onClick:function(){a(),document.querySelector("#img-upload-button").setAttribute("style","display: none")}},"Upload"))}))}}]),a}(r.a.Component),U=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{name:"projectName",component:e.renderInput}),r.a.createElement(x.a,{name:"projectDescription",component:e.renderInput}),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Project Image"),r.a.createElement("div",{className:"ui card"},r.a.createElement("div",{className:"content"},e.showForm?e.actImg():null,r.a.createElement(D,{onImageUpload:e.onImageUpload}),r.a.createElement(x.a,{name:"projectLogo",component:e.renderInput})))),r.a.createElement("button",{className:"ui submit button"},e.formProps.button))},K=a(117),S=a(15),Y={title:"Create a Project",label_1:"Project Name",label_2:"Description",button:"Add Project"},L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderInput=function(e){var t=e.input;return"projectName"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,Y.label_1),r.a.createElement("input",t)):"projectDescription"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,Y.label_2),r.a.createElement("textarea",t)):"projectLogo"===t.name?r.a.createElement("input",Object.assign({style:{display:"none"}},t)):void 0},e.onImageUpload=function(t){e.props.dispatch(Object(S.a)("projectCreate","projectLogo",t))},e.onSubmit=function(t){e.props.createProject(t),e.props.dispatch(Object(S.a)("projectCreate","projectName","")),e.props.dispatch(Object(S.a)("projectCreate","projectDescription","")),document.querySelector("#submittedImage").remove()},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"ui form",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement("h2",{style:{paddingTop:"30px"}},Y.title),r.a.createElement(U,{onImageUpload:this.onImageUpload,renderInput:this.renderInput,formProps:Y})))}}]),a}(r.a.Component),Q=Object(p.b)(null,{createProject:function(e){return function(){var t=Object(f.a)(j.a.mark((function t(a){var n,r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/projectCount");case 2:return n=t.sent,n=parseInt(n.data.counter),n=(++n).toString(),t.next=8,h.post("/projectCount",{counter:n});case 8:return r=t.sent,t.next=11,h.post("/projects",Object(d.a)({id:r.data.counter},e));case 11:c=t.sent,a({type:"CREATE_PROJECT",payload:c.data}),v.push("/admin");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Object(K.a)({form:"projectCreate"})(L)),T=(a(279),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderProjects=function(){return e.props.projects.map((function(t){return r.a.createElement("div",{className:"column column-item"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h3",null,t.projectName)),r.a.createElement("div",{className:"image-container"},r.a.createElement("div",null,r.a.createElement("img",{id:"project-logo".concat(t.id),key:t.id,src:t.projectLogo}))),r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{style:{margin:"0px"},className:"ui button",onClick:function(){"Edit"===e.props.formProps.gridCardButton?e.props.onEditClick(t):e.props.onDeleteClick(t)}},e.props.formProps.gridCardButton)))}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{style:{paddingBottom:"50px",textAlign:"center"}},r.a.createElement("h2",null,this.props.formProps.gridTitle)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},className:"ui stackable six column grid"},this.renderProjects()))}}]),a}(r.a.Component)),z={gridTitle:"Select a Project to Edit",gridCardButton:"Edit",title:"Edit a Project",label_1:"Project Name",label_2:"Description",button:"Submit Changes"},B="",M=!1,X="",F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderInput=function(e){var t=e.input;return"projectName"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,z.label_1),r.a.createElement("input",t)):"projectDescription"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,z.label_2),r.a.createElement("textarea",t)):"projectLogo"===t.name?r.a.createElement("input",Object.assign({style:{display:"none"}},t)):void 0},e.onEditClick=function(t){M=!0,B=t.projectLogo,X=t.id,e.props.dispatch(Object(S.a)("projectEdit","projectName",t.projectName)),e.props.dispatch(Object(S.a)("projectEdit","projectDescription",t.projectDescription))},e.onImageUpload=function(t){e.props.dispatch(Object(S.a)("projectCreate","projectLogo",t))},e.onSubmit=function(t){e.props.editProject(t,X),e.props.dispatch(Object(S.a)("projectEdit","projectName","")),e.props.dispatch(Object(S.a)("projectEdit","projectDescription","")),document.querySelector("#submittedImageEdit").remove(),M=!1},e.actImg=function(){return r.a.createElement("img",{id:"submittedImageEdit",src:B,style:{width:"100%",maxWidth:"160px"}})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProjects()}},{key:"componentWillUnmount",value:function(){M=!1}},{key:"render",value:function(){return M?r.a.createElement("form",{className:"ui form",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement("h2",{style:{paddingTop:"30px"}},z.title),r.a.createElement(U,{showForm:M,imgScr:B,actImg:this.actImg,onImageUpload:this.onImageUpload,renderInput:this.renderInput,formProps:z})):r.a.createElement(T,{formProps:z,onEditClick:this.onEditClick,projects:this.props.projects})}}]),a}(r.a.Component),H=Object(p.b)((function(e){return{projects:Object.values(e.projects)}}),{fetchProjects:A,editProject:function(e,t){return function(){var a=Object(f.a)(j.a.mark((function a(n){var r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.patch("/projects/".concat(t),e);case 2:r=a.sent,n({type:"EDIT_PROJECT",payload:r.data}),v.push("/admin");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(Object(K.a)({form:"projectEdit"})(F)),W={gridTitle:"Select a Project to Delete",gridCardButton:"Delete",modalActionLabel:"Delete - ...",modalActionMessage:"Are you sure you want to delete ...?",modalActionDoneMessage:"... Has been deleted"},V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onDeleteClick=function(t){e.props.deleteProject(t.id)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProjects()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{id:"deleteproject-image-grid",onDeleteClick:this.onDeleteClick,formProps:W,projects:this.props.projects}))}}]),a}(r.a.Component),G=Object(p.b)((function(e){return{projects:Object.values(e.projects)}}),{fetchProjects:A,deleteProject:function(e){return function(){var t=Object(f.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.delete("projects/".concat(e));case 2:return n=t.sent,t.next=5,h.get("/projectCount");case 5:return r=t.sent,r=parseInt(r.data.counter),r=(--r).toString(),t.next=11,h.post("/projectCount",{counter:r});case 11:t.sent,a({type:"DELETE_PROJECT",payload:n.data}),v.go("/admin");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(V),Z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderAdmin=function(){var e=window.location.pathname;return"/admin/project-add"===e?r.a.createElement(Q,null):"/admin/project-edit"===e?r.a.createElement(H,null):"/admin/project-delete"===e?r.a.createElement(G,null):r.a.createElement(Q,null)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui left fixed vertical menu"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"admin-menu"},r.a.createElement("img",{className:"ui mini image",src:y.a,alt:"gsr-logo"}),r.a.createElement("div",{id:"title"},r.a.createElement("h4",{className:"header"},"Admin - Menu")))),r.a.createElement(C.a,{to:"/admin/project-add"},r.a.createElement("div",{className:"menu-item clickable"},"Create Project")),r.a.createElement(C.a,{to:"/admin/project-edit"},r.a.createElement("div",{className:"menu-item clickable"},"Edit Project")),r.a.createElement(C.a,{to:"/admin/project-delete"},r.a.createElement("div",{className:"menu-item clickable"},"Delete Project"))),r.a.createElement("div",{className:"option-container"},this.renderAdmin()))}}]),a}(r.a.Component),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.b,{history:v},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/admin",component:Z}),r.a.createElement(u.a,{path:"/",exact:!0,component:w}),r.a.createElement(u.a,{path:"/about",exact:!0,component:N}),r.a.createElement(u.a,{path:"/resume",exact:!0,component:k}))))}}]),a}(r.a.Component),_=a(7),$=a(118),ee=a(46),te=a(85),ae=a.n(te),ne=Object(_.c)({projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROJECTS":return Object(d.a)(Object(d.a)({},e),ae.a.mapKeys(t.payload,"id"));case"CREATE_PROJECT":case"EDIT_PROJECT":return Object(d.a)(Object(d.a)({},e),{},Object(ee.a)({},t.payload.id,t.payload));case"DELETE_PROJECT":return ae.a.omit(e,t.payload);default:return e}},form:$.a}),re=a(124),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,oe=Object(_.e)(ne,ce(Object(_.a)(re.a)));o.a.render(r.a.createElement(p.a,{store:oe},r.a.createElement(q,null)),document.querySelector("#root"))},62:function(e,t){e.exports="data:image/png;base64,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"}},[[150,1,2]]]);
//# sourceMappingURL=main.6d675361.chunk.js.map