(function(e){function t(t){for(var n,o,l=t[0],s=t[1],u=t[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1f32":function(e,t,r){},"38e9":function(e,t,r){e.exports=r.p+"img/dumbbell-light.ef471ab1.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={key:0,class:"box-border min-h-full font-Poppins"};function c(e,t,r,c,o,l){var s=Object(n["w"])("Navigation"),u=Object(n["w"])("router-view");return c.appReady?(Object(n["r"])(),Object(n["f"])("div",a,[Object(n["i"])(s),Object(n["i"])(u)])):Object(n["e"])("",!0)}var o=r("38e9"),l=r.n(o),s={class:"text-white bg-at-light-green"},u={class:"container flex flex-col items-center gap-4 px-4 py-5 sm:flex-row"},i=Object(n["g"])("div",{class:"flex items-center gap-x-4"},[Object(n["g"])("img",{class:"w-14",src:l.a,alt:""}),Object(n["g"])("h1",{class:"text-lg"},"Workout Tracker")],-1),b={class:"flex justify-end flex-1 gap-x-10"},d=Object(n["h"])("Home"),g=Object(n["h"])("Create"),p=Object(n["h"])("Login");function f(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("header",s,[Object(n["g"])("nav",u,[i,Object(n["g"])("ul",b,[Object(n["i"])(l,{class:"cursor-pointer",to:{name:"Home"}},{default:Object(n["D"])((function(){return[d]})),_:1}),a.user?(Object(n["r"])(),Object(n["d"])(l,{key:0,class:"cursor-pointer",to:{name:"Create"}},{default:Object(n["D"])((function(){return[g]})),_:1})):Object(n["e"])("",!0),a.user?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])(l,{key:1,class:"cursor-pointer",to:{name:"Login"}},{default:Object(n["D"])((function(){return[p]})),_:1})),a.user?(Object(n["r"])(),Object(n["f"])("li",{key:2,onClick:t[0]||(t[0]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"cursor-pointer"},"Logout")):Object(n["e"])("",!0)])])])}var x=r("1da1"),j=(r("96cf"),Object(n["t"])({user:null})),O={setUser:function(e){j.user=e?e.user:null}},m={state:j,methods:O},h=r("940b"),v="https://jrloqlbjsjsvblxctvba.supabase.co",y="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTk5NTY4NywiZXhwIjoxOTUxNTcxNjg3fQ.gqIW08UbyMMtzHi-AUq6gsZqWqQLj3CA22fnVBuErVk",w=Object(h["a"])(v,y),k=r("6c02"),E={setup:function(){var e=Object(n["b"])((function(){return m.state.user})),t=Object(k["d"])(),r=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.auth.signOut();case 2:t.push({name:"Home"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{logout:r,user:e}}},U=r("6b0d"),T=r.n(U),V=T()(E,[["render",f]]),C={components:{Navigation:V},setup:function(){var e=Object(n["u"])(null),t=w.auth.user();return t||(e.value=!0),w.auth.onAuthStateChange((function(t,r){m.methods.setUser(r),e.value=!0})),{appReady:e}}},R=(r("57fd"),T()(C,[["render",c]])),M=(r("45fc"),r("f7da")),W=r.n(M),B=r("a25c"),q=r.n(B),N={key:0,class:"container px-4 mt-10"},P={key:0,class:"flex flex-col items-center w-full"},L=Object(n["g"])("h1",{class:"text-2xl"},"Nothing is here 😔😔...",-1),S=Object(n["h"])("Create Workout"),I={key:1,class:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},_={key:0,src:W.a,class:"w-auto h-24",alt:""},A={key:1,src:q.a,class:"w-auto h-24",alt:""},D={class:"px-3 py-1 mt-6 text-xs text-white rounded-lg shadow-md bg-at-light-green"},H={class:"mt-8 mb-2 text-xl text-center text-at-light-green"};function J(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return a.dataLoaded?(Object(n["r"])(),Object(n["f"])("div",N,[0===a.data.length?(Object(n["r"])(),Object(n["f"])("div",P,[L,Object(n["i"])(l,{class:"px-6 py-2 mt-6 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green",to:{name:"Create"}},{default:Object(n["D"])((function(){return[S]})),_:1})])):(Object(n["r"])(),Object(n["f"])("div",I,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data,(function(e,t){return Object(n["r"])(),Object(n["d"])(l,{class:"flex flex-col items-center p-8 shadow-md cursor-pointer bg-light-grey",to:{name:"View-Workout",params:{workoutId:e.id}},key:t},{default:Object(n["D"])((function(){return["cardio"===e.workoutType?(Object(n["r"])(),Object(n["f"])("img",_)):(Object(n["r"])(),Object(n["f"])("img",A)),Object(n["g"])("p",D,Object(n["y"])(e.workoutType),1),Object(n["g"])("h1",H,Object(n["y"])(e.workoutName),1)]})),_:2},1032,["to"])})),128))]))])):Object(n["e"])("",!0)}var z={name:"Home",components:{},setup:function(){var e=Object(n["u"])([]),t=Object(n["u"])(null),r=function(){var r=Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w.from("workouts").select("*");case 3:if(n=r.sent,a=n.data,c=n.error,!c){r.next=8;break}throw c;case 8:e.value=a,t.value=!0,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),console.warn(r.t0.message);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}}();return r(),{data:e,dataLoaded:t}}},F=T()(z,[["render",J]]),Y={class:"max-w-screen-sm px-4 py-10 mx-auto"},Q={key:0,class:"p-4 mb-10 rounded-md shadow-lg bg-light-grey"},X={class:"text-red-500"},Z=Object(n["g"])("h1",{class:"mb-4 text-3xl text-at-light-green"},"Login",-1),G={class:"flex flex-col mb-2"},K=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),$={class:"flex flex-col mb-2"},ee=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),te=Object(n["g"])("button",{type:"submit",class:"self-start px-6 py-2 mt-6 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Login ",-1),re=Object(n["h"])(" Don't have an account? "),ne=Object(n["g"])("span",{class:"text-at-light-green"},"Register",-1);function ae(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",Y,[a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Q,[Object(n["g"])("p",X,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["F"])((function(){return a.login&&a.login.apply(a,arguments)}),["prevent"])),class:"flex flex-col p-8 rounded-md shadow-lg bg-light-grey"},[Z,Object(n["g"])("div",G,[K,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[n["B"],a.email]])]),Object(n["g"])("div",$,[ee,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["B"],a.password]])]),te,Object(n["i"])(l,{class:"mt-6 text-sm text-center",to:{name:"Register"}},{default:Object(n["D"])((function(){return[re,ne]})),_:1})],32)])}r("4795");var ce={name:"login",setup:function(){var e=Object(k["d"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.auth.signIn({email:t.value,password:r.value});case 3:if(c=n.sent,o=c.error,!o){n.next=7;break}throw o;case 7:e.push({name:"Home"}),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),a.value="Error: ".concat(n.t0.message," "),setTimeout((function(){a.value=null}),5e3);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,errorMsg:a,login:c}}},oe=T()(ce,[["render",ae]]),le={class:"max-w-screen-sm px-4 py-10 mx-auto"},se={key:0,class:"p-4 mb-10 rounded-md shadow-lg bg-light-grey"},ue={class:"text-red-500"},ie=Object(n["g"])("h1",{class:"mb-4 text-3xl text-at-light-green"},"Register",-1),be={class:"flex flex-col mb-2"},de=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),ge={class:"flex flex-col mb-2"},pe=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),fe={class:"flex flex-col mb-2"},xe=Object(n["g"])("label",{for:"confirmPassword",class:"mb-1 text-sm text-at-light-green"},"Confirm Password",-1),je=Object(n["g"])("button",{type:"submit",class:"self-start px-6 py-2 mt-6 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Register ",-1),Oe=Object(n["h"])(" Already have an account? "),me=Object(n["g"])("span",{class:"text-at-light-green"},"Login",-1);function he(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",le,[a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",se,[Object(n["g"])("p",ue,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["F"])((function(){return a.register&&a.register.apply(a,arguments)}),["prevent"])),class:"flex flex-col p-8 rounded-md shadow-lg bg-light-grey"},[ie,Object(n["g"])("div",be,[de,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[n["B"],a.email]])]),Object(n["g"])("div",ge,[pe,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["B"],a.password]])]),Object(n["g"])("div",fe,[xe,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"confirmPassword","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.confirmPassword=e})},null,512),[[n["B"],a.confirmPassword]])]),je,Object(n["i"])(l,{class:"mt-6 text-sm text-center",to:{name:"Login"}},{default:Object(n["D"])((function(){return[Oe,me]})),_:1})],32)])}var ve={name:"register",setup:function(){var e=Object(k["d"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=Object(n["u"])(null),o=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r.value!==a.value){n.next=16;break}return n.prev=1,n.next=4,w.auth.signUp({email:t.value,password:r.value});case 4:if(o=n.sent,l=o.error,!l){n.next=8;break}throw l;case 8:e.push({name:"Login"}),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),c.value=n.t0.message,setTimeout((function(){c.value=null}),5e3);case 15:return n.abrupt("return");case 16:c.value="Error: Passwords do not match!",setTimeout((function(){c.value=null}),5e3);case 18:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,confirmPassword:a,errorMsg:c,register:o}}},ye=T()(ve,[["render",he]]),we=r("9b82"),ke=r.n(we),Ee={class:"max-w-screen-md px-4 py-10 mx-auto"},Ue={key:0,class:"p-4 mb-10 rounded-md shadow-lg bg-light-grey"},Te={class:"text-at-light-green"},Ve={class:"text-red-500"},Ce={class:"flex items-start p-8 rounded-md shadow-lg bg-light-grey"},Re=Object(n["g"])("h1",{class:"text-2xl text-at-light-green"},"Record Workout",-1),Me={class:"flex flex-col"},We=Object(n["g"])("label",{for:"workout-name",class:"mb-1 text-sm text-at-light-green"},"Workout Name",-1),Be={class:"flex flex-col"},qe=Object(n["g"])("label",{for:"workout-type",class:"mb-1 text-sm text-at-light-green"},"Workout Type",-1),Ne=Object(n["g"])("option",{value:"select-workout"},"Select Workout",-1),Pe=Object(n["g"])("option",{value:"strength"},"Strength Training",-1),Le=Object(n["g"])("option",{value:"cardio"},"Cardio",-1),Se=[Ne,Pe,Le],Ie={key:0,class:"flex flex-col gap-y-4"},_e={class:"flex flex-col md:w-1/3"},Ae=Object(n["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"},"Exercise ",-1),De=["onUpdate:modelValue"],He={class:"flex flex-col flex-1"},Je=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"},"Sets ",-1),ze=["onUpdate:modelValue"],Fe={class:"flex flex-col flex-1"},Ye=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"},"Reps ",-1),Qe=["onUpdate:modelValue"],Xe={class:"flex flex-col flex-1"},Ze=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"},"Weight (LB's) ",-1),Ge=["onUpdate:modelValue"],Ke=["onClick"],$e={key:1,class:"flex flex-col gap-y-4"},et={class:"flex flex-col md:w-1/3"},tt=Object(n["g"])("label",{for:"cardio-type",class:"mb-1 text-sm text-at-light-green"},"Type ",-1),rt=["onUpdate:modelValue"],nt=Object(n["g"])("option",{value:"#"},"Select Type",-1),at=Object(n["g"])("option",{value:"run"},"Runs",-1),ct=Object(n["g"])("option",{value:"walk"},"Walk",-1),ot=[nt,at,ct],lt={class:"flex flex-col flex-1"},st=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"},"Distance ",-1),ut=["onUpdate:modelValue"],it={class:"flex flex-col flex-1"},bt=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"},"Duration ",-1),dt=["onUpdate:modelValue"],gt={class:"flex flex-col flex-1"},pt=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"},"Pace ",-1),ft=["onUpdate:modelValue"],xt=["onClick"],jt=Object(n["g"])("button",{type:"submit",class:"self-start px-6 py-2 mt-6 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Record Workout ",-1);function Ot(e,t,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",Ee,[a.statusMsg||a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Ue,[Object(n["g"])("p",Te,Object(n["y"])(a.statusMsg),1),Object(n["g"])("p",Ve,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("div",Ce,[Object(n["g"])("form",{onSubmit:t[5]||(t[5]=Object(n["F"])((function(){return a.createWorkout&&a.createWorkout.apply(a,arguments)}),["prevent"])),class:"flex flex-col w-full gap-y-5"},[Re,Object(n["g"])("div",Me,[We,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.workoutName=e})},null,512),[[n["B"],a.workoutName]])]),Object(n["g"])("div",Be,[qe,Object(n["E"])(Object(n["g"])("select",{id:"workout-type",class:"p-2 text-gray-500 focus:outline-none",required:"",onChange:t[1]||(t[1]=function(){return a.workoutChange&&a.workoutChange.apply(a,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.workoutType=e})},Se,544),[[n["A"],a.workoutType]])]),"strength"===a.workoutType?(Object(n["r"])(),Object(n["f"])("div",Ie,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"relative flex flex-col gap-x-6 gap-y-2 md:flex-row",key:t},[Object(n["g"])("div",_e,[Ae,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,De),[[n["B"],e.exercise]])]),Object(n["g"])("div",He,[Je,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,ze),[[n["B"],e.sets]])]),Object(n["g"])("div",Fe,[Ye,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,Qe),[[n["B"],e.reps]])]),Object(n["g"])("div",Xe,[Ze,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,Ge),[[n["B"],e.weight]])]),Object(n["g"])("img",{onClick:function(t){return a.deleteExercise(e.id)},src:ke.a,class:"absolute w-auto h-4 cursor-pointer -left-5",alt:""},null,8,Ke)])})),128)),Object(n["g"])("button",{onClick:t[3]||(t[3]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"self-start px-6 py-2 mt-6 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["e"])("",!0),"cardio"===a.workoutType?(Object(n["r"])(),Object(n["f"])("div",$e,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"relative flex flex-col gap-x-6 gap-y-2 md:flex-row",key:t},[Object(n["g"])("div",et,[tt,Object(n["E"])(Object(n["g"])("select",{id:"cardio-type",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},ot,8,rt),[[n["A"],e.cardioType]])]),Object(n["g"])("div",lt,[st,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,ut),[[n["B"],e.distance]])]),Object(n["g"])("div",it,[bt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,dt),[[n["B"],e.duration]])]),Object(n["g"])("div",gt,[pt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,ft),[[n["B"],e.pace]])]),Object(n["g"])("img",{onClick:function(t){return a.deleteExercise(e.id)},src:ke.a,class:"absolute w-auto h-4 cursor-pointer -left-5",alt:""},null,8,xt)])})),128)),Object(n["g"])("button",{onClick:t[4]||(t[4]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"self-start px-6 py-2 mt-6 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["e"])("",!0),jt],32)])])}r("4de4");var mt=r("8a77"),ht={name:"create",setup:function(){var e=Object(n["u"])(""),t=Object(n["u"])("select-workout"),r=Object(n["u"])([]),a=Object(n["u"])(null),c=Object(n["u"])(null),o=function(){"strength"!==t.value?r.value.push({id:Object(mt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):r.value.push({id:Object(mt["a"])(),exercise:"",sets:"",reps:"",weight:""})},l=function(e){r.value.length>1?r.value=r.value.filter((function(t){return t.id!==e})):(c.value="Error: Cannot remove, need to at least have one exercise",setTimeout((function(){c.value=!1}),5e3))},s=function(){r.value=[],o()},u=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.from("workouts").insert([{workoutName:e.value,workoutType:t.value,exercises:r.value}]);case 3:if(o=n.sent,l=o.error,!l){n.next=7;break}throw l;case 7:a.value="Success: Workout Created!",e.value=null,t.value="select-workout",r.value=[],setTimeout((function(){a.value=!1}),5e3),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](0),c.value="Error: ".concat(n.t0.message),setTimeout((function(){c.value=!1}),5e3);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return{workoutName:e,workoutType:t,exercises:r,statusMsg:a,errorMsg:c,addExercise:o,workoutChange:s,deleteExercise:l,createWorkout:u}}},vt=T()(ht,[["render",Ot]]),yt=r("6122"),wt=r.n(yt),kt=r("a407"),Et=r.n(kt),Ut={class:"max-w-screen-sm px-4 py-10 mx-auto"},Tt={key:0,class:"p-4 mb-10 rounded-md shadow-md bg-light-grey"},Vt={class:"text-at-light-green"},Ct={class:"text-red-500"},Rt={key:1},Mt={class:"relative flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey"},Wt={key:0,class:"absolute flex left-2 top-2 gap-x-2"},Bt=Object(n["g"])("img",{class:"h-3.5 w-auto",src:wt.a,alt:""},null,-1),qt=[Bt],Nt=Object(n["g"])("img",{class:"h-3.5 w-auto",src:Et.a,alt:""},null,-1),Pt=[Nt],Lt={key:1,class:"w-auto h-24",src:W.a,alt:""},St={key:2,class:"w-auto h-24",src:q.a,alt:""},It={class:"mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green rounded-lg shadow-md"},_t={class:"w-full mt-6"},At={key:1,class:"text-2xl text-center text-at-light-green"},Dt={class:"flex flex-col p-8 mt-10 rounded-md shadow-md item-center bg-light-grey"},Ht={key:0,class:"flex flex-col w-full gap-y-4"},Jt={class:"flex flex-col flex-2 md:w-1/3"},zt=Object(n["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"}," Exercise ",-1),Ft=["onUpdate:modelValue"],Yt={key:1},Qt={class:"flex flex-col flex-1"},Xt=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"}," Sets ",-1),Zt=["onUpdate:modelValue"],Gt={key:1},Kt={class:"flex flex-col flex-1"},$t=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"}," Reps ",-1),er=["onUpdate:modelValue"],tr={key:1},rr={class:"flex flex-col flex-1"},nr=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"}," Weight (LB's) ",-1),ar=["onUpdate:modelValue"],cr={key:1},or=["onClick"],lr={key:1,class:"flex flex-col w-full gap-y-4"},sr={class:"flex flex-col flex-2 md:w-1/3"},ur=Object(n["g"])("label",{for:"cardioType",class:"mb-1 text-sm text-at-light-green"}," Type ",-1),ir=["onUpdate:modelValue"],br=Object(n["g"])("option",{value:"#"},"Select Type",-1),dr=Object(n["g"])("option",{value:"run"},"Runs",-1),gr=Object(n["g"])("option",{value:"walk"},"Walk",-1),pr=[br,dr,gr],fr={key:1},xr={class:"flex flex-col flex-1"},jr=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"}," Distance ",-1),Or=["onUpdate:modelValue"],mr={key:1},hr={class:"flex flex-col flex-1"},vr=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"}," Duration ",-1),yr=["onUpdate:modelValue"],wr={key:1},kr={class:"flex flex-col flex-1"},Er=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"}," Pace ",-1),Ur=["onUpdate:modelValue"],Tr={key:1},Vr=["onClick"];function Cr(e,t,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",Ut,[a.statusMsg||a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Tt,[Object(n["g"])("p",Vt,Object(n["y"])(a.statusMsg),1),Object(n["g"])("p",Ct,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),a.dataLoaded?(Object(n["r"])(),Object(n["f"])("div",Rt,[Object(n["g"])("div",Mt,[a.user?(Object(n["r"])(),Object(n["f"])("div",Wt,[Object(n["g"])("div",{class:"flex items-center justify-center rounded-full shadow-lg cursor-pointer h-7 w-7 bg-at-light-green",onClick:t[0]||(t[0]=function(){return a.editMode&&a.editMode.apply(a,arguments)})},qt),Object(n["g"])("div",{onClick:t[1]||(t[1]=function(){return a.deleteWorkout&&a.deleteWorkout.apply(a,arguments)}),class:"flex items-center justify-center rounded-full shadow-lg cursor-pointer h-7 w-7 bg-at-light-green"},Pt)])):Object(n["e"])("",!0),"cardio"===a.data.workoutType?(Object(n["r"])(),Object(n["f"])("img",Lt)):(Object(n["r"])(),Object(n["f"])("img",St)),Object(n["g"])("span",It,Object(n["y"])(a.data.workoutType),1),Object(n["g"])("div",_t,[a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,type:"text",class:"w-full p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.data.workoutName=e})},null,512)),[[n["B"],a.data.workoutName]]):(Object(n["r"])(),Object(n["f"])("h1",At,Object(n["y"])(a.data.workoutName),1))])]),Object(n["g"])("div",Dt,["strength"===a.data.workoutType?(Object(n["r"])(),Object(n["f"])("div",Ht,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"relative flex flex-col gap-x-6 gap-y-2 sm:flex-row",key:t},[Object(n["g"])("div",Jt,[zt,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"exercise-name",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,Ft)),[[n["B"],e.exercise]]):(Object(n["r"])(),Object(n["f"])("p",Yt,Object(n["y"])(e.exercise),1))]),Object(n["g"])("div",Qt,[Xt,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"sets",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.sets=t}},null,8,Zt)),[[n["B"],e.sets]]):(Object(n["r"])(),Object(n["f"])("p",Gt,Object(n["y"])(e.sets),1))]),Object(n["g"])("div",Kt,[$t,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"reps",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.reps=t}},null,8,er)),[[n["B"],e.reps]]):(Object(n["r"])(),Object(n["f"])("p",tr,Object(n["y"])(e.reps),1))]),Object(n["g"])("div",rr,[nr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"weight",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.weight=t}},null,8,ar)),[[n["B"],e.weight]]):(Object(n["r"])(),Object(n["f"])("p",cr,Object(n["y"])(e.weight),1))]),a.edit?(Object(n["r"])(),Object(n["f"])("img",{key:0,onClick:function(t){return a.deleteExercise(e.id)},class:"absolute w-auto h-4 cursor-pointer -left-5",src:ke.a,alt:""},null,8,or)):Object(n["e"])("",!0)])})),128)),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[3]||(t[3]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"self-start px-6 py-2 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)])):(Object(n["r"])(),Object(n["f"])("div",lr,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"relative flex flex-col gap-x-6 gap-y-2 sm:flex-row",key:t},[Object(n["g"])("div",sr,[ur,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("select",{key:0,id:"cardioType",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.cardioType=t}},pr,8,ir)),[[n["A"],e.cardioType]]):(Object(n["r"])(),Object(n["f"])("p",fr,Object(n["y"])(e.cardioType),1))]),Object(n["g"])("div",xr,[jr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"distance",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.distance=t}},null,8,Or)),[[n["B"],e.distance]]):(Object(n["r"])(),Object(n["f"])("p",mr,Object(n["y"])(e.distance),1))]),Object(n["g"])("div",hr,[vr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"duration",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.duration=t}},null,8,yr)),[[n["B"],e.duration]]):(Object(n["r"])(),Object(n["f"])("p",wr,Object(n["y"])(e.duration),1))]),Object(n["g"])("div",kr,[Er,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"pace",class:"w-full p-2 text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.pace=t}},null,8,Ur)),[[n["B"],e.pace]]):(Object(n["r"])(),Object(n["f"])("p",Tr,Object(n["y"])(e.pace),1))]),a.edit?(Object(n["r"])(),Object(n["f"])("img",{key:0,onClick:function(t){return a.deleteExercise(e.id)},class:"absolute w-auto h-4 cursor-pointer -left-5",src:ke.a,alt:""},null,8,Vr)):Object(n["e"])("",!0)])})),128)),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[4]||(t[4]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"self-start px-6 py-2 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)]))]),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[5]||(t[5]=function(){return a.update&&a.update.apply(a,arguments)}),type:"button",class:"self-start px-6 py-2 mt-10 text-sm text-white duration-200 border-2 border-transparent border-solid rounded-sm bg-at-light-green hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Update Workout ")):Object(n["e"])("",!0)])):Object(n["e"])("",!0)])}var Rr,Mr=r("8785"),Wr={name:"view-workout",setup:function(){var e=Object(n["u"])(null),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=Object(k["c"])(),o=Object(k["d"])(),l=Object(n["b"])((function(){return m.state.user})),s=c.params.workoutId,u=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.from("workouts").select("*").eq("id",s);case 3:if(a=n.sent,c=a.data,o=a.error,!o){n.next=8;break}throw o;case 8:e.value=c[0],t.value=!0,n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](0),r.value=n.t0.message,setTimeout((function(){r.value=!1}),5e3);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();u();var i=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.from("workouts")["delete"]().eq("id",s);case 3:if(t=e.sent,n=t.error,!n){e.next=7;break}throw n;case 7:o.push({name:"Home"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),r.value="Error: ".concat(e.t0.message),setTimeout((function(){r.value=!1}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),b=Object(n["u"])(null),d=function(){b.value=!b.value},g=function(){"strength"!==e.value.workoutType?e.value.exercises.push({id:Object(mt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):e.value.exercises.push({id:Object(mt["a"])(),exercise:"",sets:"",reps:"",weight:""})},p=function(t){e.value.exercises.length>1?e.value.exercises=e.value.exercises.filter((function(e){return e.id!==t})):(r.value="Error: Cannot remove, need to at least have one exercise",setTimeout((function(){r.value=!1}),5e3))},f=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.from("workouts").update({workoutName:e.value.workoutName,exercises:e.value.exercises}).eq("id",s);case 3:if(n=t.sent,c=n.error,!c){t.next=7;break}throw c;case 7:b.value=!1,a.value="Success: Workout Updated!",setTimeout((function(){a.value=!1}),5e3),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),r.value(Rr||(Rr=Object(Mr["a"])(["Error: ",""])),t.t0.message),setTimeout((function(){r.value=!1}),5e3);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return{statusMsg:a,data:e,dataLoaded:t,errorMsg:r,edit:b,editMode:d,user:l,deleteWorkout:i,addExercise:g,deleteExercise:p,update:f}}},Br=T()(Wr,[["render",Cr]]),qr=[{path:"/",name:"Home",component:F,meta:{title:"Home",auth:!1}},{path:"/login",name:"Login",component:oe,meta:{title:"Login",auth:!1}},{path:"/register",name:"Register",component:ye,meta:{title:"Register",auth:!1}},{path:"/create",name:"Create",component:vt,meta:{title:"Create",auth:!0}},{path:"/view-workout/:workoutId",name:"View-Workout",component:Br,meta:{title:"View Workout",auth:!1}}],Nr=Object(k["a"])({history:Object(k["b"])("/"),routes:qr});Nr.beforeEach((function(e,t,r){document.title="".concat(e.meta.title," | Active Tracker"),r()})),Nr.beforeEach((function(e,t,r){var n=w.auth.user();if(e.matched.some((function(e){return e.meta.auth})))return n?void r():void r({name:"Login"});r()}));var Pr=Nr;r("ba8c");Object(n["c"])(R).use(Pr).mount("#app")},"57fd":function(e,t,r){"use strict";r("1f32")},6122:function(e,t,r){e.exports=r.p+"img/pencil-light.67a7865c.png"},"9b82":function(e,t,r){e.exports=r.p+"img/trash-light-green.f27ed677.png"},a25c:function(e,t,r){e.exports=r.p+"img/dumbbell-light-green.e9869f64.png"},a407:function(e,t,r){e.exports=r.p+"img/trash-light.f5a99b6a.png"},ba8c:function(e,t,r){},f7da:function(e,t,r){e.exports=r.p+"img/running-light-green.599f4302.png"}});
//# sourceMappingURL=app.42c11061.js.map