webpackJsonp([0],{"/4Ky":function(t,e){},"53HQ":function(t,e){},"5JZL":function(t,e){},Idho:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{id:"union",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.16667 5.83333V0H5.83333L5.83333 5.83333H0V8.16667H5.83333L5.83333 14H8.16667V8.16667H14V5.83333H8.16667Z",fill:"#F47821"}})])},staticRenderFns:[]},n={name:"AddButton",components:{IconUnion:s("VU/8")({name:"IconUnion"},i,!1,null,null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"add-button__wrapper",attrs:{href:""}},[e("div",{staticClass:"add-button"},[e("icon-union",{staticClass:"add-button__thumb"})],1),this._v(" "),e("span",{staticClass:"add-button__caption"},[this._v("Заполнить анкету")])])},staticRenderFns:[]};var l={name:"TheHeader",components:{AddButton:s("VU/8")(n,r,!1,function(t){s("53HQ")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[this._m(0),this._v(" "),e("add-button")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading container"},[e("h1",{staticClass:"heading__title"},[this._v("Ты готов стать профессионалом?")]),this._v(" "),e("p",{staticClass:"heading__caption"},[this._v("\n      Мы ищем\n      "),e("span",{staticClass:"heading__caption heading__caption--accient"},[this._v("талантов")]),this._v(" и\n      "),e("span",{staticClass:"heading__caption heading__caption--accient"},[this._v("саппортов")]),this._v(" в команду. Решите на какую категорию вы претендуете.\n    ")])])}]};var c=s("VU/8")(l,o,!1,function(t){s("cJp4")},null,null).exports,u={name:"MainItem",props:{mainState:{type:Object}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-item"},[e("h3",{staticClass:"main-item__title"},[this._v(this._s(this.mainState.item.title))]),this._v(" "),e("p",{staticClass:"main-item__text"},[this._v(this._s(this.mainState.item.text))])])},staticRenderFns:[]};var m=s("VU/8")(u,_,!1,function(t){s("Wwza")},null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"about-us"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"about-us__title"},[this._v("Мы похожи!")]),this._v(" "),e("p",{staticClass:"about-us__text"},[this._v("Не следует, однако забывать, что укрепление и развитие структуры представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что укрепление и развитие структуры способствует подготовки и реализации форм развития.")]),this._v(" "),e("p",{staticClass:"about-us__text"},[this._v("Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт укрепление и развитие структуры позволяет оценить значение дальнейших направлений развития. Повседневная практика показывает, что консультация с широким активом представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации.")])])])}]};var p=s("VU/8")({name:"AboutUs"},h,!1,function(t){s("muCw")},null,null).exports,f={name:"FeaturesItem",props:{featuresState:{type:Object}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"features-item"},[s("div",{staticClass:"features-item__img-wrapper"},[s("img",{staticClass:"features-item__img",attrs:{src:t.featuresState.item.img,alt:""}})]),t._v(" "),s("h3",{staticClass:"features-item__title"},[t._v(t._s(t.featuresState.item.title))]),t._v(" "),s("span",{staticClass:"features-item__thumb"}),t._v(" "),s("p",{staticClass:"features-item__text"},[t._v(t._s(t.featuresState.item.text))])])},staticRenderFns:[]};var d={name:"Features",components:{FeaturesItem:s("VU/8")(f,v,!1,function(t){s("Idho")},null,null).exports},data:function(){return{featuresState:[{item:{img:"./static/img/icons/features-icon.png",title:"Делимся опытом и навыками",text:"Мы обучаем коллег всему, что знаем сами. Наш опыт уникален и проверен временем, а команда постоянно совершенствует свои знания и навыки."}},{item:{img:"./static/img/icons/features-icon.png",title:"Стабильная зарплата",text:"Вы без задержек получаете официальную зарплату. Также мы оплачиваем больничные и даем возможность брать оплачиваемый отпуск до 4 недель в год."}},{item:{img:"./static/img/icons/features-icon.png",title:"Гибкий график",text:"Мы умеем работать с теми, кто еще не закончил получать образование. Вы можете работать неполный рабочий день, брать отгулы на время сессии и диплома."}}]}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"features container"},[e("h2",{staticClass:"features__title"},[this._v("Приемущества работы с нами")]),this._v(" "),e("div",{staticClass:"features__wrapper"},this._l(this.featuresState,function(t,s){return e("features-item",{key:s.item,attrs:{featuresState:t}})}),1)])},staticRenderFns:[]};var g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"blank"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"blank__title"},[t._v("Теперь расскажите о себе")]),t._v(" "),s("form",{staticClass:"form",attrs:{id:"blank-form",action:"#",method:"post"},on:{submit:t.checkForm}},[s("label",{staticClass:"form__label",attrs:{for:"name"}},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form__input",attrs:{id:"form-name",type:"text",for:"name",placeholder:"Сидоров Александр"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("label",{staticClass:"form__label",attrs:{for:"email"}},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form__input",attrs:{id:"form-email",type:"email",for:"email",placeholder:"Sidorov@yandex.ru"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("label",{staticClass:"form__label",attrs:{for:"telephone"}},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"form__input",attrs:{id:"form-tel",type:"tel",for:"telephone",placeholder:"+7 (999)-328-14-20"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})]),t._v(" "),t._m(3),t._v(" "),t.errors.length?s("div",{staticClass:"errors"},[s("b",{staticClass:"errors__caption"},[t._v("Пожалуйста исправьте указанные ошибки:")]),t._v(" "),s("ul",{staticClass:"errors__list"},t._l(t.errors,function(e){return s("li",{key:e,staticClass:"errors__item"},[t._v(t._s(e))])}),0)]):t._e(),t._v(" "),s("button",{staticClass:"form__button",attrs:{type:"submit"}},[t._v("Отправить")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"form__input-title"},[e("span",{staticClass:"input-thumb"},[this._v("1")]),this._v("\n          Фамилия и имя\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"form__input-title"},[e("span",{staticClass:"input-thumb"},[this._v("2")]),this._v("\n          Электронная почта\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"form__input-title"},[e("span",{staticClass:"input-thumb"},[this._v("3")]),this._v("\n          Телефон\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form__label",attrs:{for:"message"}},[e("span",{staticClass:"form__input-title"},[e("span",{staticClass:"input-thumb"},[this._v("4")]),this._v("\n          Какой деятельностью, не связанной с текущими проектами, вы бы хотели заниматься в рабочее время?\n        ")]),this._v(" "),e("textarea",{staticClass:"form__input",attrs:{name:"",id:"form-msg",cols:"30",rows:"2",placeholder:"Свой проект по созданию универсальной инфраструктуры строительства"}})])}]};var b={name:"TheMain",components:{MainItem:m,AboutUs:p,Features:s("VU/8")(d,C,!1,function(t){s("5JZL")},null,null).exports,TheForm:s("VU/8")({name:"TheForm",data:function(){return{errors:[],name:null,email:null,telephone:null,ERR_NAME:"Как вас зовут?",ERR_EMAIL:"Укажите email-адрес.",ERR_TEL:"Укажите телефон в формате +71234567890"}},methods:{checkForm:function(t){if(this.name&&this.email&&this.telephone)return!0;this.errors=[],this.name||this.errors.push(this.ERR_NAME),this.email||this.errors.push(this.ERR_EMAIL),this.telephone||this.errors.push(this.ERR_TEL),t.preventDefault()}}},g,!1,function(t){s("U3x8")},null,null).exports},data:function(){return{backgroundImg:"./static/img/main-bg.jpg",mainState:[{item:{title:"Прокачиваем мир",text:"Вы хотите сделать мир лучше и не готовы ждать всю жизнь, чтобы начать это делать?"}},{item:{title:"Мотивируем себя",text:"У вас есть собственная цель и вы не боитесь много работать, чтобы её достичь?"}},{item:{title:"Используем лучшее",text:"Вы способны применять разные подходы для достижения своих целей?"}},{item:{title:"Относимся с пониманием",text:"Вы не обвиняете других в свои неудачах и способны воспринимать критику?"}}]}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[e("div",{staticClass:"main-background"},[e("img",{staticClass:"main-background__img",attrs:{src:this.backgroundImg,alt:""}}),this._v(" "),e("div",{staticClass:"main__wrapper"},this._l(this.mainState,function(t,s){return e("main-item",{key:s.item,attrs:{mainState:t}})}),1)]),this._v(" "),e("about-us"),this._v(" "),e("features"),this._v(" "),e("the-form")],1)},staticRenderFns:[]};var E={name:"App",components:{TheHeader:c,TheMain:s("VU/8")(b,x,!1,function(t){s("/4Ky")},null,null).exports}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("the-header"),this._v(" "),e("the-main")],1)},staticRenderFns:[]};var w=s("VU/8")(E,R,!1,function(t){s("qhKG")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:w},template:"<App/>"})},U3x8:function(t,e){},Wwza:function(t,e){},cJp4:function(t,e){},muCw:function(t,e){},qhKG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9f7e649ca52329757306.js.map