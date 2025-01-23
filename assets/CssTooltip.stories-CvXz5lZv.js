import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as g,S as X}from"./HoveredEmptyWorkspace-Bb33Q1wH.js";import{r as t}from"./index-DRjF_FHU.js";import"./mixpanel-Bz6MsQbQ.js";import"./react-72mb-naO.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-m3P6xpUg.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./CssCategoryButton-Cb0moDQb.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-BmpzU2ne.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";const N={title:"entities/workspace/CssTooltip",component:g,parameters:{layout:"centered",docs:{description:{component:"CSS 속성에 관한 정보를 알려주는 컴포넌트"}}},tags:["autodocs"]},r={args:{description:"css 툴팁입니다.",isOpen:!1,leftX:0,topY:0},render:n=>{const[p,s]=t.useState(n.isOpen),[a,c]=t.useState(0),[u,d]=t.useState(0),l=o=>{s(!0),c(o.currentTarget.getBoundingClientRect().x+8),d(o.currentTarget.getBoundingClientRect().y+8)},m=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx(X,{onMouseEnter:l,onMouseLeave:m}),e.jsx(g,{description:n.description,leftX:a,topY:u,isOpen:p})]})}},i={args:{description:"css 툴팁입니다.",isOpen:!1,leftX:0,topY:0},render:n=>{const[p,s]=t.useState(n.isOpen),[a,c]=t.useState(0),[u,d]=t.useState(0),l=o=>{s(!0),c(o.currentTarget.getBoundingClientRect().x+8),d(-o.currentTarget.getBoundingClientRect().y+40)},m=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx(X,{onMouseEnter:l,onMouseLeave:m}),e.jsx(g,{description:n.description,leftX:a,topY:u,isOpen:p})]})}};var f,O,M;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    description: 'css 툴팁입니다.',
    isOpen: false,
    leftX: 0,
    topY: 0
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);
    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsOpen(true);
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(e.currentTarget.getBoundingClientRect().y + 8);
    };
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    return <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} isOpen={isOpen} />
      </div>;
  }
}`,...(M=(O=r.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var v,S,T;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    description: 'css 툴팁입니다.',
    isOpen: false,
    leftX: 0,
    topY: 0
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);
    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsOpen(true);
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(-e.currentTarget.getBoundingClientRect().y + 40);
    };
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    return <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} isOpen={isOpen} />
      </div>;
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const P=["Default","ScreenOverflow"];export{r as Default,i as ScreenOverflow,P as __namedExportsOrder,N as default};
