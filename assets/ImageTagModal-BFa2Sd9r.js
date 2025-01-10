import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{I as x,g as u}from"./HoveredEmptyWorkspace-Da6OjUf5.js";import{r as n}from"./index-DRjF_FHU.js";import{_ as r}from"./index-D1AAVYfs.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import{M as I}from"./ModalConfirm-BDuYJlbG.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-Ddn5mi22.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import{a as j}from"./mixpanel-BYnboQeE.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./index-BXCeiWJk.js";import"./CssCategoryButton-Ctai2tKd.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-CJTUWoJB.js";import{I as h}from"./ImageTagModalImg-BJAMLe19.js";import{I as c}from"./ImageTagModalButton-DJiJ58eG.js";import"./ImageTagModalListItem-D30WR0c8.js";const M=()=>{const{isModalOpen:p,nowImage:t,setIsModalOpen:l,updateImageMap:d,nowId:f}=j(),[a,s]=n.useState(t);n.useEffect(()=>{s(t)},[t]);const g=()=>{const o=u();if(!o)return r.error("워크스페이스를 찾을 수 없습니다.");const i=o.getBlockById(f);if(!i)return r.error("블록을 찾을 수 없습니다.");const m=i.getField("SRC");if(!m)return r.error("이미지 필드를 찾을 수 없습니다.");m.setValue(a),d(a),r.success("이미지가 성공적으로 저장되었습니다."),l(!1)};return e.jsx(I,{isOpen:p,children:e.jsxs("div",{className:"flex h-[42.5rem] w-[63rem] flex-col",children:[e.jsx("span",{className:"text-semibold-lg mb-6 w-full text-black",children:"이미지 선택하기"}),e.jsxs("div",{className:"flex h-full flex-row gap-6",children:[e.jsx(x,{tagSrc:a,onSetTagSrc:s}),e.jsxs("div",{className:"flex h-full w-full flex-col gap-3",children:[e.jsx("span",{className:"text-semibold-md w-full text-gray-400",children:"이미지 미리보기"}),e.jsx(h,{imageSrc:a}),e.jsx("input",{className:"w-full rounded-lg border-[1px] px-5 py-3 align-middle text-gray-200 focus:outline-none",value:a,onChange:o=>s(o.target.value),placeholder:"이미지 URL을 일력해주세요."})]})]}),e.jsxs("div",{className:"mt-9 flex w-full flex-row justify-end gap-3",children:[e.jsx(c,{content:"닫기",isBlue:!1,onClick:()=>{l(!1)},"aria-label":"이미지 태그 모달 닫기 버튼"}),e.jsx(c,{content:"이미지 선택하기",isBlue:!0,onClick:()=>g(),"aria-label":"이미지 선택하기 버튼"})]})]})})};M.__docgenInfo={description:`@component
@description
이미지 업로드 및 태그 선택을 위한 모달 컴포넌트입니다.
사용자는 이미지를 업로드하거나, 태그를 선택하고, 업로드된 이미지를 저장할 수 있습니다.`,methods:[],displayName:"ImageTagModal"};export{M as I};
