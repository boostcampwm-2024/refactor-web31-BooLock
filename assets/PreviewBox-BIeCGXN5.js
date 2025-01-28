import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{r as n}from"./index-DRjF_FHU.js";import{g as S,h as T,t as j}from"./mixpanel-Bz6MsQbQ.js";import{C as f}from"./CodeViewer-dG1omHtV.js";import{_ as g}from"./index-D1AAVYfs.js";import{u as q}from"./useCoachMarkStore-Bn0-Ay5q.js";const N=i=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},n.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},n.createElement("rect",{width:24,height:24,fill:"currentColor"})),n.createElement("g",{mask:"url(#mask0_503_1523)"},n.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),$=`
html, body, div, span, header, section, nav, main, article, footer, p, strong,
h1, h2, h3, h4, h5, h6, small, br, em, i, blockquote, hr, input, button,
form, option, textarea, select, fieldset, legend, label, td, tr, th,
caption, table, ul, ol, li, a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, header, section, nav, main, footer {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`,E=({htmlCode:i,cssCode:a,selectedBlockStartLine:u,selectedBlockLength:b,selectedBlockType:d})=>{const[e,w]=n.useState("preview"),{isResetCssChecked:h}=S(),{currentStep:x}=q(),{setIframeRef:y}=T(),t=n.useRef(null),m=n.useRef(0),C=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `;function p(){const r=`<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${h?`${$}
${a}`:a}</style>`,c=i.indexOf("</head>");return`${i.slice(0,c)}${C}${r}${i.slice(c)}`}n.useEffect(()=>{t.current&&y(t)},[t]),n.useEffect(()=>{var o;if((o=t.current)!=null&&o.contentWindow&&(m.current=t.current.contentWindow.scrollY),t.current){const r=t.current.contentDocument;r&&(r.open(),r.write(p()),r.close(),t.current.onload=async()=>{t.current&&t.current.contentWindow&&t.current.contentWindow.scrollTo(0,m.current)})}},[h,i,a]);const v=async(o,r)=>{try{await navigator.clipboard.writeText(o),g.success(`${r} 코드가 복사되었습니다.`)}catch{g.error(`${r} 코드 복사에 실패했습니다.`)}},k=()=>{const o=e==="html"?i:a,r=e.toUpperCase();v(o,r)},l=o=>{w(o),j("preview_tab_clicked",{item:o})};return s.jsxs("section",{className:`flex h-[calc(100vh-475px)] flex-1 flex-col border-b border-gray-100 ${x===3?"z-[200]":""}`,children:[s.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[s.jsx("button",{onClick:()=>l("preview"),className:`${e==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,"aria-label":"미리보기 탭 버튼",children:"미리보기"}),s.jsx("button",{onClick:()=>l("html"),className:`${e==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,"aria-label":"HTML 탭 버튼",children:"HTML"}),s.jsx("button",{onClick:()=>l("css"),className:`${e==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,"aria-label":"CSS 탭 버튼",children:"CSS"})]}),s.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[(e==="html"||e==="css")&&s.jsx("div",{className:"absolute right-4 top-5 z-50",children:s.jsx(N,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:k,"aria-label":"코드 복사 버튼"})}),e==="preview"&&s.jsx("iframe",{ref:t,srcDoc:p(),className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation"}),e==="html"&&s.jsx(f,{code:e==="html"?i:a,type:e,theme:"light",selectedBlockStartLine:u,selectedBlockLength:b,selectedBlockType:d}),e==="css"&&s.jsx(f,{code:a,type:"css",theme:"light",selectedBlockType:d})]})]})};E.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{E as P};
