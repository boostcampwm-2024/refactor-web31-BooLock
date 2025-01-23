import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{u as a}from"./mixpanel-Bz6MsQbQ.js";const s=({cssCategory:e})=>{const l=a(t=>t.selectedCssCategory),r=a(t=>t.setSelectedCssCategory);return n.jsx("button",{onClick:()=>r(e),className:`text-bold-sm flex cursor-pointer rounded px-3 py-2.5 text-gray-200 ${l===e&&"text-gray-black bg-yellow-500"}`,"aria-label":" CSS 카테고리 선택 버튼",children:e},e)};s.__docgenInfo={description:`@description
CSS 카테고리를 선택할 수 있는 버튼 컴포넌트`,methods:[],displayName:"CssCategoryButton",props:{cssCategory:{required:!0,tsType:{name:"union",raw:`| '레이아웃'
| '박스모델'
| '타이포그래피'
| '배경'
| '테두리'
| '간격'
| 'flex 속성'
| 'grid 속성'`,elements:[{name:"literal",value:"'레이아웃'"},{name:"literal",value:"'박스모델'"},{name:"literal",value:"'타이포그래피'"},{name:"literal",value:"'배경'"},{name:"literal",value:"'테두리'"},{name:"literal",value:"'간격'"},{name:"literal",value:"'flex 속성'"},{name:"literal",value:"'grid 속성'"}]},description:""}}};export{s as C};
