(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(4297)}])},5649:function(e,t,i){"use strict";var a=i(5893),r=i(8380),n=i(4579),s=i(4920);let o=(0,n.m)(r.E.div,{shouldForwardProp:e=>(0,s.x)(e)||"transition"===e}),l=e=>{let{children:t,delay:i=0}=e;return(0,a.jsx)(o,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:i},mb:6,children:t})};t.Z=l},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(6495).Z,r=i(2648).Z,n=i(1598).Z,s=i(7273).Z,o=n(i(7294)),l=r(i(2636)),c=i(7757),d=i(3735),u=i(3341);i(4210);var g=r(i(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,r,n,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let b=o.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:n,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:g,fill:p,placeholder:h,loading:f,srcString:b,config:A,unoptimized:w,loader:x,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:k,onLoad:E,onError:S}=e,_=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=g?"lazy":f,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},_,{loading:f,width:n,height:r,decoding:"async","data-nimg":p?"fill":"1",className:c,style:a({},d,u)},i,{ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,b,h,v,y,j,w))},[b,h,v,y,j,S,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,h,v,y,j,w)},onError:e=>{k(!0),"blur"===h&&j(!0),S&&S(e)}})))}),A=o.forwardRef((e,t)=>{let i,r;var n,{src:m,sizes:A,unoptimized:w=!1,priority:x=!1,loading:v,className:y,quality:j,width:k,height:E,fill:S,style:_,onLoad:C,onLoadingComplete:R,placeholder:N="empty",blurDataURL:z,layout:I,objectFit:O,objectPosition:T,lazyBoundary:P,lazyRoot:D}=e,L=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let G=o.useContext(u.ImageConfigContext),M=o.useMemo(()=>{let e=p||G||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:i})},[G]),W=L,U=W.loader||g.default;delete W.loader;let q="__next_img_default"in U;if(q){if("custom"===M.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=U;U=t=>{let{config:i}=t,a=s(t,["config"]);return e(a)}}if(I){"fill"===I&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(_=a({},_,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!A&&(A=t)}let B="",J=f(k),F=f(E);if("object"==typeof(n=m)&&(h(n)||void 0!==n.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,z=z||e.blurDataURL,B=e.src,!S){if(J||F){if(J&&!F){let t=J/e.width;F=Math.round(e.height*t)}else if(!J&&F){let t=F/e.height;J=Math.round(e.width*t)}}else J=e.width,F=e.height}}let V=!x&&("lazy"===v||void 0===v);((m="string"==typeof m?m:B).startsWith("data:")||m.startsWith("blob:"))&&(w=!0,V=!1),M.unoptimized&&(w=!0),q&&m.endsWith(".svg")&&!M.dangerouslyAllowSVG&&(w=!0);let[Y,K]=o.useState(!1),[Q,X]=o.useState(!1),H=f(j),Z=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:T}:{},Q?{}:{color:"transparent"},_),$="blur"===N&&z&&!Y?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:F,blurWidth:i,blurHeight:r,blurDataURL:z,objectFit:Z.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:a,width:r,quality:n,sizes:s,loader:o}=e;if(a)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:a,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(i);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let n=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:n,kind:"x"}}(t,r,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,a)=>"".concat(o({config:t,src:i,quality:n,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:o({config:t,src:i,quality:n,width:l[d]})}}({config:M,src:m,unoptimized:w,width:J,quality:H,sizes:A,loader:U}),et=m,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:W.crossOrigin},ea=o.useRef(C);o.useEffect(()=>{ea.current=C},[C]);let er=o.useRef(R);o.useEffect(()=>{er.current=R},[R]);let en=a({isLazy:V,imgAttributes:ee,heightInt:F,widthInt:J,qualityInt:H,className:y,imgStyle:Z,blurStyle:$,loading:v,config:M,fill:S,unoptimized:w,placeholder:N,loader:U,srcString:et,onLoadRef:ea,onLoadingCompleteRef:er,setBlurComplete:K,setShowAltText:X},W);return o.default.createElement(o.default.Fragment,null,o.default.createElement(b,Object.assign({},en,{ref:t})),x?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=A,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:a,blurHeight:r,blurDataURL:n,objectFit:s}=e,o=a||t,l=r||i,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:a,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(a,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},4297:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return E}});var a=i(5893),r=i(6979),n=i(4418),s=i(5059),o=i(3179),l=i(4579),c=i(5432),d=i(3951),u=i(7294);function g(e){return"number"==typeof e?`${e}px`:e}var p=(0,s.G)(function(e,t){let{spacing:i="0.5rem",spacingX:r,spacingY:n,children:s,justify:p,direction:f,align:m,className:b,shouldWrapChildren:A,...w}=e,x=(0,u.useMemo)(()=>{let{spacingX:e=i,spacingY:t=i}={spacingX:r,spacingY:n};return{"--chakra-wrap-x-spacing":t=>(0,d.XQ)(e,e=>g((0,o.fr)("space",e)(t))),"--chakra-wrap-y-spacing":e=>(0,d.XQ)(t,t=>g((0,o.fr)("space",t)(e))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:p,alignItems:m,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[i,r,n,p,m,f]),v=(0,u.useMemo)(()=>A?u.Children.map(s,(e,t)=>(0,a.jsx)(h,{children:e},t)):s,[s,A]);return(0,a.jsx)(l.m.div,{ref:t,className:(0,c.cx)("chakra-wrap",b),overflow:"hidden",...w,children:(0,a.jsx)(l.m.ul,{className:"chakra-wrap__list",__css:x,children:v})})});p.displayName="Wrap";var h=(0,s.G)(function(e,t){let{className:i,...r}=e;return(0,a.jsx)(l.m.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,c.cx)("chakra-wrap__listitem",i),...r})});h.displayName="WrapItem";var f=i(2498),m=i(3100),b=i(8911),A=i(1664),w=i.n(A);i(5675),i(5649);var x={src:"/_next/static/media/voxel.9e58fb1e.png",height:1186,width:2016,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgklEQVR42mNISUlJS0uLjY5JTI1LWOOfVJCQmpiakprCkAoEaekp8YlRIS5qJSLJKYlAfkpKCkNCQkJoSMi0vs726tKpzR1Te7ojY2LS09IYYmNjfXx8+xqrT+zYOm/6tPSMjJTk5NTUVIaQkBAPL6+SktLO9nYPX9/UlBSgaEpKCgDTxDFCxWlEsQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},v={src:"/_next/static/media/earphone.7584a4d0.png",height:1332,width:2414,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAU0lEQVR42mNwtvG0srTR1NBVVddDRgwWFlYeTrb6OkZKKjrKqgjEYGliZ25ipqalr6Glp6auq6yqq6IGQgy21o7+Pi6mZkbaBgaaWnpKqjpgCR0AbwQRYdzGfbcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},y={src:"/_next/static/media/website.859eec2f.png",height:1332,width:2016,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAW0lEQVR42kXLSwqAMAxFUfe/TBFpRLE2XzFtzEAQ3uge3tR7N7vNjFkIGyyzqo8xpohIIyIWwda2smb5QERKgX0/cme93D3jBwDAzIioqv/Dn+eqlRDTErJGxAszp3Oy7rO+pwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5};let j=()=>(0,a.jsxs)(r.W,{children:[(0,a.jsx)(n.X,{as:"h1",variant:"section-title",align:"center",fontSize:50,children:"Projects"}),(0,a.jsxs)(p,{spacing:6,justify:"center",pt:5,children:[(0,a.jsxs)(k,{id:"website",title:"Personal Website",thumbnail:y,link:"https://github.com/anandk1999/anandk1999.github.io",children:[(0,a.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}),"This is my personal website that I coded using NextJS and React"]}),(0,a.jsxs)(k,{id:"earphone",title:"Earphone Detection",thumbnail:v,link:"https://github.com/anandk1999/Earphone-Detection",children:[(0,a.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}),"Created a Python and AppleScript program that runs whenever I connect my wired earphones pauses the song i'm currently listening to when I take them off just like airpods."]}),(0,a.jsxs)(k,{id:"voxel",title:"Voxel ThreeJS",thumbnail:x,link:"https://github.com/anandk1999/ThreeJSVoxelProject",children:[(0,a.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}),"Experimented with ThreeJS library and created my own voxel art and displayed it with orbit settings."]})]})]}),k=e=>{let{children:t,id:i,title:r,thumbnail:s,link:o}=e,l=(0,f.ff)("black","white");return(0,a.jsxs)(m.xu,{textAlign:"center",border:"3px solid ".concat(l),padding:2,className:"border-2 border-stone-900 dark:border-white rounded-md overflow-hidden",minHeight:"300px",maxWidth:"500px",children:[(0,a.jsx)(w(),{href:o,pl:2,passHref:!0,children:(0,a.jsx)(n.X,{mt:2,fontSize:25,as:"h3",variant:"section-title",children:r})}),(0,a.jsx)(b.x,{fontSize:14,children:t})]})};var E=j},5675:function(e,t,i){i(3740)},3951:function(e,t,i){"use strict";i.d(t,{XQ:function(){return r}});var a=i(5432);function r(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,a.Kn)(e)?Object.keys(e).reduce((i,a)=>(i[a]=t(e[a]),i),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},4418:function(e,t,i){"use strict";i.d(t,{X:function(){return c}});var a=i(5059),r=i(4662),n=i(3179),s=i(4579),o=i(5432),l=i(5893),c=(0,a.G)(function(e,t){let i=(0,r.mq)("Heading",e),{className:a,...c}=(0,n.Lr)(e);return(0,l.jsx)(s.m.h2,{ref:t,className:(0,o.cx)("chakra-heading",e.className),...c,__css:i})});c.displayName="Heading"},8911:function(e,t,i){"use strict";i.d(t,{x:function(){return d}});var a=i(5059),r=i(4662),n=i(3179),s=i(4579),o=i(5432),l=i(888),c=i(5893),d=(0,a.G)(function(e,t){let i=(0,r.mq)("Text",e),{className:a,align:d,decoration:u,casing:g,...p}=(0,n.Lr)(e),h=(0,l.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(s.m.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...h,...p,__css:i})});d.displayName="Text"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9182)}),_N_E=e.O()}]);