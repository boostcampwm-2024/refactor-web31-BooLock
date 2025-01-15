import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as m}from"./CssPropsSelectBox-CK_YRkB6.js";import{c as g}from"./mixpanel-BYnboQeE.js";import"./index-DRjF_FHU.js";import"./Banner-Cmxe5cZT.js";import"./HomeHeader-BghZO3Lh.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./index-D1AAVYfs.js";import"./Loading-CVQUyNmW.js";import"./Spinner-Ddn5mi22.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./HoveredEmptyWorkspace-Da6OjUf5.js";import"./QueryClientProvider-BdRu95_o.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-Ctai2tKd.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-CJTUWoJB.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";import"./WorkspaceList-B7Fl7Efu.js";import"./WorkspaceHeader-B_Z3MAq4.js";import"./EmptyWorkspace-DXhS957E.js";import"./WorkspaceGrid-Do4f3pvJ.js";import"./WorkspaceModal-CIamL5G0.js";import"./ModalConfirm-BDuYJlbG.js";import"./PreviewBox-DrDEAz2o.js";import"./CodeViewer-D_DSBhbX.js";import"./CodeContent-DoxBelqC.js";import"./CodeViewer.module-CZ8GGqUa.js";import"./LineNumbers-eZdDlBqZ.js";import"./useCoachMarkStore-Bn0-Ay5q.js";import"./react-72mb-naO.js";import"./CoachMark-DQynoDvf.js";import"./WorkspaceHeaderButtons-Dv5akjwQ.js";import"./WorkspacePageHeader-CPNxzQ8B.js";import"./CssCategoryBar-Bwf7IhJP.js";import"./cssCategoryList-CHFX1k4S.js";import"./CssOptionItemList-D585IBab.js";import"./CssPropsSelectBoxHeader-udA_FMx8.js";import"./ImageTagModal-BFa2Sd9r.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const ut={title:"widgets/workspace/css/CssPropsSelectBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{}},r={render:()=>{const{addClassBlock:c,classBlockList:u}=g(),d=t=>{t.target.value===""||u.includes(t.target.value)||c(t.target.value)},f=t=>{t.key==="Enter"&&(t.currentTarget.blur(),t.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(m,{})]})}};var s,a,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // propsname: value,
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,i,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const dt=["Default","CanSelectClass"];export{r as CanSelectClass,e as Default,dt as __namedExportsOrder,ut as default};
