(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Z10u:function(t,e,a){"use strict";a.r(e),a.d(e,"FarmerdashboardModule",(function(){return qt}));var r=a("ofXK"),n=a("fXoL"),o=a("AhZb"),i=a("tyNb"),c=a("XhcP"),s=a("MutI");const d=function(){return["/products"]},l=function(){return["/orders"]};let b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Ib({type:t,selectors:[["app-sidenav"]],inputs:{profile:"profile"},decls:21,vars:6,consts:[[1,"sidenav-container"],[1,"sidenav-logo"],[1,"sidenav-user"],["src","https://storage.googleapis.com/farmermarket/defaultprofile.png","alt","","srcset","",1,"sidenav-user-img"],[1,"sidenav-user-detail"],[1,"sidenav-user-detail-name"],[1,"sidenav-user-detail-role"],[1,"sidenav-menu-list"],["mat-list-item","","routerLink",".",1,"sidenav-menu-list-link"],["mat-list-item","",1,"sidenav-menu-list-link",3,"routerLink"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"div",1),n.Ub(2,"h1"),n.Ac(3,"Farmer Market"),n.Tb(),n.Tb(),n.Ub(4,"div",2),n.Ub(5,"div"),n.Pb(6,"img",3),n.Tb(),n.Ub(7,"div",4),n.Ub(8,"div",5),n.Ac(9),n.Tb(),n.Ub(10,"div",6),n.Ac(11,"farmer"),n.Tb(),n.Tb(),n.Tb(),n.Ub(12,"mat-nav-list",7),n.Ub(13,"a",8),n.Ac(14," New Orders "),n.Tb(),n.Ub(15,"a",9),n.Ac(16,"Products"),n.Tb(),n.Ub(17,"a",8),n.Ac(18,"Add Product"),n.Tb(),n.Ub(19,"a",9),n.Ac(20,"Orders"),n.Tb(),n.Tb(),n.Tb()),2&t&&(n.Cb(9),n.Dc(" ",null==e.profile?null:e.profile.firstname," ",null==e.profile?null:e.profile.lastname," "),n.Cb(6),n.mc("routerLink",n.oc(4,d)),n.Cb(4),n.mc("routerLink",n.oc(5,l)))},directives:[s.d,s.b,i.c],styles:[".sidenav-logo[_ngcontent-%COMP%]{text-align:center;padding-top:50px}.sidenav-user[_ngcontent-%COMP%]{text-align:center;padding:10%}.sidenav-user-img[_ngcontent-%COMP%]{width:100px;margin-bottom:12px;border-radius:20%}.sidenav-user-detail-name[_ngcontent-%COMP%]{font-weight:600;font-size:18px}.sidenav-menu-list[_ngcontent-%COMP%]{padding-left:20px}.sidenav-menu-list-link[_ngcontent-%COMP%]{font-family:monospace;font-size:15px;font-weight:500}"]}),t})();var m=a("/t3+"),u=a("bTqV"),p=a("NFeN"),f=a("TU8p"),g=a("STbY"),h=a("Wp6s");const v=function(){return["/"]};let C=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}ngOnInit(){this.authService.getMe().subscribe(t=>{this.userProfile=t.data},t=>{console.log(t.error),this.userProfile={firstname:"",lastname:"",picture:"url"}})}onLogout(){this.authService.logout(),this.router.navigate(["/login"])}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(o.a),n.Ob(i.b))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-dashboard"]],decls:31,vars:4,consts:[[1,"dashboard-container"],["mode","side","opened","","role","navigation",1,"dashboard-drawer"],["drawer",""],[3,"profile"],[1,"navbar"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"navbar-link"],[3,"click"],["mat-list-item","",1,"menu-tab-list",3,"routerLink"],[1,"navbar-spacer"],["mat-icon-button","","aria-label","emails","matBadge","0","matBadgePosition","before",1,"navbar-link","mail_outline"],["mat-icon-button","","aria-label","orders notifications","matBadge","0","matBadgePosition","before","matBadgeColor","warn",1,"navbar-link","notifications_none"],["mat-icon-button","","aria-label","Account activity",1,"navbar-link",3,"matMenuTriggerFor"],["mat-card-avatar","",1,"navbar-user-image"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item",""]],template:function(t,e){if(1&t){const t=n.Vb();n.Ub(0,"body"),n.Ub(1,"mat-drawer-container",0),n.Ub(2,"mat-drawer",1,2),n.Ub(4,"mat-nav-list"),n.Pb(5,"app-sidenav",3),n.Tb(),n.Tb(),n.Ub(6,"mat-drawer-content"),n.Ub(7,"div"),n.Ub(8,"mat-toolbar",4),n.Ub(9,"button",5),n.Ub(10,"mat-icon",6),n.cc("click",(function(){return n.tc(t),n.rc(3).toggle()})),n.Ac(11,"menu"),n.Tb(),n.Tb(),n.Ub(12,"span"),n.Ub(13,"a",7),n.Ac(14," Farmer Market "),n.Tb(),n.Tb(),n.Pb(15,"span",8),n.Ub(16,"button",9),n.Ub(17,"mat-icon"),n.Ac(18,"mail_outline"),n.Tb(),n.Tb(),n.Ub(19,"button",10),n.Ub(20,"mat-icon"),n.Ac(21,"notifications_none"),n.Tb(),n.Tb(),n.Ub(22,"button",11),n.Pb(23,"mat-icon",12),n.Tb(),n.Ub(24,"mat-menu",null,13),n.Ub(26,"button",14),n.cc("click",(function(){return e.onLogout()})),n.Ac(27,"Logout"),n.Tb(),n.Ub(28,"button",15),n.Ac(29,'""'),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Pb(30,"router-outlet"),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=n.rc(25);n.Cb(5),n.mc("profile",e.userProfile),n.Cb(8),n.mc("routerLink",n.oc(3,v)),n.Cb(9),n.mc("matMenuTriggerFor",t)}},directives:[c.b,c.a,s.d,b,c.c,m.a,u.b,p.a,s.b,i.c,f.a,g.c,h.b,g.d,g.a,i.e],styles:[".dashboard-container[_ngcontent-%COMP%]{background-color:#f6f6f6;font-size:14px;font-weight:400;font-family:monospace;color:#6c757d;min-height:100vh}@media (max-width:1024px){.dashboard-drawer[_ngcontent-%COMP%]{min-width:25vw!important;width:25vw;flex:1}}.dashboard-drawer[_ngcontent-%COMP%]{min-width:15vw;width:15vw;flex:1}.navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 25px 0 rgba(0,0,0,.1);margin:30px;width:auto;height:70px;border-radius:5px}.navbar-user-image[_ngcontent-%COMP%]{background-image:url(https://storage.googleapis.com/farmermarket/defaultprofile.png);background-size:cover;box-shadow:4px 3px 6px 0 rgba(0,0,0,.2)}.navbar-link[_ngcontent-%COMP%]{padding:0 3rem 0 .5rem}.menu-tab-list[_ngcontent-%COMP%]{color:#000}"]}),t})();var U=a("lJxs"),T=a("0MNC"),w=a("zkoq"),P=a("bv9b"),O=a("+0xr"),_=a("0IaG"),A=a("3Pt+"),y=a("SxV6"),x=a("JIr8"),k=a("z6cu"),D=a("tk/3");let z=(()=>{class t{constructor(t){this.http=t,this.farmerUrl="https://farmer-market.herokuapp.com/api/v1/farmermarket/farmers"}getProducts(){return this.http.get(this.farmerUrl+"/products").pipe(Object(U.a)(t=>t),Object(x.a)(t=>Object(k.a)(t)))}addProduct(t){return this.http.post(this.farmerUrl+"/products",t)}getOrders(){return this.http.get(this.farmerUrl+"/orders").pipe(Object(U.a)(t=>t),Object(x.a)(t=>Object(k.a)(t)))}updateOrders(t,e){return this.http.patch(`${this.farmerUrl}/orders/${t}`,{status:e}).pipe(Object(U.a)(t=>t),Object(x.a)(t=>Object(k.a)(t)))}}return t.\u0275fac=function(e){return new(e||t)(n.Yb(D.b))},t.\u0275prov=n.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=a("kmnG"),M=a("d3UM"),I=a("FKr1");function q(t,e){if(1&t&&(n.Ub(0,"mat-list",3),n.Ub(1,"mat-list-item",4),n.Ac(2),n.Ub(3,"span",13),n.Ub(4,"strong"),n.Ac(5),n.Tb(),n.Tb(),n.Tb(),n.Tb()),2&t){const t=e.$implicit;n.Cb(2),n.Cc("",t.name," "),n.Cb(3),n.Cc(" (",t.quantity,")")}}function F(t,e){if(1&t&&(n.Ub(0,"mat-option",14),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.mc("value",t.value),n.Cb(1),n.Cc(" ",t.viewValue," ")}}function R(t,e){1&t&&(n.Ub(0,"mat-error"),n.Ac(1,"Please choose a status"),n.Tb())}let j=(()=>{class t{constructor(t,e){this.data=t,this.farmerService=e,this.orderStatus=[{value:"ready",viewValue:"Ready"},{value:"complete",viewValue:"Completed"}],this.statusUpdateControl=new A.d("",A.r.required)}ngOnInit(){}updateOrderStatus(){this.farmerService.updateOrders(this.data._id,this.statusUpdateControl.value).pipe(Object(y.a)()).subscribe(t=>{console.log(t)},t=>{console.log(t.error)})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(_.a),n.Ob(z))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-detail"]],decls:38,vars:11,consts:[[1,"orderDetailContainer",2,"width","25vw"],["mat-dialog-title",""],["role","list",4,"ngFor","ngForOf"],["role","list"],["role","listitem"],[2,"padding-left","40px"],["appearance","fill",2,"width","75%"],["required","",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["align","end"],["mat-button","",3,"mat-dialog-close"],["mat-button","",3,"mat-dialog-close","disabled","click"],[2,"padding-right","40px"],[3,"value"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"h1",1),n.Ac(2,"Update Order Status"),n.Tb(),n.Ub(3,"h3",1),n.Ac(4),n.Tb(),n.Ub(5,"mat-dialog-content"),n.zc(6,q,6,2,"mat-list",2),n.Pb(7,"hr"),n.Ub(8,"mat-list",3),n.Ub(9,"mat-list-item",4),n.Ac(10,"total quantity "),n.Ub(11,"span",5),n.Ub(12,"strong"),n.Ac(13),n.Tb(),n.Tb(),n.Tb(),n.Ub(14,"mat-list-item",4),n.Ac(15,"total price "),n.Ub(16,"span",5),n.Ub(17,"strong"),n.Ac(18),n.Tb(),n.Tb(),n.Tb(),n.Ub(19,"mat-list-item",4),n.Ac(20,"order status "),n.Ub(21,"span",5),n.Ub(22,"strong"),n.Ac(23),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Pb(24,"hr"),n.Ub(25,"h4"),n.Ac(26,"Update order status"),n.Tb(),n.Ub(27,"mat-form-field",6),n.Ub(28,"mat-label"),n.Ac(29,"Order status"),n.Tb(),n.Ub(30,"mat-select",7),n.zc(31,F,2,2,"mat-option",8),n.Tb(),n.zc(32,R,2,0,"mat-error",9),n.Tb(),n.Tb(),n.Ub(33,"mat-dialog-actions",10),n.Ub(34,"button",11),n.Ac(35,"Cancel"),n.Tb(),n.Ub(36,"button",12),n.cc("click",(function(){return e.updateOrderStatus()})),n.Ac(37," Update "),n.Tb(),n.Tb(),n.Tb()),2&t&&(n.Cb(4),n.Cc("order no # ",e.data._id,""),n.Cb(2),n.mc("ngForOf",e.data.products.items),n.Cb(7),n.Bc(e.data.products.quantity),n.Cb(5),n.Bc(e.data.products.totalprice),n.Cb(5),n.Bc(e.data.status),n.Cb(7),n.mc("formControl",e.statusUpdateControl),n.Cb(1),n.mc("ngForOf",e.orderStatus),n.Cb(1),n.mc("ngIf",e.statusUpdateControl.hasError("required")),n.Cb(2),n.mc("mat-dialog-close","close"),n.Cb(2),n.mc("mat-dialog-close",e.statusUpdateControl.value)("disabled",!e.statusUpdateControl.valid))},directives:[_.g,_.e,r.k,s.a,s.b,S.c,S.g,M.a,A.q,A.l,A.e,r.l,_.c,u.b,_.d,I.j,S.b],styles:[""]}),t})();var L=a("M9IT"),B=a("qFsG"),N=a("Dh3D");function $(t,e){1&t&&(n.Ub(0,"th",19),n.Ac(1," Order No. "),n.Tb())}function E(t,e){if(1&t&&(n.Ub(0,"td",20),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Bc(t._id)}}function H(t,e){1&t&&(n.Ub(0,"th",21),n.Ac(1," Status "),n.Tb())}function V(t,e){if(1&t&&(n.Ub(0,"td",20),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Bc(t.status)}}function Q(t,e){1&t&&(n.Ub(0,"th",22),n.Ac(1," Quantity "),n.Tb())}function G(t,e){if(1&t&&(n.Ub(0,"td",20),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Cc(" ",t.products.quantity," ")}}function J(t,e){1&t&&(n.Ub(0,"th",23),n.Ac(1," Totalprice "),n.Tb())}function W(t,e){if(1&t&&(n.Ub(0,"td",20),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Cc(" ",t.products.totalprice," ")}}function K(t,e){1&t&&(n.Ub(0,"th",24),n.Ac(1," Details "),n.Tb())}function X(t,e){if(1&t){const t=n.Vb();n.Ub(0,"td",20),n.Ub(1,"button",25),n.cc("click",(function(){n.tc(t);const a=e.$implicit;return n.gc().openOrderDetailDialog(a)})),n.Ac(2," Detail "),n.Tb(),n.Tb()}}function Y(t,e){1&t&&n.Pb(0,"tr",26)}function Z(t,e){1&t&&n.Pb(0,"tr",27)}let tt=(()=>{class t{constructor(t,e){this.dialog=t,this.farmerService=e,this.displayedColumns=["order_number","status","quantity","totalprice","detailaction"],this.dataSource=[],this.sortedData=new O.k(this.dataSource)}ngOnInit(){this.farmerService.getOrders().pipe(Object(y.a)()).subscribe(t=>{console.log(t),this.dataSource=t.data,this.sortedData=new O.k(this.dataSource),this.sortedData.paginator=this.paginator},t=>{console.log(t.error)})}sortData(t){const e=this.dataSource.slice();if(!t.active||""===t.direction)return void(this.sortedData=new O.k(e));const a=e.sort((e,a)=>{const r="asc"===t.direction;switch(t.active){case"order_number":return et(e._id,a._id,r);case"totalprice":return et(e.products.totalprice,a.products.totalprice,r);case"quantity":return et(e.products.quantity,a.products.quantity,r);case"status":return et(e.status,a.status,r);default:return 0}});this.sortedData=new O.k(a),this.sortedData.paginator=this.paginator}openOrderDetailDialog(t){this.dialog.open(j,{data:t}).afterClosed().subscribe(e=>{console.log(e),"close"!=e&&(this.dataSource=this.dataSource.map(a=>a._id==t._id?Object.assign(Object.assign({},a),{status:e}):a),this.sortedData=new O.k(this.dataSource),this.sortedData.paginator&&this.sortedData.paginator.firstPage())})}applyFilter(t){const e=t.target.value,a=this.dataSource.filter(t=>t.status.toLowerCase().includes(e.toLowerCase()));this.sortedData=new O.k(a),this.sortedData.paginator=this.paginator}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(_.b),n.Ob(z))},t.\u0275cmp=n.Ib({type:t,selectors:[["orders-table"]],viewQuery:function(t,e){var a;1&t&&n.xc(L.a,!0),2&t&&n.qc(a=n.dc())&&(e.paginator=a.first)},decls:25,vars:5,consts:[[1,"order-table-container"],[1,"filter-form"],["matInput","","placeholder","Ex. Abebe Bikila",3,"keyup"],["input",""],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","order_number"],["mat-header-cell","","mat-sort-header","order_number",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","status"],["mat-header-cell","","mat-sort-header","status",4,"matHeaderCellDef"],["matColumnDef","quantity"],["mat-header-cell","","mat-sort-header","quantity",4,"matHeaderCellDef"],["matColumnDef","totalprice"],["mat-header-cell","","mat-sort-header","totalprice",4,"matHeaderCellDef"],["matColumnDef","detailaction"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageSize"],["mat-header-cell","","mat-sort-header","order_number"],["mat-cell",""],["mat-header-cell","","mat-sort-header","status"],["mat-header-cell","","mat-sort-header","quantity"],["mat-header-cell","","mat-sort-header","totalprice"],["mat-header-cell",""],["mat-stroked-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"mat-form-field",1),n.Ub(2,"mat-label"),n.Ac(3,"Filter"),n.Tb(),n.Ub(4,"input",2,3),n.cc("keyup",(function(t){return e.applyFilter(t)})),n.Tb(),n.Tb(),n.Ub(6,"table",4),n.cc("matSortChange",(function(t){return e.sortData(t)})),n.Sb(7,5),n.zc(8,$,2,0,"th",6),n.zc(9,E,2,1,"td",7),n.Rb(),n.Sb(10,8),n.zc(11,H,2,0,"th",9),n.zc(12,V,2,1,"td",7),n.Rb(),n.Sb(13,10),n.zc(14,Q,2,0,"th",11),n.zc(15,G,2,1,"td",7),n.Rb(),n.Sb(16,12),n.zc(17,J,2,0,"th",13),n.zc(18,W,2,1,"td",7),n.Rb(),n.Sb(19,14),n.zc(20,K,2,0,"th",15),n.zc(21,X,3,0,"td",7),n.Rb(),n.zc(22,Y,1,0,"tr",16),n.zc(23,Z,1,0,"tr",17),n.Tb(),n.Pb(24,"mat-paginator",18),n.Tb()),2&t&&(n.Cb(6),n.mc("dataSource",e.sortedData),n.Cb(16),n.mc("matHeaderRowDef",e.displayedColumns),n.Cb(1),n.mc("matRowDefColumns",e.displayedColumns),n.Cb(1),n.mc("length",20)("pageSize",5))},directives:[S.c,S.g,B.a,O.j,N.a,O.c,O.e,O.b,O.g,O.i,L.a,O.d,N.b,O.a,u.b,O.f,O.h],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:none}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.order-table-container[_ngcontent-%COMP%]{position:relative;max-height:425px;overflow:auto}.filter-form[_ngcontent-%COMP%]{float:right;text-align:right;font-size:14px;color:#000}"]}),t})();function et(t,e,a){return(t<e?-1:1)*(a?1:-1)}function at(t,e){1&t&&(n.Ub(0,"mat-error"),n.Ac(1," Name is "),n.Ub(2,"strong"),n.Ac(3,"required"),n.Tb(),n.Tb())}function rt(t,e){1&t&&(n.Ub(0,"mat-hint"),n.Ac(1," Add Product Photo "),n.Tb())}function nt(t,e){if(1&t&&(n.Ub(0,"mat-hint"),n.Ac(1),n.Tb()),2&t){n.gc();const t=n.rc(35);n.Cb(1),n.Bc(t.files[0].name)}}function ot(t,e){1&t&&(n.Ub(0,"mat-error"),n.Ac(1," Please enter a valid Photo "),n.Tb())}let it=(()=>{class t{constructor(t,e){this.fb=t,this.farmerService=e,this.addProductForm=t.group({name:["",A.r.required],price:["",A.r.required],quantity:["",A.r.required],photo:["",[A.r.required,this.validFileExtensions]],description:["",A.r.required]})}get photo(){return this.addProductForm.get("photo")}get name(){return this.addProductForm.get("name")}ngOnInit(){}onAddProduct(t){const e=new FormData;e.append("image",t.files[0],t.files[0].name),e.append("name",this.addProductForm.value.name),e.append("price",this.addProductForm.value.price),e.append("quantity",this.addProductForm.value.quantity),e.append("description",this.addProductForm.value.description),this.farmerService.addProduct(e).subscribe(t=>{console.log(t)},t=>{console.log(t)})}validFileExtensions(t){return t.value.endsWith(".jpeg")||t.value.endsWith(".jpg")||t.value.endsWith(".png")?null:{invalid:!0}}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(A.c),n.Ob(z))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-add-product-dialog"]],decls:54,vars:8,consts:[[1,"add-product-dialog-container"],["mat-dialog-title",""],[1,"mat-typography"],[3,"formGroup"],["appearance","outline",1,"product-form-full-width"],["type","text","matInput","","placeholder","Ex. Avocado...","formControlName","name"],[4,"ngIf"],["type","number","matInput","","placeholder","Ex. $12","formControlName","price"],["matPrefix",""],["matSuffix",""],["type","number","matInput","","placeholder","Ex. 20","formControlName","quantity"],[1,"product-form-full-width"],["type","file","accept","image/*","formControlName","photo",3,"hidden"],["files",""],["mat-button","",1,"btn-addphoto",3,"click"],["matInput","","placeholder","Ex. It is...","formControlName","description"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","color","primary",3,"mat-dialog-close","disabled","click"]],template:function(t,e){if(1&t){const t=n.Vb();n.Ub(0,"div",0),n.Ub(1,"h2",1),n.Ac(2,"Add Product"),n.Tb(),n.Ub(3,"mat-dialog-content",2),n.Ub(4,"form",3),n.Ub(5,"p"),n.Ub(6,"mat-form-field",4),n.Ub(7,"mat-label"),n.Ac(8,"Name"),n.Tb(),n.Pb(9,"input",5),n.Ub(10,"mat-hint"),n.Ac(11,"Add Product name"),n.Tb(),n.zc(12,at,4,0,"mat-error",6),n.Tb(),n.Tb(),n.Ub(13,"p"),n.Ub(14,"mat-form-field",4),n.Ub(15,"mat-label"),n.Ac(16,"Price"),n.Tb(),n.Pb(17,"input",7),n.Ub(18,"span",8),n.Ac(19,"$\xa0"),n.Tb(),n.Ub(20,"span",9),n.Ac(21,".00"),n.Tb(),n.Ub(22,"mat-hint"),n.Ac(23,"Add Product price"),n.Tb(),n.Tb(),n.Tb(),n.Ub(24,"p"),n.Ub(25,"mat-form-field",4),n.Ub(26,"mat-label"),n.Ac(27,"Quantity"),n.Tb(),n.Pb(28,"input",10),n.Ub(29,"mat-hint"),n.Ac(30,"Add Product quantity"),n.Tb(),n.Tb(),n.Tb(),n.Ub(31,"div",11),n.Ub(32,"mat-label"),n.Ac(33,"Photo "),n.Tb(),n.Pb(34,"input",12,13),n.zc(36,rt,2,0,"mat-hint",6),n.zc(37,nt,2,1,"mat-hint",6),n.Ub(38,"button",14),n.cc("click",(function(){return n.tc(t),n.rc(35).click()})),n.Ub(39,"mat-icon"),n.Ac(40,"add_a_photo"),n.Tb(),n.Tb(),n.zc(41,ot,2,0,"mat-error",6),n.Tb(),n.Ub(42,"p"),n.Ub(43,"mat-form-field",4),n.Ub(44,"mat-label"),n.Ac(45,"Description"),n.Tb(),n.Pb(46,"textarea",15),n.Ub(47,"mat-hint"),n.Ac(48,"Add Product description"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(49,"mat-dialog-actions",16),n.Ub(50,"button",17),n.Ac(51,"Cancel"),n.Tb(),n.Ub(52,"button",18),n.cc("click",(function(){n.tc(t);const a=n.rc(35);return e.onAddProduct(a)})),n.Ac(53," Add Product "),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=n.rc(35);n.Cb(4),n.mc("formGroup",e.addProductForm),n.Cb(8),n.mc("ngIf",e.name.hasError("required")),n.Cb(22),n.mc("hidden",!0),n.Cb(2),n.mc("ngIf",!t.files[0]),n.Cb(1),n.mc("ngIf",t.files[0]),n.Cb(4),n.mc("ngIf",e.photo.hasError("invalid")&&!e.photo.hasError("required")),n.Cb(11),n.mc("mat-dialog-close",!0)("disabled",!e.addProductForm.valid)}},directives:[_.g,_.e,A.s,A.m,A.g,S.c,S.g,B.a,A.b,A.l,A.f,S.f,r.l,A.o,S.h,S.i,u.b,p.a,_.c,_.d,S.b],styles:[".product-form-full-width[_ngcontent-%COMP%]{width:100%}.add-product-dialog-container[_ngcontent-%COMP%]{min-width:35vw!important;border-radius:20px!important}.mat-dialog-container[_ngcontent-%COMP%]{border-radius:20px}.btn-addphoto[_ngcontent-%COMP%]{margin-left:450px}"]}),t})();var ct=a("Qu3c");function st(t,e){1&t&&(n.Ub(0,"th",19),n.Ac(1," photo "),n.Tb())}function dt(t,e){if(1&t&&(n.Ub(0,"td",20),n.Pb(1,"img",21),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.mc("src",t.photo,n.uc)}}function lt(t,e){1&t&&(n.Ub(0,"th",22),n.Ac(1," Name "),n.Tb())}function bt(t,e){if(1&t&&(n.Ub(0,"td",20),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Bc(t.name)}}function mt(t,e){1&t&&(n.Ub(0,"th",23),n.Ac(1,"Price"),n.Tb())}function ut(t,e){if(1&t&&(n.Ub(0,"td",20),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Bc(t.price)}}function pt(t,e){1&t&&(n.Ub(0,"th",24),n.Ac(1," Quantity "),n.Tb())}function ft(t,e){if(1&t&&(n.Ub(0,"td",20),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Bc(t.quantity)}}function gt(t,e){if(1&t){const t=n.Vb();n.Ub(0,"th",25),n.Ub(1,"button",26),n.cc("click",(function(){return n.tc(t),n.gc().addProductDialog()})),n.Ub(2,"mat-icon"),n.Ac(3,"add"),n.Tb(),n.Tb(),n.Tb()}}function ht(t,e){1&t&&n.Pb(0,"td",20)}function vt(t,e){1&t&&n.Pb(0,"tr",27)}function Ct(t,e){1&t&&n.Pb(0,"tr",28)}const Ut=function(){return[5,8]};let Tt=(()=>{class t{constructor(t,e){this.dialog=t,this.farmerService=e,this.displayedColumns=["photo","name","price","quantity","addproduct"]}ngOnInit(){this.farmerService.getProducts().subscribe(t=>{this.dataSource=t.data,this.sortedData=new O.k(this.dataSource),this.sortedData.paginator=this.paginator},t=>{console.log(t)})}addProductDialog(){this.dialog.open(it).afterClosed().subscribe(t=>{console.log("Dialog result: "+t)})}sortData(t){const e=this.dataSource.slice();if(!t.active||""===t.direction)return void(this.sortedData=new O.k(e));const a=e.sort((e,a)=>{const r="asc"===t.direction;switch(t.active){case"name":return wt(e.name,a.name,r);case"price":return wt(e.price,a.price,r);case"quantity":return wt(e.quantity,a.quantity,r);default:return 0}});this.sortedData=new O.k(a),this.sortedData.paginator=this.paginator}applyFilter(t){const e=t.target.value,a=this.dataSource.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));this.sortedData=new O.k(a),this.sortedData.paginator=this.paginator}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(_.b),n.Ob(z))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-products-table"]],viewQuery:function(t,e){var a;1&t&&n.xc(L.a,!0),2&t&&n.qc(a=n.dc())&&(e.paginator=a.first)},decls:25,vars:5,consts:[[1,"productlist-table-container"],[1,"filter-form"],["matInput","","placeholder","Ex. Abebe Bikila",3,"keyup"],["input",""],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","photo"],["mat-header-cell","","mat-sort-header","position",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","name",4,"matHeaderCellDef"],["matColumnDef","price"],["mat-header-cell","","mat-sort-header","price",4,"matHeaderCellDef"],["matColumnDef","quantity"],["mat-header-cell","","mat-sort-header","quantity",4,"matHeaderCellDef"],["matColumnDef","addproduct"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header","position"],["mat-cell",""],["alt","image","width","40","height","50",1,"product-img",3,"src"],["mat-header-cell","","mat-sort-header","name"],["mat-header-cell","","mat-sort-header","price"],["mat-header-cell","","mat-sort-header","quantity"],["mat-header-cell",""],["mat-mini-fab","","color","primary","matTooltip","Add Product",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"mat-form-field",1),n.Ub(2,"mat-label"),n.Ac(3,"Filter"),n.Tb(),n.Ub(4,"input",2,3),n.cc("keyup",(function(t){return e.applyFilter(t)})),n.Tb(),n.Tb(),n.Ub(6,"table",4),n.cc("matSortChange",(function(t){return e.sortData(t)})),n.Sb(7,5),n.zc(8,st,2,0,"th",6),n.zc(9,dt,2,1,"td",7),n.Rb(),n.Sb(10,8),n.zc(11,lt,2,0,"th",9),n.zc(12,bt,2,1,"td",7),n.Rb(),n.Sb(13,10),n.zc(14,mt,2,0,"th",11),n.zc(15,ut,2,1,"td",7),n.Rb(),n.Sb(16,12),n.zc(17,pt,2,0,"th",13),n.zc(18,ft,2,1,"td",7),n.Rb(),n.Sb(19,14),n.zc(20,gt,4,0,"th",15),n.zc(21,ht,1,0,"td",7),n.Rb(),n.zc(22,vt,1,0,"tr",16),n.zc(23,Ct,1,0,"tr",17),n.Tb(),n.Pb(24,"mat-paginator",18),n.Tb()),2&t&&(n.Cb(6),n.mc("dataSource",e.sortedData),n.Cb(16),n.mc("matHeaderRowDef",e.displayedColumns),n.Cb(1),n.mc("matRowDefColumns",e.displayedColumns),n.Cb(1),n.mc("pageSizeOptions",n.oc(4,Ut)))},directives:[S.c,S.g,B.a,O.j,N.a,O.c,O.e,O.b,O.g,O.i,L.a,O.d,N.b,O.a,u.b,ct.a,p.a,O.f,O.h],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:none}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.productlist-table-container[_ngcontent-%COMP%]{position:relative;max-height:425px;overflow:auto}.filter-form[_ngcontent-%COMP%]{float:right;text-align:right;font-size:14px;color:#000}.product-img[_ngcontent-%COMP%]{width:80px;border-radius:50%!important}"]}),t})();function wt(t,e,a){return(t<e?-1:1)*(a?1:-1)}function Pt(t,e){1&t&&(n.Ub(0,"div"),n.Ac(1," 20 new orders "),n.Pb(2,"mat-progress-bar",8),n.Tb())}function Ot(t,e){1&t&&(n.Ub(0,"div"),n.Ac(1," $100 total earnings "),n.Pb(2,"mat-progress-bar",9),n.Tb())}function _t(t,e){1&t&&(n.Ub(0,"div"),n.Ac(1," 200 orders so far "),n.Tb())}function At(t,e){1&t&&(n.Ub(0,"div"),n.Ac(1," 2 Returns "),n.Pb(2,"mat-progress-bar",10),n.Tb())}function yt(t,e){1&t&&(n.Ub(0,"div"),n.Pb(1,"orders-table"),n.Tb())}function xt(t,e){1&t&&(n.Ub(0,"div"),n.Pb(1,"app-products-table"),n.Tb())}const kt=function(t){return["dashboard-card",t]};function Dt(t,e){if(1&t&&(n.Ub(0,"mat-grid-tile",3),n.Ub(1,"mat-card",4),n.Ub(2,"mat-card-header"),n.Ub(3,"mat-card-title"),n.Ac(4),n.Tb(),n.Tb(),n.Ub(5,"mat-card-content",5),n.Ub(6,"mat-icon",6),n.Ac(7),n.Tb(),n.zc(8,Pt,3,0,"div",7),n.zc(9,Ot,3,0,"div",7),n.zc(10,_t,2,0,"div",7),n.zc(11,At,3,0,"div",7),n.zc(12,yt,2,0,"div",7),n.zc(13,xt,2,0,"div",7),n.Tb(),n.Tb(),n.Tb()),2&t){const t=e.$implicit;n.mc("colspan",t.cols)("rowspan",t.rows),n.Cb(1),n.mc("ngClass",n.pc(11,kt,t.classname)),n.Cb(3),n.Cc(" ",t.title," "),n.Cb(3),n.Bc(t.bg_icon_name),n.Cb(1),n.mc("ngIf","New Orders"==t.title),n.Cb(1),n.mc("ngIf","Earnings"==t.title),n.Cb(1),n.mc("ngIf","Orders"==t.title),n.Cb(1),n.mc("ngIf","Returns"==t.title),n.Cb(1),n.mc("ngIf","Orders List"==t.title),n.Cb(1),n.mc("ngIf","Product Inventory"==t.title)}}let zt=(()=>{class t{constructor(t){this.breakpointObserver=t,this.cards=this.breakpointObserver.observe(T.b.Handset).pipe(Object(U.a)(({matches:t})=>t?[{title:"New Orders",classname:"new-orders",bg_icon_name:"local_shipping",cols:4,rows:1},{title:"Earnings",classname:"total-earnings",bg_icon_name:"monetization_on",cols:4,rows:1},{title:"Orders",classname:"total-orders",bg_icon_name:"account_balance",cols:4,rows:1},{title:"Returns",classname:"returns",bg_icon_name:"backspace",cols:4,rows:1},{title:"Orders List",classname:"",bg_icon_name:"local_shipping",cols:4,rows:3},{title:"Profile",classname:"",bg_icon_name:"account_circle",cols:4,rows:1},{title:"Product Inventory",classname:"",bg_icon_name:"add_shopping_cart",cols:4,rows:3}]:[{title:"New Orders",classname:"new-orders",bg_icon_name:"local_shipping",cols:1,rows:1},{title:"Earnings",classname:"total-earnings",bg_icon_name:"monetization_on",cols:1,rows:1},{title:"Orders",classname:"total-orders",bg_icon_name:"account_balance",cols:1,rows:1},{title:"Returns",classname:"returns",bg_icon_name:"backspace",cols:1,rows:1},{title:"Orders List",classname:"",bg_icon_name:"local_shipping",cols:3,rows:3},{title:"Profile",classname:"",bg_icon_name:"account_circle",cols:1,rows:3},{title:"Product Inventory",classname:"",bg_icon_name:"add_shopping_cart",cols:4,rows:3}]))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(T.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-home-dashboard"]],decls:4,vars:3,consts:[[1,"grid-container"],["cols","4","rowHeight","175px"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],[3,"ngClass"],[1,"dashboard-card-content"],[1,"new-orders-bg-img"],[4,"ngIf"],["mode","determinate","value","40"],["mode","determinate","value","70"],["mode","determinate","value","10","color","warn"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"mat-grid-list",1),n.zc(2,Dt,14,13,"mat-grid-tile",2),n.hc(3,"async"),n.Tb(),n.Tb()),2&t&&(n.Cb(2),n.mc("ngForOf",n.ic(3,1,e.cards)))},directives:[w.a,r.k,w.c,h.a,r.j,h.d,h.f,h.c,p.a,r.l,P.a,tt,Tt],pipes:[r.b],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;right:15px;bottom:15px;box-shadow:-20px -5rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1);border-radius:10px;border:none;overflow:hidden;font-family:monospace}mat-grid-tile[_ngcontent-%COMP%]{overflow:inherit}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center;color:#f5f5f5;font-size:20px;font-weight:500}.new-orders[_ngcontent-%COMP%]{background:#348f50;background:linear-gradient(0deg,#56b4d3,#348f50)}.total-earnings[_ngcontent-%COMP%]{background:#83a4d4;background:linear-gradient(90deg,#b6fbff,#83a4d4)}.total-orders[_ngcontent-%COMP%]{background:#d68e41;background:linear-gradient(90deg,#f48665,#d68e41)}.returns[_ngcontent-%COMP%]{background:#00d2ff;background:linear-gradient(90deg,#928dab,#00d2ff)}.new-orders-bg-img[_ngcontent-%COMP%]{opacity:.1;right:65px;font-size:110px;position:absolute;text-align:center;color:#000;top:20px;margin-left:15px;height:50px}.mat-card-title[_ngcontent-%COMP%]{font-size:28px}"]}),t})();var St=a("qJYa");let Mt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Ib({type:t,selectors:[["app-products-list"]],decls:2,vars:0,consts:[[1,"pro-list-container"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Pb(1,"app-products-table"),n.Tb())},directives:[Tt],styles:[".pro-list-container[_ngcontent-%COMP%]{margin:20px}"]}),t})(),It=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Ib({type:t,selectors:[["app-order-list"]],decls:2,vars:0,consts:[[1,"order-list-container"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Pb(1,"orders-table"),n.Tb())},directives:[tt],styles:[".order-list-container[_ngcontent-%COMP%]{margin:20px}"]}),t})(),qt=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[r.c,i.d.forChild([{path:"",component:C,children:[{path:"",component:zt},{path:"orders",component:It},{path:"products",component:Mt}]}]),St.a,A.p,A.h]]}),t})()}}]);