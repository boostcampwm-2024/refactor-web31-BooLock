import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as l,S as X}from"./HoveredEmptyWorkspace-O2C6rE_u.js";import{r as s}from"./index-DRjF_FHU.js";import"./mixpanel-CKOJufOA.js";import"./react-72mb-naO.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-BbusgMO-.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-JlOAczE1.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./CssCategoryButton-FDLhBvQQ.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-CgLD1ft3.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";import"./useCoachMarkStore-Bn0-Ay5q.js";const K={title:"entities/workspace/CssTooltip",component:l,parameters:{layout:"centered",docs:{description:{component:"CSS 속성에 관한 정보를 알려주는 컴포넌트"}}},tags:["autodocs"]},n={args:{description:"css 툴팁입니다.",leftX:0,topY:0},render:r=>{const[i,a]=s.useState(0),[c,p]=s.useState(0),u=t=>{a(t.currentTarget.getBoundingClientRect().x+8),p(t.currentTarget.getBoundingClientRect().y+8)},d=()=>{};return e.jsxs("div",{children:[e.jsx(X,{onMouseEnter:u,onMouseLeave:d}),e.jsx(l,{description:r.description,leftX:i,topY:c})]})}},o={args:{description:"css 툴팁입니다.",leftX:0,topY:0},render:r=>{const[i,a]=s.useState(0),[c,p]=s.useState(0),u=t=>{a(t.currentTarget.getBoundingClientRect().x+8),p(-t.currentTarget.getBoundingClientRect().y+40)},d=()=>{};return e.jsxs("div",{children:[e.jsx(X,{onMouseEnter:u,onMouseLeave:d}),e.jsx(l,{description:r.description,leftX:i,topY:c})]})}};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    description: 'css 툴팁입니다.',
    leftX: 0,
    topY: 0
  },
  render: args => {
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);
    const handleMouseEnter = (e: React.MouseEvent) => {
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(e.currentTarget.getBoundingClientRect().y + 8);
    };
    const handleMouseLeave = () => {};
    return <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} />
      </div>;
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var M,v,T;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    description: 'css 툴팁입니다.',
    leftX: 0,
    topY: 0
  },
  render: args => {
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);
    const handleMouseEnter = (e: React.MouseEvent) => {
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(-e.currentTarget.getBoundingClientRect().y + 40);
    };
    const handleMouseLeave = () => {};
    return <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} />
      </div>;
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const N=["Default","ScreenOverflow"];export{n as Default,o as ScreenOverflow,N as __namedExportsOrder,K as default};
