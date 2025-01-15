import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{u as x}from"./useCoachMarkStore-Bn0-Ay5q.js";import{C as c}from"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-Ddn5mi22.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import{g as d}from"./HoveredEmptyWorkspace-Da6OjUf5.js";import"./mixpanel-BYnboQeE.js";import{r as p}from"./index-DRjF_FHU.js";const i=[{title:"HTML 태그 블록 조립하기",content:e.jsxs(e.Fragment,{children:["오른쪽 ",e.jsx("span",{className:"coachMarkHighlightText",children:"HTML 태그 탭"}),"에서 블록을 가져와 ",e.jsx("br",{}),"작업 공간에서 조립할 수 있어요"]})},{title:"CSS 클래스 블록 생성 후 조립하기",content:e.jsxs(e.Fragment,{children:["원하는 ",e.jsx("span",{className:"coachMarkHighlightText",children:"CSS 클래스 블록"}),"을 생성할 수 있어요.",e.jsx("br",{}),"생성된 블록은 HTML 블록에 조립할 수 있어요"]})},{title:"스타일 속성 추가하기",content:e.jsxs(e.Fragment,{children:["생성한 ",e.jsx("span",{className:"coachMarkHighlightText",children:"CSS 클래스 블록"}),"을 선택해 ",e.jsx("br",{}),"원하는",e.jsx("span",{className:"coachMarkHighlightText",children:"스타일 속성"}),"을 추가할 수 있어요"]})},{title:"미리보기와 코드 확인하기",content:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"coachMarkHighlightText",children:"미리보기"})," 탭에서는 블록 코딩으로 만든 화면을,",e.jsx("br",{}),e.jsx("span",{className:"coachMarkHighlightText",children:"HTML/CSS"})," 탭에서는 코드를 확인할 수 있어요."]})},{title:"저장하고 불러오기",content:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"coachMarkHighlightText",children:"저장"}),"하지 않고 나가면 블록이 사라져요. ",e.jsx("br",{}),"변경 사항은 ",e.jsx("span",{className:"coachMarkHighlightText",children:"되돌리거나 다시 적용"}),"할 수 있어요."]})}],g=()=>{const{currentStep:s,setCurrentStep:r,closeCoachMark:l}=x(),t=i.length,o=()=>{s<t-1&&r(s+1)},h=()=>{s>0&&r(s-1)},m=()=>{localStorage.setItem("isCoachMarkDismissed","true"),l()};return p.useEffect(()=>{const n=d();if(!n)return;const a=n.getToolbox();if(a)switch(s){case 0:a.clickTab("html");break;case 1:a.clickTab("css");break;case 2:a.clickTab("html")}},[s]),e.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70",children:e.jsxs("div",{className:"z-[99999] min-h-40 min-w-96 rounded-2xl bg-white p-6 pb-4 shadow-2xl",children:[e.jsx("h2",{className:"text-bold-sm mb-4 text-gray-200",children:i[s].title}),e.jsx("p",{className:"text-medium-md mb-6 whitespace-pre-line",children:i[s].content}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-bold-sm text-green-500",children:[s+1,"/",t]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{onClick:m,disable:s===t,className:"text-bold-sm h-8 w-16",variant:"outlined","aria-label":"가이드 그만 보기 버튼",children:"그만 보기"}),e.jsx(c,{className:"text-bold-sm h-8 w-16",onClick:h,disable:s===0,"aria-label":"가이드 이전 보기 버튼",children:"이전"}),e.jsx(c,{onClick:s<4?o:l,disable:s===t,className:"text-bold-sm h-8 w-16","aria-label":"가이드 다음 보기 버튼",children:s<4?"다음":"시작하기"})]})]})]})})};g.__docgenInfo={description:"",methods:[],displayName:"CoachMark"};export{g as C};
