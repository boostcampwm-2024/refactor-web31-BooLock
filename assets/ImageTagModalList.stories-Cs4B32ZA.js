import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{I as o}from"./HoveredEmptyWorkspace-Bb33Q1wH.js";import{r as n}from"./index-DRjF_FHU.js";import{a as S}from"./mixpanel-Bz6MsQbQ.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-m3P6xpUg.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./CssCategoryButton-Cb0moDQb.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-BmpzU2ne.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";import"./react-72mb-naO.js";const B={title:"entities/workspace/ImageTagModalList",component:o,parameters:{layout:"centered",docs:{description:{component:"img 태그 src 속성 적용을 위한 모달창에 사용되는 이미지 리스트 컴포넌트"}}},tags:["autodocs"]},e={args:{tagSrc:"/mock/image2.png",onSetTagSrc:()=>{}},render:g=>{const[i,s]=n.useState(g.tagSrc),p=JSON.stringify(Object.fromEntries(new Map([["example1<png","/mock/image1.png"],["example2<png","/mock/image2.png"],["example3<png","/mock/image3.png"],["example4<png","/mock/image4.png"],["example5<png","/mock/image5.png"]]))),{setInitialImageList:c}=S.getState();return c(p),t.jsx("div",{className:"h-[32rem]",children:t.jsx(o,{tagSrc:i,onSetTagSrc:s})})}};var a,m,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    tagSrc: '/mock/image2.png',
    onSetTagSrc: () => {}
  },
  render: args => {
    const [tagSrc, setTagSrc] = useState(args.tagSrc);
    const mockImageList = new Map([['example1<png', '/mock/image1.png'], ['example2<png', '/mock/image2.png'], ['example3<png', '/mock/image3.png'], ['example4<png', '/mock/image4.png'], ['example5<png', '/mock/image5.png']]);
    const imageList = JSON.stringify(Object.fromEntries(mockImageList));
    const {
      setInitialImageList
    } = useImageModalStore.getState();
    setInitialImageList(imageList);
    return <div className="h-[32rem]">
        <ImageTagModalList tagSrc={tagSrc} onSetTagSrc={setTagSrc} />
      </div>;
  }
}`,...(r=(m=e.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,B as default};
