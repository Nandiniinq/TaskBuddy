(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function By(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var od={exports:{}},Pa={},ad={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Vw(){if(og)return Ce;og=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,z={};function L(b,Q,de){this.props=b,this.context=Q,this.refs=z,this.updater=de||D}L.prototype.isReactComponent={},L.prototype.setState=function(b,Q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,Q,"setState")},L.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=L.prototype;function q(b,Q,de){this.props=b,this.context=Q,this.refs=z,this.updater=de||D}var te=q.prototype=new W;te.constructor=q,V(te,L.prototype),te.isPureReactComponent=!0;var ie=Array.isArray,Ie=Object.prototype.hasOwnProperty,_e={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(b,Q,de){var Ae,Re={},De=null,Me=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(Me=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)Ie.call(Q,Ae)&&!x.hasOwnProperty(Ae)&&(Re[Ae]=Q[Ae]);var Ue=arguments.length-2;if(Ue===1)Re.children=de;else if(1<Ue){for(var $e=Array(Ue),vt=0;vt<Ue;vt++)$e[vt]=arguments[vt+2];Re.children=$e}if(b&&b.defaultProps)for(Ae in Ue=b.defaultProps,Ue)Re[Ae]===void 0&&(Re[Ae]=Ue[Ae]);return{$$typeof:r,type:b,key:De,ref:Me,props:Re,_owner:_e.current}}function R(b,Q){return{$$typeof:r,type:b.type,key:Q,ref:b.ref,props:b.props,_owner:b._owner}}function P(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function O(b){var Q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(de){return Q[de]})}var M=/\/+/g;function C(b,Q){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):Q.toString(36)}function it(b,Q,de,Ae,Re){var De=typeof b;(De==="undefined"||De==="boolean")&&(b=null);var Me=!1;if(b===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(b.$$typeof){case r:case e:Me=!0}}if(Me)return Me=b,Re=Re(Me),b=Ae===""?"."+C(Me,0):Ae,ie(Re)?(de="",b!=null&&(de=b.replace(M,"$&/")+"/"),it(Re,Q,de,"",function(vt){return vt})):Re!=null&&(P(Re)&&(Re=R(Re,de+(!Re.key||Me&&Me.key===Re.key?"":(""+Re.key).replace(M,"$&/")+"/")+b)),Q.push(Re)),1;if(Me=0,Ae=Ae===""?".":Ae+":",ie(b))for(var Ue=0;Ue<b.length;Ue++){De=b[Ue];var $e=Ae+C(De,Ue);Me+=it(De,Q,de,$e,Re)}else if($e=I(b),typeof $e=="function")for(b=$e.call(b),Ue=0;!(De=b.next()).done;)De=De.value,$e=Ae+C(De,Ue++),Me+=it(De,Q,de,$e,Re);else if(De==="object")throw Q=String(b),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ot(b,Q,de){if(b==null)return b;var Ae=[],Re=0;return it(b,Ae,"","",function(De){return Q.call(de,De,Re++)}),Ae}function Lt(b){if(b._status===-1){var Q=b._result;Q=Q(),Q.then(function(de){(b._status===0||b._status===-1)&&(b._status=1,b._result=de)},function(de){(b._status===0||b._status===-1)&&(b._status=2,b._result=de)}),b._status===-1&&(b._status=0,b._result=Q)}if(b._status===1)return b._result.default;throw b._result}var Be={current:null},re={transition:null},fe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:re,ReactCurrentOwner:_e};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Ot,forEach:function(b,Q,de){Ot(b,function(){Q.apply(this,arguments)},de)},count:function(b){var Q=0;return Ot(b,function(){Q++}),Q},toArray:function(b){return Ot(b,function(Q){return Q})||[]},only:function(b){if(!P(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=q,Ce.StrictMode=i,Ce.Suspense=m,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Ce.act=oe,Ce.cloneElement=function(b,Q,de){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Ae=V({},b.props),Re=b.key,De=b.ref,Me=b._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Me=_e.current),Q.key!==void 0&&(Re=""+Q.key),b.type&&b.type.defaultProps)var Ue=b.type.defaultProps;for($e in Q)Ie.call(Q,$e)&&!x.hasOwnProperty($e)&&(Ae[$e]=Q[$e]===void 0&&Ue!==void 0?Ue[$e]:Q[$e])}var $e=arguments.length-2;if($e===1)Ae.children=de;else if(1<$e){Ue=Array($e);for(var vt=0;vt<$e;vt++)Ue[vt]=arguments[vt+2];Ae.children=Ue}return{$$typeof:r,type:b.type,key:Re,ref:De,props:Ae,_owner:Me}},Ce.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ce.createElement=S,Ce.createFactory=function(b){var Q=S.bind(null,b);return Q.type=b,Q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(b){return{$$typeof:f,render:b}},Ce.isValidElement=P,Ce.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:Lt}},Ce.memo=function(b,Q){return{$$typeof:y,type:b,compare:Q===void 0?null:Q}},Ce.startTransition=function(b){var Q=re.transition;re.transition={};try{b()}finally{re.transition=Q}},Ce.unstable_act=oe,Ce.useCallback=function(b,Q){return Be.current.useCallback(b,Q)},Ce.useContext=function(b){return Be.current.useContext(b)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(b){return Be.current.useDeferredValue(b)},Ce.useEffect=function(b,Q){return Be.current.useEffect(b,Q)},Ce.useId=function(){return Be.current.useId()},Ce.useImperativeHandle=function(b,Q,de){return Be.current.useImperativeHandle(b,Q,de)},Ce.useInsertionEffect=function(b,Q){return Be.current.useInsertionEffect(b,Q)},Ce.useLayoutEffect=function(b,Q){return Be.current.useLayoutEffect(b,Q)},Ce.useMemo=function(b,Q){return Be.current.useMemo(b,Q)},Ce.useReducer=function(b,Q,de){return Be.current.useReducer(b,Q,de)},Ce.useRef=function(b){return Be.current.useRef(b)},Ce.useState=function(b){return Be.current.useState(b)},Ce.useSyncExternalStore=function(b,Q,de){return Be.current.useSyncExternalStore(b,Q,de)},Ce.useTransition=function(){return Be.current.useTransition()},Ce.version="18.3.1",Ce}var ag;function Zd(){return ag||(ag=1,ad.exports=Vw()),ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function bw(){if(lg)return Pa;lg=1;var r=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,y){var v,T={},I=null,D=null;y!==void 0&&(I=""+y),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(D=m.ref);for(v in m)i.call(m,v)&&!l.hasOwnProperty(v)&&(T[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)T[v]===void 0&&(T[v]=m[v]);return{$$typeof:e,type:f,key:I,ref:D,props:T,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=h,Pa.jsxs=h,Pa}var ug;function Mw(){return ug||(ug=1,od.exports=bw()),od.exports}var $=Mw(),K=Zd();const Uw=By(K);var Ru={},ld={exports:{}},tn={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Fw(){return cg||(cg=1,function(r){function e(re,fe){var oe=re.length;re.push(fe);e:for(;0<oe;){var b=oe-1>>>1,Q=re[b];if(0<o(Q,fe))re[b]=fe,re[oe]=Q,oe=b;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var fe=re[0],oe=re.pop();if(oe!==fe){re[0]=oe;e:for(var b=0,Q=re.length,de=Q>>>1;b<de;){var Ae=2*(b+1)-1,Re=re[Ae],De=Ae+1,Me=re[De];if(0>o(Re,oe))De<Q&&0>o(Me,Re)?(re[b]=Me,re[De]=oe,b=De):(re[b]=Re,re[Ae]=oe,b=Ae);else if(De<Q&&0>o(Me,oe))re[b]=Me,re[De]=oe,b=De;else break e}}return fe}function o(re,fe){var oe=re.sortIndex-fe.sortIndex;return oe!==0?oe:re.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var m=[],y=[],v=1,T=null,I=3,D=!1,V=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(re){for(var fe=t(y);fe!==null;){if(fe.callback===null)i(y);else if(fe.startTime<=re)i(y),fe.sortIndex=fe.expirationTime,e(m,fe);else break;fe=t(y)}}function ie(re){if(z=!1,te(re),!V)if(t(m)!==null)V=!0,Lt(Ie);else{var fe=t(y);fe!==null&&Be(ie,fe.startTime-re)}}function Ie(re,fe){V=!1,z&&(z=!1,W(S),S=-1),D=!0;var oe=I;try{for(te(fe),T=t(m);T!==null&&(!(T.expirationTime>fe)||re&&!O());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var Q=b(T.expirationTime<=fe);fe=r.unstable_now(),typeof Q=="function"?T.callback=Q:T===t(m)&&i(m),te(fe)}else i(m);T=t(m)}if(T!==null)var de=!0;else{var Ae=t(y);Ae!==null&&Be(ie,Ae.startTime-fe),de=!1}return de}finally{T=null,I=oe,D=!1}}var _e=!1,x=null,S=-1,R=5,P=-1;function O(){return!(r.unstable_now()-P<R)}function M(){if(x!==null){var re=r.unstable_now();P=re;var fe=!0;try{fe=x(!0,re)}finally{fe?C():(_e=!1,x=null)}}else _e=!1}var C;if(typeof q=="function")C=function(){q(M)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Ot=it.port2;it.port1.onmessage=M,C=function(){Ot.postMessage(null)}}else C=function(){L(M,0)};function Lt(re){x=re,_e||(_e=!0,C())}function Be(re,fe){S=L(function(){re(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){V||D||(V=!0,Lt(Ie))},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(re){switch(I){case 1:case 2:case 3:var fe=3;break;default:fe=I}var oe=I;I=fe;try{return re()}finally{I=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,fe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=I;I=re;try{return fe()}finally{I=oe}},r.unstable_scheduleCallback=function(re,fe,oe){var b=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?b+oe:b):oe=b,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,re={id:v++,callback:fe,priorityLevel:re,startTime:oe,expirationTime:Q,sortIndex:-1},oe>b?(re.sortIndex=oe,e(y,re),t(m)===null&&re===t(y)&&(z?(W(S),S=-1):z=!0,Be(ie,oe-b))):(re.sortIndex=Q,e(m,re),V||D||(V=!0,Lt(Ie))),re},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(re){var fe=I;return function(){var oe=I;I=fe;try{return re.apply(this,arguments)}finally{I=oe}}}}(cd)),cd}var hg;function jw(){return hg||(hg=1,ud.exports=Fw()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Bw(){if(dg)return tn;dg=1;var r=Zd(),e=jw();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(n){return m.call(T,n)?!0:m.call(v,n)?!1:y.test(n)?T[n]=!0:(v[n]=!0,!1)}function D(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function V(n,s,a,c){if(s===null||typeof s>"u"||D(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(n,s,a,c,d,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){L[n]=new z(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];L[s]=new z(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){L[n]=new z(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){L[n]=new z(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){L[n]=new z(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){L[n]=new z(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){L[n]=new z(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){L[n]=new z(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){L[n]=new z(n,5,!1,n.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function q(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(W,q);L[s]=new z(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(W,q);L[s]=new z(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(W,q);L[s]=new z(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){L[n]=new z(n,1,!1,n.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){L[n]=new z(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,s,a,c){var d=L.hasOwnProperty(s)?L[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var ie=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),_e=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),re=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,b;function Q(n){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+n}var de=!1;function Ae(n,s){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var c=B}Reflect.construct(n,[],s)}else{try{s.call()}catch(B){c=B}n.call(s.prototype)}else{try{throw Error()}catch(B){c=B}n()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),g=c.stack.split(`
`),w=d.length-1,A=g.length-1;1<=w&&0<=A&&d[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==g[A]){var k=`
`+d[w].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=w&&0<=A);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function Re(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case _e:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case it:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case M:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ot:return s=n.displayName||null,s!==null?s:De(n.type)||"Memo";case Lt:s=n._payload,n=n._init;try{return De(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(n){var s=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function cr(n){n._valueTracker||(n._valueTracker=vt(n))}function _s(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ri(n,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vs(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Vo(n,s){s=s.checked,s!=null&&te(n,"checked",s,!1)}function bo(n,s){Vo(n,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ws(n,s.type,a):s.hasOwnProperty("defaultValue")&&ws(n,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function hl(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ws(n,s,a){(s!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var hr=Array.isArray;function dr(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Mo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Es(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(hr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Ue(a)}}function Ts(n,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Uo(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fr,Fo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function jr(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(n){ki.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ci[s]=Ci[n]})});function jo(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ci.hasOwnProperty(n)&&Ci[n]?(""+s).trim():s+"px"}function Bo(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jo(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var zo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(n,s){if(s){if(zo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ho(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function Is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ss=null,dn=null,Bn=null;function As(n){if(n=pa(n)){if(typeof Ss!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Bl(s),Ss(n.stateNode,n.type,s))}}function zn(n){dn?Bn?Bn.push(n):Bn=[n]:dn=n}function Wo(){if(dn){var n=dn,s=Bn;if(Bn=dn=null,As(n),s)for(n=0;n<s.length;n++)As(s[n])}}function xi(n,s){return n(s)}function qo(){}var pr=!1;function Ko(n,s,a){if(pr)return n(s,a);pr=!0;try{return xi(n,s,a)}finally{pr=!1,(dn!==null||Bn!==null)&&(qo(),Wo())}}function st(n,s){var a=n.stateNode;if(a===null)return null;var c=Bl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Rs=!1;if(f)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Rs=!1}function Ni(n,s,a,c,d,g,w,A,k){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(Y){this.onError(Y)}}var Di=!1,Cs=null,An=!1,Go=null,Lc={onError:function(n){Di=!0,Cs=n}};function ks(n,s,a,c,d,g,w,A,k){Di=!1,Cs=null,Ni.apply(Lc,arguments)}function dl(n,s,a,c,d,g,w,A,k){if(ks.apply(this,arguments),Di){if(Di){var B=Cs;Di=!1,Cs=null}else throw Error(t(198));An||(An=!0,Go=B)}}function Rn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,s.flags&4098&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Oi(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Cn(n){if(Rn(n)!==n)throw Error(t(188))}function fl(n){var s=n.alternate;if(!s){if(s=Rn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Cn(d),n;if(g===c)return Cn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,c=g;break}if(A===c){w=!0,c=d,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,c=d;break}if(A===c){w=!0,c=g,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Qo(n){return n=fl(n),n!==null?Ps(n):null}function Ps(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ps(n);if(s!==null)return s;n=n.sibling}return null}var xs=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,pl=e.unstable_shouldYield,Vc=e.unstable_requestPaint,He=e.unstable_now,ml=e.unstable_getCurrentPriorityLevel,Li=e.unstable_ImmediatePriority,Br=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,gl=e.unstable_IdlePriority,Vi=null,rn=null;function yl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Vi,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:vl,Jo=Math.log,_l=Math.LN2;function vl(n){return n>>>=0,n===0?32:31-(Jo(n)/_l|0)|0}var Ns=64,Ds=4194304;function zr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bi(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?c=zr(A):(g&=w,g!==0&&(c=zr(g)))}else w=a&~d,w!==0?c=zr(w):g!==0&&(c=zr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&d)&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=n[a],s&=~d;return c}function bc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mr(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-$t(g),A=1<<w,k=d[w];k===-1?(!(A&a)||A&c)&&(d[w]=bc(A,s)):k<=s&&(n.expiredLanes|=A),g&=~A}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mi(){var n=Ns;return Ns<<=1,!(Ns&4194240)&&(Ns=64),n}function $r(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Hr(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-$t(s),n[s]=a}function ze(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-$t(a),g=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Wr(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var xe=0;function qr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var wl,Os,El,Tl,Il,Zo=!1,$n=[],At=null,kn=null,Pn=null,Kr=new Map,pn=new Map,Hn=[],Mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sl(n,s){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Kr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(s.pointerId)}}function Gt(n,s,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=pa(s),s!==null&&Os(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Uc(n,s,a,c,d){switch(s){case"focusin":return At=Gt(At,n,s,a,c,d),!0;case"dragenter":return kn=Gt(kn,n,s,a,c,d),!0;case"mouseover":return Pn=Gt(Pn,n,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return Kr.set(g,Gt(Kr.get(g)||null,n,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,pn.set(g,Gt(pn.get(g)||null,n,s,a,c,d)),!0}return!1}function Al(n){var s=zi(n.target);if(s!==null){var a=Rn(s);if(a!==null){if(s=a.tag,s===13){if(s=Oi(a),s!==null){n.blockedOn=s,Il(n.priority,function(){El(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Ls(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pi=c,a.target.dispatchEvent(c),Pi=null}else return s=pa(a),s!==null&&Os(s),n.blockedOn=a,!1;s.shift()}return!0}function Ui(n,s,a){gr(n)&&a.delete(s)}function Rl(){Zo=!1,At!==null&&gr(At)&&(At=null),kn!==null&&gr(kn)&&(kn=null),Pn!==null&&gr(Pn)&&(Pn=null),Kr.forEach(Ui),pn.forEach(Ui)}function xn(n,s){n.blockedOn===s&&(n.blockedOn=null,Zo||(Zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rl)))}function Nn(n){function s(d){return xn(d,n)}if(0<$n.length){xn($n[0],n);for(var a=1;a<$n.length;a++){var c=$n[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&xn(At,n),kn!==null&&xn(kn,n),Pn!==null&&xn(Pn,n),Kr.forEach(s),pn.forEach(s),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)Al(a),a.blockedOn===null&&Hn.shift()}var yr=ie.ReactCurrentBatchConfig,Gr=!0;function Ge(n,s,a,c){var d=xe,g=yr.transition;yr.transition=null;try{xe=1,ea(n,s,a,c)}finally{xe=d,yr.transition=g}}function Fc(n,s,a,c){var d=xe,g=yr.transition;yr.transition=null;try{xe=4,ea(n,s,a,c)}finally{xe=d,yr.transition=g}}function ea(n,s,a,c){if(Gr){var d=Ls(n,s,a,c);if(d===null)Xc(n,s,c,Fi,a),Sl(n,c);else if(Uc(d,n,s,a,c))c.stopPropagation();else if(Sl(n,c),s&4&&-1<Mc.indexOf(n)){for(;d!==null;){var g=pa(d);if(g!==null&&wl(g),g=Ls(n,s,a,c),g===null&&Xc(n,s,c,Fi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Xc(n,s,c,null,a)}}var Fi=null;function Ls(n,s,a,c){if(Fi=null,n=Is(c),n=zi(n),n!==null)if(s=Rn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Oi(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Fi=n,null}function ta(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ml()){case Li:return 1;case Br:return 4;case fn:case Yo:return 16;case gl:return 536870912;default:return 16}default:return 16}}var on=null,Vs=null,Qt=null;function na(){if(Qt)return Qt;var n,s=Vs,a=s.length,c,d="value"in on?on.value:on.textContent,g=d.length;for(n=0;n<a&&s[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&s[a-c]===d[g-c];c++);return Qt=d.slice(n,1<c?1-c:void 0)}function bs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function ra(){return!1}function Rt(n){function s(a,c,d,g,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Wn:ra,this.isPropagationStopped=ra,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),s}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ms=Rt(Dn),qn=oe({},Dn,{view:0,detail:0}),jc=Rt(qn),Us,_r,Qr,ji=oe({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qr&&(Qr&&n.type==="mousemove"?(Us=n.screenX-Qr.screenX,_r=n.screenY-Qr.screenY):_r=Us=0,Qr=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:_r}}),Fs=Rt(ji),ia=oe({},ji,{dataTransfer:0}),Cl=Rt(ia),js=oe({},qn,{relatedTarget:0}),Bs=Rt(js),kl=oe({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),vr=Rt(kl),Pl=oe({},Dn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xl=Rt(Pl),Nl=oe({},Dn,{data:0}),sa=Rt(Nl),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ol(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Dl[n])?!!s[n]:!1}function Kn(){return Ol}var u=oe({},qn,{key:function(n){if(n.key){var s=zs[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ht[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(n){return n.type==="keypress"?bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Rt(u),_=oe({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Rt(_),U=oe({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn}),H=Rt(U),ne=oe({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Rt(ne),ft=oe({},ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Rt(ft),wt=[9,13,27,32],lt=f&&"CompositionEvent"in window,mn=null;f&&"documentMode"in document&&(mn=document.documentMode);var an=f&&"TextEvent"in window&&!mn,Bi=f&&(!lt||mn&&8<mn&&11>=mn),$s=" ",ep=!1;function tp(n,s){switch(n){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function O0(n,s){switch(n){case"compositionend":return np(s);case"keypress":return s.which!==32?null:(ep=!0,$s);case"textInput":return n=s.data,n===$s&&ep?null:n;default:return null}}function L0(n,s){if(Hs)return n==="compositionend"||!lt&&tp(n,s)?(n=na(),Qt=Vs=on=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Bi&&s.locale!=="ko"?null:s.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!V0[n.type]:s==="textarea"}function ip(n,s,a,c){zn(c),s=Ul(s,"onChange"),0<s.length&&(a=new Ms("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var oa=null,aa=null;function b0(n){Tp(n,0)}function Ll(n){var s=Qs(n);if(_s(s))return n}function M0(n,s){if(n==="change")return s}var sp=!1;if(f){var Bc;if(f){var zc="oninput"in document;if(!zc){var op=document.createElement("div");op.setAttribute("oninput","return;"),zc=typeof op.oninput=="function"}Bc=zc}else Bc=!1;sp=Bc&&(!document.documentMode||9<document.documentMode)}function ap(){oa&&(oa.detachEvent("onpropertychange",lp),aa=oa=null)}function lp(n){if(n.propertyName==="value"&&Ll(aa)){var s=[];ip(s,aa,n,Is(n)),Ko(b0,s)}}function U0(n,s,a){n==="focusin"?(ap(),oa=s,aa=a,oa.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function F0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ll(aa)}function j0(n,s){if(n==="click")return Ll(s)}function B0(n,s){if(n==="input"||n==="change")return Ll(s)}function z0(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var On=typeof Object.is=="function"?Object.is:z0;function la(n,s){if(On(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(s,d)||!On(n[d],s[d]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,s){var a=up(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function hp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?hp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function dp(){for(var n=window,s=Fr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Fr(n.document)}return s}function $c(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function $0(n){var s=dp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&hp(a.ownerDocument.documentElement,a)){if(c!==null&&$c(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=cp(a,g);var w=cp(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(s),n.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var H0=f&&"documentMode"in document&&11>=document.documentMode,Ws=null,Hc=null,ua=null,Wc=!1;function fp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Ws==null||Ws!==Fr(c)||(c=Ws,"selectionStart"in c&&$c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&la(ua,c)||(ua=c,c=Ul(Hc,"onSelect"),0<c.length&&(s=new Ms("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Ws)))}function Vl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var qs={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},qc={},pp={};f&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function bl(n){if(qc[n])return qc[n];if(!qs[n])return n;var s=qs[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in pp)return qc[n]=s[a];return n}var mp=bl("animationend"),gp=bl("animationiteration"),yp=bl("animationstart"),_p=bl("transitionend"),vp=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(n,s){vp.set(n,s),l(s,[n])}for(var Kc=0;Kc<wp.length;Kc++){var Gc=wp[Kc],W0=Gc.toLowerCase(),q0=Gc[0].toUpperCase()+Gc.slice(1);Xr(W0,"on"+q0)}Xr(mp,"onAnimationEnd"),Xr(gp,"onAnimationIteration"),Xr(yp,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(_p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Ep(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,dl(c,s,void 0,n),n.currentTarget=null}function Tp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var w=c.length-1;0<=w;w--){var A=c[w],k=A.instance,B=A.currentTarget;if(A=A.listener,k!==g&&d.isPropagationStopped())break e;Ep(d,A,B),g=k}else for(w=0;w<c.length;w++){if(A=c[w],k=A.instance,B=A.currentTarget,A=A.listener,k!==g&&d.isPropagationStopped())break e;Ep(d,A,B),g=k}}}if(An)throw n=Go,An=!1,Go=null,n}function qe(n,s){var a=s[nh];a===void 0&&(a=s[nh]=new Set);var c=n+"__bubble";a.has(c)||(Ip(s,n,2,!1),a.add(c))}function Qc(n,s,a){var c=0;s&&(c|=4),Ip(a,n,c,s)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[Ml]){n[Ml]=!0,i.forEach(function(a){a!=="selectionchange"&&(K0.has(a)||Qc(a,!1,n),Qc(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ml]||(s[Ml]=!0,Qc("selectionchange",!1,s))}}function Ip(n,s,a,c){switch(ta(s)){case 1:var d=Ge;break;case 4:d=Fc;break;default:d=ea}a=d.bind(null,s,a,n),d=void 0,!Rs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function Xc(n,s,a,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;w=w.return}for(;A!==null;){if(w=zi(A),w===null)return;if(k=w.tag,k===5||k===6){c=g=w;continue e}A=A.parentNode}}c=c.return}Ko(function(){var B=g,Y=Is(a),J=[];e:{var X=vp.get(n);if(X!==void 0){var se=Ms,ue=n;switch(n){case"keypress":if(bs(a)===0)break e;case"keydown":case"keyup":se=p;break;case"focusin":ue="focus",se=Bs;break;case"focusout":ue="blur",se=Bs;break;case"beforeblur":case"afterblur":se=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=H;break;case mp:case gp:case yp:se=vr;break;case _p:se=je;break;case"scroll":se=jc;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=E}var ce=(s&4)!==0,ot=!ce&&n==="scroll",F=ce?X!==null?X+"Capture":null:X;ce=[];for(var N=B,j;N!==null;){j=N;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,F!==null&&(ee=st(N,F),ee!=null&&ce.push(da(N,ee,j)))),ot)break;N=N.return}0<ce.length&&(X=new se(X,ue,null,a,Y),J.push({event:X,listeners:ce}))}}if(!(s&7)){e:{if(X=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",X&&a!==Pi&&(ue=a.relatedTarget||a.fromElement)&&(zi(ue)||ue[wr]))break e;if((se||X)&&(X=Y.window===Y?Y:(X=Y.ownerDocument)?X.defaultView||X.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=B,ue=ue?zi(ue):null,ue!==null&&(ot=Rn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=B),se!==ue)){if(ce=Fs,ee="onMouseLeave",F="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ce=E,ee="onPointerLeave",F="onPointerEnter",N="pointer"),ot=se==null?X:Qs(se),j=ue==null?X:Qs(ue),X=new ce(ee,N+"leave",se,a,Y),X.target=ot,X.relatedTarget=j,ee=null,zi(Y)===B&&(ce=new ce(F,N+"enter",ue,a,Y),ce.target=j,ce.relatedTarget=ot,ee=ce),ot=ee,se&&ue)t:{for(ce=se,F=ue,N=0,j=ce;j;j=Ks(j))N++;for(j=0,ee=F;ee;ee=Ks(ee))j++;for(;0<N-j;)ce=Ks(ce),N--;for(;0<j-N;)F=Ks(F),j--;for(;N--;){if(ce===F||F!==null&&ce===F.alternate)break t;ce=Ks(ce),F=Ks(F)}ce=null}else ce=null;se!==null&&Sp(J,X,se,ce,!1),ue!==null&&ot!==null&&Sp(J,ot,ue,ce,!0)}}e:{if(X=B?Qs(B):window,se=X.nodeName&&X.nodeName.toLowerCase(),se==="select"||se==="input"&&X.type==="file")var he=M0;else if(rp(X))if(sp)he=B0;else{he=F0;var me=U0}else(se=X.nodeName)&&se.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(he=j0);if(he&&(he=he(n,B))){ip(J,he,a,Y);break e}me&&me(n,X,B),n==="focusout"&&(me=X._wrapperState)&&me.controlled&&X.type==="number"&&ws(X,"number",X.value)}switch(me=B?Qs(B):window,n){case"focusin":(rp(me)||me.contentEditable==="true")&&(Ws=me,Hc=B,ua=null);break;case"focusout":ua=Hc=Ws=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,fp(J,a,Y);break;case"selectionchange":if(H0)break;case"keydown":case"keyup":fp(J,a,Y)}var ge;if(lt)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Hs?tp(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Bi&&a.locale!=="ko"&&(Hs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Hs&&(ge=na()):(on=Y,Vs="value"in on?on.value:on.textContent,Hs=!0)),me=Ul(B,ve),0<me.length&&(ve=new sa(ve,n,null,a,Y),J.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=np(a),ge!==null&&(ve.data=ge)))),(ge=an?O0(n,a):L0(n,a))&&(B=Ul(B,"onBeforeInput"),0<B.length&&(Y=new sa("onBeforeInput","beforeinput",null,a,Y),J.push({event:Y,listeners:B}),Y.data=ge))}Tp(J,s)})}function da(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Ul(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=st(n,a),g!=null&&c.unshift(da(n,g,d)),g=st(n,s),g!=null&&c.push(da(n,g,d))),n=n.return}return c}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sp(n,s,a,c,d){for(var g=s._reactName,w=[];a!==null&&a!==c;){var A=a,k=A.alternate,B=A.stateNode;if(k!==null&&k===c)break;A.tag===5&&B!==null&&(A=B,d?(k=st(a,g),k!=null&&w.unshift(da(a,k,A))):d||(k=st(a,g),k!=null&&w.push(da(a,k,A)))),a=a.return}w.length!==0&&n.push({event:s,listeners:w})}var G0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(G0,`
`).replace(Q0,"")}function Fl(n,s,a){if(s=Ap(s),Ap(n)!==s&&a)throw Error(t(425))}function jl(){}var Yc=null,Jc=null;function Zc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(J0)}:eh;function J0(n){setTimeout(function(){throw n})}function th(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Nn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Nn(s)}function Yr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Gs,fa="__reactProps$"+Gs,wr="__reactContainer$"+Gs,nh="__reactEvents$"+Gs,Z0="__reactListeners$"+Gs,ew="__reactHandles$"+Gs;function zi(n){var s=n[Gn];if(s)return s;for(var a=n.parentNode;a;){if(s=a[wr]||a[Gn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Cp(n);n!==null;){if(a=n[Gn])return a;n=Cp(n)}return s}n=a,a=n.parentNode}return null}function pa(n){return n=n[Gn]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bl(n){return n[fa]||null}var rh=[],Xs=-1;function Jr(n){return{current:n}}function Ke(n){0>Xs||(n.current=rh[Xs],rh[Xs]=null,Xs--)}function We(n,s){Xs++,rh[Xs]=n.current,n.current=s}var Zr={},Vt=Jr(Zr),Xt=Jr(!1),$i=Zr;function Ys(n,s){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function zl(){Ke(Xt),Ke(Vt)}function kp(n,s,a){if(Vt.current!==Zr)throw Error(t(168));We(Vt,s),We(Xt,a)}function Pp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(n)||"Unknown",d));return oe({},a,c)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,$i=Vt.current,We(Vt,n),We(Xt,Xt.current),!0}function xp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Pp(n,s,$i),c.__reactInternalMemoizedMergedChildContext=n,Ke(Xt),Ke(Vt),We(Vt,n)):Ke(Xt),We(Xt,a)}var Er=null,Hl=!1,ih=!1;function Np(n){Er===null?Er=[n]:Er.push(n)}function tw(n){Hl=!0,Np(n)}function ei(){if(!ih&&Er!==null){ih=!0;var n=0,s=xe;try{var a=Er;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Er=null,Hl=!1}catch(d){throw Er!==null&&(Er=Er.slice(n+1)),xs(Li,ei),d}finally{xe=s,ih=!1}}return null}var Js=[],Zs=0,Wl=null,ql=0,gn=[],yn=0,Hi=null,Tr=1,Ir="";function Wi(n,s){Js[Zs++]=ql,Js[Zs++]=Wl,Wl=n,ql=s}function Dp(n,s,a){gn[yn++]=Tr,gn[yn++]=Ir,gn[yn++]=Hi,Hi=n;var c=Tr;n=Ir;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var g=32-$t(s)+d;if(30<g){var w=d-d%5;g=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Tr=1<<32-$t(s)+d|a<<d|c,Ir=g+n}else Tr=1<<g|a<<d|c,Ir=n}function sh(n){n.return!==null&&(Wi(n,1),Dp(n,1,0))}function oh(n){for(;n===Wl;)Wl=Js[--Zs],Js[Zs]=null,ql=Js[--Zs],Js[Zs]=null;for(;n===Hi;)Hi=gn[--yn],gn[yn]=null,Ir=gn[--yn],gn[yn]=null,Tr=gn[--yn],gn[yn]=null}var ln=null,un=null,Qe=!1,Ln=null;function Op(n,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Lp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,ln=n,un=Yr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,ln=n,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Hi!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lh(n){if(Qe){var s=un;if(s){var a=s;if(!Lp(n,s)){if(ah(n))throw Error(t(418));s=Yr(a.nextSibling);var c=ln;s&&Lp(n,s)?Op(c,a):(n.flags=n.flags&-4097|2,Qe=!1,ln=n)}}else{if(ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,ln=n}}}function Vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function Kl(n){if(n!==ln)return!1;if(!Qe)return Vp(n),Qe=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Zc(n.type,n.memoizedProps)),s&&(s=un)){if(ah(n))throw bp(),Error(t(418));for(;s;)Op(n,s),s=Yr(s.nextSibling)}if(Vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){un=Yr(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}un=null}}else un=ln?Yr(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=un;n;)n=Yr(n.nextSibling)}function eo(){un=ln=null,Qe=!1}function uh(n){Ln===null?Ln=[n]:Ln.push(n)}var nw=ie.ReactCurrentBatchConfig;function ma(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=d.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Mp(n){var s=n._init;return s(n._payload)}function Up(n){function s(F,N){if(n){var j=F.deletions;j===null?(F.deletions=[N],F.flags|=16):j.push(N)}}function a(F,N){if(!n)return null;for(;N!==null;)s(F,N),N=N.sibling;return null}function c(F,N){for(F=new Map;N!==null;)N.key!==null?F.set(N.key,N):F.set(N.index,N),N=N.sibling;return F}function d(F,N){return F=li(F,N),F.index=0,F.sibling=null,F}function g(F,N,j){return F.index=j,n?(j=F.alternate,j!==null?(j=j.index,j<N?(F.flags|=2,N):j):(F.flags|=2,N)):(F.flags|=1048576,N)}function w(F){return n&&F.alternate===null&&(F.flags|=2),F}function A(F,N,j,ee){return N===null||N.tag!==6?(N=ed(j,F.mode,ee),N.return=F,N):(N=d(N,j),N.return=F,N)}function k(F,N,j,ee){var he=j.type;return he===x?Y(F,N,j.props.children,ee,j.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Mp(he)===N.type)?(ee=d(N,j.props),ee.ref=ma(F,N,j),ee.return=F,ee):(ee=_u(j.type,j.key,j.props,null,F.mode,ee),ee.ref=ma(F,N,j),ee.return=F,ee)}function B(F,N,j,ee){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=td(j,F.mode,ee),N.return=F,N):(N=d(N,j.children||[]),N.return=F,N)}function Y(F,N,j,ee,he){return N===null||N.tag!==7?(N=Zi(j,F.mode,ee,he),N.return=F,N):(N=d(N,j),N.return=F,N)}function J(F,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=ed(""+N,F.mode,j),N.return=F,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ie:return j=_u(N.type,N.key,N.props,null,F.mode,j),j.ref=ma(F,null,N),j.return=F,j;case _e:return N=td(N,F.mode,j),N.return=F,N;case Lt:var ee=N._init;return J(F,ee(N._payload),j)}if(hr(N)||fe(N))return N=Zi(N,F.mode,j,null),N.return=F,N;Gl(F,N)}return null}function X(F,N,j,ee){var he=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:A(F,N,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:return j.key===he?k(F,N,j,ee):null;case _e:return j.key===he?B(F,N,j,ee):null;case Lt:return he=j._init,X(F,N,he(j._payload),ee)}if(hr(j)||fe(j))return he!==null?null:Y(F,N,j,ee,null);Gl(F,j)}return null}function se(F,N,j,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(j)||null,A(N,F,""+ee,he);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ie:return F=F.get(ee.key===null?j:ee.key)||null,k(N,F,ee,he);case _e:return F=F.get(ee.key===null?j:ee.key)||null,B(N,F,ee,he);case Lt:var me=ee._init;return se(F,N,j,me(ee._payload),he)}if(hr(ee)||fe(ee))return F=F.get(j)||null,Y(N,F,ee,he,null);Gl(N,ee)}return null}function ue(F,N,j,ee){for(var he=null,me=null,ge=N,ve=N=0,It=null;ge!==null&&ve<j.length;ve++){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var be=X(F,ge,j[ve],ee);if(be===null){ge===null&&(ge=It);break}n&&ge&&be.alternate===null&&s(F,ge),N=g(be,N,ve),me===null?he=be:me.sibling=be,me=be,ge=It}if(ve===j.length)return a(F,ge),Qe&&Wi(F,ve),he;if(ge===null){for(;ve<j.length;ve++)ge=J(F,j[ve],ee),ge!==null&&(N=g(ge,N,ve),me===null?he=ge:me.sibling=ge,me=ge);return Qe&&Wi(F,ve),he}for(ge=c(F,ge);ve<j.length;ve++)It=se(ge,F,ve,j[ve],ee),It!==null&&(n&&It.alternate!==null&&ge.delete(It.key===null?ve:It.key),N=g(It,N,ve),me===null?he=It:me.sibling=It,me=It);return n&&ge.forEach(function(ui){return s(F,ui)}),Qe&&Wi(F,ve),he}function ce(F,N,j,ee){var he=fe(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var me=he=null,ge=N,ve=N=0,It=null,be=j.next();ge!==null&&!be.done;ve++,be=j.next()){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var ui=X(F,ge,be.value,ee);if(ui===null){ge===null&&(ge=It);break}n&&ge&&ui.alternate===null&&s(F,ge),N=g(ui,N,ve),me===null?he=ui:me.sibling=ui,me=ui,ge=It}if(be.done)return a(F,ge),Qe&&Wi(F,ve),he;if(ge===null){for(;!be.done;ve++,be=j.next())be=J(F,be.value,ee),be!==null&&(N=g(be,N,ve),me===null?he=be:me.sibling=be,me=be);return Qe&&Wi(F,ve),he}for(ge=c(F,ge);!be.done;ve++,be=j.next())be=se(ge,F,ve,be.value,ee),be!==null&&(n&&be.alternate!==null&&ge.delete(be.key===null?ve:be.key),N=g(be,N,ve),me===null?he=be:me.sibling=be,me=be);return n&&ge.forEach(function(Lw){return s(F,Lw)}),Qe&&Wi(F,ve),he}function ot(F,N,j,ee){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:e:{for(var he=j.key,me=N;me!==null;){if(me.key===he){if(he=j.type,he===x){if(me.tag===7){a(F,me.sibling),N=d(me,j.props.children),N.return=F,F=N;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Mp(he)===me.type){a(F,me.sibling),N=d(me,j.props),N.ref=ma(F,me,j),N.return=F,F=N;break e}a(F,me);break}else s(F,me);me=me.sibling}j.type===x?(N=Zi(j.props.children,F.mode,ee,j.key),N.return=F,F=N):(ee=_u(j.type,j.key,j.props,null,F.mode,ee),ee.ref=ma(F,N,j),ee.return=F,F=ee)}return w(F);case _e:e:{for(me=j.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(F,N.sibling),N=d(N,j.children||[]),N.return=F,F=N;break e}else{a(F,N);break}else s(F,N);N=N.sibling}N=td(j,F.mode,ee),N.return=F,F=N}return w(F);case Lt:return me=j._init,ot(F,N,me(j._payload),ee)}if(hr(j))return ue(F,N,j,ee);if(fe(j))return ce(F,N,j,ee);Gl(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(F,N.sibling),N=d(N,j),N.return=F,F=N):(a(F,N),N=ed(j,F.mode,ee),N.return=F,F=N),w(F)):a(F,N)}return ot}var to=Up(!0),Fp=Up(!1),Ql=Jr(null),Xl=null,no=null,ch=null;function hh(){ch=no=Xl=null}function dh(n){var s=Ql.current;Ke(Ql),n._currentValue=s}function fh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function ro(n,s){Xl=n,ch=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&s&&(Jt=!0),n.firstContext=null)}function _n(n){var s=n._currentValue;if(ch!==n)if(n={context:n,memoizedValue:s,next:null},no===null){if(Xl===null)throw Error(t(308));no=n,Xl.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return s}var qi=null;function ph(n){qi===null?qi=[n]:qi.push(n)}function jp(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,ph(s)):(a.next=d.next,d.next=a),s.interleaved=a,Sr(n,c)}function Sr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function mh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ni(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Sr(n,a)}return d=c.interleaved,d===null?(s.next=s,ph(c)):(s.next=d.next,d.next=s),c.interleaved=s,Sr(n,a)}function Yl(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Wr(n,a)}}function zp(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function Jl(n,s,a,c){var d=n.updateQueue;ti=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var k=A,B=k.next;k.next=null,w===null?g=B:w.next=B,w=k;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,A=Y.lastBaseUpdate,A!==w&&(A===null?Y.firstBaseUpdate=B:A.next=B,Y.lastBaseUpdate=k))}if(g!==null){var J=d.baseState;w=0,Y=B=k=null,A=g;do{var X=A.lane,se=A.eventTime;if((c&X)===X){Y!==null&&(Y=Y.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=n,ce=A;switch(X=s,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){J=ue.call(se,J,X);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,X=typeof ue=="function"?ue.call(se,J,X):ue,X==null)break e;J=oe({},J,X);break e;case 2:ti=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,X=d.effects,X===null?d.effects=[A]:X.push(A))}else se={eventTime:se,lane:X,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Y===null?(B=Y=se,k=J):Y=Y.next=se,w|=X;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;X=A,A=X.next,X.next=null,d.lastBaseUpdate=X,d.shared.pending=null}}while(!0);if(Y===null&&(k=J),d.baseState=k,d.firstBaseUpdate=B,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do w|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);Qi|=w,n.lanes=w,n.memoizedState=J}}function $p(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ga={},Qn=Jr(ga),ya=Jr(ga),_a=Jr(ga);function Ki(n){if(n===ga)throw Error(t(174));return n}function gh(n,s){switch(We(_a,s),We(ya,n),We(Qn,ga),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:dt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=dt(s,n)}Ke(Qn),We(Qn,s)}function io(){Ke(Qn),Ke(ya),Ke(_a)}function Hp(n){Ki(_a.current);var s=Ki(Qn.current),a=dt(s,n.type);s!==a&&(We(ya,n),We(Qn,a))}function yh(n){ya.current===n&&(Ke(Qn),Ke(ya))}var Ye=Jr(0);function Zl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _h=[];function vh(){for(var n=0;n<_h.length;n++)_h[n]._workInProgressVersionPrimary=null;_h.length=0}var eu=ie.ReactCurrentDispatcher,wh=ie.ReactCurrentBatchConfig,Gi=0,Je=null,pt=null,Et=null,tu=!1,va=!1,wa=0,rw=0;function bt(){throw Error(t(321))}function Eh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!On(n[a],s[a]))return!1;return!0}function Th(n,s,a,c,d,g){if(Gi=g,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,eu.current=n===null||n.memoizedState===null?aw:lw,n=a(c,d),va){g=0;do{if(va=!1,wa=0,25<=g)throw Error(t(301));g+=1,Et=pt=null,s.updateQueue=null,eu.current=uw,n=a(c,d)}while(va)}if(eu.current=iu,s=pt!==null&&pt.next!==null,Gi=0,Et=pt=Je=null,tu=!1,s)throw Error(t(300));return n}function Ih(){var n=wa!==0;return wa=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=n:Et=Et.next=n,Et}function vn(){if(pt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var s=Et===null?Je.memoizedState:Et.next;if(s!==null)Et=s,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?Je.memoizedState=Et=n:Et=Et.next=n}return Et}function Ea(n,s){return typeof s=="function"?s(n):s}function Sh(n){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=w=null,k=null,B=g;do{var Y=B.lane;if((Gi&Y)===Y)k!==null&&(k=k.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:n(c,B.action);else{var J={lane:Y,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};k===null?(A=k=J,w=c):k=k.next=J,Je.lanes|=Y,Qi|=Y}B=B.next}while(B!==null&&B!==g);k===null?w=c:k.next=A,On(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Je.lanes|=g,Qi|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Ah(n){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do g=n(g,w.action),w=w.next;while(w!==d);On(g,s.memoizedState)||(Jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Wp(){}function qp(n,s){var a=Je,c=vn(),d=s(),g=!On(c.memoizedState,d);if(g&&(c.memoizedState=d,Jt=!0),c=c.queue,Rh(Qp.bind(null,a,c,n),[n]),c.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Gp.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));Gi&30||Kp(a,s,d)}return d}function Kp(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function Gp(n,s,a,c){s.value=a,s.getSnapshot=c,Xp(s)&&Yp(n)}function Qp(n,s,a){return a(function(){Xp(s)&&Yp(n)})}function Xp(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!On(n,a)}catch{return!0}}function Yp(n){var s=Sr(n,1);s!==null&&Un(s,n,1,-1)}function Jp(n){var s=Xn();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},s.queue=n,n=n.dispatch=ow.bind(null,Je,n),[s.memoizedState,n]}function Ta(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Zp(){return vn().memoizedState}function nu(n,s,a,c){var d=Xn();Je.flags|=n,d.memoizedState=Ta(1|s,a,void 0,c===void 0?null:c)}function ru(n,s,a,c){var d=vn();c=c===void 0?null:c;var g=void 0;if(pt!==null){var w=pt.memoizedState;if(g=w.destroy,c!==null&&Eh(c,w.deps)){d.memoizedState=Ta(s,a,g,c);return}}Je.flags|=n,d.memoizedState=Ta(1|s,a,g,c)}function em(n,s){return nu(8390656,8,n,s)}function Rh(n,s){return ru(2048,8,n,s)}function tm(n,s){return ru(4,2,n,s)}function nm(n,s){return ru(4,4,n,s)}function rm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function im(n,s,a){return a=a!=null?a.concat([n]):null,ru(4,4,rm.bind(null,s,n),a)}function Ch(){}function sm(n,s){var a=vn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Eh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function om(n,s){var a=vn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Eh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function am(n,s,a){return Gi&21?(On(a,s)||(a=Mi(),Je.lanes|=a,Qi|=a,n.baseState=!0),s):(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a)}function iw(n,s){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=wh.transition;wh.transition={};try{n(!1),s()}finally{xe=a,wh.transition=c}}function lm(){return vn().memoizedState}function sw(n,s,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},um(n))cm(s,a);else if(a=jp(n,s,a,c),a!==null){var d=qt();Un(a,n,c,d),hm(a,s,c)}}function ow(n,s,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(s,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,a);if(d.hasEagerState=!0,d.eagerState=A,On(A,w)){var k=s.interleaved;k===null?(d.next=d,ph(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=jp(n,s,d,c),a!==null&&(d=qt(),Un(a,n,c,d),hm(a,s,c))}}function um(n){var s=n.alternate;return n===Je||s!==null&&s===Je}function cm(n,s){va=tu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function hm(n,s,a){if(a&4194240){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Wr(n,a)}}var iu={readContext:_n,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},aw={readContext:_n,useCallback:function(n,s){return Xn().memoizedState=[n,s===void 0?null:s],n},useContext:_n,useEffect:em,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,nu(4194308,4,rm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return nu(4194308,4,n,s)},useInsertionEffect:function(n,s){return nu(4,2,n,s)},useMemo:function(n,s){var a=Xn();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=Xn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=sw.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var s=Xn();return n={current:n},s.memoizedState=n},useState:Jp,useDebugValue:Ch,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Jp(!1),s=n[0];return n=iw.bind(null,n[1]),Xn().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=Je,d=Xn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));Gi&30||Kp(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,em(Qp.bind(null,c,g,n),[n]),c.flags|=2048,Ta(9,Gp.bind(null,c,g,a,s),void 0,null),a},useId:function(){var n=Xn(),s=Tt.identifierPrefix;if(Qe){var a=Ir,c=Tr;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=wa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=rw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},lw={readContext:_n,useCallback:sm,useContext:_n,useEffect:Rh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Sh,useRef:Zp,useState:function(){return Sh(Ea)},useDebugValue:Ch,useDeferredValue:function(n){var s=vn();return am(s,pt.memoizedState,n)},useTransition:function(){var n=Sh(Ea)[0],s=vn().memoizedState;return[n,s]},useMutableSource:Wp,useSyncExternalStore:qp,useId:lm,unstable_isNewReconciler:!1},uw={readContext:_n,useCallback:sm,useContext:_n,useEffect:Rh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Ah,useRef:Zp,useState:function(){return Ah(Ea)},useDebugValue:Ch,useDeferredValue:function(n){var s=vn();return pt===null?s.memoizedState=n:am(s,pt.memoizedState,n)},useTransition:function(){var n=Ah(Ea)[0],s=vn().memoizedState;return[n,s]},useMutableSource:Wp,useSyncExternalStore:qp,useId:lm,unstable_isNewReconciler:!1};function Vn(n,s){if(n&&n.defaultProps){s=oe({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function kh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?Rn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=qt(),d=oi(n),g=Ar(c,d);g.payload=s,a!=null&&(g.callback=a),s=ni(n,g,d),s!==null&&(Un(s,n,d,c),Yl(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=qt(),d=oi(n),g=Ar(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ni(n,g,d),s!==null&&(Un(s,n,d,c),Yl(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=qt(),c=oi(n),d=Ar(a,c);d.tag=2,s!=null&&(d.callback=s),s=ni(n,d,c),s!==null&&(Un(s,n,c,a),Yl(s,n,c))}};function dm(n,s,a,c,d,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):s.prototype&&s.prototype.isPureReactComponent?!la(a,c)||!la(d,g):!0}function fm(n,s,a){var c=!1,d=Zr,g=s.contextType;return typeof g=="object"&&g!==null?g=_n(g):(d=Yt(s)?$i:Vt.current,c=s.contextTypes,g=(c=c!=null)?Ys(n,d):Zr),s=new s(a,g),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=su,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),s}function pm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&su.enqueueReplaceState(s,s.state,null)}function Ph(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},mh(n);var g=s.contextType;typeof g=="object"&&g!==null?d.context=_n(g):(g=Yt(s)?$i:Vt.current,d.context=Ys(n,g)),d.state=n.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(kh(n,s,g,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&su.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:s,stack:d,digest:null}}function xh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Nh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var cw=typeof WeakMap=="function"?WeakMap:Map;function mm(n,s,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){du||(du=!0,qh=c),Nh(n,s)},a}function gm(n,s,a){a=Ar(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Nh(n,s)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Nh(n,s),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function ym(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new cw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=Sw.bind(null,n,s,a),s.then(n,n))}function _m(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function vm(n,s,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ar(-1,1),s.tag=2,ni(a,s,1))),a.lanes|=1),n)}var hw=ie.ReactCurrentOwner,Jt=!1;function Wt(n,s,a,c){s.child=n===null?Fp(s,null,a,c):to(s,n.child,a,c)}function wm(n,s,a,c,d){a=a.render;var g=s.ref;return ro(s,d),c=Th(n,s,a,c,g,d),a=Ih(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Rr(n,s,d)):(Qe&&a&&sh(s),s.flags|=1,Wt(n,s,c,d),s.child)}function Em(n,s,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Zh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Tm(n,s,g,c,d)):(n=_u(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(g=n.child,!(n.lanes&d)){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(w,c)&&n.ref===s.ref)return Rr(n,s,d)}return s.flags|=1,n=li(g,c),n.ref=s.ref,n.return=s,s.child=n}function Tm(n,s,a,c,d){if(n!==null){var g=n.memoizedProps;if(la(g,c)&&n.ref===s.ref)if(Jt=!1,s.pendingProps=c=g,(n.lanes&d)!==0)n.flags&131072&&(Jt=!0);else return s.lanes=n.lanes,Rr(n,s,d)}return Dh(n,s,a,c,d)}function Im(n,s,a){var c=s.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ao,cn),cn|=a;else{if(!(a&1073741824))return n=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,We(ao,cn),cn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(ao,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(ao,cn),cn|=c;return Wt(n,s,d,a),s.child}function Sm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Dh(n,s,a,c,d){var g=Yt(a)?$i:Vt.current;return g=Ys(s,g),ro(s,d),a=Th(n,s,a,c,g,d),c=Ih(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Rr(n,s,d)):(Qe&&c&&sh(s),s.flags|=1,Wt(n,s,a,d),s.child)}function Am(n,s,a,c,d){if(Yt(a)){var g=!0;$l(s)}else g=!1;if(ro(s,d),s.stateNode===null)au(n,s),fm(s,a,c),Ph(s,a,c,d),c=!0;else if(n===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var k=w.context,B=a.contextType;typeof B=="object"&&B!==null?B=_n(B):(B=Yt(a)?$i:Vt.current,B=Ys(s,B));var Y=a.getDerivedStateFromProps,J=typeof Y=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==c||k!==B)&&pm(s,w,c,B),ti=!1;var X=s.memoizedState;w.state=X,Jl(s,c,w,d),k=s.memoizedState,A!==c||X!==k||Xt.current||ti?(typeof Y=="function"&&(kh(s,a,Y,c),k=s.memoizedState),(A=ti||dm(s,a,A,c,X,k,B))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),w.props=c,w.state=k,w.context=B,c=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,Bp(n,s),A=s.memoizedProps,B=s.type===s.elementType?A:Vn(s.type,A),w.props=B,J=s.pendingProps,X=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=_n(k):(k=Yt(a)?$i:Vt.current,k=Ys(s,k));var se=a.getDerivedStateFromProps;(Y=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==J||X!==k)&&pm(s,w,c,k),ti=!1,X=s.memoizedState,w.state=X,Jl(s,c,w,d);var ue=s.memoizedState;A!==J||X!==ue||Xt.current||ti?(typeof se=="function"&&(kh(s,a,se,c),ue=s.memoizedState),(B=ti||dm(s,a,B,c,X,ue,k)||!1)?(Y||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ue,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ue,k)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&X===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&X===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),w.props=c,w.state=ue,w.context=k,c=B):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&X===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&X===n.memoizedState||(s.flags|=1024),c=!1)}return Oh(n,s,a,c,g,d)}function Oh(n,s,a,c,d,g){Sm(n,s);var w=(s.flags&128)!==0;if(!c&&!w)return d&&xp(s,a,!1),Rr(n,s,g);c=s.stateNode,hw.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&w?(s.child=to(s,n.child,null,g),s.child=to(s,null,A,g)):Wt(n,s,A,g),s.memoizedState=c.state,d&&xp(s,a,!0),s.child}function Rm(n){var s=n.stateNode;s.pendingContext?kp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&kp(n,s.context,!1),gh(n,s.containerInfo)}function Cm(n,s,a,c,d){return eo(),uh(d),s.flags|=256,Wt(n,s,a,c),s.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function km(n,s,a){var c=s.pendingProps,d=Ye.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Ye,d&1),n===null)return lh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(s.mode&1?n.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=c.children,n=c.fallback,g?(c=s.mode,g=s.child,w={mode:"hidden",children:w},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=vu(w,c,0,null),n=Zi(n,c,a,null),g.return=s,n.return=s,g.sibling=n,s.child=g,s.child.memoizedState=Vh(a),s.memoizedState=Lh,n):bh(s,w));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return dw(n,s,w,c,A,d,a);if(g){g=c.fallback,w=s.mode,d=n.child,A=d.sibling;var k={mode:"hidden",children:c.children};return!(w&1)&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=li(d,k),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=li(A,g):(g=Zi(g,w,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,w=n.child.memoizedState,w=w===null?Vh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,s.memoizedState=Lh,c}return g=n.child,n=g.sibling,c=li(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function bh(n,s){return s=vu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function ou(n,s,a,c){return c!==null&&uh(c),to(s,n.child,null,a),n=bh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function dw(n,s,a,c,d,g,w){if(a)return s.flags&256?(s.flags&=-257,c=xh(Error(t(422))),ou(n,s,w,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=vu({mode:"visible",children:c.children},d,0,null),g=Zi(g,d,w,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&to(s,n.child,null,w),s.child.memoizedState=Vh(w),s.memoizedState=Lh,g);if(!(s.mode&1))return ou(n,s,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=xh(g,c,void 0),ou(n,s,w,c)}if(A=(w&n.childLanes)!==0,Jt||A){if(c=Tt,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|w)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Sr(n,d),Un(c,n,d,-1))}return Jh(),c=xh(Error(t(421))),ou(n,s,w,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=Aw.bind(null,n),d._reactRetry=s,null):(n=g.treeContext,un=Yr(d.nextSibling),ln=s,Qe=!0,Ln=null,n!==null&&(gn[yn++]=Tr,gn[yn++]=Ir,gn[yn++]=Hi,Tr=n.id,Ir=n.overflow,Hi=s),s=bh(s,c.children),s.flags|=4096,s)}function Pm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),fh(n.return,s,a)}function Mh(n,s,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function xm(n,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Wt(n,s,c.children,a),c=Ye.current,c&2)c=c&1|2,s.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,a,s);else if(n.tag===19)Pm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Ye,c),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&Zl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Mh(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Zl(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Mh(s,!0,a,null,g);break;case"together":Mh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function au(n,s){!(s.mode&1)&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Rr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),Qi|=s.lanes,!(a&s.childLanes))return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=li(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function fw(n,s,a){switch(s.tag){case 3:Rm(s),eo();break;case 5:Hp(s);break;case 1:Yt(s.type)&&$l(s);break;case 4:gh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(Ql,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Ye,Ye.current&1),s.flags|=128,null):a&s.child.childLanes?km(n,s,a):(We(Ye,Ye.current&1),n=Rr(n,s,a),n!==null?n.sibling:null);We(Ye,Ye.current&1);break;case 19:if(c=(a&s.childLanes)!==0,n.flags&128){if(c)return xm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ye,Ye.current),c)break;return null;case 22:case 23:return s.lanes=0,Im(n,s,a)}return Rr(n,s,a)}var Nm,Uh,Dm,Om;Nm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Uh=function(){},Dm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,Ki(Qn.current);var g=null;switch(a){case"input":d=Ri(n,d),c=Ri(n,c),g=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=jl)}$o(a,c);var w;a=null;for(B in d)if(!c.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var A=d[B];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in c){var k=c[B];if(A=d!=null?d[B]:void 0,c.hasOwnProperty(B)&&k!==A&&(k!=null||A!=null))if(B==="style")if(A){for(w in A)!A.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&A[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(B,a)),a=k;else B==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(g=g||[]).push(B,k)):B==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(B,""+k):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(k!=null&&B==="onScroll"&&qe("scroll",n),g||A===k||(g=[])):(g=g||[]).push(B,k))}a&&(g=g||[]).push("style",a);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},Om=function(n,s,a,c){a!==c&&(s.flags|=4)};function Ia(n,s){if(!Qe)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function pw(n,s,a){var c=s.pendingProps;switch(oh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Yt(s.type)&&zl(),Mt(s),null;case 3:return c=s.stateNode,io(),Ke(Xt),Ke(Vt),vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Kl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Ln!==null&&(Qh(Ln),Ln=null))),Uh(n,s),Mt(s),null;case 5:yh(s);var d=Ki(_a.current);if(a=s.type,n!==null&&s.stateNode!=null)Dm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(n=Ki(Qn.current),Kl(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Gn]=s,c[fa]=g,n=(s.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<ca.length;d++)qe(ca[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":vs(c,g),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qe("invalid",c);break;case"textarea":Es(c,g),qe("invalid",c)}$o(a,g),d=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&Fl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Fl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&qe("scroll",c)}switch(a){case"input":cr(c),hl(c,g,!0);break;case"textarea":cr(c),Uo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=jl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Gn]=s,n[fa]=c,Nm(n,s,!1,!1),s.stateNode=n;e:{switch(w=Ho(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<ca.length;d++)qe(ca[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":vs(n,c),d=Ri(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),qe("invalid",n);break;case"textarea":Es(n,c),d=Mo(n,c),qe("invalid",n);break;default:d=c}$o(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var k=A[g];g==="style"?Bo(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fo(n,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&jr(n,k):typeof k=="number"&&jr(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&qe("scroll",n):k!=null&&te(n,g,k,w))}switch(a){case"input":cr(n),hl(n,c,!1);break;case"textarea":cr(n),Uo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ue(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?dr(n,!!c.multiple,g,!1):c.defaultValue!=null&&dr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(n&&s.stateNode!=null)Om(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ki(_a.current),Ki(Qn.current),Kl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Gn]=s,(g=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=s,s.stateNode=c}return Mt(s),null;case 13:if(Ke(Ye),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&un!==null&&s.mode&1&&!(s.flags&128))bp(),eo(),s.flags|=98560,g=!1;else if(g=Kl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Gn]=s}else eo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Ln!==null&&(Qh(Ln),Ln=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(n===null||Ye.current&1?mt===0&&(mt=3):Jh())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return io(),Uh(n,s),n===null&&ha(s.stateNode.containerInfo),Mt(s),null;case 10:return dh(s.type._context),Mt(s),null;case 17:return Yt(s.type)&&zl(),Mt(s),null;case 19:if(Ke(Ye),g=s.memoizedState,g===null)return Mt(s),null;if(c=(s.flags&128)!==0,w=g.rendering,w===null)if(c)Ia(g,!1);else{if(mt!==0||n!==null&&n.flags&128)for(n=s.child;n!==null;){if(w=Zl(n),w!==null){for(s.flags|=128,Ia(g,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Ye,Ye.current&1|2),s.child}n=n.sibling}g.tail!==null&&He()>lo&&(s.flags|=128,c=!0,Ia(g,!1),s.lanes=4194304)}else{if(!c)if(n=Zl(w),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ia(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Qe)return Mt(s),null}else 2*He()-g.renderingStartTime>lo&&a!==1073741824&&(s.flags|=128,c=!0,Ia(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Ye.current,We(Ye,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return Yh(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function mw(n,s){switch(oh(s),s.tag){case 1:return Yt(s.type)&&zl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return io(),Ke(Xt),Ke(Vt),vh(),n=s.flags,n&65536&&!(n&128)?(s.flags=n&-65537|128,s):null;case 5:return yh(s),null;case 13:if(Ke(Ye),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));eo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ke(Ye),null;case 4:return io(),null;case 10:return dh(s.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var lu=!1,Ut=!1,gw=typeof WeakSet=="function"?WeakSet:Set,le=null;function oo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,s,c)}else a.current=null}function Fh(n,s,a){try{a()}catch(c){tt(n,s,c)}}var Lm=!1;function yw(n,s){if(Yc=Gr,n=dp(),$c(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,k=-1,B=0,Y=0,J=n,X=null;t:for(;;){for(var se;J!==a||d!==0&&J.nodeType!==3||(A=w+d),J!==g||c!==0&&J.nodeType!==3||(k=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(se=J.firstChild)!==null;)X=J,J=se;for(;;){if(J===n)break t;if(X===a&&++B===d&&(A=w),X===g&&++Y===c&&(k=w),(se=J.nextSibling)!==null)break;J=X,X=J.parentNode}J=se}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:n,selectionRange:a},Gr=!1,le=s;le!==null;)if(s=le,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,le=n;else for(;le!==null;){s=le;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ot=ue.memoizedState,F=s.stateNode,N=F.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Vn(s.type,ce),ot);F.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){tt(s,s.return,ee)}if(n=s.sibling,n!==null){n.return=s.return,le=n;break}le=s.return}return ue=Lm,Lm=!1,ue}function Sa(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Fh(s,a,g)}d=d.next}while(d!==c)}}function uu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function jh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Vm(n){var s=n.alternate;s!==null&&(n.alternate=null,Vm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Gn],delete s[fa],delete s[nh],delete s[Z0],delete s[ew])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=jl));else if(c!==4&&(n=n.child,n!==null))for(Bh(n,s,a),n=n.sibling;n!==null;)Bh(n,s,a),n=n.sibling}function zh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(zh(n,s,a),n=n.sibling;n!==null;)zh(n,s,a),n=n.sibling}var Ct=null,bn=!1;function ri(n,s,a){for(a=a.child;a!==null;)Um(n,s,a),a=a.sibling}function Um(n,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Vi,a)}catch{}switch(a.tag){case 5:Ut||oo(a,s);case 6:var c=Ct,d=bn;Ct=null,ri(n,s,a),Ct=c,bn=d,Ct!==null&&(bn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(bn?(n=Ct,a=a.stateNode,n.nodeType===8?th(n.parentNode,a):n.nodeType===1&&th(n,a),Nn(n)):th(Ct,a.stateNode));break;case 4:c=Ct,d=bn,Ct=a.stateNode.containerInfo,bn=!0,ri(n,s,a),Ct=c,bn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&Fh(a,s,w),d=d.next}while(d!==c)}ri(n,s,a);break;case 1:if(!Ut&&(oo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,s,A)}ri(n,s,a);break;case 21:ri(n,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ri(n,s,a),Ut=c):ri(n,s,a);break;default:ri(n,s,a)}}function Fm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new gw),s.forEach(function(c){var d=Rw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,bn=!1;break e;case 3:Ct=A.stateNode.containerInfo,bn=!0;break e;case 4:Ct=A.stateNode.containerInfo,bn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));Um(g,w,d),Ct=null,bn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(B){tt(d,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)jm(s,n),s=s.sibling}function jm(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(s,n),Yn(n),c&4){try{Sa(3,n,n.return),uu(3,n)}catch(ce){tt(n,n.return,ce)}try{Sa(5,n,n.return)}catch(ce){tt(n,n.return,ce)}}break;case 1:Mn(s,n),Yn(n),c&512&&a!==null&&oo(a,a.return);break;case 5:if(Mn(s,n),Yn(n),c&512&&a!==null&&oo(a,a.return),n.flags&32){var d=n.stateNode;try{jr(d,"")}catch(ce){tt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,A=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Vo(d,g),Ho(A,w);var B=Ho(A,g);for(w=0;w<k.length;w+=2){var Y=k[w],J=k[w+1];Y==="style"?Bo(d,J):Y==="dangerouslySetInnerHTML"?Fo(d,J):Y==="children"?jr(d,J):te(d,Y,J,B)}switch(A){case"input":bo(d,g);break;case"textarea":Ts(d,g);break;case"select":var X=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?dr(d,!!g.multiple,se,!1):X!==!!g.multiple&&(g.defaultValue!=null?dr(d,!!g.multiple,g.defaultValue,!0):dr(d,!!g.multiple,g.multiple?[]:"",!1))}d[fa]=g}catch(ce){tt(n,n.return,ce)}}break;case 6:if(Mn(s,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(ce){tt(n,n.return,ce)}}break;case 3:if(Mn(s,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Nn(s.containerInfo)}catch(ce){tt(n,n.return,ce)}break;case 4:Mn(s,n),Yn(n);break;case 13:Mn(s,n),Yn(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Wh=He())),c&4&&Fm(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(B=Ut)||Y,Mn(s,n),Ut=B):Mn(s,n),Yn(n),c&8192){if(B=n.memoizedState!==null,(n.stateNode.isHidden=B)&&!Y&&n.mode&1)for(le=n,Y=n.child;Y!==null;){for(J=le=Y;le!==null;){switch(X=le,se=X.child,X.tag){case 0:case 11:case 14:case 15:Sa(4,X,X.return);break;case 1:oo(X,X.return);var ue=X.stateNode;if(typeof ue.componentWillUnmount=="function"){c=X,a=X.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:oo(X,X.return);break;case 22:if(X.memoizedState!==null){$m(J);continue}}se!==null?(se.return=X,le=se):$m(J)}Y=Y.sibling}e:for(Y=null,J=n;;){if(J.tag===5){if(Y===null){Y=J;try{d=J.stateNode,B?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,k=J.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=jo("display",w))}catch(ce){tt(n,n.return,ce)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=B?"":J.memoizedProps}catch(ce){tt(n,n.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Mn(s,n),Yn(n),c&4&&Fm(n);break;case 21:break;default:Mn(s,n),Yn(n)}}function Yn(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(bm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(jr(d,""),c.flags&=-33);var g=Mm(n);zh(n,g,d);break;case 3:case 4:var w=c.stateNode.containerInfo,A=Mm(n);Bh(n,A,w);break;default:throw Error(t(161))}}catch(k){tt(n,n.return,k)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function _w(n,s,a){le=n,Bm(n)}function Bm(n,s,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,g=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||lu;if(!w){var A=d.alternate,k=A!==null&&A.memoizedState!==null||Ut;A=lu;var B=Ut;if(lu=w,(Ut=k)&&!B)for(le=d;le!==null;)w=le,k=w.child,w.tag===22&&w.memoizedState!==null?Hm(d):k!==null?(k.return=w,le=k):Hm(d);for(;g!==null;)le=g,Bm(g),g=g.sibling;le=d,lu=A,Ut=B}zm(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,le=g):zm(n)}}function zm(n){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ut||uu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Vn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&$p(s,g,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}$p(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var Y=B.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&Nn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&jh(s)}catch(X){tt(s,s.return,X)}}if(s===n){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function $m(n){for(;le!==null;){var s=le;if(s===n){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function Hm(n){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{uu(4,s)}catch(k){tt(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){tt(s,d,k)}}var g=s.return;try{jh(s)}catch(k){tt(s,g,k)}break;case 5:var w=s.return;try{jh(s)}catch(k){tt(s,w,k)}}}catch(k){tt(s,s.return,k)}if(s===n){le=null;break}var A=s.sibling;if(A!==null){A.return=s.return,le=A;break}le=s.return}}var vw=Math.ceil,cu=ie.ReactCurrentDispatcher,$h=ie.ReactCurrentOwner,wn=ie.ReactCurrentBatchConfig,Ve=0,Tt=null,ut=null,kt=0,cn=0,ao=Jr(0),mt=0,Aa=null,Qi=0,hu=0,Hh=0,Ra=null,Zt=null,Wh=0,lo=1/0,Cr=null,du=!1,qh=null,ii=null,fu=!1,si=null,pu=0,Ca=0,Kh=null,mu=-1,gu=0;function qt(){return Ve&6?He():mu!==-1?mu:mu=He()}function oi(n){return n.mode&1?Ve&2&&kt!==0?kt&-kt:nw.transition!==null?(gu===0&&(gu=Mi()),gu):(n=xe,n!==0||(n=window.event,n=n===void 0?16:ta(n.type)),n):1}function Un(n,s,a,c){if(50<Ca)throw Ca=0,Kh=null,Error(t(185));Hr(n,a,c),(!(Ve&2)||n!==Tt)&&(n===Tt&&(!(Ve&2)&&(hu|=a),mt===4&&ai(n,kt)),en(n,c),a===1&&Ve===0&&!(s.mode&1)&&(lo=He()+500,Hl&&ei()))}function en(n,s){var a=n.callbackNode;mr(n,s);var c=bi(n,n===Tt?kt:0);if(c===0)a!==null&&Xo(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Xo(a),s===1)n.tag===0?tw(qm.bind(null,n)):Np(qm.bind(null,n)),Y0(function(){!(Ve&6)&&ei()}),a=null;else{switch(qr(c)){case 1:a=Li;break;case 4:a=Br;break;case 16:a=fn;break;case 536870912:a=gl;break;default:a=fn}a=eg(a,Wm.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Wm(n,s){if(mu=-1,gu=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(uo()&&n.callbackNode!==a)return null;var c=bi(n,n===Tt?kt:0);if(c===0)return null;if(c&30||c&n.expiredLanes||s)s=yu(n,c);else{s=c;var d=Ve;Ve|=2;var g=Gm();(Tt!==n||kt!==s)&&(Cr=null,lo=He()+500,Yi(n,s));do try{Tw();break}catch(A){Km(n,A)}while(!0);hh(),cu.current=g,Ve=d,ut!==null?s=0:(Tt=null,kt=0,s=mt)}if(s!==0){if(s===2&&(d=sn(n),d!==0&&(c=d,s=Gh(n,d))),s===1)throw a=Aa,Yi(n,0),ai(n,c),en(n,He()),a;if(s===6)ai(n,c);else{if(d=n.current.alternate,!(c&30)&&!ww(d)&&(s=yu(n,c),s===2&&(g=sn(n),g!==0&&(c=g,s=Gh(n,g))),s===1))throw a=Aa,Yi(n,0),ai(n,c),en(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:Ji(n,Zt,Cr);break;case 3:if(ai(n,c),(c&130023424)===c&&(s=Wh+500-He(),10<s)){if(bi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=eh(Ji.bind(null,n,Zt,Cr),s);break}Ji(n,Zt,Cr);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var w=31-$t(c);g=1<<w,w=s[w],w>d&&(d=w),c&=~g}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*vw(c/1960))-c,10<c){n.timeoutHandle=eh(Ji.bind(null,n,Zt,Cr),c);break}Ji(n,Zt,Cr);break;case 5:Ji(n,Zt,Cr);break;default:throw Error(t(329))}}}return en(n,He()),n.callbackNode===a?Wm.bind(null,n):null}function Gh(n,s){var a=Ra;return n.current.memoizedState.isDehydrated&&(Yi(n,s).flags|=256),n=yu(n,s),n!==2&&(s=Zt,Zt=a,s!==null&&Qh(s)),n}function Qh(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function ww(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!On(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ai(n,s){for(s&=~Hh,s&=~hu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;n[a]=-1,s&=~c}}function qm(n){if(Ve&6)throw Error(t(327));uo();var s=bi(n,0);if(!(s&1))return en(n,He()),null;var a=yu(n,s);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(s=c,a=Gh(n,c))}if(a===1)throw a=Aa,Yi(n,0),ai(n,s),en(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Ji(n,Zt,Cr),en(n,He()),null}function Xh(n,s){var a=Ve;Ve|=1;try{return n(s)}finally{Ve=a,Ve===0&&(lo=He()+500,Hl&&ei())}}function Xi(n){si!==null&&si.tag===0&&!(Ve&6)&&uo();var s=Ve;Ve|=1;var a=wn.transition,c=xe;try{if(wn.transition=null,xe=1,n)return n()}finally{xe=c,wn.transition=a,Ve=s,!(Ve&6)&&ei()}}function Yh(){cn=ao.current,Ke(ao)}function Yi(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,X0(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(oh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:io(),Ke(Xt),Ke(Vt),vh();break;case 5:yh(c);break;case 4:io();break;case 13:Ke(Ye);break;case 19:Ke(Ye);break;case 10:dh(c.type._context);break;case 22:case 23:Yh()}a=a.return}if(Tt=n,ut=n=li(n.current,null),kt=cn=s,mt=0,Aa=null,Hh=hu=Qi=0,Zt=Ra=null,qi!==null){for(s=0;s<qi.length;s++)if(a=qi[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=d,c.next=w}a.pending=c}qi=null}return n}function Km(n,s){do{var a=ut;try{if(hh(),eu.current=iu,tu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}tu=!1}if(Gi=0,Et=pt=Je=null,va=!1,wa=0,$h.current=null,a===null||a.return===null){mt=1,Aa=s,ut=null;break}e:{var g=n,w=a.return,A=a,k=s;if(s=kt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var B=k,Y=A,J=Y.tag;if(!(Y.mode&1)&&(J===0||J===11||J===15)){var X=Y.alternate;X?(Y.updateQueue=X.updateQueue,Y.memoizedState=X.memoizedState,Y.lanes=X.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var se=_m(w);if(se!==null){se.flags&=-257,vm(se,w,A,g,s),se.mode&1&&ym(g,B,s),s=se,k=B;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if(!(s&1)){ym(g,B,s),Jh();break e}k=Error(t(426))}}else if(Qe&&A.mode&1){var ot=_m(w);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),vm(ot,w,A,g,s),uh(so(k,A));break e}}g=k=so(k,A),mt!==4&&(mt=2),Ra===null?Ra=[g]:Ra.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=mm(g,k,s);zp(g,F);break e;case 1:A=k;var N=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ii===null||!ii.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=gm(g,A,s);zp(g,ee);break e}}g=g.return}while(g!==null)}Xm(a)}catch(he){s=he,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Gm(){var n=cu.current;return cu.current=iu,n===null?iu:n}function Jh(){(mt===0||mt===3||mt===2)&&(mt=4),Tt===null||!(Qi&268435455)&&!(hu&268435455)||ai(Tt,kt)}function yu(n,s){var a=Ve;Ve|=2;var c=Gm();(Tt!==n||kt!==s)&&(Cr=null,Yi(n,s));do try{Ew();break}catch(d){Km(n,d)}while(!0);if(hh(),Ve=a,cu.current=c,ut!==null)throw Error(t(261));return Tt=null,kt=0,mt}function Ew(){for(;ut!==null;)Qm(ut)}function Tw(){for(;ut!==null&&!pl();)Qm(ut)}function Qm(n){var s=Zm(n.alternate,n,cn);n.memoizedProps=n.pendingProps,s===null?Xm(n):ut=s,$h.current=null}function Xm(n){var s=n;do{var a=s.alternate;if(n=s.return,s.flags&32768){if(a=mw(a,s),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ut=null;return}}else if(a=pw(a,s,cn),a!==null){ut=a;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=n}while(s!==null);mt===0&&(mt=5)}function Ji(n,s,a){var c=xe,d=wn.transition;try{wn.transition=null,xe=1,Iw(n,s,a,c)}finally{wn.transition=d,xe=c}return null}function Iw(n,s,a,c){do uo();while(si!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(n,g),n===Tt&&(ut=Tt=null,kt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||fu||(fu=!0,eg(fn,function(){return uo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=wn.transition,wn.transition=null;var w=xe;xe=1;var A=Ve;Ve|=4,$h.current=null,yw(n,a),jm(a,n),$0(Jc),Gr=!!Yc,Jc=Yc=null,n.current=a,_w(a),Vc(),Ve=A,xe=w,wn.transition=g}else n.current=a;if(fu&&(fu=!1,si=n,pu=d),g=n.pendingLanes,g===0&&(ii=null),yl(a.stateNode),en(n,He()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(du)throw du=!1,n=qh,qh=null,n;return pu&1&&n.tag!==0&&uo(),g=n.pendingLanes,g&1?n===Kh?Ca++:(Ca=0,Kh=n):Ca=0,ei(),null}function uo(){if(si!==null){var n=qr(pu),s=wn.transition,a=xe;try{if(wn.transition=null,xe=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,pu=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,le=n.current;le!==null;){var g=le,w=g.child;if(le.flags&16){var A=g.deletions;if(A!==null){for(var k=0;k<A.length;k++){var B=A[k];for(le=B;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:Sa(8,Y,g)}var J=Y.child;if(J!==null)J.return=Y,le=J;else for(;le!==null;){Y=le;var X=Y.sibling,se=Y.return;if(Vm(Y),Y===B){le=null;break}if(X!==null){X.return=se,le=X;break}le=se}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ot=ce.sibling;ce.sibling=null,ce=ot}while(ce!==null)}}le=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Sa(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,le=F;break e}le=g.return}}var N=n.current;for(le=N;le!==null;){w=le;var j=w.child;if(w.subtreeFlags&2064&&j!==null)j.return=w,le=j;else e:for(w=N;le!==null;){if(A=le,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:uu(9,A)}}catch(he){tt(A,A.return,he)}if(A===w){le=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,le=ee;break e}le=A.return}}if(Ve=d,ei(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Vi,n)}catch{}c=!0}return c}finally{xe=a,wn.transition=s}}return!1}function Ym(n,s,a){s=so(a,s),s=mm(n,s,1),n=ni(n,s,1),s=qt(),n!==null&&(Hr(n,1,s),en(n,s))}function tt(n,s,a){if(n.tag===3)Ym(n,n,a);else for(;s!==null;){if(s.tag===3){Ym(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=so(a,n),n=gm(s,n,1),s=ni(s,n,1),n=qt(),s!==null&&(Hr(s,1,n),en(s,n));break}}s=s.return}}function Sw(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=qt(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(kt&a)===a&&(mt===4||mt===3&&(kt&130023424)===kt&&500>He()-Wh?Yi(n,0):Hh|=a),en(n,s)}function Jm(n,s){s===0&&(n.mode&1?(s=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):s=1);var a=qt();n=Sr(n,s),n!==null&&(Hr(n,s,a),en(n,a))}function Aw(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Jm(n,a)}function Rw(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Jm(n,a)}var Zm;Zm=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Xt.current)Jt=!0;else{if(!(n.lanes&a)&&!(s.flags&128))return Jt=!1,fw(n,s,a);Jt=!!(n.flags&131072)}else Jt=!1,Qe&&s.flags&1048576&&Dp(s,ql,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;au(n,s),n=s.pendingProps;var d=Ys(s,Vt.current);ro(s,a),d=Th(null,s,c,n,d,a);var g=Ih();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(g=!0,$l(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mh(s),d.updater=su,s.stateNode=d,d._reactInternals=s,Ph(s,c,n,a),s=Oh(null,s,c,!0,g,a)):(s.tag=0,Qe&&g&&sh(s),Wt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(au(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=kw(c),n=Vn(c,n),d){case 0:s=Dh(null,s,c,n,a);break e;case 1:s=Am(null,s,c,n,a);break e;case 11:s=wm(null,s,c,n,a);break e;case 14:s=Em(null,s,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Dh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Am(n,s,c,d,a);case 3:e:{if(Rm(s),n===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Bp(n,s),Jl(s,c,null,a);var w=s.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=so(Error(t(423)),s),s=Cm(n,s,c,a,d);break e}else if(c!==d){d=so(Error(t(424)),s),s=Cm(n,s,c,a,d);break e}else for(un=Yr(s.stateNode.containerInfo.firstChild),ln=s,Qe=!0,Ln=null,a=Fp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===d){s=Rr(n,s,a);break e}Wt(n,s,c,a)}s=s.child}return s;case 5:return Hp(s),n===null&&lh(s),c=s.type,d=s.pendingProps,g=n!==null?n.memoizedProps:null,w=d.children,Zc(c,d)?w=null:g!==null&&Zc(c,g)&&(s.flags|=32),Sm(n,s),Wt(n,s,w,a),s.child;case 6:return n===null&&lh(s),null;case 13:return km(n,s,a);case 4:return gh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=to(s,null,c,a):Wt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),wm(n,s,c,d,a);case 7:return Wt(n,s,s.pendingProps,a),s.child;case 8:return Wt(n,s,s.pendingProps.children,a),s.child;case 12:return Wt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,w=d.value,We(Ql,c._currentValue),c._currentValue=w,g!==null)if(On(g.value,w)){if(g.children===d.children&&!Xt.current){s=Rr(n,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var k=A.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=Ar(-1,a&-a),k.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var Y=B.pending;Y===null?k.next=k:(k.next=Y.next,Y.next=k),B.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),fh(g.return,a,s),A.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),fh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Wt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,ro(s,a),d=_n(d),c=c(d),s.flags|=1,Wt(n,s,c,a),s.child;case 14:return c=s.type,d=Vn(c,s.pendingProps),d=Vn(c.type,d),Em(n,s,c,d,a);case 15:return Tm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),au(n,s),s.tag=1,Yt(c)?(n=!0,$l(s)):n=!1,ro(s,a),fm(s,c,d),Ph(s,c,d,a),Oh(null,s,c,!0,n,a);case 19:return xm(n,s,a);case 22:return Im(n,s,a)}throw Error(t(156,s.tag))};function eg(n,s){return xs(n,s)}function Cw(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,s,a,c){return new Cw(n,s,a,c)}function Zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kw(n){if(typeof n=="function")return Zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===M)return 11;if(n===Ot)return 14}return 2}function li(n,s){var a=n.alternate;return a===null?(a=En(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _u(n,s,a,c,d,g){var w=2;if(c=n,typeof n=="function")Zh(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case x:return Zi(a.children,d,g,s);case S:w=8,d|=8;break;case R:return n=En(12,a,s,d|2),n.elementType=R,n.lanes=g,n;case C:return n=En(13,a,s,d),n.elementType=C,n.lanes=g,n;case it:return n=En(19,a,s,d),n.elementType=it,n.lanes=g,n;case Be:return vu(a,d,g,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:w=10;break e;case O:w=9;break e;case M:w=11;break e;case Ot:w=14;break e;case Lt:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=En(w,a,s,d),s.elementType=n,s.type=c,s.lanes=g,s}function Zi(n,s,a,c){return n=En(7,n,c,s),n.lanes=a,n}function vu(n,s,a,c){return n=En(22,n,c,s),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function ed(n,s,a){return n=En(6,n,null,s),n.lanes=a,n}function td(n,s,a){return s=En(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Pw(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nd(n,s,a,c,d,g,w,A,k){return n=new Pw(n,s,a,A,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=En(3,null,null,s),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(g),n}function xw(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function tg(n){if(!n)return Zr;n=n._reactInternals;e:{if(Rn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Pp(n,a,s)}return s}function ng(n,s,a,c,d,g,w,A,k){return n=nd(a,c,!0,n,d,g,w,A,k),n.context=tg(null),a=n.current,c=qt(),d=oi(a),g=Ar(c,d),g.callback=s??null,ni(a,g,d),n.current.lanes=d,Hr(n,d,c),en(n,c),n}function wu(n,s,a,c){var d=s.current,g=qt(),w=oi(d);return a=tg(a),s.context===null?s.context=a:s.pendingContext=a,s=Ar(g,w),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ni(d,s,w),n!==null&&(Un(n,d,w,g),Yl(n,d,w)),w}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function rd(n,s){rg(n,s),(n=n.alternate)&&rg(n,s)}var ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}Tu.prototype.render=id.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));wu(n,s,null,null)},Tu.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;Xi(function(){wu(null,n,null,null)}),s[wr]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var s=Tl();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Hn.length&&s!==0&&s<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&Al(n)}};function sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function Nw(n,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var B=Eu(w);g.call(B)}}var w=ng(s,c,n,0,null,!1,!1,"",sg);return n._reactRootContainer=w,n[wr]=w.current,ha(n.nodeType===8?n.parentNode:n),Xi(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var B=Eu(k);A.call(B)}}var k=nd(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=k,n[wr]=k.current,ha(n.nodeType===8?n.parentNode:n),Xi(function(){wu(s,k,a,c)}),k}function Su(n,s,a,c,d){var g=a._reactRootContainer;if(g){var w=g;if(typeof d=="function"){var A=d;d=function(){var k=Eu(w);A.call(k)}}wu(s,w,n,d)}else w=Nw(a,s,n,d,c);return Eu(w)}wl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=zr(s.pendingLanes);a!==0&&(Wr(s,a|1),en(s,He()),!(Ve&6)&&(lo=He()+500,ei()))}break;case 13:Xi(function(){var c=Sr(n,1);if(c!==null){var d=qt();Un(c,n,1,d)}}),rd(n,1)}},Os=function(n){if(n.tag===13){var s=Sr(n,134217728);if(s!==null){var a=qt();Un(s,n,134217728,a)}rd(n,134217728)}},El=function(n){if(n.tag===13){var s=oi(n),a=Sr(n,s);if(a!==null){var c=qt();Un(a,n,s,c)}rd(n,s)}},Tl=function(){return xe},Il=function(n,s){var a=xe;try{return xe=n,s()}finally{xe=a}},Ss=function(n,s,a){switch(s){case"input":if(bo(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Bl(c);if(!d)throw Error(t(90));_s(c),bo(c,d)}}}break;case"textarea":Ts(n,a);break;case"select":s=a.value,s!=null&&dr(n,!!a.multiple,s,!1)}},xi=Xh,qo=Xi;var Dw={usingClientEntryPoint:!1,Events:[pa,Qs,Bl,zn,Wo,Xh]},ka={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ow={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qo(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Vi=Au.inject(Ow),rn=Au}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dw,tn.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(s))throw Error(t(200));return xw(n,s,null,a)},tn.createRoot=function(n,s){if(!sd(n))throw Error(t(299));var a=!1,c="",d=ig;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=nd(n,1,!1,null,null,a,!1,c,d),n[wr]=s.current,ha(n.nodeType===8?n.parentNode:n),new id(s)},tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qo(s),n=n===null?null:n.stateNode,n},tn.flushSync=function(n){return Xi(n)},tn.hydrate=function(n,s,a){if(!Iu(s))throw Error(t(200));return Su(null,n,s,!0,a)},tn.hydrateRoot=function(n,s,a){if(!sd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",w=ig;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=ng(s,null,n,1,a??null,d,!1,g,w),n[wr]=s.current,ha(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Tu(s)},tn.render=function(n,s,a){if(!Iu(s))throw Error(t(200));return Su(null,n,s,!1,a)},tn.unmountComponentAtNode=function(n){if(!Iu(n))throw Error(t(40));return n._reactRootContainer?(Xi(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},tn.unstable_batchedUpdates=Xh,tn.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Iu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Su(n,s,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var fg;function zw(){if(fg)return ld.exports;fg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ld.exports=Bw(),ld.exports}var pg;function $w(){if(pg)return Ru;pg=1;var r=zw();return Ru.createRoot=r.createRoot,Ru.hydrateRoot=r.hydrateRoot,Ru}var Hw=$w();const Ww=By(Hw);var xa={},mg;function qw(){if(mg)return xa;mg=1,Object.defineProperty(xa,"__esModule",{value:!0}),xa.parse=h,xa.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function h(I,D){const V=new l,z=I.length;if(z<2)return V;const L=(D==null?void 0:D.decode)||v;let W=0;do{const q=I.indexOf("=",W);if(q===-1)break;const te=I.indexOf(";",W),ie=te===-1?z:te;if(q>ie){W=I.lastIndexOf(";",q-1)+1;continue}const Ie=f(I,W,q),_e=m(I,q,Ie),x=I.slice(Ie,_e);if(V[x]===void 0){let S=f(I,q+1,ie),R=m(I,ie,S);const P=L(I.slice(S,R));V[x]=P}W=ie+1}while(W<z);return V}function f(I,D,V){do{const z=I.charCodeAt(D);if(z!==32&&z!==9)return D}while(++D<V);return V}function m(I,D,V){for(;D>V;){const z=I.charCodeAt(--D);if(z!==32&&z!==9)return D+1}return V}function y(I,D,V){const z=(V==null?void 0:V.encode)||encodeURIComponent;if(!r.test(I))throw new TypeError(`argument name is invalid: ${I}`);const L=z(D);if(!e.test(L))throw new TypeError(`argument val is invalid: ${D}`);let W=I+"="+L;if(!V)return W;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);W+="; Max-Age="+V.maxAge}if(V.domain){if(!t.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);W+="; Domain="+V.domain}if(V.path){if(!i.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);W+="; Path="+V.path}if(V.expires){if(!T(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);W+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(W+="; HttpOnly"),V.secure&&(W+="; Secure"),V.partitioned&&(W+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return W}function v(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return xa}qw();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gg="popstate";function Kw(r={}){function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return Cd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:$a(o)}return Qw(e,t,null,r)}function Ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ir(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Gw(){return Math.random().toString(36).substring(2,10)}function yg(r,e){return{usr:r.state,key:r.key,idx:e}}function Cd(r,e,t=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ko(e):e,state:t,key:e&&e.key||i||Gw()}}function $a({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ko(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substring(i),r=r.substring(0,i)),r&&(e.pathname=r)}return e}function Qw(r,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f="POP",m=null,y=v();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function v(){return(h.state||{idx:null}).idx}function T(){f="POP";let L=v(),W=L==null?null:L-y;y=L,m&&m({action:f,location:z.location,delta:W})}function I(L,W){f="PUSH";let q=Cd(z.location,L,W);y=v()+1;let te=yg(q,y),ie=z.createHref(q);try{h.pushState(te,"",ie)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(ie)}l&&m&&m({action:f,location:z.location,delta:1})}function D(L,W){f="REPLACE";let q=Cd(z.location,L,W);y=v();let te=yg(q,y),ie=z.createHref(q);h.replaceState(te,"",ie),l&&m&&m({action:f,location:z.location,delta:0})}function V(L){let W=o.location.origin!=="null"?o.location.origin:o.location.href,q=typeof L=="string"?L:$a(L);return q=q.replace(/ $/,"%20"),Ze(W,`No window.location.(origin|href) available to create URL for href: ${q}`),new URL(q,W)}let z={get action(){return f},get location(){return r(o,h)},listen(L){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(gg,T),m=L,()=>{o.removeEventListener(gg,T),m=null}},createHref(L){return e(o,L)},createURL:V,encodeLocation(L){let W=V(L);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:I,replace:D,go(L){return h.go(L)}};return z}function zy(r,e,t="/"){return Xw(r,e,t,!1)}function Xw(r,e,t,i){let o=typeof e=="string"?ko(e):e,l=vi(o.pathname||"/",t);if(l==null)return null;let h=$y(r);Yw(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let y=lE(l);f=oE(h[m],y,i)}return f}function $y(r,e=[],t=[],i=""){let o=(l,h,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(Ze(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let y=Or([i,m.relativePath]),v=t.concat(m);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),$y(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:iE(y,l.index),routesMeta:v})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let m of Hy(l.path))o(l,h,m)}),e}function Hy(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=Hy(i.join("/")),f=[];return f.push(...h.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...h),f.map(m=>r.startsWith("/")&&m===""?"/":m)}function Yw(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:sE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Jw=/^:[\w-]+$/,Zw=3,eE=2,tE=1,nE=10,rE=-2,_g=r=>r==="*";function iE(r,e){let t=r.split("/"),i=t.length;return t.some(_g)&&(i+=rE),e&&(i+=eE),t.filter(o=>!_g(o)).reduce((o,l)=>o+(Jw.test(l)?Zw:l===""?tE:nE),i)}function sE(r,e){return r.length===e.length&&r.slice(0,-1).every((i,o)=>i===e[o])?r[r.length-1]-e[e.length-1]:0}function oE(r,e,t=!1){let{routesMeta:i}=r,o={},l="/",h=[];for(let f=0;f<i.length;++f){let m=i[f],y=f===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},v),I=m.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Or([l,T.pathname]),pathnameBase:dE(Or([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Or([l,T.pathnameBase]))}return h}function Gu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=aE(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:v,isOptional:T},I)=>{if(v==="*"){let V=f[I]||"";h=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const D=f[I];return T&&!D?y[v]=void 0:y[v]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:r}}function aE(r,e=!1,t=!0){ir(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m)=>(i.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(i.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function lE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ir(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function vi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function uE(r,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof r=="string"?ko(r):r;return{pathname:t?t.startsWith("/")?t:cE(t,e):e,search:fE(i),hash:pE(o)}}function cE(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hd(r,e,t,i){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hE(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Wy(r){let e=hE(r);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function qy(r,e,t,i=!1){let o;typeof r=="string"?o=ko(r):(o={...r},Ze(!o.pathname||!o.pathname.includes("?"),hd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),hd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),hd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let m=uE(o,f),y=h&&h!=="/"&&h.endsWith("/"),v=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(y||v)&&(m.pathname+="/"),m}var Or=r=>r.join("/").replace(/\/\/+/g,"/"),dE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),fE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,pE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function mE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Ky=["POST","PUT","PATCH","DELETE"];new Set(Ky);var gE=["GET",...Ky];new Set(gE);var Po=K.createContext(null);Po.displayName="DataRouter";var fc=K.createContext(null);fc.displayName="DataRouterState";var Gy=K.createContext({isTransitioning:!1});Gy.displayName="ViewTransition";var yE=K.createContext(new Map);yE.displayName="Fetchers";var _E=K.createContext(null);_E.displayName="Await";var lr=K.createContext(null);lr.displayName="Navigation";var Za=K.createContext(null);Za.displayName="Location";var Ur=K.createContext({outlet:null,matches:[],isDataRoute:!1});Ur.displayName="Route";var ef=K.createContext(null);ef.displayName="RouteError";function vE(r,{relative:e}={}){Ze(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=K.useContext(lr),{hash:o,pathname:l,search:h}=tl(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Or([t,l])),i.createHref({pathname:f,search:h,hash:o})}function el(){return K.useContext(Za)!=null}function ds(){return Ze(el(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Za).location}var Qy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xy(r){K.useContext(lr).static||K.useLayoutEffect(r)}function tf(){let{isDataRoute:r}=K.useContext(Ur);return r?DE():wE()}function wE(){Ze(el(),"useNavigate() may be used only in the context of a <Router> component.");let r=K.useContext(Po),{basename:e,navigator:t}=K.useContext(lr),{matches:i}=K.useContext(Ur),{pathname:o}=ds(),l=JSON.stringify(Wy(i)),h=K.useRef(!1);return Xy(()=>{h.current=!0}),K.useCallback((m,y={})=>{if(ir(h.current,Qy),!h.current)return;if(typeof m=="number"){t.go(m);return}let v=qy(m,JSON.parse(l),o,y.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Or([e,v.pathname])),(y.replace?t.replace:t.push)(v,y.state,y)},[e,t,l,o,r])}K.createContext(null);function tl(r,{relative:e}={}){let{matches:t}=K.useContext(Ur),{pathname:i}=ds(),o=JSON.stringify(Wy(t));return K.useMemo(()=>qy(r,JSON.parse(o),i,e==="path"),[r,o,i,e])}function EE(r,e){return Yy(r,e)}function Yy(r,e,t,i){var W;Ze(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=K.useContext(lr),{matches:l}=K.useContext(Ur),h=l[l.length-1],f=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",v=h&&h.route;{let q=v&&v.path||"";Jy(m,!v||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let T=ds(),I;if(e){let q=typeof e=="string"?ko(e):e;Ze(y==="/"||((W=q.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),I=q}else I=T;let D=I.pathname||"/",V=D;if(y!=="/"){let q=y.replace(/^\//,"").split("/");V="/"+D.replace(/^\//,"").split("/").slice(q.length).join("/")}let z=zy(r,{pathname:V});ir(v||z!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),ir(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=RE(z&&z.map(q=>Object.assign({},q,{params:Object.assign({},f,q.params),pathname:Or([y,o.encodeLocation?o.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:Or([y,o.encodeLocation?o.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),l,t,i);return e&&L?K.createElement(Za.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},L):L}function TE(){let r=NE(),e=mE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:l},"ErrorBoundary")," or"," ",K.createElement("code",{style:l},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:o},t):null,h)}var IE=K.createElement(TE,null),SE=class extends K.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?K.createElement(Ur.Provider,{value:this.props.routeContext},K.createElement(ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function AE({routeContext:r,match:e,children:t}){let i=K.useContext(Po);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Ur.Provider,{value:r},t)}function RE(r,e=[],t=null,i=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let m=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,f=-1;if(t)for(let m=0;m<o.length;m++){let y=o[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=m),y.route.id){let{loaderData:v,errors:T}=t,I=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((m,y,v)=>{let T,I=!1,D=null,V=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,D=y.route.errorElement||IE,h&&(f<0&&v===0?(Jy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,V=null):f===v&&(I=!0,V=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,v+1)),L=()=>{let W;return T?W=D:I?W=V:y.route.Component?W=K.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=m,K.createElement(AE,{match:y,routeContext:{outlet:m,matches:z,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?K.createElement(SE,{location:t.location,revalidation:t.revalidation,component:D,error:T,children:L(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):L()},null)}function nf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CE(r){let e=K.useContext(Po);return Ze(e,nf(r)),e}function kE(r){let e=K.useContext(fc);return Ze(e,nf(r)),e}function PE(r){let e=K.useContext(Ur);return Ze(e,nf(r)),e}function rf(r){let e=PE(r),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function xE(){return rf("useRouteId")}function NE(){var i;let r=K.useContext(ef),e=kE("useRouteError"),t=rf("useRouteError");return r!==void 0?r:(i=e.errors)==null?void 0:i[t]}function DE(){let{router:r}=CE("useNavigate"),e=rf("useNavigate"),t=K.useRef(!1);return Xy(()=>{t.current=!0}),K.useCallback(async(o,l={})=>{ir(t.current,Qy),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var vg={};function Jy(r,e,t){!e&&!vg[r]&&(vg[r]=!0,ir(!1,t))}K.memo(OE);function OE({routes:r,future:e,state:t}){return Yy(r,void 0,t,e)}function kd(r){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function LE({basename:r="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Ze(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=K.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=ko(t));let{pathname:m="/",search:y="",hash:v="",state:T=null,key:I="default"}=t,D=K.useMemo(()=>{let V=vi(m,h);return V==null?null:{location:{pathname:V,search:y,hash:v,state:T,key:I},navigationType:i}},[h,m,y,v,T,I,i]);return ir(D!=null,`<Router basename="${h}"> is not able to match the URL "${m}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:K.createElement(lr.Provider,{value:f},K.createElement(Za.Provider,{children:e,value:D}))}function VE({children:r,location:e}){return EE(Pd(r),e)}function Pd(r,e=[]){let t=[];return K.Children.forEach(r,(i,o)=>{if(!K.isValidElement(i))return;let l=[...e,o];if(i.type===K.Fragment){t.push.apply(t,Pd(i.props.children,l));return}Ze(i.type===kd,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Pd(i.props.children,l)),t.push(h)}),t}var bu="get",Mu="application/x-www-form-urlencoded";function pc(r){return r!=null&&typeof r.tagName=="string"}function bE(r){return pc(r)&&r.tagName.toLowerCase()==="button"}function ME(r){return pc(r)&&r.tagName.toLowerCase()==="form"}function UE(r){return pc(r)&&r.tagName.toLowerCase()==="input"}function FE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function jE(r,e){return r.button===0&&(!e||e==="_self")&&!FE(r)}var Cu=null;function BE(){if(Cu===null)try{new FormData(document.createElement("form"),0),Cu=!1}catch{Cu=!0}return Cu}var zE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dd(r){return r!=null&&!zE.has(r)?(ir(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mu}"`),null):r}function $E(r,e){let t,i,o,l,h;if(ME(r)){let f=r.getAttribute("action");i=f?vi(f,e):null,t=r.getAttribute("method")||bu,o=dd(r.getAttribute("enctype"))||Mu,l=new FormData(r)}else if(bE(r)||UE(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||f.getAttribute("action");if(i=m?vi(m,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||bu,o=dd(r.getAttribute("formenctype"))||dd(f.getAttribute("enctype"))||Mu,l=new FormData(f,r),!BE()){let{name:y,type:v,value:T}=r;if(v==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(pc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=bu,i=null,o=Mu,h=r}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function sf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function HE(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function qE(r,e,t){let i=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await HE(l,t);return h.links?h.links():[]}return[]}));return XE(i.flat(1).filter(WE).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function wg(r,e,t,i,o,l){let h=(m,y)=>t[y]?m.route.id!==t[y].route.id:!0,f=(m,y)=>{var v;return t[y].pathname!==m.pathname||((v=t[y].route.path)==null?void 0:v.endsWith("*"))&&t[y].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,y)=>h(m,y)||f(m,y)):l==="data"?e.filter((m,y)=>{var T;let v=i.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(h(m,y)||f(m,y))return!0;if(m.route.shouldRevalidate){let I=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function KE(r,e){return GE(r.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function GE(r){return[...new Set(r)]}function QE(r){let e={},t=Object.keys(r).sort();for(let i of t)e[i]=r[i];return e}function XE(r,e){let t=new Set;return new Set(e),r.reduce((i,o)=>{let l=JSON.stringify(QE(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function YE(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function JE(){let r=K.useContext(Po);return sf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ZE(){let r=K.useContext(fc);return sf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var of=K.createContext(void 0);of.displayName="FrameworkContext";function Zy(){let r=K.useContext(of);return sf(r,"You must render this element inside a <HydratedRouter> element"),r}function eT(r,e){let t=K.useContext(of),[i,o]=K.useState(!1),[l,h]=K.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:y,onMouseLeave:v,onTouchStart:T}=e,I=K.useRef(null);K.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let z=W=>{W.forEach(q=>{h(q.isIntersecting)})},L=new IntersectionObserver(z,{threshold:.5});return I.current&&L.observe(I.current),()=>{L.disconnect()}}},[r]),K.useEffect(()=>{if(i){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[i]);let D=()=>{o(!0)},V=()=>{o(!1),h(!1)};return t?r!=="intent"?[l,I,{}]:[l,I,{onFocus:Na(f,D),onBlur:Na(m,V),onMouseEnter:Na(y,D),onMouseLeave:Na(v,V),onTouchStart:Na(T,D)}]:[!1,I,{}]}function Na(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function tT({page:r,...e}){let{router:t}=JE(),i=K.useMemo(()=>zy(t.routes,r,t.basename),[t.routes,r,t.basename]);return i?K.createElement(rT,{page:r,matches:i,...e}):null}function nT(r){let{manifest:e,routeModules:t}=Zy(),[i,o]=K.useState([]);return K.useEffect(()=>{let l=!1;return qE(r,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[r,e,t]),i}function rT({page:r,matches:e,...t}){let i=ds(),{manifest:o,routeModules:l}=Zy(),{loaderData:h,matches:f}=ZE(),m=K.useMemo(()=>wg(r,e,f,o,i,"data"),[r,e,f,o,i]),y=K.useMemo(()=>wg(r,e,f,o,i,"assets"),[r,e,f,o,i]),v=K.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let D=new Set,V=!1;if(e.forEach(L=>{var q;let W=o.routes[L.route.id];!W||!W.hasLoader||(!m.some(te=>te.route.id===L.route.id)&&L.route.id in h&&((q=l[L.route.id])!=null&&q.shouldRevalidate)||W.hasClientLoader?V=!0:D.add(L.route.id))}),D.size===0)return[];let z=YE(r);return V&&D.size>0&&z.searchParams.set("_routes",e.filter(L=>D.has(L.route.id)).map(L=>L.route.id).join(",")),[z.pathname+z.search]},[h,i,o,m,e,r,l]),T=K.useMemo(()=>KE(y,o),[y,o]),I=nT(y);return K.createElement(K.Fragment,null,v.map(D=>K.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),T.map(D=>K.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),I.map(({key:D,link:V})=>K.createElement("link",{key:D,...V})))}function iT(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var e_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{e_&&(window.__reactRouterVersion="7.1.1")}catch{}function sT({basename:r,children:e,window:t}){let i=K.useRef();i.current==null&&(i.current=Kw({window:t,v5Compat:!0}));let o=i.current,[l,h]=K.useState({action:o.action,location:o.location}),f=K.useCallback(m=>{K.startTransition(()=>h(m))},[h]);return K.useLayoutEffect(()=>o.listen(f),[o,f]),K.createElement(LE,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var t_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,n_=K.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:f,target:m,to:y,preventScrollReset:v,viewTransition:T,...I},D){let{basename:V}=K.useContext(lr),z=typeof y=="string"&&t_.test(y),L,W=!1;if(typeof y=="string"&&z&&(L=y,e_))try{let R=new URL(window.location.href),P=y.startsWith("//")?new URL(R.protocol+y):new URL(y),O=vi(P.pathname,V);P.origin===R.origin&&O!=null?y=O+P.search+P.hash:W=!0}catch{ir(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=vE(y,{relative:o}),[te,ie,Ie]=eT(i,I),_e=uT(y,{replace:h,state:f,target:m,preventScrollReset:v,relative:o,viewTransition:T});function x(R){e&&e(R),R.defaultPrevented||_e(R)}let S=K.createElement("a",{...I,...Ie,href:L||q,onClick:W||l?e:x,ref:iT(D,ie),target:m,"data-discover":!z&&t==="render"?"true":void 0});return te&&!z?K.createElement(K.Fragment,null,S,K.createElement(tT,{page:q})):S});n_.displayName="Link";var oT=K.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:f,children:m,...y},v){let T=tl(h,{relative:y.relative}),I=ds(),D=K.useContext(fc),{navigator:V,basename:z}=K.useContext(lr),L=D!=null&&pT(T)&&f===!0,W=V.encodeLocation?V.encodeLocation(T).pathname:T.pathname,q=I.pathname,te=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||(q=q.toLowerCase(),te=te?te.toLowerCase():null,W=W.toLowerCase()),te&&z&&(te=vi(te,z)||te);const ie=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Ie=q===W||!o&&q.startsWith(W)&&q.charAt(ie)==="/",_e=te!=null&&(te===W||!o&&te.startsWith(W)&&te.charAt(W.length)==="/"),x={isActive:Ie,isPending:_e,isTransitioning:L},S=Ie?e:void 0,R;typeof i=="function"?R=i(x):R=[i,Ie?"active":null,_e?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(x):l;return K.createElement(n_,{...y,"aria-current":S,className:R,ref:v,style:P,to:h,viewTransition:f},typeof m=="function"?m(x):m)});oT.displayName="NavLink";var aT=K.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=bu,action:f,onSubmit:m,relative:y,preventScrollReset:v,viewTransition:T,...I},D)=>{let V=dT(),z=fT(f,{relative:y}),L=h.toLowerCase()==="get"?"get":"post",W=typeof f=="string"&&t_.test(f),q=te=>{if(m&&m(te),te.defaultPrevented)return;te.preventDefault();let ie=te.nativeEvent.submitter,Ie=(ie==null?void 0:ie.getAttribute("formmethod"))||h;V(ie||te.currentTarget,{fetcherKey:e,method:Ie,navigate:t,replace:o,state:l,relative:y,preventScrollReset:v,viewTransition:T})};return K.createElement("form",{ref:D,method:L,action:z,onSubmit:i?m:q,...I,"data-discover":!W&&r==="render"?"true":void 0})});aT.displayName="Form";function lT(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r_(r){let e=K.useContext(Po);return Ze(e,lT(r)),e}function uT(r,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=tf(),m=ds(),y=tl(r,{relative:l});return K.useCallback(v=>{if(jE(v,e)){v.preventDefault();let T=t!==void 0?t:$a(m)===$a(y);f(r,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[m,f,y,t,i,e,r,o,l,h])}var cT=0,hT=()=>`__${String(++cT)}__`;function dT(){let{router:r}=r_("useSubmit"),{basename:e}=K.useContext(lr),t=xE();return K.useCallback(async(i,o={})=>{let{action:l,method:h,encType:f,formData:m,body:y}=$E(i,e);if(o.navigate===!1){let v=o.fetcherKey||hT();await r.fetch(v,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function fT(r,{relative:e}={}){let{basename:t}=K.useContext(lr),i=K.useContext(Ur);Ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...tl(r||".",{relative:e})},h=ds();if(r==null){l.search=h.search;let f=new URLSearchParams(l.search),m=f.getAll("index");if(m.some(v=>v==="")){f.delete("index"),m.filter(T=>T).forEach(T=>f.append("index",T));let v=f.toString();l.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Or([t,l.pathname])),$a(l)}function pT(r,e={}){let t=K.useContext(Gy);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=r_("useViewTransitionState"),o=tl(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=vi(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=vi(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Gu(o.pathname,h)!=null||Gu(o.pathname,l)!=null}new TextEncoder;var Eg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},mT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],m=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},s_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,m=o+2<r.length,y=m?r[o+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,D=y&63;m||(D=64,h||(I=64)),i.push(t[v],t[T],t[I],t[D])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(i_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):mT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new gT;const I=l<<2|f>>4;if(i.push(I),y!==64){const D=f<<4&240|y>>2;if(i.push(D),T!==64){const V=y<<6&192|T;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class gT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yT=function(r){const e=i_(r);return s_.encodeByteArray(e,!0)},Qu=function(r){return yT(r).replace(/\./g,"")},o_=function(r){try{return s_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=()=>_T().__FIREBASE_DEFAULTS__,wT=()=>{if(typeof process>"u"||typeof Eg>"u")return;const r=Eg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ET=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&o_(r[1]);return e&&JSON.parse(e)},mc=()=>{try{return vT()||wT()||ET()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},a_=r=>{var e,t;return(t=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},l_=r=>{const e=a_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},u_=()=>{var r;return(r=mc())===null||r===void 0?void 0:r.config},c_=r=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Qu(JSON.stringify(t)),Qu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function ST(){var r;const e=(r=mc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function CT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function PT(){return!ST()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xT(){try{return typeof indexedDB=="object"}catch{return!1}}function NT(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="FirebaseError";class ur extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=DT,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?OT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new ur(o,f,i)}}function OT(r,e){return r.replace(LT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const LT=/\{\$([^}]+)}/g;function VT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Xu(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Tg(l)&&Tg(h)){if(!Xu(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Tg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function bT(r,e){const t=new MT(r,e);return t.subscribe.bind(t)}class MT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");UT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=fd),o.error===void 0&&(o.error=fd),o.complete===void 0&&(o.complete=fd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function fd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(r){return r&&r._delegate?r._delegate:r}class wi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new TT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BT(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jT(r){return r===es?void 0:r}function BT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new FT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const $T={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},HT=ke.INFO,WT={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},qT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=WT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class af{constructor(e){this.name=e,this._logLevel=HT,this._logHandler=qT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$T[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const KT=(r,e)=>e.some(t=>r instanceof t);let Ig,Sg;function GT(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QT(){return Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d_=new WeakMap,xd=new WeakMap,f_=new WeakMap,pd=new WeakMap,lf=new WeakMap;function XT(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(gi(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&d_.set(t,r)}).catch(()=>{}),lf.set(e,r),e}function YT(r){if(xd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});xd.set(r,e)}let Nd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return xd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||f_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function JT(r){Nd=r(Nd)}function ZT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(md(this),e,...t);return f_.set(i,e.sort?e.sort():[e]),gi(i)}:QT().includes(r)?function(...e){return r.apply(md(this),e),gi(d_.get(this))}:function(...e){return gi(r.apply(md(this),e))}}function eI(r){return typeof r=="function"?ZT(r):(r instanceof IDBTransaction&&YT(r),KT(r,GT())?new Proxy(r,Nd):r)}function gi(r){if(r instanceof IDBRequest)return XT(r);if(pd.has(r))return pd.get(r);const e=eI(r);return e!==r&&(pd.set(r,e),lf.set(e,r)),e}const md=r=>lf.get(r);function tI(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=gi(h);return i&&h.addEventListener("upgradeneeded",m=>{i(gi(h.result),m.oldVersion,m.newVersion,gi(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const nI=["get","getKey","getAll","getAllKeys","count"],rI=["put","add","delete","clear"],gd=new Map;function Ag(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(gd.get(e))return gd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=rI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||nI.includes(t)))return;const l=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&m.done]))[0]};return gd.set(e,l),l}JT(r=>({...r,get:(e,t,i)=>Ag(e,t)||r.get(e,t,i),has:(e,t)=>!!Ag(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function sI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",Rg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new af("@firebase/app"),oI="@firebase/app-compat",aI="@firebase/analytics-compat",lI="@firebase/analytics",uI="@firebase/app-check-compat",cI="@firebase/app-check",hI="@firebase/auth",dI="@firebase/auth-compat",fI="@firebase/database",pI="@firebase/data-connect",mI="@firebase/database-compat",gI="@firebase/functions",yI="@firebase/functions-compat",_I="@firebase/installations",vI="@firebase/installations-compat",wI="@firebase/messaging",EI="@firebase/messaging-compat",TI="@firebase/performance",II="@firebase/performance-compat",SI="@firebase/remote-config",AI="@firebase/remote-config-compat",RI="@firebase/storage",CI="@firebase/storage-compat",kI="@firebase/firestore",PI="@firebase/vertexai",xI="@firebase/firestore-compat",NI="firebase",DI="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="[DEFAULT]",OI={[Dd]:"fire-core",[oI]:"fire-core-compat",[lI]:"fire-analytics",[aI]:"fire-analytics-compat",[cI]:"fire-app-check",[uI]:"fire-app-check-compat",[hI]:"fire-auth",[dI]:"fire-auth-compat",[fI]:"fire-rtdb",[pI]:"fire-data-connect",[mI]:"fire-rtdb-compat",[gI]:"fire-fn",[yI]:"fire-fn-compat",[_I]:"fire-iid",[vI]:"fire-iid-compat",[wI]:"fire-fcm",[EI]:"fire-fcm-compat",[TI]:"fire-perf",[II]:"fire-perf-compat",[SI]:"fire-rc",[AI]:"fire-rc-compat",[RI]:"fire-gcs",[CI]:"fire-gcs-compat",[kI]:"fire-fst",[xI]:"fire-fst-compat",[PI]:"fire-vertex","fire-js":"fire-js",[NI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map,LI=new Map,Ld=new Map;function Cg(r,e){try{r.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ls(r){const e=r.name;if(Ld.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,r);for(const t of Yu.values())Cg(t,r);for(const t of LI.values())Cg(t,r);return!0}function gc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Pr(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new nl("app","Firebase",VI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=DI;function p_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Od,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=u_()),!t)throw yi.create("no-options");const l=Yu.get(o);if(l){if(Xu(t,l.options)&&Xu(i,l.config))return l;throw yi.create("duplicate-app",{appName:o})}const h=new zT(o);for(const m of Ld.values())h.addComponent(m);const f=new bI(t,i,h);return Yu.set(o,f),f}function uf(r=Od){const e=Yu.get(r);if(!e&&r===Od&&u_())return p_();if(!e)throw yi.create("no-app",{appName:r});return e}function Zn(r,e,t){var i;let o=(i=OI[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(f.join(" "));return}ls(new wi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="firebase-heartbeat-database",UI=1,Ha="firebase-heartbeat-store";let yd=null;function m_(){return yd||(yd=tI(MI,UI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ha)}catch(t){console.warn(t)}}}}).catch(r=>{throw yi.create("idb-open",{originalErrorMessage:r.message})})),yd}async function FI(r){try{const t=(await m_()).transaction(Ha),i=await t.objectStore(Ha).get(g_(r));return await t.done,i}catch(e){if(e instanceof ur)Lr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(t.message)}}}async function kg(r,e){try{const i=(await m_()).transaction(Ha,"readwrite");await i.objectStore(Ha).put(e,g_(r)),await i.done}catch(t){if(t instanceof ur)Lr.warn(t.message);else{const i=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lr.warn(i.message)}}}function g_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1024,BI=30*24*60*60*1e3;class zI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Pg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=BI}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Lr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pg(),{heartbeatsToSend:i,unsentEntries:o}=$I(this._heartbeatsCache.heartbeats),l=Qu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Lr.warn(t),""}}}function Pg(){return new Date().toISOString().substring(0,10)}function $I(r,e=jI){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),xg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),xg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class HI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xT()?NT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function xg(r){return Qu(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(r){ls(new wi("platform-logger",e=>new iI(e),"PRIVATE")),ls(new wi("heartbeat",e=>new zI(e),"PRIVATE")),Zn(Dd,Rg,r),Zn(Dd,Rg,"esm2017"),Zn("fire-js","")}WI("");function cf(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qI=y_,__=new nl("auth","Firebase",y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new af("@firebase/auth");function KI(r,...e){Ju.logLevel<=ke.WARN&&Ju.warn(`Auth (${fs}): ${r}`,...e)}function Uu(r,...e){Ju.logLevel<=ke.ERROR&&Ju.error(`Auth (${fs}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(r,...e){throw df(r,...e)}function jn(r,...e){return df(r,...e)}function hf(r,e,t){const i=Object.assign(Object.assign({},qI()),{[e]:t});return new nl("auth","Firebase",i).create(e,{appName:r.name})}function is(r){return hf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function GI(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&sr(r,"argument-error"),hf(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function df(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return __.create(r,...e)}function Ee(r,e,...t){if(!r)throw df(e,...t)}function xr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Uu(e),new Error(e)}function Vr(r,e){r||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function QI(){return Ng()==="http:"||Ng()==="https:"}function Ng(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QI()||RT()||"connection"in navigator)?navigator.onLine:!0}function YI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=IT()||CT()}get(){return XI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(r,e){Vr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new il(3e4,6e4);function pf(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function xo(r,e,t,i,o={}){return w_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=rl(Object.assign({key:r.config.apiKey},h)).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:m},l);return AT()||(y.referrerPolicy="no-referrer"),v_.fetch()(E_(r,r.config.apiHost,t,f),y)})}async function w_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},JI),e);try{const o=new t1(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ku(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[m,y]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ku(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw ku(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw ku(r,"user-disabled",h);const v=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw hf(r,v,y);sr(r,v)}}catch(o){if(o instanceof ur)throw o;sr(r,"network-request-failed",{message:String(o)})}}async function e1(r,e,t,i,o={}){const l=await xo(r,e,t,i,o);return"mfaPendingCredential"in l&&sr(r,"multi-factor-auth-required",{_serverResponse:l}),l}function E_(r,e,t,i){const o=`${e}${t}?${i}`;return r.config.emulator?ff(r.config,o):`${r.config.apiScheme}://${o}`}class t1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(jn(this.auth,"network-request-failed")),ZI.get())})}}function ku(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=jn(r,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(r,e){return xo(r,"POST","/v1/accounts:delete",e)}async function T_(r,e){return xo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r1(r,e=!1){const t=Nt(r),i=await t.getIdToken(e),o=mf(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ma(_d(o.auth_time)),issuedAtTime:Ma(_d(o.iat)),expirationTime:Ma(_d(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function _d(r){return Number(r)*1e3}function mf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Uu("JWT malformed, contained fewer than 3 sections"),null;try{const o=o_(t);return o?JSON.parse(o):(Uu("Failed to decode base64 JWT payload"),null)}catch(o){return Uu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Dg(r){const e=mf(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ur&&i1(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function i1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(r){var e;const t=r.auth,i=await r.getIdToken(),o=await Wa(r,T_(t,{idToken:i}));Ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?I_(l.providerUserInfo):[],f=a1(r.providerData,h),m=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),v=m?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new bd(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(r,T)}async function o1(r){const e=Nt(r);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a1(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function I_(r){return r.map(e=>{var{providerId:t}=e,i=cf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(r,e){const t=await w_(r,{},async()=>{const i=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=E_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",v_.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function u1(r,e){return xo(r,"POST","/v2/accounts:revokeToken",pf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await l1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new mo;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new bd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Wa(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return r1(this,e)}reload(){return o1(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Zu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pr(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await Wa(this,n1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,m,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,q=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:te,emailVerified:ie,isAnonymous:Ie,providerData:_e,stsTokenManager:x}=t;Ee(te&&x,e,"internal-error");const S=mo.fromJSON(this.name,x);Ee(typeof te=="string",e,"internal-error"),ci(T,e.name),ci(I,e.name),Ee(typeof ie=="boolean",e,"internal-error"),Ee(typeof Ie=="boolean",e,"internal-error"),ci(D,e.name),ci(V,e.name),ci(z,e.name),ci(L,e.name),ci(W,e.name),ci(q,e.name);const R=new Nr({uid:te,auth:e,email:I,emailVerified:ie,displayName:T,isAnonymous:Ie,photoURL:V,phoneNumber:D,tenantId:z,stsTokenManager:S,createdAt:W,lastLoginAt:q});return _e&&Array.isArray(_e)&&(R.providerData=_e.map(P=>Object.assign({},P))),L&&(R._redirectEventId=L),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new mo;o.updateFromServerResponse(t);const l=new Nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Zu(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?I_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new mo;f.updateFromIdToken(i);const m=new Nr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new bd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;function Dr(r){Vr(r instanceof Function,"Expected a class definition");let e=Og.get(r);return e?(Vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Og.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}S_.type="NONE";const Lg=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(r,e,t){return`firebase:${r}:${e}:${t}`}class go{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Fu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Fu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new go(Dr(Lg),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Dr(Lg);const h=Fu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const v=await y._get(h);if(v){const T=Nr._fromJSON(e,v);y!==l&&(f=T),l=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new go(l,e,i):(l=m[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new go(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(x_(e))return"Blackberry";if(N_(e))return"Webos";if(R_(e))return"Safari";if((e.includes("chrome/")||C_(e))&&!e.includes("edge/"))return"Chrome";if(P_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function A_(r=zt()){return/firefox\//i.test(r)}function R_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C_(r=zt()){return/crios\//i.test(r)}function k_(r=zt()){return/iemobile/i.test(r)}function P_(r=zt()){return/android/i.test(r)}function x_(r=zt()){return/blackberry/i.test(r)}function N_(r=zt()){return/webos/i.test(r)}function gf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function c1(r=zt()){var e;return gf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h1(){return kT()&&document.documentMode===10}function D_(r=zt()){return gf(r)||P_(r)||N_(r)||x_(r)||/windows phone/i.test(r)||k_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(r,e=[]){let t;switch(r){case"Browser":t=Vg(zt());break;case"Worker":t=`${Vg(zt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const m=e(l);h(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(r,e={}){return xo(r,"GET","/v2/passwordPolicy",pf(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=6;class m1{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:p1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bg(this),this.idTokenSubscription=new bg(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=__,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await T_(this,{idToken:e}),i=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===f)&&(m!=null&&m.user)&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pr(this.app))return Promise.reject(is(this));const t=e?Nt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pr(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pr(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f1(this),t=new m1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await u1(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&KI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yc(r){return Nt(r)}class bg{constructor(e){this.auth=e,this.observer=null,this.addObserver=bT(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y1(r){yf=r}function _1(r){return yf.loadJS(r)}function v1(){return yf.gapiScript}function w1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(r,e){const t=gc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Xu(l,e??{}))return o;sr(o,"already-initialized")}return t.initialize({options:e})}function T1(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function I1(r,e,t){const i=yc(r);Ee(i._canInitEmulator,i,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=L_(e),{host:h,port:f}=S1(e),m=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${h}${m}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),A1()}function L_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function S1(r){const e=L_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Mg(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Mg(h)}}}function Mg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function A1(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,t){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(r,e){return e1(r,"POST","/v1/accounts:signInWithIdp",pf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="http://localhost";class us extends V_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=cf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new us(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return yo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,yo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yo(e,t)}buildRequest(){const e={requestUri:R1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends _f{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends sl{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return kr.credential(t,i)}catch{return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com";kr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends sl{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends sl{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return fi.credential(t,i)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Nr._fromIdTokenResponse(e,i,o),h=Ug(i);return new wo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ug(i);return new wo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ug(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends ur{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new ec(e,t,i,o)}}function b_(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(r,l,e,i):l})}async function C1(r,e,t=!1){const i=await Wa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return wo._forOperation(r,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(r,e,t=!1){const{auth:i}=r;if(Pr(i.app))return Promise.reject(is(i));const o="reauthenticate";try{const l=await Wa(r,b_(i,o,e,r),t);Ee(l.idToken,i,"internal-error");const h=mf(l.idToken);Ee(h,i,"internal-error");const{sub:f}=h;return Ee(r.uid===f,i,"user-mismatch"),wo._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&sr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(r,e,t=!1){if(Pr(r.app))return Promise.reject(is(r));const i="signIn",o=await b_(r,i,e),l=await wo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}function x1(r,e,t,i){return Nt(r).onIdTokenChanged(e,t,i)}function N1(r,e,t){return Nt(r).beforeAuthStateChanged(e,t)}function D1(r){return Nt(r).signOut()}const tc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=1e3,L1=10;class U_ extends M_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=D_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);h1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,L1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}U_.type="LOCAL";const V1=U_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_ extends M_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}F_.type="SESSION";const j_=F_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new _c(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),m=await b1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,m)=>{const y=vf("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(v),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function U1(r){er().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function F1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function B1(){return B_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="firebaseLocalStorageDb",z1=1,nc="firebaseLocalStorage",$_="fbase_key";class ol{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vc(r,e){return r.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function $1(){const r=indexedDB.deleteDatabase(z_);return new ol(r).toPromise()}function Md(){const r=indexedDB.open(z_,z1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(nc,{keyPath:$_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(nc)?e(i):(i.close(),await $1(),e(await Md()))})})}async function Fg(r,e,t){const i=vc(r,!0).put({[$_]:e,value:t});return new ol(i).toPromise()}async function H1(r,e){const t=vc(r,!1).get(e),i=await new ol(t).toPromise();return i===void 0?null:i.value}function jg(r,e){const t=vc(r,!0).delete(e);return new ol(t).toPromise()}const W1=800,q1=3;class H_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Md(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>q1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(B1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await F1(),!this.activeServiceWorker)return;this.sender=new M1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Md();return await Fg(e,tc,"1"),await jg(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fg(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>H1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=vc(o,!1).getAll();return new ol(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H_.type="LOCAL";const K1=H_;new il(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(r,e){return e?Dr(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf extends V_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function G1(r){return P1(r.auth,new wf(r),r.bypassAuthState)}function Q1(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),k1(t,new wf(r),r.bypassAuthState)}async function X1(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),C1(t,new wf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G1;case"linkViaPopup":case"linkViaRedirect":return X1;case"reauthViaPopup":case"reauthViaRedirect":return Q1;default:sr(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new il(2e3,1e4);async function J1(r,e,t){if(Pr(r.app))return Promise.reject(jn(r,"operation-not-supported-in-this-environment"));const i=yc(r);GI(r,e,_f);const o=W_(i,t);return new ns(i,"signInViaPopup",e,o).executeNotNull()}class ns extends q_{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y1.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="pendingRedirect",ju=new Map;class eS extends q_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const i=await tS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ju.set(this.auth._key(),e)}return this.bypassAuthState||ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tS(r,e){const t=iS(e),i=rS(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function nS(r,e){ju.set(r._key(),e)}function rS(r){return Dr(r._redirectPersistence)}function iS(r){return Fu(Z1,r.config.apiKey,r.name)}async function sS(r,e,t=!1){if(Pr(r.app))return Promise.reject(is(r));const i=yc(r),o=W_(i,e),h=await new eS(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=10*60*1e3;class aS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!K_(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bg(e))}saveEventToCache(e){this.cachedEventUids.add(Bg(e)),this.lastProcessedEventTime=Date.now()}}function Bg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function K_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(r,e={}){return xo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hS=/^https?/;async function dS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await uS(r);for(const t of e)try{if(fS(t))return}catch{}sr(r,"unauthorized-domain")}function fS(r){const e=Vd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!hS.test(t))return!1;if(cS.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new il(3e4,6e4);function zg(){const r=er().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function mS(r){return new Promise((e,t)=>{var i,o,l;function h(){zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zg(),t(jn(r,"network-request-failed"))},timeout:pS.get()})}if(!((o=(i=er().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=er().gapi)===null||l===void 0)&&l.load)h();else{const f=w1("iframefcb");return er()[f]=()=>{gapi.load?h():t(jn(r,"network-request-failed"))},_1(`${v1()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function gS(r){return Bu=Bu||mS(r),Bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new il(5e3,15e3),_S="__/auth/iframe",vS="emulator/auth/iframe",wS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TS(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ff(e,vS):`https://${r.config.authDomain}/${_S}`,i={apiKey:e.apiKey,appName:r.name,v:fs},o=ES.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${rl(i).slice(1)}`}async function IS(r){const e=await gS(r),t=er().gapi;return Ee(t,r,"internal-error"),e.open({where:document.body,url:TS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wS,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=jn(r,"network-request-failed"),f=er().setTimeout(()=>{l(h)},yS.get());function m(){er().clearTimeout(f),o(i)}i.ping(m).then(m,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AS=500,RS=600,CS="_blank",kS="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PS(r,e,t,i=AS,o=RS){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m=Object.assign(Object.assign({},SS),{width:i.toString(),height:o.toString(),top:l,left:h}),y=zt().toLowerCase();t&&(f=C_(y)?CS:t),A_(y)&&(e=e||kS,m.scrollbars="yes");const v=Object.entries(m).reduce((I,[D,V])=>`${I}${D}=${V},`,"");if(c1(y)&&f!=="_self")return xS(e||"",f),new $g(null);const T=window.open(e||"",f,v);Ee(T,r,"popup-blocked");try{T.focus()}catch{}return new $g(T)}function xS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="__/auth/handler",DS="emulator/auth/handler",OS=encodeURIComponent("fac");async function Hg(r,e,t,i,o,l){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:fs,eventId:o};if(e instanceof _f){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",VT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))h[v]=T}if(e instanceof sl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(h.scopes=v.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await r._getAppCheckToken(),y=m?`#${OS}=${encodeURIComponent(m)}`:"";return`${LS(r)}?${rl(f).slice(1)}${y}`}function LS({config:r}){return r.emulator?ff(r,DS):`https://${r.authDomain}/${NS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="webStorageSupport";class VS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=j_,this._completeRedirectFn=sS,this._overrideRedirectResult=nS}async _openPopup(e,t,i,o){var l;Vr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Hg(e,t,i,Vd(),o);return PS(e,h,vf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Hg(e,t,i,Vd(),o);return U1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await IS(e),i=new aS(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vd,{type:vd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[vd];h!==void 0&&t(!!h),sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return D_()||R_()||gf()}}const bS=VS;var Wg="@firebase/auth",qg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FS(r){ls(new wi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O_(r)},y=new g1(i,o,l,m);return T1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ls(new wi("auth-internal",e=>{const t=yc(e.getProvider("auth").getImmediate());return(i=>new MS(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Wg,qg,US(r)),Zn(Wg,qg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=5*60,BS=c_("authIdTokenMaxAge")||jS;let Kg=null;const zS=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>BS)return;const o=t==null?void 0:t.token;Kg!==o&&(Kg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $S(r=uf()){const e=gc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=E1(r,{popupRedirectResolver:bS,persistence:[K1,V1,j_]}),i=c_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=zS(l.toString());N1(t,h,()=>h(t.currentUser)),x1(t,f=>h(f))}}const o=a_("auth");return o&&I1(t,`http://${o}`),t}function HS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}y1({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=jn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",HS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FS("Browser");var WS="firebase",qS="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(WS,qS,"app");var Gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss,G_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function R(){}R.prototype=S.prototype,x.D=S.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(P,O,M){for(var C=Array(arguments.length-2),it=2;it<arguments.length;it++)C[it-2]=arguments[it];return S.prototype[O].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,R){R||(R=0);var P=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)P[O]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(O=0;16>O;++O)P[O]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=x.g[0],R=x.g[1],O=x.g[2];var M=x.g[3],C=S+(M^R&(O^M))+P[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+P[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+P[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+P[3]+3250441966&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+P[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+P[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+P[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+P[7]+4249261313&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+P[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+P[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+P[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+P[11]+2304563134&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+P[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+P[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+P[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+P[15]+1236535329&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(O^M&(R^O))+P[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+P[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+P[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+P[0]+3921069994&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+P[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+P[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+P[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+P[4]+3889429448&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+P[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+P[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+P[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+P[8]+1163531501&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+P[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+P[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+P[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+P[12]+2368359562&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(R^O^M)+P[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+P[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+P[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+P[14]+4259657740&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+P[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+P[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+P[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+P[10]+3200236656&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+P[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+P[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+P[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+P[6]+76029189&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+P[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+P[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+P[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+P[2]+3299628645&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(O^(R|~M))+P[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+P[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+P[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+P[5]+4237533241&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+P[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+P[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+P[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+P[1]+2240044497&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+P[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+P[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+P[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+P[13]+1309151649&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+P[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+P[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+P[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var R=S-this.blockSize,P=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=R;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(P[O++]=x.charCodeAt(M++),O==this.blockSize){o(this,P),O=0;break}}else for(;M<S;)if(P[O++]=x[M++],O==this.blockSize){o(this,P),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var R=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=R&255,R/=256;for(this.u(x),x=Array(16),S=R=0;4>S;++S)for(var P=0;32>P;P+=8)x[R++]=this.g[S]>>>P&255;return x};function l(x,S){var R=f;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=S(x)}function h(x,S){this.h=S;for(var R=[],P=!0,O=x.length-1;0<=O;O--){var M=x[O]|0;P&&M==S||(R[O]=M,P=!1)}this.g=R}var f={};function m(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return L(y(-x));for(var S=[],R=1,P=0;x>=R;P++)S[P]=x/R|0,R*=4294967296;return new h(S,0)}function v(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return L(v(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),P=T,O=0;O<x.length;O+=8){var M=Math.min(8,x.length-O),C=parseInt(x.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),P=P.j(M).add(y(C))):(P=P.j(R),P=P.add(y(C)))}return P}var T=m(0),I=m(1),D=m(16777216);r=h.prototype,r.m=function(){if(z(this))return-L(this).m();for(var x=0,S=1,R=0;R<this.g.length;R++){var P=this.i(R);x+=(0<=P?P:4294967296+P)*S,S*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(V(this))return"0";if(z(this))return"-"+L(this).toString(x);for(var S=y(Math.pow(x,6)),R=this,P="";;){var O=ie(R,S).g;R=W(R,O.j(S));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=O,V(R))return M+P;for(;6>M.length;)M="0"+M;P=M+P}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function V(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function z(x){return x.h==-1}r.l=function(x){return x=W(this,x),z(x)?-1:V(x)?0:1};function L(x){for(var S=x.g.length,R=[],P=0;P<S;P++)R[P]=~x.g[P];return new h(R,~x.h).add(I)}r.abs=function(){return z(this)?L(this):this},r.add=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0,O=0;O<=S;O++){var M=P+(this.i(O)&65535)+(x.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);P=C>>>16,M&=65535,C&=65535,R[O]=C<<16|M}return new h(R,R[R.length-1]&-2147483648?-1:0)};function W(x,S){return x.add(L(S))}r.j=function(x){if(V(this)||V(x))return T;if(z(this))return z(x)?L(this).j(L(x)):L(L(this).j(x));if(z(x))return L(this.j(L(x)));if(0>this.l(D)&&0>x.l(D))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,R=[],P=0;P<2*S;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<x.g.length;O++){var M=this.i(P)>>>16,C=this.i(P)&65535,it=x.i(O)>>>16,Ot=x.i(O)&65535;R[2*P+2*O]+=C*Ot,q(R,2*P+2*O),R[2*P+2*O+1]+=M*Ot,q(R,2*P+2*O+1),R[2*P+2*O+1]+=C*it,q(R,2*P+2*O+1),R[2*P+2*O+2]+=M*it,q(R,2*P+2*O+2)}for(P=0;P<S;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=S;P<2*S;P++)R[P]=0;return new h(R,0)};function q(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function te(x,S){this.g=x,this.h=S}function ie(x,S){if(V(S))throw Error("division by zero");if(V(x))return new te(T,T);if(z(x))return S=ie(L(x),S),new te(L(S.g),L(S.h));if(z(S))return S=ie(x,L(S)),new te(L(S.g),S.h);if(30<x.g.length){if(z(x)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,P=S;0>=P.l(x);)R=Ie(R),P=Ie(P);var O=_e(R,1),M=_e(P,1);for(P=_e(P,2),R=_e(R,2);!V(P);){var C=M.add(P);0>=C.l(x)&&(O=O.add(R),M=C),P=_e(P,1),R=_e(R,1)}return S=W(x,O.j(S)),new te(O,S)}for(O=T;0<=x.l(S);){for(R=Math.max(1,Math.floor(x.m()/S.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),M=y(R),C=M.j(S);z(C)||0<C.l(x);)R-=P,M=y(R),C=M.j(S);V(M)&&(M=I),O=O.add(M),x=W(x,C)}return new te(O,x)}r.A=function(x){return ie(this,x).h},r.and=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)&x.i(P);return new h(R,this.h&x.h)},r.or=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)|x.i(P);return new h(R,this.h|x.h)},r.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)^x.i(P);return new h(R,this.h^x.h)};function Ie(x){for(var S=x.g.length+1,R=[],P=0;P<S;P++)R[P]=x.i(P)<<1|x.i(P-1)>>>31;return new h(R,x.h)}function _e(x,S){var R=S>>5;S%=32;for(var P=x.g.length-R,O=[],M=0;M<P;M++)O[M]=0<S?x.i(M+R)>>>S|x.i(M+R+1)<<32-S:x.i(M+R);return new h(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,G_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=v,ss=h}).apply(typeof Gg<"u"?Gg:typeof self<"u"?self:typeof window<"u"?window:{});var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q_,Oa,X_,zu,Ud,Y_,J_,Z_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pu=="object"&&Pu];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in _))break e;_=_[U]}u=u[u.length-1],E=_[u],p=p(E),p!=E&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,E=!1,U={next:function(){if(!E&&_<u.length){var H=_++;return{value:p(H,u[H]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function v(u,p,_){return u.call.apply(u.bind,arguments)}function T(u,p,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(p,U)}}return function(){return u.apply(p,arguments)}}function I(u,p,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function D(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function V(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,U,H){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return p.prototype[U].apply(E,ne)}}function z(u){const p=u.length;if(0<p){const _=Array(p);for(let E=0;E<p;E++)_[E]=u[E];return _}return[]}function L(u,p){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(m(E)){const U=u.length||0,H=E.length||0;u.length=U+H;for(let ne=0;ne<H;ne++)u[U+ne]=E[ne]}else u.push(E)}}class W{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function q(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ie(u){return ie[" "](u),u}ie[" "]=function(){};var Ie=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function _e(u,p,_){for(const E in u)p.call(_,u[E],E,u)}function x(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function S(u){const p={};for(const _ in u)p[_]=u[_];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,p){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)u[_]=E[_];for(let H=0;H<R.length;H++)_=R[H],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function O(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function M(u){f.setTimeout(()=>{throw u},0)}function C(){var u=fe;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class it{constructor(){this.h=this.g=null}add(p,_){const E=Ot.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Ot=new W(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,re=!1,fe=new it,oe=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(b)}};var b=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var p=Ot;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u}();function Re(u,p){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ie){e:{try{ie(p.nodeName);var U=!0;break e}catch{}U=!1}U||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}V(Re,de);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,p,_,E,U){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=U,this.key=++Ue,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cr(u){this.src=u,this.g={},this.h=0}cr.prototype.add=function(u,p,_,E,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var ne=Fr(u,p,E,U);return-1<ne?(p=u[ne],_||(p.fa=!1)):(p=new $e(p,this.src,H,!!E,U),p.fa=_,u.push(p)),p};function _s(u,p){var _=p.type;if(_ in u.g){var E=u.g[_],U=Array.prototype.indexOf.call(E,p,void 0),H;(H=0<=U)&&Array.prototype.splice.call(E,U,1),H&&(vt(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Fr(u,p,_,E){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==p&&H.capture==!!_&&H.ha==E)return U}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),vs={};function Vo(u,p,_,E,U){if(Array.isArray(p)){for(var H=0;H<p.length;H++)Vo(u,p[H],_,E,U);return null}return _=Uo(_),u&&u[Me]?u.K(p,_,y(E)?!!E.capture:!!E,U):bo(u,p,_,!1,E,U)}function bo(u,p,_,E,U,H){if(!p)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,je=Es(u);if(je||(u[Ri]=je=new cr(u)),_=je.add(p,_,E,ne,H),_.proxy)return _;if(E=hl(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Ae||(U=ne),U===void 0&&(U=!1),u.addEventListener(p.toString(),E,U);else if(u.attachEvent)u.attachEvent(dr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function hl(){function u(_){return p.call(u.src,u.listener,_)}const p=Mo;return u}function ws(u,p,_,E,U){if(Array.isArray(p))for(var H=0;H<p.length;H++)ws(u,p[H],_,E,U);else E=y(E)?!!E.capture:!!E,_=Uo(_),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(H=u.g[p],_=Fr(H,_,E,U),-1<_&&(vt(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[p],u.h--)))):u&&(u=Es(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Fr(p,_,E,U)),(_=-1<u?p[u]:null)&&hr(_))}function hr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])_s(p.i,u);else{var _=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(_,E,u.capture):p.detachEvent?p.detachEvent(dr(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=Es(p))?(_s(_,u),_.h==0&&(_.src=null,p[Ri]=null)):vt(u)}}}function dr(u){return u in vs?vs[u]:vs[u]="on"+u}function Mo(u,p){if(u.da)u=!0;else{p=new Re(p,this);var _=u.listener,E=u.ha||u.src;u.fa&&hr(u),u=_.call(E,p)}return u}function Es(u){return u=u[Ri],u instanceof cr?u:null}var Ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(u){return typeof u=="function"?u:(u[Ts]||(u[Ts]=function(p){return u.handleEvent(p)}),u[Ts])}function ht(){Q.call(this),this.i=new cr(this),this.M=this,this.F=null}V(ht,Q),ht.prototype[Me]=!0,ht.prototype.removeEventListener=function(u,p,_,E){ws(this,u,p,_,E)};function dt(u,p){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new de(p,u);else if(p instanceof de)p.target=p.target||u;else{var U=p;p=new de(E,u),P(p,U)}if(U=!0,_)for(var H=_.length-1;0<=H;H--){var ne=p.g=_[H];U=fr(ne,E,!0,p)&&U}if(ne=p.g=u,U=fr(ne,E,!0,p)&&U,U=fr(ne,E,!1,p)&&U,_)for(H=0;H<_.length;H++)ne=p.g=_[H],U=fr(ne,E,!1,p)&&U}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],E=0;E<_.length;E++)vt(_[E]);delete u.g[p],u.h--}}this.F=null},ht.prototype.K=function(u,p,_,E){return this.i.add(String(u),p,!1,_,E)},ht.prototype.L=function(u,p,_,E){return this.i.add(String(u),p,!0,_,E)};function fr(u,p,_,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,H=0;H<p.length;++H){var ne=p[H];if(ne&&!ne.da&&ne.capture==_){var je=ne.listener,ft=ne.ha||ne.src;ne.fa&&_s(u.i,ne),U=je.call(ft,E)!==!1&&U}}return U&&!E.defaultPrevented}function Fo(u,p,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function jr(u){u.g=Fo(()=>{u.g=null,u.i&&(u.i=!1,jr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ci extends Q{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(u){Q.call(this),this.h=u,this.g={}}V(ki,Q);var jo=[];function Bo(u){_e(u.g,function(p,_){this.g.hasOwnProperty(_)&&hr(p)},u),u.g={}}ki.prototype.N=function(){ki.aa.N.call(this),Bo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=f.JSON.stringify,$o=f.JSON.parse,Ho=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Pi(){}Pi.prototype.h=null;function Is(u){return u.h||(u.h=u.i())}function Ss(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){de.call(this,"d")}V(Bn,de);function As(){de.call(this,"c")}V(As,de);var zn={},Wo=null;function xi(){return Wo=Wo||new ht}zn.La="serverreachability";function qo(u){de.call(this,zn.La,u)}V(qo,de);function pr(u){const p=xi();dt(p,new qo(p))}zn.STAT_EVENT="statevent";function Ko(u,p){de.call(this,zn.STAT_EVENT,u),this.stat=p}V(Ko,de);function st(u){const p=xi();dt(p,new Ko(p,u))}zn.Ma="timingevent";function Rs(u,p){de.call(this,zn.Ma,u),this.size=p}V(Rs,de);function Sn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function Di(u,p,_,E,U,H){u.info(function(){if(u.g)if(H)for(var ne="",je=H.split("&"),ft=0;ft<je.length;ft++){var Oe=je[ft].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var lt=wt.split("_");ne=2<=lt.length&&lt[1]=="type"?ne+(wt+"="+Oe+"&"):ne+(wt+"=redacted&")}}else ne=null;else ne=H;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+p+`
`+_+`
`+ne})}function Cs(u,p,_,E,U,H,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+p+`
`+_+`
`+H+" "+ne})}function An(u,p,_,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Lc(u,_)+(E?" "+E:"")})}function Go(u,p){u.info(function(){return"TIMEOUT: "+p})}Ni.prototype.info=function(){};function Lc(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return zo(_)}catch{return p}}var ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rn;function Oi(){}V(Oi,Pi),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},Rn=new Oi;function Cn(u,p,_,E){this.j=u,this.i=p,this.l=_,this.R=E||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fl}function fl(){this.i=null,this.g="",this.h=!1}var Qo={},Ps={};function xs(u,p,_){u.L=1,u.v=Wr(sn(p)),u.m=_,u.P=!0,Xo(u,null)}function Xo(u,p){u.F=Date.now(),He(u),u.A=sn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Kr(_.i,"t",E),u.C=0,_=u.j.J,u.h=new fl,u.g=Nl(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Ci(I(u.Y,u,u.g),u.O)),p=u.U,_=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(jo[0]=U.toString()),U=jo);for(var H=0;H<U.length;H++){var ne=Vo(_,U[H],E||p.handleEvent,!1,p.h||p);if(!ne)break;p.g[ne.key]=ne}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),pr(),Di(u.i,u.u,u.A,u.l,u.R,u.m)}Cn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Qt(u)==3?p.j():this.Y(u)},Cn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Qt(this.g);var p=this.g.Ba();const mn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||lt!=4||p==7||(p==8||0>=mn?pr(3):pr(2)),Li(this);var _=this.g.Z();this.X=_;t:if(pl(this)){var E=na(this.g);u="";var U=E.length,H=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Br(this);var ne="";break t}this.h.i=new f.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(H&&p==U-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Cs(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ft=this.g;if((je=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(je)){var Oe=je;break t}}Oe=null}if(_=Oe)An(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,_);else{this.o=!1,this.s=3,st(12),fn(this),Br(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<ne.length;)if(an=Vc(this,ne),an==Ps){lt==4&&(this.s=4,st(14),_=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Qo){this.s=4,st(15),An(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else An(this.i,this.l,an,null),Yo(this,an);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||ne.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)An(this.i,this.l,ne,"[Invalid Chunked Response]"),fn(this),Br(this);else if(0<ne.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ia(wt),wt.M=!0,st(11))}}else An(this.i,this.l,ne,null),Yo(this,ne);lt==4&&fn(this),this.o&&!this.J&&(lt==4?Bs(this.j,this):(this.o=!1,He(this)))}else bs(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),fn(this),Br(this)}}}catch{}finally{}};function pl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Vc(u,p){var _=u.C,E=p.indexOf(`
`,_);return E==-1?Ps:(_=Number(p.substring(_,E)),isNaN(_)?Qo:(E+=1,E+_>p.length?Ps:(p=p.slice(E,E+_),u.C=E+_,p)))}Cn.prototype.cancel=function(){this.J=!0,fn(this)};function He(u){u.S=Date.now()+u.I,ml(u,u.I)}function ml(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Sn(I(u.ba,u),p)}function Li(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Cn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Go(this.i,this.A),this.L!=2&&(pr(),st(17)),fn(this),this.s=2,Br(this)):ml(this,this.S-u)};function Br(u){u.j.G==0||u.J||Bs(u.j,u)}function fn(u){Li(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Bo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Yo(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||$t(_.h,u))){if(!u.K&&$t(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)js(_),Dn(_);else break e;Fs(_),st(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Sn(I(_.Za,_),6e3));if(1>=yl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else vr(_,11)}else if((u.K||_.g==u)&&js(_),!q(p))for(U=_.Da.g.parse(p),p=0;p<U.length;p++){let Oe=U[p];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const wt=Oe[3];wt!=null&&(_.la=wt,_.j.info("VER="+_.la));const lt=Oe[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const mn=Oe[5];mn!=null&&typeof mn=="number"&&0<mn&&(E=1.5*mn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const an=u.g;if(an){const Bi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var H=E.h;H.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Jo(H,H.h),H.h=null))}if(E.D){const $s=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(E.ya=$s,ze(E.I,E.D,$s))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ne=u;if(E.qa=xl(E,E.J?E.ia:null,E.W),ne.K){_l(E.h,ne);var je=ne,ft=E.L;ft&&(je.I=ft),je.B&&(Li(je),He(je)),E.g=ne}else ji(E);0<_.i.length&&qn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||vr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?vr(_,7):Rt(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}pr(4)}catch{}}var gl=class{constructor(u,p){this.g=u,this.map=p}};function Vi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function yl(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Jo(u,p){u.g?u.g.add(p):u.h=p}function _l(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Vi.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function vl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return z(u.i)}function Ns(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],_=u.length,E=0;E<_;E++)p.push(u[E]);return p}p=[],_=0;for(E in u)p[_++]=u[E];return p}function Ds(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const E in u)p[_++]=E;return p}}}function zr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Ds(u),E=Ns(u),U=E.length,H=0;H<U;H++)p.call(void 0,E[H],_&&_[H],u)}var bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),U=null;if(0<=E){var H=u[_].substring(0,E);U=u[_].substring(E+1)}else H=u[_];p(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function mr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mr){this.h=u.h,Mi(this,u.j),this.o=u.o,this.g=u.g,$r(this,u.s),this.l=u.l;var p=u.i,_=new $n;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Hr(this,_),this.m=u.m}else u&&(p=String(u).match(bi))?(this.h=!1,Mi(this,p[1]||"",!0),this.o=xe(p[2]||""),this.g=xe(p[3]||"",!0),$r(this,p[4]),this.l=xe(p[5]||"",!0),Hr(this,p[6]||"",!0),this.m=xe(p[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}mr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(qr(p,Os,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(qr(p,Os,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(qr(_,_.charAt(0)=="/"?Tl:El,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",qr(_,Zo)),u.join("")};function sn(u){return new mr(u)}function Mi(u,p,_){u.j=_?xe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function $r(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Hr(u,p,_){p instanceof $n?(u.i=p,Hn(u.i,u.h)):(_||(p=qr(p,Il)),u.i=new $n(p,u.h))}function ze(u,p,_){u.i.set(p,_)}function Wr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function qr(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,wl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function wl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Os=/[#\/\?@]/g,El=/[#\?:]/g,Tl=/[#\?]/g,Il=/[#\?@]/g,Zo=/#/g;function $n(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&bc(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}r=$n.prototype,r.add=function(u,p){At(this),this.i=null,u=pn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function kn(u,p){At(u),p=pn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Pn(u,p){return At(u),p=pn(u,p),u.g.has(p)}r.forEach=function(u,p){At(this),this.g.forEach(function(_,E){_.forEach(function(U){u.call(p,U,E,this)},this)},this)},r.na=function(){At(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let E=0;E<p.length;E++){const U=u[E];for(let H=0;H<U.length;H++)_.push(p[E])}return _},r.V=function(u){At(this);let p=[];if(typeof u=="string")Pn(this,u)&&(p=p.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},r.set=function(u,p){return At(this),this.i=null,u=pn(this,u),Pn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Kr(u,p,_){kn(u,p),0<_.length&&(u.i=null,u.g.set(pn(u,p),z(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var E=p[_];const H=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var U=H;ne[E]!==""&&(U+="="+encodeURIComponent(String(ne[E]))),u.push(U)}}return this.i=u.join("&")};function pn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Hn(u,p){p&&!u.j&&(At(u),u.i=null,u.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(kn(this,E),Kr(this,U,_))},u)),u.j=p}function Mc(u,p){const _=new Ni;if(f.Image){const E=new Image;E.onload=D(Gt,_,"TestLoadImage: loaded",!0,p,E),E.onerror=D(Gt,_,"TestLoadImage: error",!1,p,E),E.onabort=D(Gt,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=D(Gt,_,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Sl(u,p){const _=new Ni,E=new AbortController,U=setTimeout(()=>{E.abort(),Gt(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(H=>{clearTimeout(U),H.ok?Gt(_,"TestPingServer: ok",!0,p):Gt(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),Gt(_,"TestPingServer: error",!1,p)})}function Gt(u,p,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function Uc(){this.g=new Ho}function Al(u,p,_){const E=_||"";try{zr(u,function(U,H){let ne=U;y(U)&&(ne=zo(U)),p.push(E+H+"="+encodeURIComponent(ne))})}catch(U){throw p.push(E+"type="+encodeURIComponent("_badmap")),U}}function gr(u){this.l=u.Ub||null,this.j=u.eb||!1}V(gr,Pi),gr.prototype.g=function(){return new Ui(this.l,this.j)},gr.prototype.i=function(u){return function(){return u}}({});function Ui(u,p){ht.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ui,ht),r=Ui.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Nn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?xn(this):Nn(this),this.readyState==3&&Rl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},r.Qa=function(u){this.g&&(this.response=u,xn(this))},r.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Nn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Nn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yr(u){let p="";return _e(u,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function Gr(u,p,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=yr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,p,_))}function Ge(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ge,ht);var Fc=/^https?$/i,ea=["POST","PUT"];r=Ge.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rn.g(),this.v=this.o?Is(this.o):Is(Rn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(H){Fi(this,H);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const H of E.keys())_.set(H,E.get(H));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ea,p,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of _)this.g.setRequestHeader(H,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){Fi(this,H)}};function Fi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ls(u),on(u)}function Ls(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},r.bb=function(){ta(this)};function ta(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)Fo(u.Ea,0,u);else if(dt(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var E;if(E=ne===0){var U=String(u.D).match(bi)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),E=!Fc.test(U?U.toLowerCase():"")}_=E}if(_)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var H=2<Qt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Ls(u)}}finally{on(u)}}}}function on(u,p){if(u.g){Vs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||dt(u,"ready");try{_.onreadystatechange=E}catch{}}}function Vs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),$o(p)}};function na(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function bs(u){const p={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(q(u[E]))continue;var _=O(u[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=p[U]||[];p[U]=H,H.push(_)}x(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function ra(u){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,u),this.cb=Wn("retryDelaySeedMs",1e4,u),this.Wa=Wn("forwardChannelMaxRetries",2,u),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(u&&u.concurrentRequestLimit),this.Da=new Uc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ra.prototype,r.la=8,r.G=1,r.connect=function(u,p,_,E){st(0),this.W=u,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=xl(this,null,this.W),qn(this)};function Rt(u){if(Ms(u),u.G==3){var p=u.U++,_=sn(u.I);if(ze(_,"SID",u.K),ze(_,"RID",p),ze(_,"TYPE","terminate"),_r(u,_),p=new Cn(u,u.j,p),p.L=2,p.v=Wr(sn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=Nl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),He(p)}Pl(u)}function Dn(u){u.g&&(ia(u),u.g.cancel(),u.g=null)}function Ms(u){Dn(u),u.u&&(f.clearTimeout(u.u),u.u=null),js(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function qn(u){if(!rn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||oe(),re||(Be(),re=!0),fe.add(p,u),u.B=0}}function jc(u,p){return yl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Sn(I(u.Ga,u,p),kl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Cn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),P(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=Qr(this,U,p),_=sn(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),_r(this,_),H&&(this.O?p="headers="+encodeURIComponent(String(yr(H)))+"&"+p:this.m&&Gr(_,this.m,H)),Jo(this.h,U),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",p),ze(_,"SID","null"),U.T=!0,xs(U,_,null)):xs(U,_,p),this.G=2}}else this.G==3&&(u?Us(this,u):this.i.length==0||rn(this.h)||Us(this))};function Us(u,p){var _;p?_=p.l:_=u.U++;const E=sn(u.I);ze(E,"SID",u.K),ze(E,"RID",_),ze(E,"AID",u.T),_r(u,E),u.m&&u.o&&Gr(E,u.m,u.o),_=new Cn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Qr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Jo(u.h,_),xs(_,E,p)}function _r(u,p){u.H&&_e(u.H,function(_,E){ze(p,E,_)}),u.l&&zr({},function(_,E){ze(p,E,_)})}function Qr(u,p,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var U=u.i;let H=-1;for(;;){const ne=["count="+_];H==-1?0<_?(H=U[0].g,ne.push("ofs="+H)):H=0:ne.push("ofs="+H);let je=!0;for(let ft=0;ft<_;ft++){let Oe=U[ft].g;const wt=U[ft].map;if(Oe-=H,0>Oe)H=Math.max(0,U[ft].g-100),je=!1;else try{Al(wt,ne,"req"+Oe+"_")}catch{E&&E(wt)}}if(je){E=ne.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,E}function ji(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||oe(),re||(Be(),re=!0),fe.add(p,u),u.v=0}}function Fs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Sn(I(u.Fa,u),kl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Cl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Sn(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Dn(this),Cl(this))};function ia(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Cl(u){u.g=new Cn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sn(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),_r(u,p),u.m&&u.o&&Gr(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Wr(sn(p)),_.m=null,_.P=!0,Xo(_,u)}r.Za=function(){this.C!=null&&(this.C=null,Dn(this),Fs(this),st(19))};function js(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Bs(u,p){var _=null;if(u.g==p){js(u),ia(u),u.g=null;var E=2}else if($t(u.h,p))_=p.D,_l(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var U=u.B;E=xi(),dt(E,new Rs(E,_)),qn(u)}else ji(u);else if(U=p.s,U==3||U==0&&0<p.X||!(E==1&&jc(u,p)||E==2&&Fs(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),U){case 1:vr(u,5);break;case 4:vr(u,10);break;case 3:vr(u,6);break;default:vr(u,2)}}}function kl(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function vr(u,p){if(u.j.info("Error code "+p),p==2){var _=I(u.fb,u),E=u.Xa;const U=!E;E=new mr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Mi(E,"https"),Wr(E),U?Mc(E.toString(),_):Sl(E.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(p),Pl(u),Ms(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Pl(u){if(u.G=0,u.ka=[],u.l){const p=vl(u.h);(p.length!=0||u.i.length!=0)&&(L(u.ka,p),L(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function xl(u,p,_){var E=_ instanceof mr?sn(_):new mr(_);if(E.g!="")p&&(E.g=p+"."+E.g),$r(E,E.s);else{var U=f.location;E=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var H=new mr(null);E&&Mi(H,E),p&&(H.g=p),U&&$r(H,U),_&&(H.l=_),E=H}return _=u.D,p=u.ya,_&&p&&ze(E,_,p),ze(E,"VER",u.la),_r(u,E),E}function Nl(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ge(new gr({eb:_})):new Ge(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}r=sa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function zs(){}zs.prototype.g=function(u,p){return new Ht(u,p)};function Ht(u,p){ht.call(this),this.g=new ra(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!q(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!q(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Kn(this)}V(Ht,ht),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Rt(this.g)},Ht.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=zo(u),u=_);p.i.push(new gl(p.Ya++,u)),p.G==3&&qn(p)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,Ht.aa.N.call(this)};function Dl(u){Bn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}V(Dl,Bn);function Ol(){As.call(this),this.status=1}V(Ol,As);function Kn(u){this.g=u}V(Kn,sa),Kn.prototype.ua=function(){dt(this.g,"a")},Kn.prototype.ta=function(u){dt(this.g,new Dl(u))},Kn.prototype.sa=function(u){dt(this.g,new Ol)},Kn.prototype.ra=function(){dt(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Z_=function(){return new zs},J_=function(){return xi()},Y_=zn,Ud={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,zu=ks,dl.COMPLETE="complete",X_=dl,Ss.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Oa=Ss,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Q_=Ge}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});const Qg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new af("@firebase/firestore");function co(){return cs.logLevel}function ae(r,...e){if(cs.logLevel<=ke.DEBUG){const t=e.map(Ef);cs.debug(`Firestore (${No}): ${r}`,...t)}}function br(r,...e){if(cs.logLevel<=ke.ERROR){const t=e.map(Ef);cs.error(`Firestore (${No}): ${r}`,...t)}}function Eo(r,...e){if(cs.logLevel<=ke.WARN){const t=e.map(Ef);cs.warn(`Firestore (${No}): ${r}`,...t)}}function Ef(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r="Unexpected state"){const e=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: `+r;throw br(e),new Error(e)}function Fe(r,e){r||we()}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends ur{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(jt.UNAUTHENTICATED))}shutdown(){}}class GS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class QS{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new os;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new os,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},f=m=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new os)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new ev(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new jt(e)}}class XS{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class YS{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new XS(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new JS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=eA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Ne(r,e){return r<e?-1:r>e?1:0}function To(r,e,t){return r.length===e.length&&r.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new yt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new pe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new yt(0,0))}static max(){return new Te(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return qa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Xe extends qa{construct(e,t,i){return new Xe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new pe(Z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Xe(t)}static emptyPath(){return new Xe([])}}const tA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends qa{construct(e,t,i){return new xt(e,t,i)}static isValidIdentifier(e){return tA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new pe(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new pe(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new pe(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new pe(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Xe.fromString(e))}static fromName(e){return new ye(Xe.fromString(e).popFirst(5))}static empty(){return new ye(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Xe(e.slice()))}}function nA(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new yt(t+1,0):new yt(t,i));return new Ei(o,ye.empty(),e)}function rA(r){return new Ei(r.readTime,r.key,-1)}class Ei{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ei(Te.min(),ye.empty(),-1)}static max(){return new Ei(Te.max(),ye.empty(),-1)}}function iA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==sA)throw r;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},m=>i(m))}),h=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let m=0;m<l;m++){const y=m;t(e[y]).next(v=>{h[y]=v,++f,f===l&&i(h)},v=>o(v))}})}static doWhile(e,t){return new G((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function aA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wc.oe=-1;function Ec(r){return r==null}function rc(r){return r===0&&1/r==-1/0}function lA(r){return typeof r=="number"&&Number.isInteger(r)&&!rc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Xg(e)),e=cA(r.get(t),e);return Xg(e)}function cA(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Xg(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ps(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function nv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jg(this.data.getIterator())}getIteratorFrom(e){return new Jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new _t(xt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new rv("Invalid base64 string: "+l):l}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const hA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(r){if(Fe(!!r),typeof r=="string"){let e=0;const t=hA.exec(r);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ii(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Tc(r){const e=r.mapValue.fields.__previous_value__;return Tf(e)?Tc(e):e}function Ka(r){const e=Ti(r.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,i,o,l,h,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=y}}class Ga{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Si(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Tf(r)?4:pA(r)?9007199254740991:fA(r)?10:11:we()}function or(r,e){if(r===e)return!0;const t=Si(r);if(t!==Si(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ka(r).isEqual(Ka(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ti(o.timestampValue),f=Ti(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Ii(o.bytesValue).isEqual(Ii(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),f=at(l.doubleValue);return h===f?rc(h)===rc(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Yg(h)!==Yg(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!or(h[m],f[m])))return!1;return!0}(r,e);default:return we()}}function Qa(r,e){return(r.values||[]).find(t=>or(t,e))!==void 0}function Io(r,e){if(r===e)return 0;const t=Si(r),i=Si(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=at(l.integerValue||l.doubleValue),m=at(h.integerValue||h.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(r,e);case 3:return Zg(r.timestampValue,e.timestampValue);case 4:return Zg(Ka(r),Ka(e));case 5:return Ne(r.stringValue,e.stringValue);case 6:return function(l,h){const f=Ii(l),m=Ii(h);return f.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),m=h.split("/");for(let y=0;y<f.length&&y<m.length;y++){const v=Ne(f[y],m[y]);if(v!==0)return v}return Ne(f.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ne(at(l.latitude),at(h.latitude));return f!==0?f:Ne(at(l.longitude),at(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ey(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,m,y,v;const T=l.fields||{},I=h.fields||{},D=(f=T.value)===null||f===void 0?void 0:f.arrayValue,V=(m=I.value)===null||m===void 0?void 0:m.arrayValue,z=Ne(((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0,((v=V==null?void 0:V.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:ey(D,V)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Nu.mapValue&&h===Nu.mapValue)return 0;if(l===Nu.mapValue)return 1;if(h===Nu.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),y=h.fields||{},v=Object.keys(y);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const I=Ne(m[T],v[T]);if(I!==0)return I;const D=Io(f[m[T]],y[v[T]]);if(D!==0)return D}return Ne(m.length,v.length)}(r.mapValue,e.mapValue);default:throw we()}}function Zg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=Ti(r),i=Ti(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function ey(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Io(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function So(r){return Fd(r)}function Fd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const i=Ti(t);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ii(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ye.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Fd(l);return i+"]"}(r.arrayValue):"mapValue"in r?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Fd(t.fields[h])}`;return o+"}"}(r.mapValue):we()}function $u(r){switch(Si(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tc(r);return e?16+$u(e):16;case 5:return 2*r.stringValue.length;case 6:return Ii(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+$u(l),0)}(r.arrayValue);case 10:case 11:return function(i){let o=0;return ps(i.fields,(l,h)=>{o+=l.length+$u(h)}),o}(r.mapValue);default:throw we()}}function jd(r){return!!r&&"integerValue"in r}function If(r){return!!r&&"arrayValue"in r}function ty(r){return!!r&&"nullValue"in r}function ny(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hu(r){return!!r&&"mapValue"in r}function fA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ps(r.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ua(i)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function pA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Hu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=xt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ua(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Hu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Hu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ps(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Tn(Ua(this.value))}}function iv(r){const e=[];return ps(r.fields,(t,i)=>{const o=new xt([t]);if(Hu(i)){const l=iv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Te.min(),Te.min(),Te.min(),Tn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Te.min(),Te.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Te.min(),Te.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.position=e,this.inclusive=t}}function ry(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(h.referenceValue),t.key):i=Io(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function iy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t="asc"){this.field=e,this.dir=t}}function mA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{}class gt extends sv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new yA(e,t,i):t==="array-contains"?new wA(e,i):t==="in"?new EA(e,i):t==="not-in"?new TA(e,i):t==="array-contains-any"?new IA(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new _A(e,i):new vA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Io(t,this.value)):t!==null&&Si(this.value)===Si(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends sv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ar(e,t)}matches(e){return ov(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ov(r){return r.op==="and"}function av(r){return gA(r)&&ov(r)}function gA(r){for(const e of r.filters)if(e instanceof ar)return!1;return!0}function Bd(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+So(r.value);if(av(r))return r.filters.map(e=>Bd(e)).join(",");{const e=r.filters.map(t=>Bd(t)).join(",");return`${r.op}(${e})`}}function lv(r,e){return r instanceof gt?function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&or(i.value,o.value)}(r,e):r instanceof ar?function(i,o){return o instanceof ar&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&lv(h,o.filters[f]),!0):!1}(r,e):void we()}function uv(r){return r instanceof gt?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(r):r instanceof ar?function(t){return t.op.toString()+" {"+t.getFilters().map(uv).join(" ,")+"}"}(r):"Filter"}class yA extends gt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class _A extends gt{constructor(e,t){super(e,"in",t),this.keys=cv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vA extends gt{constructor(e,t){super(e,"not-in",t),this.keys=cv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class wA extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return If(t)&&Qa(t.arrayValue,this.value)}}class EA extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qa(this.value.arrayValue,t)}}class TA extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qa(this.value.arrayValue,t)}}class IA extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!If(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Qa(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function sy(r,e=null,t=[],i=[],o=null,l=null,h=null){return new SA(r,e,t,i,o,l,h)}function Sf(r){const e=Se(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Bd(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>So(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>So(i)).join(",")),e.ue=t}return e.ue}function Af(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!mA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!lv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!iy(r.startAt,e.startAt)&&iy(r.endAt,e.endAt)}function zd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=m,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function AA(r,e,t,i,o,l,h,f){return new Ic(r,e,t,i,o,l,h,f)}function Rf(r){return new Ic(r)}function oy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function RA(r){return r.collectionGroup!==null}function Fa(r){const e=Se(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new _t(xt.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new sc(l,i))}),t.has(xt.keyField().canonicalString())||e.ce.push(new sc(xt.keyField(),i))}return e.ce}function tr(r){const e=Se(r);return e.le||(e.le=CA(e,Fa(r))),e.le}function CA(r,e){if(r.limitType==="F")return sy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new sc(o.field,l)});const t=r.endAt?new ic(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new ic(r.startAt.position,r.startAt.inclusive):null;return sy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function $d(r,e,t){return new Ic(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Sc(r,e){return Af(tr(r),tr(e))&&r.limitType===e.limitType}function hv(r){return`${Sf(tr(r))}|lt:${r.limitType}`}function ho(r){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>uv(o)).join(", ")}]`),Ec(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>So(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>So(o)).join(",")),`Target(${i})`}(tr(r))}; limitType=${r.limitType})`}function Ac(r,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(r,e)&&function(i,o){for(const l of Fa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(i,o){return!(i.startAt&&!function(h,f,m){const y=ry(h,f,m);return h.inclusive?y<=0:y<0}(i.startAt,Fa(i),o)||i.endAt&&!function(h,f,m){const y=ry(h,f,m);return h.inclusive?y>=0:y>0}(i.endAt,Fa(i),o))}(r,e)}function kA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function dv(r){return(e,t)=>{let i=!1;for(const o of Fa(r)){const l=PA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function PA(r,e,t){const i=r.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const m=h.data.field(l),y=f.data.field(l);return m!==null&&y!==null?Io(m,y):we()}(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return nv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=new et(ye.comparator);function Mr(){return xA}const fv=new et(ye.comparator);function La(...r){let e=fv;for(const t of r)e=e.insert(t.key,t);return e}function pv(r){let e=fv;return r.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function rs(){return ja()}function mv(){return ja()}function ja(){return new ms(r=>r.toString(),(r,e)=>r.isEqual(e))}const NA=new et(ye.comparator),DA=new _t(ye.comparator);function Pe(...r){let e=DA;for(const t of r)e=e.add(t);return e}const OA=new _t(Ne);function LA(){return OA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(e)?"-0":e}}function gv(r){return{integerValue:""+r}}function VA(r,e){return lA(e)?gv(e):Cf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this._=void 0}}function bA(r,e,t){return r instanceof oc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Tf(l)&&(l=Tc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof Xa?_v(r,e):r instanceof Ya?vv(r,e):function(o,l){const h=yv(o,l),f=ay(h)+ay(o.Pe);return jd(h)&&jd(o.Pe)?gv(f):Cf(o.serializer,f)}(r,e)}function MA(r,e,t){return r instanceof Xa?_v(r,e):r instanceof Ya?vv(r,e):t}function yv(r,e){return r instanceof ac?function(i){return jd(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class oc extends Rc{}class Xa extends Rc{constructor(e){super(),this.elements=e}}function _v(r,e){const t=wv(e);for(const i of r.elements)t.some(o=>or(o,i))||t.push(i);return{arrayValue:{values:t}}}class Ya extends Rc{constructor(e){super(),this.elements=e}}function vv(r,e){let t=wv(e);for(const i of r.elements)t=t.filter(o=>!or(o,i));return{arrayValue:{values:t}}}class ac extends Rc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ay(r){return at(r.integerValue||r.doubleValue)}function wv(r){return If(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function UA(r,e){return r.field.isEqual(e.field)&&function(i,o){return i instanceof Xa&&o instanceof Xa||i instanceof Ya&&o instanceof Ya?To(i.elements,o.elements,or):i instanceof ac&&o instanceof ac?or(i.Pe,o.Pe):i instanceof oc&&o instanceof oc}(r.transform,e.transform)}class FA{constructor(e,t){this.version=e,this.transformResults=t}}class nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nr}static exists(e){return new nr(void 0,e)}static updateTime(e){return new nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Cc{}function Ev(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new kf(r.key,nr.none()):new al(r.key,r.data,nr.none());{const t=r.data,i=Tn.empty();let o=new _t(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new gs(r.key,i,new Fn(o.toArray()),nr.none())}}function jA(r,e,t){r instanceof al?function(o,l,h){const f=o.value.clone(),m=uy(o.fieldTransforms,l,h.transformResults);f.setAll(m),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof gs?function(o,l,h){if(!Wu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=uy(o.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(Tv(o)),m.setAll(f),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ba(r,e,t,i){return r instanceof al?function(l,h,f,m){if(!Wu(l.precondition,h))return f;const y=l.value.clone(),v=cy(l.fieldTransforms,m,h);return y.setAll(v),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(r,e,t,i):r instanceof gs?function(l,h,f,m){if(!Wu(l.precondition,h))return f;const y=cy(l.fieldTransforms,m,h),v=h.data;return v.setAll(Tv(l)),v.setAll(y),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,i):function(l,h,f){return Wu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function BA(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=yv(i.transform,o||null);l!=null&&(t===null&&(t=Tn.empty()),t.set(i.field,l))}return t||null}function ly(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&To(i,o,(l,h)=>UA(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class al extends Cc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gs extends Cc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Tv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}}),e}function uy(r,e,t){const i=new Map;Fe(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,MA(h,f,t[o]))}return i}function cy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,bA(l,h,e))}return i}class kf extends Cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zA extends Cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&jA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ba(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ba(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=mv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const m=Ev(h,f);m!==null&&i.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(t,i)=>ly(t,i))&&To(this.baseMutations,e.baseMutations,(t,i)=>ly(t,i))}}class Pf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=function(){return NA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Pf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Le;function qA(r){switch(r){default:return we();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function Iv(r){if(r===void 0)return br("GRPC error has no .code"),Z.UNKNOWN;switch(r){case ct.OK:return Z.OK;case ct.CANCELLED:return Z.CANCELLED;case ct.UNKNOWN:return Z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return Z.INTERNAL;case ct.UNAVAILABLE:return Z.UNAVAILABLE;case ct.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case ct.NOT_FOUND:return Z.NOT_FOUND;case ct.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case ct.ABORTED:return Z.ABORTED;case ct.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case ct.DATA_LOSS:return Z.DATA_LOSS;default:return we()}}(Le=ct||(ct={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new ss([4294967295,4294967295],0);function hy(r){const e=KA().encode(r),t=new G_;return t.update(e),new Uint8Array(t.digest())}function dy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ss([t,i],0),new ss([o,l],0)]}class xf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Va(`Invalid padding: ${t}`);if(i<0)throw new Va(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Va(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ss.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(ss.fromNumber(i)));return o.compare(GA)===1&&(o=new ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=hy(e),[i,o]=dy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new xf(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=hy(e),[i,o]=dy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,ll.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new kc(Te.min(),o,new et(Ne),Mr(),Pe())}}class ll{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ll(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Sv{constructor(e,t){this.targetId=e,this.me=t}}class Av{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class fy{constructor(){this.fe=0,this.ge=py(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new ll(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=py()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mr(),this.qe=Du(),this.Qe=Du(),this.Ke=new et(Ne)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(zd(l))if(i===0){const h=new ye(l.path);this.We(t,h,Bt.newNoDocument(h,Te.min()))}else Fe(i===1);else{const h=this.Ze(t);if(h!==i){const f=this.Xe(e),m=f?this.et(f,e,h):1;if(m!==0){this.He(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ii(i).toUint8Array()}catch(m){if(m instanceof rv)return Eo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new xf(h,o,l)}catch(m){return Eo(m instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.Te===0?null:f}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&zd(f.target)){const m=new ye(f.target.path);this.st(m).has(h)||this.ot(h,m)||this.We(h,m,Bt.newNoDocument(m,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=Pe();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(m=>{const y=this.Ye(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new kc(e,t,this.Ke,this.ke,i);return this.ke=Mr(),this.qe=Du(),this.Qe=Du(),this.Ke=new et(Ne),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new fy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new _t(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new _t(Ne),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new fy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Du(){return new et(ye.comparator)}function py(){return new et(ye.comparator)}const XA={asc:"ASCENDING",desc:"DESCENDING"},YA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JA={and:"AND",or:"OR"};class ZA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hd(r,e){return r.useProto3Json||Ec(e)?e:{value:e}}function lc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function eR(r,e){return lc(r,e.toTimestamp())}function rr(r){return Fe(!!r),Te.fromTimestamp(function(t){const i=Ti(t);return new yt(i.seconds,i.nanos)}(r))}function Nf(r,e){return Wd(r,e).canonicalString()}function Wd(r,e){const t=function(o){return new Xe(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Cv(r){const e=Xe.fromString(r);return Fe(Dv(e)),e}function qd(r,e){return Nf(r.databaseId,e.path)}function wd(r,e){const t=Cv(e);if(t.get(1)!==r.databaseId.projectId)throw new pe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new pe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(Pv(t))}function kv(r,e){return Nf(r.databaseId,e)}function tR(r){const e=Cv(r);return e.length===4?Xe.emptyPath():Pv(e)}function Kd(r){return new Xe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pv(r){return Fe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function my(r,e,t){return{name:qd(r,e),fields:t.value.mapValue.fields}}function nR(r,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?(Fe(v===void 0||typeof v=="string"),Dt.fromBase64String(v||"")):(Fe(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Dt.fromUint8Array(v||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const v=y.code===void 0?Z.UNKNOWN:Iv(y.code);return new pe(v,y.message||"")}(h);t=new Av(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=wd(r,i.document.name),l=rr(i.document.updateTime),h=i.document.createTime?rr(i.document.createTime):Te.min(),f=new Tn({mapValue:{fields:i.document.fields}}),m=Bt.newFoundDocument(o,l,h,f),y=i.targetIds||[],v=i.removedTargetIds||[];t=new qu(y,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=wd(r,i.document),l=i.readTime?rr(i.readTime):Te.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new qu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=wd(r,i.document),l=i.removedTargetIds||[];t=new qu([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new WA(o,l),f=i.targetId;t=new Sv(f,h)}}return t}function rR(r,e){let t;if(e instanceof al)t={update:my(r,e.key,e.value)};else if(e instanceof kf)t={delete:qd(r,e.key)};else if(e instanceof gs)t={update:my(r,e.key,e.data),updateMask:dR(e.fieldMask)};else{if(!(e instanceof zA))return we();t={verify:qd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof oc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Ya)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof ac)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:eR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(r,e.precondition)),t}function iR(r,e){return r&&r.length>0?(Fe(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?rr(o.updateTime):rr(l);return h.isEqual(Te.min())&&(h=rr(l)),new FA(h,o.transformResults||[])}(t,e))):[]}function sR(r,e){return{documents:[kv(r,e.path)]}}function oR(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=kv(r,o);const l=function(y){if(y.length!==0)return Nv(ar.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:fo(I.field),direction:uR(I.dir)}}(v))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Hd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function aR(r){let e=tR(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(T){const I=xv(T);return I instanceof ar&&av(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(I=>function(V){return new sc(po(V.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(t.orderBy));let f=null;t.limit&&(f=function(T){let I;return I=typeof T=="object"?T.value:T,Ec(I)?null:I}(t.limit));let m=null;t.startAt&&(m=function(T){const I=!!T.before,D=T.values||[];return new ic(D,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,D=T.values||[];return new ic(D,I)}(t.endAt)),AA(e,o,h,l,f,"F",m,y)}function lR(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=po(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=po(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=po(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=po(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(r):r.fieldFilter!==void 0?function(t){return gt.create(po(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ar.create(t.compositeFilter.filters.map(i=>xv(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(r):we()}function uR(r){return XA[r]}function cR(r){return YA[r]}function hR(r){return JA[r]}function fo(r){return{fieldPath:r.canonicalString()}}function po(r){return xt.fromServerFormat(r.fieldPath)}function Nv(r){return r instanceof gt?function(t){if(t.op==="=="){if(ny(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NAN"}};if(ty(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ny(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NAN"}};if(ty(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fo(t.field),op:cR(t.op),value:t.value}}}(r):r instanceof ar?function(t){const i=t.getFilters().map(o=>Nv(o));return i.length===1?i[0]:{compositeFilter:{op:hR(t.op),filters:i}}}(r):we()}function dR(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,i,o,l=Te.min(),h=Te.min(),f=Dt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.ht=e}}function pR(r){const e=aR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$d(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.ln=new gR}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ei.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class gR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new _t(Xe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new _t(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(41943040,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ao(0)}static Qn(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy([r,e],[t,i]){const o=Ne(r,t);return o===0?Ne(e,i):o}class yR{constructor(e){this.Gn=e,this.buffer=new _t(yy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();yy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _R{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Oo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Yn(3e5)})}}class vR{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve(wc.oe);const i=new yR(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(gy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,f,m,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,f=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),co()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-v}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(y-m)+`ms
Total Duration: ${y-v}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function wR(r,e){return new vR(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.changes=new ms(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ba(i.mutation,o,Fn.empty(),yt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=rs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=La();return l.forEach((f,m)=>{h=h.insert(f,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=rs();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=Mr();const h=ja(),f=function(){return ja()}();return t.forEach((m,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof gs)?l=l.insert(y.key,y):v!==void 0?(h.set(y.key,v.mutation.getFieldMask()),Ba(v.mutation,y,v.mutation.getFieldMask(),yt.now())):h.set(y.key,Fn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((y,v)=>h.set(y,v)),t.forEach((y,v)=>{var T;return f.set(y,new TR(v,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const i=ja();let o=new et((h,f)=>h-f),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(m=>{const y=t.get(m);if(y===null)return;let v=i.get(m)||Fn.empty();v=f.applyToLocalView(y,v),i.set(m,v);const T=(o.get(f.batchId)||Pe()).add(m);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),y=m.key,v=m.value,T=mv();v.forEach(I=>{if(!l.has(I)){const D=Ev(t.get(I),i.get(I));D!==null&&T.set(I,D),l=l.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(rs());let f=-1,m=l;return h.next(y=>G.forEach(y,(v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?G.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{m=m.insert(v,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,m,y,Pe())).next(v=>({batchId:f,changes:pv(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=La();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=La();return this.indexManager.getCollectionParents(e,l).next(f=>G.forEach(f,m=>{const y=function(T,I){return new Ic(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((T,I)=>{h=h.insert(T,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((m,y)=>{const v=y.getKey();h.get(v)===null&&(h=h.insert(v,Bt.newInvalidDocument(v)))});let f=La();return h.forEach((m,y)=>{const v=l.get(m);v!==void 0&&Ba(v.mutation,y,Fn.empty(),yt.now()),Ac(t,y)&&(f=f.insert(m,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:pR(o.bundledQuery),readTime:rr(o.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.overlays=new et(ye.comparator),this.Er=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=rs();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=rs(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const m=f.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et((y,v)=>y-v);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=rs(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const f=rs(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((y,v)=>f.set(y,v)),!(f.size()>=o)););return G.resolve(f)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new HA(t,i));let l=this.Er.get(t);l===void 0&&(l=Pe(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.dr=new _t(St.Ar),this.Rr=new _t(St.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new St(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new St(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ye(new Xe([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ye(new Xe([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new St(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ye.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new _t(St.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new $A(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const f=this.Cr(h.br);l.push(f)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _t(Ne);return t.forEach(o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{i=i.add(f.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const h=new St(new ye(l),0);let f=new _t(Ne);return this.vr.forEachWhile(m=>{const y=m.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(m.br)),!0)},h),G.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new St(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.Nr=e,this.docs=function(){return new et(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Mr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Mr();const h=t.path,f=new ye(h.child("")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:y,value:{document:v}}=m.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||iA(rA(v),i)<=0||(o.has(v.key)||Ac(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we()}Lr(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new PR(this)}getSize(e){return G.resolve(this.size)}}class PR extends ER{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.persistence=e,this.Br=new ms(t=>Sf(t),Af),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new Df,this.targetCount=0,this.Qr=Ao.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.Kr={},this.overlays={},this.$r=new wc(0),this.Ur=!1,this.Ur=!0,this.Wr=new RR,this.referenceDelegate=e(this),this.Gr=new xR(this),this.indexManager=new mR,this.remoteDocumentCache=function(o){return new kR(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new fR(t),this.jr=new SR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new AR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new CR(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new NR(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class NR extends oA{constructor(e){super(),this.currentSequenceNumber=e}}class Of{constructor(e){this.persistence=e,this.Zr=new Df,this.Xr=null}static ei(e){return new Of(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=ye.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Te.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class uc{constructor(e,t){this.persistence=e,this.ri=new ms(i=>uA(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=wR(this,t)}static ei(e,t){return new uc(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(i++,l.removeEntry(h,Te.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$u(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Lf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return PT()?8:aA(zt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new DR;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(co()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(co()<=ke.DEBUG&&ae("QueryEngine","Query:",ho(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(co()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):G.resolve())}Xi(e,t){if(oy(t))return G.resolve(null);let i=tr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=$d(t,null,"F"),i=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Pe(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(m=>{const y=this.rs(t,f);return this.ss(t,y,h,m.readTime)?this.Xi(e,$d(t,null,"F")):this.os(e,y,t,m)}))})))}es(e,t,i,o){return oy(t)||o.isEqual(Te.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?G.resolve(null):(co()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ho(t)),this.os(e,h,t,nA(o,-1)).next(f=>f))})}rs(e,t){let i=new _t(dv(e));return t.forEach((o,l)=>{Ac(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return co()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",ho(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ei.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(Ne),this.cs=new ms(l=>Sf(l),Af),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function VR(r,e,t,i){return new LR(r,e,t,i)}async function Lv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let m=Pe();for(const y of o){h.push(y.batchId);for(const v of y.mutations)m=m.add(v.key)}for(const y of l){f.push(y.batchId);for(const v of y.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(i,m).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:f}))})})}function bR(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,m,y,v){const T=y.batch,I=T.keys();let D=G.resolve();return I.forEach(V=>{D=D.next(()=>v.getEntry(m,V)).next(z=>{const L=y.docVersions.get(V);Fe(L!==null),z.version.compareTo(L)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),v.addEntry(z)))})}),D.next(()=>f.mutationQueue.removeMutationBatch(m,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let m=Pe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(m=m.add(f.batch.mutations[y].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Vv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function MR(r,e){const t=Se(r),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((v,T)=>{const I=o.get(T);if(!I)return;f.push(t.Gr.removeMatchingKeys(l,v.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,v.addedDocuments,T)));let D=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(Dt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,i)),o=o.insert(T,D),function(z,L,W){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,D,v)&&f.push(t.Gr.updateTargetData(l,D))});let m=Mr(),y=Pe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),f.push(UR(l,h,e.documentUpdates).next(v=>{m=v.Is,y=v.Es})),!i.isEqual(Te.min())){const v=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(v)}return G.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,y)).next(()=>m)}).then(l=>(t.us=o,l))}function UR(r,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(r,i).next(l=>{let h=Mr();return t.forEach((f,m)=>{const y=l.get(f);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(Te.min())?(e.removeEntry(f,m.readTime),h=h.insert(f,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),h=h.insert(f,m)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",m.version)}),{Is:h,Es:o}})}function FR(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function jR(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,G.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new mi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Gd(r,e,t){const i=Se(r),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Oo(h))throw h;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function _y(r,e,t){const i=Se(r);let o=Te.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",h=>function(m,y,v){const T=Se(m),I=T.cs.get(v);return I!==void 0?G.resolve(T.us.get(I)):T.Gr.getTargetData(y,v)}(i,h,tr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,f.targetId).next(m=>{l=m})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:Pe())).next(f=>(BR(i,kA(e),f),{documents:f,ds:l})))}function BR(r,e,t){let i=r.ls.get(e)||Te.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),r.ls.set(e,i)}class vy{constructor(){this.activeTargetIds=LA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zR{constructor(){this._o=new vy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new vy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou=null;function Ed(){return Ou===null?Ou=function(){return 268435456+Math.round(2147483648*Math.random())}():Ou++,"0x"+Ou.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class qR extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const f=Ed(),m=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,m,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,m,y,o).then(v=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,v),v),v=>{throw Eo("RestConnection",`RPC '${t}' ${f} failed with error: `,v,"url: ",m,"request:",o),v})}ko(t,i,o,l,h,f){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+No}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=HR[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=Ed();return new Promise((h,f)=>{const m=new Q_;m.setWithCredentials(!0),m.listenOnce(X_.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case zu.NO_ERROR:const v=m.getResponseJson();ae(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),h(v);break;case zu.TIMEOUT:ae(Ft,`RPC '${e}' ${l} timed out`),f(new pe(Z.DEADLINE_EXCEEDED,"Request time out"));break;case zu.HTTP_ERROR:const T=m.getStatus();if(ae(Ft,`RPC '${e}' ${l} failed with status:`,T,"response text:",m.getResponseText()),T>0){let I=m.getResponseJson();Array.isArray(I)&&(I=I[0]);const D=I==null?void 0:I.error;if(D&&D.status&&D.message){const V=function(L){const W=L.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(W)>=0?W:Z.UNKNOWN}(D.status);f(new pe(V,D.message))}else f(new pe(Z.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new pe(Z.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ae(Ft,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(Ft,`RPC '${e}' ${l} sending request:`,o),m.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Ed(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Z_(),f=J_(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Lo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const v=l.join("");ae(Ft,`Creating RPC '${e}' stream ${o}: ${v}`,m);const T=h.createWebChannel(v,m);let I=!1,D=!1;const V=new WR({Eo:L=>{D?ae(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(I||(ae(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(Ft,`RPC '${e}' stream ${o} sending:`,L),T.send(L))},Ao:()=>T.close()}),z=(L,W,q)=>{L.listen(W,te=>{try{q(te)}catch(ie){setTimeout(()=>{throw ie},0)}})};return z(T,Oa.EventType.OPEN,()=>{D||(ae(Ft,`RPC '${e}' stream ${o} transport opened.`),V.So())}),z(T,Oa.EventType.CLOSE,()=>{D||(D=!0,ae(Ft,`RPC '${e}' stream ${o} transport closed`),V.Do())}),z(T,Oa.EventType.ERROR,L=>{D||(D=!0,Eo(Ft,`RPC '${e}' stream ${o} transport errored:`,L),V.Do(new pe(Z.UNAVAILABLE,"The operation could not be completed")))}),z(T,Oa.EventType.MESSAGE,L=>{var W;if(!D){const q=L.data[0];Fe(!!q);const te=q,ie=(te==null?void 0:te.error)||((W=te[0])===null||W===void 0?void 0:W.error);if(ie){ae(Ft,`RPC '${e}' stream ${o} received error:`,ie);const Ie=ie.status;let _e=function(R){const P=ct[R];if(P!==void 0)return Iv(P)}(Ie),x=ie.message;_e===void 0&&(_e=Z.INTERNAL,x="Unknown error status: "+Ie+" with message "+ie.message),D=!0,V.Do(new pe(_e,x)),T.close()}else ae(Ft,`RPC '${e}' stream ${o} received:`,q),V.vo(q)}}),z(f,Y_.STAT_EVENT,L=>{L.stat===Ud.PROXY?ae(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===Ud.NOPROXY&&ae(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function Td(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(r){return new ZA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t,i,o,l,h,f,m){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new bv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new pe(Z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KR extends Mv{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=nR(this.serializer,e),i=function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?rr(h.readTime):Te.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Kd(this.serializer),t.addTarget=function(l,h){let f;const m=h.target;if(f=zd(m)?{documents:sR(l,m)}:{query:oR(l,m).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Rv(l,h.resumeToken);const y=Hd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=lc(l,h.snapshotVersion.toTimestamp());const y=Hd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const i=lR(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Kd(this.serializer),t.removeTarget=e,this.c_(t)}}class GR extends Mv{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=iR(e.writeResults,e.commitTime),i=rr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Kd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>rR(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new pe(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,Wd(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(Z.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Wd(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new pe(Z.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class XR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(br(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{ys(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(m){const y=Se(m);y.k_.add(4),await ul(y),y.K_.set("Unknown"),y.k_.delete(4),await xc(y)}(this))})}),this.K_=new XR(i,o)}}async function xc(r){if(ys(r))for(const e of r.q_)await e(!0)}async function ul(r){for(const e of r.q_)await e(!1)}function Uv(r,e){const t=Se(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Uf(t)?Mf(t):Lo(t).s_()&&bf(t,e))}function Vf(r,e){const t=Se(r),i=Lo(t);t.B_.delete(e),i.s_()&&Fv(t,e),t.B_.size===0&&(i.s_()?i.a_():ys(t)&&t.K_.set("Unknown"))}function bf(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lo(r).V_(e)}function Fv(r,e){r.U_.xe(e),Lo(r).m_(e)}function Mf(r){r.U_=new QA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),Lo(r).start(),r.K_.F_()}function Uf(r){return ys(r)&&!Lo(r).i_()&&r.B_.size>0}function ys(r){return Se(r).k_.size===0}function jv(r){r.U_=void 0}async function JR(r){r.K_.set("Online")}async function ZR(r){r.B_.forEach((e,t)=>{bf(r,e)})}async function eC(r,e){jv(r),Uf(r)?(r.K_.O_(e),Mf(r)):r.K_.set("Unknown")}async function tC(r,e,t){if(r.K_.set("Online"),e instanceof Av&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await cc(r,i)}else if(e instanceof qu?r.U_.$e(e):e instanceof Sv?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(Te.min()))try{const i=await Vv(r.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const v=l.B_.get(y);v&&l.B_.set(y,v.withResumeToken(m.resumeToken,h))}}),f.targetMismatches.forEach((m,y)=>{const v=l.B_.get(m);if(!v)return;l.B_.set(m,v.withResumeToken(Dt.EMPTY_BYTE_STRING,v.snapshotVersion)),Fv(l,m);const T=new mi(v.target,m,y,v.sequenceNumber);bf(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await cc(r,i)}}async function cc(r,e,t){if(!Oo(e))throw e;r.k_.add(1),await ul(r),r.K_.set("Offline"),t||(t=()=>Vv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await xc(r)})}function Bv(r,e){return e().catch(t=>cc(r,t,e))}async function Nc(r){const e=Se(r),t=Ai(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;nC(e);)try{const o=await FR(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,rC(e,o)}catch(o){await cc(e,o)}zv(e)&&$v(e)}function nC(r){return ys(r)&&r.L_.length<10}function rC(r,e){r.L_.push(e);const t=Ai(r);t.s_()&&t.f_&&t.g_(e.mutations)}function zv(r){return ys(r)&&!Ai(r).i_()&&r.L_.length>0}function $v(r){Ai(r).start()}async function iC(r){Ai(r).w_()}async function sC(r){const e=Ai(r);for(const t of r.L_)e.g_(t.mutations)}async function oC(r,e,t){const i=r.L_.shift(),o=Pf.from(i,e,t);await Bv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Nc(r)}async function aC(r,e){e&&Ai(r).f_&&await async function(i,o){if(function(h){return qA(h)&&h!==Z.ABORTED}(o.code)){const l=i.L_.shift();Ai(i).__(),await Bv(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Nc(i)}}(r,e),zv(r)&&$v(r)}async function Ey(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=ys(t);t.k_.add(3),await ul(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await xc(t)}async function lC(r,e){const t=Se(r);e?(t.k_.delete(2),await xc(t)):e||(t.k_.add(2),await ul(t),t.K_.set("Unknown"))}function Lo(r){return r.W_||(r.W_=function(t,i,o){const l=Se(t);return l.b_(),new KR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:JR.bind(null,r),mo:ZR.bind(null,r),po:eC.bind(null,r),R_:tC.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Uf(r)?Mf(r):r.K_.set("Unknown")):(await r.W_.stop(),jv(r))})),r.W_}function Ai(r){return r.G_||(r.G_=function(t,i,o){const l=Se(t);return l.b_(),new GR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:iC.bind(null,r),po:aC.bind(null,r),p_:sC.bind(null,r),y_:oC.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Nc(r)):(await r.G_.stop(),r.L_.length>0&&(ae("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Ff(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(r,e){if(br("AsyncQueue",`${e}: ${r}`),Oo(r))return new pe(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=La(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new _o;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.z_=new et(ye.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Ro{constructor(e,t,i,o,l,h,f,m,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Ro(e,t,_o.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class cC{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=Iy(),l.forEach((h,f)=>{for(const m of f.J_)m.onError(i)})})(this,new pe(Z.ABORTED,"Firestore shutting down"))}}function Iy(){return new ms(r=>hv(r),Sc)}async function hC(r,e){const t=Se(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new uC,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=jf(h,`Initialization of query '${ho(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Bf(t)}async function dC(r,e){const t=Se(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function fC(r,e){const t=Se(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(i=!0);h.H_=o}}i&&Bf(t)}function pC(r,e,t){const i=Se(r),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function Bf(r){r.X_.forEach(e=>{e.next()})}var Qd,Sy;(Sy=Qd||(Qd={})).na="default",Sy.Cache="cache";class mC{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ro(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Qd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.key=e}}class Wv{constructor(e){this.key=e}}class gC{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=dv(e),this.ma=new _o(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new Ty,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const I=o.get(v),D=Ac(this.query,T)?T:null,V=!!I&&this.mutatedKeys.has(I.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let L=!1;I&&D?I.data.isEqual(D.data)?V!==z&&(i.track({type:3,doc:D}),L=!0):this.ya(I,D)||(i.track({type:2,doc:D}),L=!0,(m&&this.Va(D,m)>0||y&&this.Va(D,y)<0)&&(f=!0)):!I&&D?(i.track({type:0,doc:D}),L=!0):I&&!D&&(i.track({type:1,doc:I}),L=!0,(m||y)&&(f=!0)),L&&(D?(h=h.add(D),l=z?l.add(v):l.delete(v)):(h=h.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const v=this.query.limitType==="F"?h.last():h.first();h=h.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{ma:h,pa:i,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((v,T)=>function(D,V){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return z(D)-z(V)}(v.type,T.type)||this.Va(v.doc,T.doc)),this.wa(i),o=o!=null&&o;const f=t&&!o?this.Sa():[],m=this.Ra.size===0&&this.current&&!o?1:0,y=m!==this.Aa;return this.Aa=m,h.length!==0||y?{snapshot:new Ro(this.query,e.ma,l,h,e.mutatedKeys,m===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ty,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new Wv(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new Hv(i))}),t}va(e){this.da=e.ds,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Ro.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class yC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class _C{constructor(e){this.key=e,this.Fa=!1}}class vC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ms(f=>hv(f),Sc),this.Oa=new Map,this.Na=new Set,this.La=new et(ye.comparator),this.Ba=new Map,this.ka=new Df,this.qa={},this.Qa=new Map,this.Ka=Ao.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function wC(r,e,t=!0){const i=Yv(r);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await qv(i,e,t,!0),o}async function EC(r,e){const t=Yv(r);await qv(t,e,!0,!1)}async function qv(r,e,t,i){const o=await jR(r.localStore,tr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await TC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Uv(r.remoteStore,o),f}async function TC(r,e,t,i,o){r.Ua=(T,I,D)=>async function(z,L,W,q){let te=L.view.ga(W);te.ss&&(te=await _y(z.localStore,L.query,!1).then(({documents:x})=>L.view.ga(x,te)));const ie=q&&q.targetChanges.get(L.targetId),Ie=q&&q.targetMismatches.get(L.targetId)!=null,_e=L.view.applyChanges(te,z.isPrimaryClient,ie,Ie);return Ry(z,L.targetId,_e.ba),_e.snapshot}(r,T,I,D);const l=await _y(r.localStore,e,!0),h=new gC(e,l.ds),f=h.ga(l.documents),m=ll.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),y=h.applyChanges(f,r.isPrimaryClient,m);Ry(r,t,y.ba);const v=new yC(e,t,h);return r.xa.set(e,v),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),y.snapshot}async function IC(r,e,t){const i=Se(r),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!Sc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Gd(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Vf(i.remoteStore,o.targetId),Xd(i,o.targetId)}).catch(Do)):(Xd(i,o.targetId),await Gd(i.localStore,o.targetId,!0))}async function SC(r,e){const t=Se(r),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Vf(t.remoteStore,i.targetId))}async function AC(r,e,t){const i=DC(r);try{const o=await function(h,f){const m=Se(h),y=yt.now(),v=f.reduce((D,V)=>D.add(V.key),Pe());let T,I;return m.persistence.runTransaction("Locally write mutations","readwrite",D=>{let V=Mr(),z=Pe();return m.hs.getEntries(D,v).next(L=>{V=L,V.forEach((W,q)=>{q.isValidDocument()||(z=z.add(W))})}).next(()=>m.localDocuments.getOverlayedDocuments(D,V)).next(L=>{T=L;const W=[];for(const q of f){const te=BA(q,T.get(q.key).overlayedDocument);te!=null&&W.push(new gs(q.key,te,iv(te.value.mapValue),nr.exists(!0)))}return m.mutationQueue.addMutationBatch(D,y,W,f)}).next(L=>{I=L;const W=L.applyToLocalDocumentSet(T,z);return m.documentOverlayCache.saveOverlays(D,L.batchId,W)})}).then(()=>({batchId:I.batchId,changes:pv(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,m){let y=h.qa[h.currentUser.toKey()];y||(y=new et(Ne)),y=y.insert(f,m),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await cl(i,o.changes),await Nc(i.remoteStore)}catch(o){const l=jf(o,"Failed to persist write");t.reject(l)}}async function Kv(r,e){const t=Se(r);try{const i=await MR(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Fe(h.Fa):o.removedDocuments.size>0&&(Fe(h.Fa),h.Fa=!1))}),await cl(t,i,e)}catch(i){await Do(i)}}function Ay(r,e,t){const i=Se(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const m=Se(h);m.onlineState=f;let y=!1;m.queries.forEach((v,T)=>{for(const I of T.J_)I.ea(f)&&(y=!0)}),y&&Bf(m)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function RC(r,e,t){const i=Se(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new et(ye.comparator);h=h.insert(l,Bt.newNoDocument(l,Te.min()));const f=Pe().add(l),m=new kc(Te.min(),new Map,new et(Ne),h,f);await Kv(i,m),i.La=i.La.remove(l),i.Ba.delete(e),zf(i)}else await Gd(i.localStore,e,!1).then(()=>Xd(i,e,t)).catch(Do)}async function CC(r,e){const t=Se(r),i=e.batch.batchId;try{const o=await bR(t.localStore,e);Qv(t,i,null),Gv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await cl(t,o)}catch(o){await Do(o)}}async function kC(r,e,t){const i=Se(r);try{const o=await function(h,f){const m=Se(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return m.mutationQueue.lookupMutationBatch(y,f).next(T=>(Fe(T!==null),v=T.keys(),m.mutationQueue.removeMutationBatch(y,T))).next(()=>m.mutationQueue.performConsistencyCheck(y)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(y,v,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>m.localDocuments.getDocuments(y,v))})}(i.localStore,e);Qv(i,e,t),Gv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await cl(i,o)}catch(o){await Do(o)}}function Gv(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Qv(r,e,t){const i=Se(r);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Xd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Oa.get(e))r.xa.delete(i),t&&r.Ma.Wa(i,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(i=>{r.ka.containsKey(i)||Xv(r,i)})}function Xv(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(Vf(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),zf(r))}function Ry(r,e,t){for(const i of t)i instanceof Hv?(r.ka.addReference(i.key,e),PC(r,i)):i instanceof Wv?(ae("SyncEngine","Document no longer in limbo: "+i.key),r.ka.removeReference(i.key,e),r.ka.containsKey(i.key)||Xv(r,i.key)):we()}function PC(r,e){const t=e.key,i=t.path.canonicalString();r.La.get(t)||r.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),r.Na.add(i),zf(r))}function zf(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new ye(Xe.fromString(e)),i=r.Ka.next();r.Ba.set(i,new _C(t)),r.La=r.La.insert(t,i),Uv(r.remoteStore,new mi(tr(Rf(t.path)),i,"TargetPurposeLimboResolution",wc.oe))}}async function cl(r,e,t){const i=Se(r),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((f,m)=>{h.push(i.Ua(m,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(m.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Lf.zi(m.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(m,y){const v=Se(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,I=>G.forEach(I.Wi,D=>v.persistence.referenceDelegate.addReference(T,I.targetId,D)).next(()=>G.forEach(I.Gi,D=>v.persistence.referenceDelegate.removeReference(T,I.targetId,D)))))}catch(T){if(!Oo(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const D=v.us.get(I),V=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(V);v.us=v.us.insert(I,z)}}}(i.localStore,l))}async function xC(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await Lv(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(m=>{m.reject(new pe(Z.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await cl(t,i.Ts)}}function NC(r,e){const t=Se(r),i=t.Ba.get(e);if(i&&i.Fa)return Pe().add(i.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function Yv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RC.bind(null,e),e.Ma.R_=fC.bind(null,e.eventManager),e.Ma.Wa=pC.bind(null,e.eventManager),e}function DC(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kC.bind(null,e),e}class hc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return VR(this.persistence,new OR,e.initialUser,this.serializer)}ja(e){return new Ov(Of.ei,this.serializer)}za(e){return new zR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hc.provider={build:()=>new hc};class OC extends hc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof uc);const i=this.persistence.referenceDelegate.garbageCollector;return new _R(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Ov(i=>uc.ei(i,t),this.serializer)}}class Yd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ay(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=xC.bind(null,this.syncEngine),await lC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cC}()}createDatastore(e){const t=Pc(e.databaseInfo.databaseId),i=function(l){return new qR(l)}(e.databaseInfo);return function(l,h,f,m){return new QR(l,h,f,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new YR(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Ay(this.syncEngine,t,0),function(){return wy.p()?new wy:new $R}())}createSyncEngine(e,t){return function(o,l,h,f,m,y,v){const T=new vC(o,l,h,f,m,y);return v&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await ul(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Yd.provider={build:()=>new Yd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=tv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=jf(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Id(r,e){r.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Lv(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Cy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await bC(r);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(i=>Ey(e.remoteStore,i)),r.setAppCheckTokenChangeListener((i,o)=>Ey(e.remoteStore,o)),r._onlineComponents=e}async function bC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Id(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Eo("Error using user provided cache. Falling back to memory cache: "+t),await Id(r,new hc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Id(r,new OC(void 0));return r._offlineComponents}async function Jv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Cy(r,r._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Cy(r,new Yd))),r._onlineComponents}function MC(r){return Jv(r).then(e=>e.syncEngine)}async function ky(r){const e=await Jv(r),t=e.eventManager;return t.onListen=wC.bind(null,e.syncEngine),t.onUnlisten=IC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=SC.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(r,e,t){if(!t)throw new pe(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function UC(r,e,t,i){if(e===!0&&i===!0)throw new pe(Z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function xy(r){if(!ye.isDocumentKey(r))throw new pe(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ny(r){if(ye.isDocumentKey(r))throw new pe(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function $f(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we()}function vo(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new pe(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$f(r);throw new pe(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new pe(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zv((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new pe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new KS;switch(i.type){case"firstParty":return new YS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new pe(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Py.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Py.delete(t),i.terminate())}(this),Promise.resolve()}}function FC(r,e,t,i={}){var o;const l=(r=vo(r,Dc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let f,m;if(typeof i.mockUserToken=="string")f=i.mockUserToken,m=jt.MOCK_USER;else{f=h_(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new pe(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new jt(y)}r._authCredentials=new GS(new ev(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Oc(this.firestore,e,this._query)}}class In{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}}class _i extends Oc{constructor(e,t,i){super(e,t,Rf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new ye(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function Oy(r,e,...t){if(r=Nt(r),e0("collection","path",e),r instanceof Dc){const i=Xe.fromString(e,...t);return Ny(i),new _i(r,null,i)}{if(!(r instanceof In||r instanceof _i))throw new pe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Xe.fromString(e,...t));return Ny(i),new _i(r.firestore,null,i)}}function t0(r,e,...t){if(r=Nt(r),arguments.length===1&&(e=tv.newId()),e0("doc","path",e),r instanceof Dc){const i=Xe.fromString(e,...t);return xy(i),new In(r,null,new ye(i))}{if(!(r instanceof In||r instanceof _i))throw new pe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Xe.fromString(e,...t));return xy(i),new In(r.firestore,r instanceof _i?r.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new bv(this,"async_queue_retry"),this.fu=()=>{const i=Td();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Td();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Td();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new os;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Oo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(i);throw br("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Ff.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Vy(r){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(r,["next","error","complete"])}class Ja extends Dc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Ly,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ly(e),this._firestoreClient=void 0,await e}}}function jC(r,e){const t=typeof r=="object"?r:uf(),i=typeof r=="string"?r:"(default)",o=gc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=l_("firestore");l&&FC(o,...l)}return o}function n0(r){if(r._terminated)throw new pe(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||BC(r),r._firestoreClient}function BC(r){var e,t,i;const o=r._freezeSettings(),l=function(f,m,y,v){return new dA(f,m,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Zv(v.experimentalLongPollingOptions),v.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new VC(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Co(Dt.fromBase64String(e))}catch(t){throw new pe(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Co(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=/^__.*__$/;class $C{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new al(e,this.data,t,this.fieldTransforms)}}function i0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class Kf{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Kf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return dc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(i0(this.Mu)&&zC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class HC{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Pc(e)}$u(e,t,i,o=!1){return new Kf({Mu:e,methodName:t,Ku:i,path:xt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function WC(r){const e=r._freezeSettings(),t=Pc(r._databaseId);return new HC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function qC(r,e,t,i,o,l={}){const h=r.$u(l.merge||l.mergeFields?2:0,e,t,o);l0("Data must be an object, but it was:",h,i);const f=o0(i,h);let m,y;if(l.merge)m=new Fn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=KC(e,T,t);if(!h.contains(I))throw new pe(Z.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);QC(v,I)||v.push(I)}m=new Fn(v),y=h.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,y=h.fieldTransforms;return new $C(new Tn(f),m,y)}function s0(r,e){if(a0(r=Nt(r)))return l0("Unsupported field value:",e,r),o0(r,e);if(r instanceof r0)return function(i,o){if(!i0(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let m=s0(f,o.ku(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}}(r,e)}return function(i,o){if((i=Nt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return VA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=yt.fromDate(i);return{timestampValue:lc(o.serializer,l)}}if(i instanceof yt){const l=new yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:lc(o.serializer,l)}}if(i instanceof Wf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Co)return{bytesValue:Rv(o.serializer,i._byteString)};if(i instanceof In){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Nf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof qf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(m=>{if(typeof m!="number")throw f.qu("VectorValues must only contain numeric values.");return Cf(f.serializer,m)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${$f(i)}`)}(r,e)}function o0(r,e){const t={};return nv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(r,(i,o)=>{const l=s0(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function a0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof yt||r instanceof Wf||r instanceof Co||r instanceof In||r instanceof r0||r instanceof qf)}function l0(r,e,t){if(!a0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=$f(t);throw i==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+i)}}function KC(r,e,t){if((e=Nt(e))instanceof Hf)return e._internalPath;if(typeof e=="string")return u0(r,e);throw dc("Field path arguments must be of type string or ",r,!1,void 0,t)}const GC=new RegExp("[~\\*/\\[\\]]");function u0(r,e,t){if(e.search(GC)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hf(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function dc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${i}`),h&&(m+=` in document ${o}`),m+=")"),new pe(Z.INVALID_ARGUMENT,f+r+m)}function QC(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(h0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XC extends c0{data(){return super.data()}}function h0(r,e){return typeof e=="string"?u0(r,e):e instanceof Hf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pe(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class JC{convertValue(e,t="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ps(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>at(h.doubleValue));return new qf(l)}convertGeoPoint(e){return new Wf(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Tc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ka(e));default:return null}}convertTimestamp(e){const t=Ti(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Xe.fromString(e);Fe(Dv(i));const o=new Ga(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(r,e,t){let i;return i=r?r.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class d0 extends c0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(h0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Ku extends d0{data(e={}){return super.data(e)}}class ek{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ba(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Ku(this._firestore,this._userDataWriter,i.key,i,new ba(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const m=new Ku(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ba(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const m=new Ku(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ba(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),v=h.indexOf(f.doc.key)),{type:tk(f.type),doc:m,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function tk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class f0 extends JC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Co(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new In(this.firestore,null,t)}}function nk(r){return p0(vo(r.firestore,Ja),[new kf(r._key,nr.none())])}function rk(r,e){const t=vo(r.firestore,Ja),i=t0(r),o=ZC(r.converter,e);return p0(t,[qC(WC(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,nr.exists(!1))]).then(()=>i)}function ik(r,...e){var t,i,o;r=Nt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Vy(e[h])||(l=e[h],h++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Vy(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let m,y,v;if(r instanceof In)y=vo(r.firestore,Ja),v=Rf(r._key.path),m={next:T=>{e[h]&&e[h](sk(y,r,T))},error:e[h+1],complete:e[h+2]};else{const T=vo(r,Oc);y=vo(T.firestore,Ja),v=T._query;const I=new f0(y);m={next:D=>{e[h]&&e[h](new ek(y,I,T,D))},error:e[h+1],complete:e[h+2]},YC(r._query)}return function(I,D,V,z){const L=new LC(z),W=new mC(D,L,V);return I.asyncQueue.enqueueAndForget(async()=>hC(await ky(I),W)),()=>{L.eu(),I.asyncQueue.enqueueAndForget(async()=>dC(await ky(I),W))}}(n0(y),v,f,m)}function p0(r,e){return function(i,o){const l=new os;return i.asyncQueue.enqueueAndForget(async()=>AC(await MC(i),o,l)),l.promise}(n0(r),e)}function sk(r,e,t){const i=t.docs.get(e._key),o=new f0(r);return new d0(r,o,e._key,i,new ba(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){No=o})(fs),ls(new wi("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Ja(new QS(i.getProvider("auth-internal")),new ZS(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pe(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(y.options.projectId,v)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Zn(Qg,"4.7.5",e),Zn(Qg,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="firebasestorage.googleapis.com",g0="storageBucket",ok=2*60*1e3,ak=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends ur{constructor(e,t,i=0){super(Sd(e),`Firebase Storage: ${t} (${Sd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Sd(r){return"storage/"+r}function Gf(){const r="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,r)}function lk(r){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function uk(r){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ck(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,r)}function hk(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dk(r){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function fk(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pk(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function mk(r){return new rt(nt.INVALID_URL,"Invalid URL '"+r+"'.")}function gk(r){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function yk(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+g0+"' property when initializing the app?")}function _k(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vk(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wk(r){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jd(r){return new rt(nt.INVALID_ARGUMENT,r)}function y0(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function Ek(r){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function za(r,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Da(r){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=hn.makeFromUrl(e,t)}catch{return new hn(e,"")}if(i.path==="")return i;throw gk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ie){ie.path.charAt(ie.path.length-1)==="/"&&(ie.path_=ie.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function y(ie){ie.path_=decodeURIComponent(ie.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",D=new RegExp(`^https?://${T}/${v}/b/${o}/o${I}`,"i"),V={bucket:1,path:3},z=t===m0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",W=new RegExp(`^https?://${z}/${o}/${L}`,"i"),te=[{regex:f,indices:m,postModify:l},{regex:D,indices:V,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let ie=0;ie<te.length;ie++){const Ie=te[ie],_e=Ie.regex.exec(e);if(_e){const x=_e[Ie.indices.bucket];let S=_e[Ie.indices.path];S||(S=""),i=new hn(x,S),Ie.postModify(i);break}}if(i==null)throw mk(e);return i}}class Tk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function m(){return f===2}let y=!1;function v(...L){y||(y=!0,e.apply(null,L))}function T(L){o=setTimeout(()=>{o=null,r(D,m())},L)}function I(){l&&clearTimeout(l)}function D(L,...W){if(y){I();return}if(L){I(),v.call(null,L,...W);return}if(m()||h){I(),v.call(null,L,...W);return}i<64&&(i*=2);let te;f===1?(f=2,te=0):te=(i+Math.random())*1e3,T(te)}let V=!1;function z(L){V||(V=!0,I(),!y&&(o!==null?(L||(f=2),clearTimeout(o),T(0)):L||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,z(!0)},t),z}function Sk(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(r){return r!==void 0}function Rk(r){return typeof r=="object"&&!Array.isArray(r)}function Qf(r){return typeof r=="string"||r instanceof String}function by(r){return Xf()&&r instanceof Blob}function Xf(){return typeof Blob<"u"}function My(r,e,t,i){if(i<e)throw Jd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw Jd(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(r,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${r}`}function _0(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var as;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(as||(as={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,t,i,o,l,h,f,m,y,v,T,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=m,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,V)=>{this.resolve_=D,this.reject_=V,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Lu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const m=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===as.NO_ERROR,m=l.getStatus();if(!f||Ck(m,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===as.ABORT;i(!1,new Lu(!1,null,v));return}const y=this.successCodes_.indexOf(m)!==-1;i(!0,new Lu(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());Ak(m)?l(m):l()}catch(m){h(m)}else if(f!==null){const m=Gf();m.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,m)):h(m)}else if(o.canceled){const m=this.appDelete_?y0():pk();h(m)}else{const m=fk();h(m)}};this.canceled_?t(!1,new Lu(!1,null,!0)):this.backoffId_=Ik(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Pk(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function xk(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Nk(r,e){e&&(r["X-Firebase-GMPID"]=e)}function Dk(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function Ok(r,e,t,i,o,l,h=!0){const f=_0(r.urlParams),m=r.url+f,y=Object.assign({},r.headers);return Nk(y,e),Pk(y,t),xk(y,l),Dk(y,i),new kk(m,r.method,y,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Vk(...r){const e=Lk();if(e!==void 0){const t=new e;for(let i=0;i<r.length;i++)t.append(r[i]);return t.getBlob()}else{if(Xf())return new Blob(r);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bk(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(r){if(typeof atob>"u")throw wk("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ad{constructor(e,t){this.data=e,this.contentType=t||null}}function Uk(r,e){switch(r){case Jn.RAW:return new Ad(v0(e));case Jn.BASE64:case Jn.BASE64URL:return new Ad(w0(r,e));case Jn.DATA_URL:return new Ad(jk(e),Bk(e))}throw Gf()}function v0(r){const e=[];for(let t=0;t<r.length;t++){let i=r.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=r.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Fk(r){let e;try{e=decodeURIComponent(r)}catch{throw za(Jn.DATA_URL,"Malformed data URL.")}return v0(e)}function w0(r,e){switch(r){case Jn.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw za(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Jn.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw za(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Mk(e)}catch(o){throw o.message.includes("polyfill")?o:za(r,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class E0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw za(Jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=zk(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function jk(r){const e=new E0(r);return e.base64?w0(Jn.BASE64,e.rest):Fk(e.rest)}function Bk(r){return new E0(r).contentType}function zk(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){let i=0,o="";by(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(by(this.data_)){const i=this.data_,o=bk(i,e,t);return o===null?null:new pi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new pi(i,!0)}}static getBlob(...e){if(Xf()){const t=e.map(i=>i instanceof pi?i.data_:i);return new pi(Vk.apply(null,t))}else{const t=e.map(h=>Qf(h)?Uk(Jn.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new pi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(r){let e;try{e=JSON.parse(r)}catch{return null}return Rk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function Hk(r,e){const t=e.split("/").filter(i=>i.length>0).join("/");return r.length===0?t:r+"/"+t}function I0(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(r,e){return e}class Kt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||Wk}}let Vu=null;function qk(r){return!Qf(r)||r.length<2?r:I0(r)}function S0(){if(Vu)return Vu;const r=[];r.push(new Kt("bucket")),r.push(new Kt("generation")),r.push(new Kt("metageneration")),r.push(new Kt("name","fullPath",!0));function e(l,h){return qk(h)}const t=new Kt("name");t.xform=e,r.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Kt("size");return o.xform=i,r.push(o),r.push(new Kt("timeCreated")),r.push(new Kt("updated")),r.push(new Kt("md5Hash",null,!0)),r.push(new Kt("cacheControl",null,!0)),r.push(new Kt("contentDisposition",null,!0)),r.push(new Kt("contentEncoding",null,!0)),r.push(new Kt("contentLanguage",null,!0)),r.push(new Kt("contentType",null,!0)),r.push(new Kt("metadata","customMetadata",!0)),Vu=r,Vu}function Kk(r,e){function t(){const i=r.bucket,o=r.fullPath,l=new hn(i,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function Gk(r,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return Kk(i,r),i}function A0(r,e,t){const i=T0(e);return i===null?null:Gk(r,i,t)}function Qk(r,e,t,i){const o=T0(e);if(o===null||!Qf(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const v=r.bucket,T=r.fullPath,I="/b/"+h(v)+"/o/"+h(T),D=Yf(I,t,i),V=_0({alt:"media",token:y});return D+V})[0]}function Xk(r,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=r[l.local])}return JSON.stringify(t)}class R0{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(r){if(!r)throw Gf()}function Yk(r,e){function t(i,o){const l=A0(r,o,e);return C0(l!==null),l}return t}function Jk(r,e){function t(i,o){const l=A0(r,o,e);return C0(l!==null),Qk(l,o,r.host,r._protocol)}return t}function k0(r){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=hk():o=ck():t.getStatus()===402?o=uk(r.bucket):t.getStatus()===403?o=dk(r.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function Zk(r){const e=k0(r);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=lk(r.path)),l.serverResponse=o.serverResponse,l}return t}function eP(r,e,t){const i=e.fullServerUrl(),o=Yf(i,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,f=new R0(o,l,Jk(r,t),h);return f.errorHandler=Zk(e),f}function tP(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function nP(r,e,t){const i=Object.assign({},t);return i.fullPath=r.path,i.size=e.size(),i.contentType||(i.contentType=tP(null,e)),i}function rP(r,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let te="";for(let ie=0;ie<2;ie++)te=te+Math.random().toString().slice(2);return te}const m=f();h["Content-Type"]="multipart/related; boundary="+m;const y=nP(e,i,o),v=Xk(y,t),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+m+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+m+"--",D=pi.getBlob(T,i,I);if(D===null)throw _k();const V={name:y.fullPath},z=Yf(l,r.host,r._protocol),L="POST",W=r.maxUploadRetryTime,q=new R0(z,L,Yk(r,t),W);return q.urlParams=V,q.headers=h,q.body=D.uploadData(),q.errorHandler=k0(e),q}class iP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=as.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=as.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=as.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Da("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Da("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Da("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Da("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Da("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sP extends iP{initXhr(){this.xhr_.responseType="text"}}function P0(){return new sP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this._service=e,t instanceof hn?this._location=t:this._location=hn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new hs(e,t)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return I0(this._location.path)}get storage(){return this._service}get parent(){const e=$k(this._location.path);if(e===null)return null;const t=new hn(this._location.bucket,e);return new hs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Ek(e)}}function oP(r,e,t){r._throwIfRoot("uploadBytes");const i=rP(r.storage,r._location,S0(),new pi(e,!0),t);return r.storage.makeRequestWithTokens(i,P0).then(o=>({metadata:o,ref:r}))}function aP(r){r._throwIfRoot("getDownloadURL");const e=eP(r.storage,r._location,S0());return r.storage.makeRequestWithTokens(e,P0).then(t=>{if(t===null)throw vk();return t})}function lP(r,e){const t=Hk(r._location.path,e),i=new hn(r._location.bucket,t);return new hs(r.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(r){return/^[A-Za-z]+:\/\//.test(r)}function cP(r,e){return new hs(r,e)}function x0(r,e){if(r instanceof Jf){const t=r;if(t._bucket==null)throw yk();const i=new hs(t,t._bucket);return e!=null?x0(i,e):i}else return e!==void 0?lP(r,e):r}function hP(r,e){if(e&&uP(e)){if(r instanceof Jf)return cP(r,e);throw Jd("To use ref(service, url), the first argument must be a Storage instance.")}else return x0(r,e)}function Uy(r,e){const t=e==null?void 0:e[g0];return t==null?null:hn.makeFromBucketSpec(t,r)}function dP(r,e,t,i={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:o}=i;o&&(r._overrideAuthToken=typeof o=="string"?o:h_(o,r.app.options.projectId))}class Jf{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=m0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ok,this._maxUploadRetryTime=ak,this._requests=new Set,o!=null?this._bucket=hn.makeFromBucketSpec(o,this._host):this._bucket=Uy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=Uy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Tk(y0());{const h=Ok(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Fy="@firebase/storage",jy="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="storage";function fP(r,e,t){return r=Nt(r),oP(r,e,t)}function pP(r){return r=Nt(r),aP(r)}function mP(r,e){return r=Nt(r),hP(r,e)}function gP(r=uf(),e){r=Nt(r);const i=gc(r,N0).getImmediate({identifier:e}),o=l_("storage");return o&&yP(i,...o),i}function yP(r,e,t,i={}){dP(r,e,t,i)}function _P(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Jf(t,i,o,e,fs)}function vP(){ls(new wi(N0,_P,"PUBLIC").setMultipleInstances(!0)),Zn(Fy,jy,""),Zn(Fy,jy,"esm2017")}vP();const wP={apiKey:"AIzaSyD5thlppOJ7rjsc7l2yJ47fwyHwXV9Y8uc",authDomain:"task-manager-87c7b.firebaseapp.com",projectId:"task-manager-87c7b",storageBucket:"task-manager-87c7b.firebasestorage.app",messagingSenderId:"259409556221",appId:"1:259409556221:web:aa2e1882e2fe8c47b64494"},Zf=p_(wP),D0=$S(Zf),EP=new kr,Rd=jC(Zf),TP=gP(Zf),IP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAiCAYAAADRcLDBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI1SURBVHgB7ZdNUhpBFMff64Ekiyxwh1lxBLjBcANvYHKCJDsjmDQFMdmpJxBPkHgCuIHcwF4py1lo+dEwz9cMIyr0TE8xWlrFr2pqmq5+Pf9+/brfA2DFKwJdB26VZcXDwlcC3EiekBQh9nfPGi3IU8RWue17KA4BqAKuIHTH4aj1dyhV+tCMH2eDICQMbDYCqUQApfg3e+5/SPp7khiriB/r7Q0B+G/OgKjeGe70bXbb5bZExF9PrNSYdN0mpGCbTIDYM+uYMuCnahq833uN9Y7VE7yqKs3aQeQVMvHEHoW6xWaeJnuBYi8QdsegWx4We5ligldffK9r+qZ4EttdXo3W9gM5twCxyDykaNWRyvDIuNG4EyKPuDAw46WS7InwOO78+MGrLhpcSJuN3X9q3tP9rEFWCIK0MyjgFbASEZMaEw/Z/tQ55CDx08YR0MGf8+Y+OOIswuQOJPj84O6wwnG4yS9nEc7bYU4HJ6cDbg6IUCU9POYIMpBpOzrnO9/gGXh7gWmyKqv2Zz2kdoc/u7AkziJkRZb0DfYe9yI0y22VlFVdyLgdk6DLHWcRJhmZpGTqifghgbVlvWDIFBPTJKYgZ95G7rgd4Ro8MxYRQsWtdwXahCVAFPf2F9fjhUXRwnIjOo6zsowLG6k1HHuettaW83hcV04KXh+iSbq/h40vziIMfP59/ngPciG52rbGhDl65hgufTcQ9JMETCSCA1OvVImoBI7wf4+AFzHI4x5Z8aLcAZaR+z8zjVdMAAAAAElFTkSuQmCC",SP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgBpVXfSxRRFD7n3hkRtVorKh+KMR8z2GIDH4JGK+jNH0giPrj2D1QQRPTgCv141P/A9WkREvQhIoK8QQ9BG81bBD1MQRmYuLbpprtzT2dWd5td13XV72Fm+O45373fN/fOIFTBoh2xwcBu1BAiBAsJXA/oq9agWlRS7dSHlcilq5duE1CMAENVGl1NMHbi9fs4VBNdsMOWIc1JfrShViA4uVy2t0U5boEygoKmNOcJwII9gLTvpr6EK4pWFCRIAZIi0nObixKcLYbZ3nB+mND1tOhsUe/cbaJL1yKjnI9VqocON/SWN2y66oiZMjee0/JupXHMvGCxb0fn116etvRKXVFw1WvobFUqBfuAkNK0jba01TT0BeTJTJ70PNG7X0EfBgrqzqd1ZAMO3foMG86xeOO9n255oR1btkAa1q6KXs7xMy0pNM4vzlWqFdKIgsBR2A1kjgjE0g0uBO7bdh5IlijntKYQHBAGETksbxWIH9AYBvg9W17IqTu8j+PbJaiHL8WFaCAH118ZMc4gn9V05ixMrLWnkgMzzVAjuh7/WS4VhQuC/au0NuFROgwTq+3+Jg1FpvvGaxJ8ujoaFGQnrnrY5Ajzek7dTHWp5+tnAo7wDgtXfdP2k8wwaIoFOT6+ausOEE70WAbKj8FZt2aOI3lTycFZVeAiiR6bUA7XpS9H638NAeqG4iopm+1UsWa3+Om7mOiLcraTsAeI3HFo/P4AkO+c5Qhbj/u8LBQszHxyTvWfW+FZbtQqSmINsoffgvzbNvbmfusE/I+hFH4UEsU8Alq7irJlJBxJDj5TQR53aogk+m3+pUT5hFwJTsCcy6fQ37NTHwZmZuEg6GAHtdb+Ax4I9RGMWVGqAAAAAElFTkSuQmCC",AP="/TaskBuddy/assets/circle-CwhgPju9.png",RP=()=>{const r=tf(),e=async()=>{try{const t=await J1(D0,EP);console.log("Google Login Success:",t.user),r("/task-manager")}catch(t){console.error("Google Login Error:",t)}};return $.jsxs("div",{className:"home-page",style:{backgroundImage:`url(${AP})`,backgroundSize:"cover",backgroundPosition:"center",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#fff"},children:[$.jsxs("div",{className:"header-container",style:{display:"flex",alignItems:"center"},children:[$.jsx("img",{src:IP,alt:"Task Icon"}),$.jsx("h1",{className:"taskbuddy",style:{color:"purple",margin:0},children:"TaskBuddy"})]}),$.jsx("p",{className:"description",style:{color:"#333"},children:"Streamline your workflow and track progress effortlessly with our all-in-one task management app."}),$.jsxs("div",{className:"login-container",style:{backgroundColor:"black",padding:"10px",borderRadius:"20px",display:"flex",alignItems:"center"},children:[$.jsx("img",{src:SP,alt:"Google Icon",style:{width:"35px",marginRight:"1px"}}),$.jsx("button",{onClick:e,style:{padding:"10px 20px",fontSize:"20px",backgroundColor:"black",color:"white",border:"none",borderRadius:"25px",cursor:"pointer",display:"flex",alignItems:"center"},children:"Continue with Google"})]})]})};var ts=(r=>(r.Todo="Todo",r.InProgress="In-Progress",r.Done="done",r.Completed="Completed",r))(ts||{});const CP=({tasks:r,deleteTask:e,addTask:t})=>{const[i,o]=K.useState(!1),[l,h]=K.useState({title:"",dueDate:"",status:ts.Todo,category:"Work"}),[f,m]=K.useState(""),[y,v]=K.useState(null),[T,I]=K.useState(!1),D=L=>{const{name:W,value:q}=L.target;h(te=>({...te,[W]:q}))},V=()=>{l.title&&l.dueDate?(t({...l,id:String(Date.now())}),h({title:"",dueDate:"",status:ts.Todo,category:"Work"}),o(!1)):alert("Please fill in all required fields.")},z=L=>{const W=r.filter(q=>q.status===L).filter(q=>f?q.title.toLowerCase().includes(f.toLowerCase()):!0).filter(q=>y?q.category===y:!0);return $.jsxs($.Fragment,{children:[$.jsx("tr",{children:$.jsx("td",{colSpan:5,children:$.jsx("div",{className:`subtable-heading ${L.toLowerCase().replace(" ","-")}-heading`,children:L})})}),L===ts.Todo&&$.jsxs($.Fragment,{children:[$.jsx("tr",{children:$.jsx("td",{colSpan:5,style:{textAlign:"center"},children:!i&&$.jsx("button",{className:"add-task-button",onClick:()=>o(!0),children:"+ Add Task"})})}),i&&$.jsxs("tr",{className:"add-task-row",children:[$.jsx("td",{children:$.jsx("input",{type:"text",name:"title",value:l.title,onChange:D,placeholder:"Task Name"})}),$.jsx("td",{children:$.jsx("input",{type:"date",name:"dueDate",value:l.dueDate,onChange:D})}),$.jsx("td",{children:$.jsxs("select",{name:"status",value:l.status,onChange:D,children:[$.jsx("option",{value:"Todo",children:"To-Do"}),$.jsx("option",{value:"InProgress",children:"In-Progress"}),$.jsx("option",{value:"Completed",children:"Completed"})]})}),$.jsx("td",{children:$.jsxs("select",{name:"category",value:l.category,onChange:D,children:[$.jsx("option",{value:"Work",children:"Work"}),$.jsx("option",{value:"Personal",children:"Personal"})]})}),$.jsxs("td",{children:[$.jsx("button",{onClick:V,children:"Save"}),$.jsx("button",{onClick:()=>o(!1),children:"Cancel"})]})]})]}),W.length>0?W.map(q=>$.jsxs("tr",{children:[$.jsx("td",{children:q.title}),$.jsx("td",{children:q.dueDate||"N/A"}),$.jsx("td",{children:q.status}),$.jsx("td",{children:q.category||"N/A"}),$.jsx("td",{children:$.jsx("button",{onClick:()=>e(q.id),children:"Delete"})})]},q.id)):$.jsx("tr",{children:$.jsx("td",{colSpan:5,style:{textAlign:"center"},children:"No tasks available"})})]})};return $.jsxs("div",{className:"task-manager",children:[$.jsxs("div",{className:"filter-bar",children:[$.jsxs("div",{className:"filter-left",children:[$.jsx("span",{className:"filter-label",children:"Filter by:"}),$.jsx("button",{onClick:()=>I(!T),children:"Category"}),T&&$.jsxs("select",{onChange:L=>v(L.target.value||null),value:y||"",children:[$.jsx("option",{value:"",children:"All"}),$.jsx("option",{value:"Work",children:"Work"}),$.jsx("option",{value:"Personal",children:"Personal"})]}),$.jsx("button",{onClick:()=>I(!T),children:"Due Date"}),T&&$.jsxs("select",{onChange:L=>v(L.target.value||null),value:y||"",children:[$.jsx("option",{value:"All",children:"All"}),$.jsx("option",{value:"28-12-24",children:"28-12-24"}),$.jsx("option",{value:"29-12-24",children:"29-12-24"})]})]}),$.jsx("div",{className:"search-bar",children:$.jsx("input",{type:"text",placeholder:"Search",value:f,onChange:L=>m(L.target.value)})})]}),$.jsx("table",{className:"task-table",children:$.jsx("thead",{children:$.jsxs("tr",{children:[$.jsx("th",{children:"Task Name"}),$.jsx("th",{children:"Due On"}),$.jsx("th",{children:"Task Status"}),$.jsx("th",{children:"Task Category"}),$.jsx("th",{children:"Actions"})]})})}),$.jsx("table",{className:"main-table",children:$.jsxs("tbody",{children:[z(ts.Todo),z(ts.InProgress),z(ts.Completed)]})})]})},kP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VbRbcIwEL0EJPhkg7r/ININwgZlAsoGMEHFBG0naDZoO0GzQcMPvw0T1J9ICNJ3YNoktWUTIlG1T4pyiex75/Pz+Yj+CzyXQUEQiO12O/I8T5jGZFm29H0/SpIkpVNJu91u2Gg0HmEKsiNdr9fDxWKRUBVSrC5A9EwW5H4vyYyLPDmyMsSqE2dSTicI32B28o7m8/klGdDv99MSsQTxQEfc1DlQK2RCCfsFk0ewBRxnZEdM++x0MPcO70F5gF/+gVUyWcg2yKYQxwRmQm7gtI5B9qC+Q+WvAN1KCylFdiTeV5h8AwULMgDB8ThWr4T4YojvNudP2ki1gLOIaoJPZ8BZSJ3Sq47QExX3u4zDEZE2f657KqhYJEwI8TzbBjmRIvoYqx3b1ItxVkJnUkUcUU1wJuVDvlqtdnvabrely96Z4KReJaT3Vqu1e2B/9Hq9a6oI1yMjqKRcVJwOVcQxQhrQ953K5TGmijhGSDHVhN9XBjebjaAKKPVSP1Su7RxwWXPXwBUoVaUtJUcopb/Sfv+13UbTEOn0MJHbFgTheolz17HrGpSfmdY/mSOeqHajCrj4z5Ch+6NIFbHAK0TN/YreBtRgzkp0SsX6O/gEV5zA9iDmBycAAAAASUVORK5CYII=",PP=({tasks:r})=>{const[e,t]=K.useState(""),[i,o]=K.useState(null),[l,h]=K.useState(!1),[f,m]=K.useState(null),y=r.filter(v=>i?v.category===i:!0).filter(v=>f?v.dueDate===f:!0).filter(v=>e?v.title.toLowerCase().includes(e.toLowerCase()):!0);return $.jsxs("div",{className:"task-board",children:[$.jsxs("div",{className:"filter-bar",children:[$.jsxs("div",{className:"filter-left",children:[$.jsx("span",{className:"filter-label",children:"Filter by:"}),$.jsx("button",{onClick:()=>h(!l),children:"Category"}),l&&$.jsxs("select",{onChange:v=>o(v.target.value||null),value:i||"",children:[$.jsx("option",{value:"",children:"All"}),$.jsx("option",{value:"Work",children:"Work"}),$.jsx("option",{value:"Personal",children:"Personal"})]}),$.jsx("button",{onClick:()=>h(!l),children:"Due Date"}),l&&$.jsxs("select",{onChange:v=>m(v.target.value||null),value:f||"",children:[$.jsx("option",{value:"",children:"All"}),$.jsx("option",{value:"2024-12-28",children:"28 Dec, 2024"}),$.jsx("option",{value:"2024-12-29",children:"29 Dec, 2024"})]})]}),$.jsx("div",{className:"search-bar",children:$.jsx("input",{type:"text",placeholder:"Search",value:e,onChange:v=>t(v.target.value)})})]}),$.jsxs("table",{className:"task-table",children:[$.jsx("thead",{children:$.jsxs("tr",{children:[$.jsx("th",{children:"Todo"}),$.jsx("th",{children:"In-Progress"}),$.jsx("th",{children:"Completed"})]})}),$.jsx("tbody",{children:$.jsxs("tr",{children:[$.jsx("td",{className:"todo-column",children:y.filter(v=>v.status==="Todo").map(v=>$.jsxs("div",{className:"task-card",children:[$.jsx("p",{children:v.title}),v.tags&&v.tags.length>0&&$.jsx("div",{className:"tags",children:v.tags.map((T,I)=>$.jsx("span",{className:"tag",children:T},I))}),$.jsxs("div",{className:"bottom-section",children:[$.jsx("span",{className:"work-type",children:v.category}),$.jsx("span",{className:"due-date",children:v.dueDate?new Date(v.dueDate).toLocaleDateString():"No Due Date"})]})]},v.id))}),$.jsx("td",{className:"in-progress-column",children:y.filter(v=>v.status==="In-Progress").map(v=>$.jsxs("div",{className:"task-card",children:[$.jsx("p",{children:v.title}),v.tags&&v.tags.length>0&&$.jsx("div",{className:"tags",children:v.tags.map((T,I)=>$.jsx("span",{className:"tag",children:T},I))}),$.jsxs("div",{className:"bottom-section",children:[$.jsx("span",{className:"work-type",children:v.category}),$.jsx("span",{className:"due-date",children:v.dueDate?new Date(v.dueDate).toLocaleDateString():"No Due Date"})]})]},v.id))}),$.jsx("td",{className:"completed-column",children:y.filter(v=>v.status==="Completed").map(v=>$.jsxs("div",{className:"task-card",children:[$.jsx("p",{children:v.title}),v.tags&&v.tags.length>0&&$.jsx("div",{className:"tags",children:v.tags.map((T,I)=>$.jsx("span",{className:"tag",children:T},I))}),$.jsxs("div",{className:"bottom-section",children:[$.jsx("span",{className:"work-type",children:v.category}),$.jsx("span",{className:"due-date",children:v.dueDate?new Date(v.dueDate).toLocaleDateString():"No Due Date"})]})]},v.id))})]})})]})]})},xP=()=>{const[r,e]=K.useState([]),[t,i]=K.useState("table"),[o]=K.useState(""),l=tf();K.useEffect(()=>{const v=ik(Oy(Rd,"tasks"),T=>{const I=T.docs.map(D=>({id:D.id,...D.data()}));e(I)});return()=>v()},[]);const h=async(v,T)=>{let I="";if(T){const V=mP(TP,`tasks/${T.name}`);await fP(V,T),I=await pP(V)}const D={...v,fileUrl:I};await rk(Oy(Rd,"tasks"),D)},f=async v=>{await nk(t0(Rd,"tasks",v))},m=async()=>{try{await D1(D0),l("/")}catch(v){console.error("Error logging out:",v)}},y=r.filter(v=>v.title.toLowerCase().includes(o.toLowerCase()));return $.jsxs("div",{className:"task-manager",children:[$.jsxs("div",{children:[$.jsx("img",{src:kP,alt:"Task Icon",style:{width:"40px",verticalAlign:"middle"}}),$.jsx("h1",{style:{display:"inline-block",marginLeft:"10px"},children:"TaskBuddy"})]}),$.jsxs("div",{className:"view-toggle",children:[$.jsxs("button",{onClick:()=>i("table"),disabled:t==="table",children:[$.jsx("img",{src:"/src/assets/Desktop/list_icon.png",alt:"List Icon",style:{width:"20px",verticalAlign:"middle",marginRight:"8px"}}),"List"]}),$.jsxs("button",{onClick:()=>i("board"),disabled:t==="board",children:[$.jsx("img",{src:"/src/assets/Desktop/Group 1171276211.png",alt:"Board Icon",style:{width:"20px",verticalAlign:"middle",marginRight:"8px"}}),"Board"]}),$.jsx("button",{className:"logout-button",onClick:m,children:"Logout"})]}),t==="table"?$.jsx(CP,{tasks:y,deleteTask:f,addTask:h}):$.jsx(PP,{tasks:y,deleteTask:f,addTask:h})]})},NP=()=>$.jsx(sT,{children:$.jsxs(VE,{children:[$.jsx(kd,{path:"/",element:$.jsx(RP,{})}),$.jsx(kd,{path:"/task-manager",element:$.jsx(xP,{})})]})}),DP=Ww.createRoot(document.getElementById("root"));DP.render($.jsx(Uw.StrictMode,{children:$.jsx(NP,{})}));
