(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(1),r=t.n(n),s=t(6),i=t.n(s),l=t(5),o=t.n(l),p=t(7),j=t(3),u=(t(14),t(2)),b=t.n(u),m=function(e){var c=e.title,t=e.calories,n=e.image,r=e.ingredients;return Object(a.jsxs)("div",{className:b.a.recipe,children:[Object(a.jsx)("h1",{className:b.a.h1,children:c}),Object(a.jsx)("ol",{className:b.a.ol,children:r.map((function(e){return Object(a.jsx)("li",{className:b.a.li,children:e.text})}))}),Object(a.jsx)("img",{className:b.a.image,src:n,alt:c}),Object(a.jsx)("p",{className:b.a.p,children:Object(a.jsxs)("b",{children:["Calories: ",t]})})]})};var h=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],r=c[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),l=i[0],u=i[1],b=Object(n.useState)("chicken"),h=Object(j.a)(b,2),d=h[0],f=h[1];Object(n.useEffect)((function(){O()}),[d]);var O=function(){var e=Object(p.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("851f02fd","&app_key=").concat("99ad209b3830f5f8644aa7ff8e22aa61"));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,r(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Lookup Recipes from Edamam API"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(l),u("")},className:"search-form",children:[Object(a.jsx)("input",{className:"search-bar",type:"text",value:l,onChange:function(e){u(e.target.value)}}),Object(a.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(a.jsx)("div",{className:"recipes",children:t.map((function(e){return Object(a.jsx)(m,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))},2:function(e,c,t){e.exports={recipe:"recipe_recipe__XLil3",image:"recipe_image__ZmnDb",h1:"recipe_h1__2WuN9",p:"recipe_p__1DsBv",ol:"recipe_ol__26wRg",li:"recipe_li__1qI0J"}}},[[15,1,2]]]);
//# sourceMappingURL=main.95f45620.chunk.js.map