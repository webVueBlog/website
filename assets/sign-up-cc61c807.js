import{g as ae,M as ie,i as ue,j as re,r as l,a as u,c as r,f as e,b as I,w as L,F as j,d as q,p as v,t as h,A as k,B as M,k as $,D as p,n as T,N as Y,l as ce,q as de,s as ve,_ as pe}from"./index-f4233455.js";import{t as fe}from"./test-human-8877c5ac.js";const i=N=>(de("data-v-c9e079ff"),N=N(),ve(),N),_e={class:"container"},he={class:"adaptive-container"},me={class:"info-container"},ge=i(()=>e("div",{class:"header"},null,-1)),we={class:"view-container"},ye={class:"card"},be={class:"card-header"},ke=i(()=>e("img",{src:"https://tentech.oss-cn-shenzhen.aliyuncs.com/logo/tentech-text-logo.png"},null,-1)),$e={key:0,class:"switch-button-container"},Ne=["onClick"],Ve=i(()=>e("div",{class:"line"},[e("div",{class:"line-swiper"})],-1)),Ce={key:1,class:"split-line"},Ee={key:2,class:"input-container"},Se={key:0,class:"if-input-container"},Be=i(()=>e("p",null,"请输入手机号",-1)),Ie={class:"phone-number-input"},Pe={class:"region"},ze=i(()=>e("p",null,"下一步",-1)),De=[ze],Re={key:1,class:"if-input-container"},Ue={class:"verification-code-container"},Ae={class:"verification-code"},Le=["onUpdate:modelValue","onInput","onKeydown"],Me={class:"agree-policy"},Te=i(()=>e("div",{class:"policy-container"},[e("p",null,[p("同意并遵守全德视讯"),e("a",{href:"/"},"隐私政策"),p("和 "),e("a",{href:"/"},"使用条款"),p(" 未注册的手机号验证成功后将自动创建全德账号")])],-1)),Oe=i(()=>e("div",{class:"login-button"},[e("p",null,"登录")],-1)),Ke={class:"registered"},Ze=i(()=>e("p",null,"已有账号？",-1)),xe=i(()=>e("div",{class:"split-line2"},null,-1)),Fe=i(()=>e("div",{class:"contact"},[e("p",null,"登录遇到问题?"),e("a",{href:"/"},"常见问题"),e("a",{href:"/"},"联系客服")],-1)),He={key:3,class:"input-container"},je={key:0,class:"phoneNumberOrEmailError"},qe={class:"input-password"},Ye=["type"],Ge=["src"],Je={key:1,class:"passwordError"},Qe={class:"input-password"},We=["type"],Xe=["src"],es={key:2,class:"passwordError"},ss=i(()=>e("div",{class:"policy-container"},[e("p",null,[p("同意并遵守全德视讯"),e("a",{href:"/"},"隐私政策"),p("和 "),e("a",{href:"/"},"使用条款"),p(" 未注册的手机号验证成功后将自动创建全德账号")])],-1)),os={key:3,class:"passwordError"},ts=i(()=>e("p",null,"提交",-1)),ns=[ts],ls={class:"registered"},as=i(()=>e("p",null,"已有账号？",-1)),is=i(()=>e("div",{class:"split-line2"},null,-1)),us=i(()=>e("div",{class:"contact"},[e("p",null,"登录遇到问题?"),e("a",{href:"/"},"常见问题"),e("a",{href:"/"},"联系客服")],-1)),rs={class:"copy-right bottom-info"},cs=i(()=>e("a",{href:"/"},"隐私政策",-1)),ds=i(()=>e("a",{href:"/"},"使用条款",-1)),vs=i(()=>e("p",null,[e("a",{class:"icp",href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank"},"粤ICP备2021034388号"),e("a",{class:"beian",href:"https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702004694",target:"_blank"},[e("img",{src:"https://com2024.oss-cn-shenzhen.aliyuncs.com/image/beian.png"}),p("粤公网安备 44030702004694号")])],-1)),ps=ae({__name:"sign-up",setup(N){const{proxy:V}=ie();ue(),re();const w=l(!1),P=l(""),g=l(!1),z=l(""),m=l(!1),D=l(""),R=l(60),C=l(!1),O=l(!1),E=l(!1),S=l(!1),U=l(2),K=l(86),y=l(!1),f=l(!1),A=l(!1);l(0);const G=l(!1),b=l({phoneNumBer:""}),c=l(["","","","","",""]),Z=l(new Map),a=l({loginName:"",password:"",confirmpassword:""}),x=l([{type:1,buttonTitle:"手机注册",isSelected:!1},{type:2,buttonTitle:"邮箱注册",isSelected:!0}]);function J(o){U.value=o.type,x.value.forEach(s=>{s.isSelected=!1}),o.isSelected=!0}function F(o){const n=/^[0-9]{11}$/.test(o),t=K.value===86?n:!0;return!!(n&&t)}function Q(){F(b.value.phoneNumBer)?(C.value=!0,y.value=!0,ne()):console.log("sss")}function B(o){const s=/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=.])(?=\S+$).{6,20}$/;return console.log("password:",a.value.password),console.log("Pattern test result:",s.test(a.value.password)),s.test(o)?(console.log("密码合法"),!0):(a.value.password===""?z.value="密码为空":z.value="密码不合法",console.log("密码不合法"),!1)}function W(o,s){if(s.length>1)for(let n=0;n<s.length;n++)console.log("zii",c.value.length),o+n<c.value.length&&(c.value[o+n]=s[n],Z.value.set(o+n,s[n]),V.$refs[`codeInput${o+n}`][0].focus());else c.value[o]=s,Z.value.set(o,s)}function X(){c.value.every(o=>o.length===1&&!isNaN(o.length))?(console.log("验证码有效",c.value),G.value=!0):console.log("验证码无效")}function H(o){const s=o,n=/^[0-9]{11}$/,t=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,d=n.test(s),_=t.test(s);return d?(console.log("Valid phone number:",s),!0):_?(console.log("Valid email:",s),!0):(a.value.loginName===""?P.value="邮箱或者手机号为空":P.value="邮箱或者手机号无效",console.log("Invalid account:",s),!1)}function ee(o,s){const n=s.key;n==="Delete"||n==="Backspace"?se(o):(n==="ArrowLeft"||n==="ArrowRight")&&oe(o,n)}function se(o){console.log(`Delete key pressed in input at index ${o}.`),c.value[o]!==""?c.value[o]="":o-1>=0&&V.$refs[`codeInput${o-1}`][0].focus()}function oe(o,s){console.log(`${s} arrow key pressed in input at index ${o}.`),s==="ArrowRight"?o+1<c.value.length&&V.$refs[`codeInput${o+1}`][0].focus():o-1>=0&&V.$refs[`codeInput${o-1}`][0].focus()}function te(o){return`${o.getFullYear()}`}function ne(){let o=setInterval(()=>{R.value>0?R.value--:(O.value=!0,clearInterval(o))},1e3)}function le(){w.value=!H(a.value.loginName),g.value=!B(a.value.password),m.value=!B(a.value.confirmpassword);const o=a.value.password!==a.value.confirmpassword;A.value=!f.value,o?(D.value="两次输入密码不一致",m.value=!0):D.value="",!o&&f.value&&!w.value&&!g.value&&m.value}return(o,s)=>{const n=ce("router-link");return u(),r("div",_e,[e("div",he,[e("div",me,[ge,e("div",we,[e("div",ye,[e("div",be,[I(n,{to:"/"},{default:L(()=>[ke]),_:1})]),y.value?v("",!0):(u(),r("div",$e,[(u(!0),r(j,null,q(x.value,(t,d)=>(u(),r("div",{class:$(["switch-button",{"item-selected":t.isSelected}]),key:d,onClick:_=>J(t)},[e("p",null,h(t.buttonTitle),1),Ve],10,Ne))),128))])),y.value?v("",!0):(u(),r("div",Ce)),U.value===1?(u(),r("div",Ee,[y.value?v("",!0):(u(),r("div",Se,[Be,e("div",Ie,[e("div",Pe,[e("p",null,"+"+h(K.value),1)]),k(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>b.value.phoneNumBer=t),onBlur:s[1]||(s[1]=t=>F(b.value.phoneNumBer))},null,544),[[M,b.value.phoneNumBer]])]),I(fe,{onTimeOut:s[2]||(s[2]=t=>C.value=!1),onSuccessEvent:s[3]||(s[3]=t=>C.value=!0),ref:"childComponentRef"},null,512),e("div",{class:"next-setup",onClick:Q},De)])),y.value?(u(),r("div",Re,[e("div",Ue,[e("p",null,"验证码已发送到"+h(b.value.phoneNumBer),1),e("div",Ae,[(u(!0),r(j,null,q(c.value,(t,d)=>(u(),r("div",{class:"code-item",key:d},[k(e("input",{type:"text",class:"code-input",ref_for:!0,ref:`codeInput${d}`,"onUpdate:modelValue":_=>c.value[d]=_,onInput:_=>W(d,_.target.value),onKeydown:_=>ee(d,_),onBlur:X},null,40,Le),[[M,c.value[d]]])]))),128))]),e("div",{class:$(["resend-button",{"resend-code":O.value}])},h(R.value)+"重新发送 ",3)]),e("div",Me,[e("div",{class:$(["select-button",{"agree-button":f.value}]),onClick:s[4]||(s[4]=t=>f.value=!f.value)},null,2),Te]),Oe])):v("",!0),e("div",Ke,[Ze,I(n,{to:"/login"},{default:L(()=>[p("立即登录")]),_:1})]),xe,Fe])):v("",!0),U.value===2?(u(),r("div",He,[e("p",{style:T({color:w.value?"#f00":"#000"})},"邮箱/手机号",4),k(e("input",{class:"phone-or-email",type:"text","onUpdate:modelValue":s[5]||(s[5]=t=>a.value.loginName=t),onClick:s[6]||(s[6]=t=>w.value=!1),onBlur:s[7]||(s[7]=t=>H(a.value.loginName))},null,544),[[M,a.value.loginName]]),w.value?(u(),r("p",je,h(P.value),1)):v("",!0),e("p",{style:T({color:g.value?"#f00":"#000"})},"密码",4),e("div",qe,[k(e("input",{class:"password-input no-eye-icon",type:E.value?"text":"password","onUpdate:modelValue":s[8]||(s[8]=t=>a.value.password=t),onClick:s[9]||(s[9]=t=>{g.value=!1,m.value=!1}),onBlur:s[10]||(s[10]=t=>B(a.value.password))},null,40,Ye),[[Y,a.value.password]]),e("img",{src:E.value?"https://com2024.oss-cn-shenzhen.aliyuncs.com/image/passwordVisible.svg":"https://com2024.oss-cn-shenzhen.aliyuncs.com/image/passwordNoVisible.svg",onClick:s[11]||(s[11]=t=>{E.value=!E.value,g.value=!1})},null,8,Ge)]),g.value?(u(),r("p",Je,h(z.value),1)):v("",!0),e("p",{style:T({color:m.value?"#f00":"#000"})},"再次输入确认密码",4),e("div",Qe,[k(e("input",{class:"password-input no-eye-icon",type:S.value?"text":"password","onUpdate:modelValue":s[12]||(s[12]=t=>a.value.confirmpassword=t),onClick:s[13]||(s[13]=t=>m.value=!1),onBlur:s[14]||(s[14]=t=>B(a.value.confirmpassword))},null,40,We),[[Y,a.value.confirmpassword]]),e("img",{src:S.value?"https://com2024.oss-cn-shenzhen.aliyuncs.com/image/passwordVisible.svg":"https://com2024.oss-cn-shenzhen.aliyuncs.com/image/passwordNoVisible.svg",onClick:s[15]||(s[15]=t=>S.value=!S.value)},null,8,Xe)]),m.value?(u(),r("p",es,h(D.value),1)):v("",!0),e("div",{class:"agree-policy",onClick:s[17]||(s[17]=t=>A.value=!f.value)},[e("div",{class:$(["select-button",{"agree-button":f.value}]),onClick:s[16]||(s[16]=t=>f.value=!f.value)},null,2),ss]),A.value?(u(),r("p",os,"请先仔细阅读并同意隐私政策和使用条款")):v("",!0),e("div",{class:$(["submit-button",{"is-human-submit":C.value}]),onClick:le},ns,2),e("div",ls,[as,I(n,{to:"/login"},{default:L(()=>[p("立即登录")]),_:1})]),is,us])):v("",!0)])]),e("div",rs,[e("p",null,[p("Copyright © 2018-"+h(te(new Date))+" Lucky fortune 全德视讯 版权所有 ",1),cs,ds]),vs])])])])}}});const hs=pe(ps,[["__scopeId","data-v-c9e079ff"]]);export{hs as default};
