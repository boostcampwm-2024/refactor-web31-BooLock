import{j as u}from"./jsx-runtime-DR9Q75dM.js";import{s as l}from"./CodeViewer.module-CZ8GGqUa.js";import{r as d}from"./index-DRjF_FHU.js";const p=1e3,g=(s,e)=>{const[i,c]=d.useState([]),[n,r]=d.useState([]);return d.useEffect(()=>{const t=[];e.forEach((m,a)=>{(!i[a]||i[a]!==m)&&t.push(a)}),r(t);const o=setTimeout(()=>r([]),p);return c(e),()=>clearTimeout(o)},[s]),n},h=(s,e,i,c,n,r,t)=>{const o=c.includes(e)?s.newLine:"",m=n&&r&&e+1>=n&&e+1<n+r?s.blockHighlight:"",a=t&&i.includes(t)?s.highlightBg:"";return`${o} ${m} ${a}`.trim()},f=({code:s,codeLineList:e,selectedBlockStartLine:i,selectedBlockLength:c,selectedBlockType:n})=>{const r=g(s,e);return u.jsx("pre",{className:l.codeContent,children:u.jsx("code",{children:e.map((t,o)=>u.jsx("div",{className:h(l,o,t,r,i,c,n),dangerouslySetInnerHTML:{__html:t}},o))})})};f.__docgenInfo={description:`@description
변환된 HTML, CSS 코드를 보여주는 컴포넌트`,methods:[],displayName:"CodeContent",props:{code:{required:!0,tsType:{name:"string"},description:""},codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{f as C};
