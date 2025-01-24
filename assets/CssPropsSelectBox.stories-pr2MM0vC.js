import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as m}from"./CssPropsSelectBox-CgjBbAZM.js";import{c as g}from"./mixpanel-Bz6MsQbQ.js";import"./index-DRjF_FHU.js";import"./Banner-Cmxe5cZT.js";import"./HomeHeader-DUhXFHJS.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./index-D1AAVYfs.js";import"./Loading-CVQUyNmW.js";import"./Spinner-m3P6xpUg.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./HoveredEmptyWorkspace-TC536KMb.js";import"./QueryClientProvider-BdRu95_o.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./CssCategoryButton-Cb0moDQb.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-BmpzU2ne.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";import"./WorkspaceList-Beet7lXJ.js";import"./WorkspaceHeader-BQXwuWp7.js";import"./EmptyWorkspace-0cxhz2T5.js";import"./WorkspaceGrid-Do4f3pvJ.js";import"./WorkspaceModal-DLR41e7N.js";import"./ModalConfirm-BDuYJlbG.js";import"./PreviewBox-CZtNv7_M.js";import"./CodeViewer-dG1omHtV.js";import"./LineNumbers-B_2_ToYE.js";import"./useCoachMarkStore-Bn0-Ay5q.js";import"./react-72mb-naO.js";import"./CoachMark-C2Rdno4S.js";import"./WorkspaceHeaderButtons-KO0f7zLK.js";import"./WorkspacePageHeader-onniicK2.js";import"./CssCategoryBar-CE0_W9d6.js";import"./cssCategoryList-CHFX1k4S.js";import"./CssOptionItemList-DZLEf3dC.js";import"./CssPropsSelectBoxHeader-Dn0YKOdJ.js";import"./ImageTagModal-CiuuEzqZ.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const ie={title:"widgets/workspace/css/CssPropsSelectBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:c,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||c(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(m,{})]})}};var s,a,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // propsname: value,
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,n,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      addClassBlock,
      classBlockList
    } = useClassBlockStore();
    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === '' || classBlockList.includes(e.target.value)) return;
      addClassBlock(e.target.value);
    };
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.currentTarget.blur();
        e.preventDefault();
      }
    };
    return <div className="flex flex-col gap-3">
        <input className="w-full border p-2 focus:outline-none" type="text" onBlur={handleOnBlur} onKeyDown={handleOnKeyDown} placeholder="추가하고자 하는 CSS 클래스를 입력하세요" />
        <CssPropsSelectBox />
      </div>;
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const me=["Default","CanSelectClass"];export{r as CanSelectClass,t as Default,me as __namedExportsOrder,ie as default};
