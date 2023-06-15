"use strict";(self.webpackChunk_nosferatu500_react_sortable_tree=self.webpackChunk_nosferatu500_react_sortable_tree||[]).push([[124],{"./src/stories/advanced/advanced.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DragFromExternalSource:function(){return DragFromExternalSource},DragOutToRemove:function(){return advanced_stories_DragOutToRemove},MinimalImplementationWithoutDndContext:function(){return MinimalImplementationWithoutDndContext},OnlyExpandSearchedNodes:function(){return advanced_stories_OnlyExpandSearchedNodes},PlayingWithGenerateNodeProps:function(){return PlayingWithGenerateNodeProps},PreventSomeNodesFromHavingChildren:function(){return PreventSomeNodesFromHavingChildren},TouchSupport:function(){return advanced_stories_TouchSupport},TreeToTreeDragging:function(){return TreeToTreeDragging},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return advanced_stories}});var react=__webpack_require__("./node_modules/react/index.js"),DndProvider=__webpack_require__("./node_modules/react-dnd/dist/esm/core/DndProvider.js"),esm=__webpack_require__("./node_modules/react-dnd-html5-backend/dist/esm/index.js"),src=__webpack_require__("./src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BarebonesNoContext=()=>{const[treeData,setTreeData]=(0,react.useState)([{title:"Chicken",expanded:!0,children:[{title:"Egg"}]}]);return(0,jsx_runtime.jsx)("div",{style:{height:300,width:700},children:(0,jsx_runtime.jsx)(DndProvider.W,{backend:esm.PD,children:(0,jsx_runtime.jsx)(src.oP,{treeData:treeData,onChange:setTreeData})})})};BarebonesNoContext.displayName="BarebonesNoContext";var barebones_no_context=BarebonesNoContext;try{barebonesnocontext.displayName="barebonesnocontext",barebonesnocontext.__docgenInfo={description:"",displayName:"barebonesnocontext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/barebones-no-context.tsx#barebonesnocontext"]={docgenInfo:barebonesnocontext.__docgenInfo,name:"barebonesnocontext",path:"src/stories/advanced/barebones-no-context.tsx#barebonesnocontext"})}catch(__react_docgen_typescript_loader_error){}const data=[{title:"Managers",expanded:!0,children:[{title:"Rob",children:[],isPerson:!0},{title:"Joe",children:[],isPerson:!0}]},{title:"Clerks",expanded:!0,children:[{title:"Bertha",children:[],isPerson:!0},{title:"Billy",children:[],isPerson:!0}]}],ChildlessNodes=()=>{const[treeData,setTreeData]=(0,react.useState)(data);return(0,jsx_runtime.jsx)("div",{style:{height:300,width:700},children:(0,jsx_runtime.jsx)(src.ZP,{canNodeHaveChildren:node=>!node.isPerson,treeData:treeData,onChange:setTreeData})})};ChildlessNodes.displayName="ChildlessNodes";var childless_nodes=ChildlessNodes;try{childlessnodes.displayName="childlessnodes",childlessnodes.__docgenInfo={description:"",displayName:"childlessnodes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/childless-nodes.tsx#childlessnodes"]={docgenInfo:childlessnodes.__docgenInfo,name:"childlessnodes",path:"src/stories/advanced/childless-nodes.tsx#childlessnodes"})}catch(__react_docgen_typescript_loader_error){}var DropTarget=__webpack_require__("./node_modules/react-dnd/dist/esm/decorators/DropTarget.js");class trashAreaBaseComponent extends react.Component{render(){const{connectDropTarget:connectDropTarget,children:children,isOver:isOver}=this.props;return connectDropTarget((0,jsx_runtime.jsx)("div",{style:{height:"100vh",padding:50,background:isOver?"pink":"transparent"},children:children}))}}trashAreaBaseComponent.displayName="trashAreaBaseComponent";const TrashAreaComponent=(0,DropTarget.G)("yourNodeType",{drop:(props,monitor)=>({...monitor.getItem(),treeId:"trash"})},((connect,monitor)=>({connectDropTarget:connect.dropTarget(),isOver:monitor.isOver({shallow:!0})})))(trashAreaBaseComponent),DragOutToRemove=()=>{const[treeData,setTreeData]=(0,react.useState)([{title:"1"},{title:"2"},{title:"3"},{title:"4",expanded:!0,children:[{title:"5"}]}]);return(0,jsx_runtime.jsx)(DndProvider.W,{backend:esm.PD,children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(TrashAreaComponent,{children:(0,jsx_runtime.jsx)("div",{style:{height:300,width:700},children:(0,jsx_runtime.jsx)(src.oP,{treeData:treeData,onChange:setTreeData,dndType:"yourNodeType"})})})})})};DragOutToRemove.displayName="DragOutToRemove";var drag_out_to_remove=DragOutToRemove;try{dragouttoremove.displayName="dragouttoremove",dragouttoremove.__docgenInfo={description:"",displayName:"dragouttoremove",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/drag-out-to-remove.tsx#dragouttoremove"]={docgenInfo:dragouttoremove.__docgenInfo,name:"dragouttoremove",path:"src/stories/advanced/drag-out-to-remove.tsx#dragouttoremove"})}catch(__react_docgen_typescript_loader_error){}var DragSource=__webpack_require__("./node_modules/react-dnd/dist/esm/decorators/DragSource.js");class externalNodeBaseComponent extends react.Component{render(){const{connectDragSource:connectDragSource,node:node}=this.props;return connectDragSource((0,jsx_runtime.jsx)("div",{style:{display:"inline-block",padding:"3px 5px",background:"blue",color:"white"},children:node.title}),{dropEffect:"copy"})}}externalNodeBaseComponent.displayName="externalNodeBaseComponent";const YourExternalNodeComponent=(0,DragSource.E)("yourNodeType",{beginDrag:componentProps=>({node:{...componentProps.node}})},(connect=>({connectDragSource:connect.dragSource()})))(externalNodeBaseComponent),ExternalNode=()=>{const[treeData,setTreeData]=(0,react.useState)([{title:"Mama Rabbit"},{title:"Papa Rabbit"}]);return(0,jsx_runtime.jsx)(DndProvider.W,{backend:esm.PD,children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:{height:300,width:700},children:(0,jsx_runtime.jsx)(src.oP,{treeData:treeData,onChange:setTreeData,dndType:"yourNodeType"})}),(0,jsx_runtime.jsx)(YourExternalNodeComponent,{node:{title:"Baby Rabbit"}}),"← drag this"]})})};ExternalNode.displayName="ExternalNode";var external_node=ExternalNode;try{externalnode.displayName="externalnode",externalnode.__docgenInfo={description:"",displayName:"externalnode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/external-node.tsx#externalnode"]={docgenInfo:externalnode.__docgenInfo,name:"externalnode",path:"src/stories/advanced/external-node.tsx#externalnode"})}catch(__react_docgen_typescript_loader_error){}const generate_node_props_data=[{id:1,position:"Goalkeeper"},{id:2,position:"Wing-back"},{id:3,position:"Striker",children:[{id:4,position:"Full-back"}]}],TEAM_COLORS=["Red","Black","Green","Blue"],GenerateNodeProps=()=>{const[treeData,setTreeData]=(0,react.useState)(generate_node_props_data),getNodeKey=({node:{id:id}})=>id;return(0,jsx_runtime.jsx)("div",{style:{height:300,width:700},children:(0,jsx_runtime.jsx)(src.ZP,{treeData:treeData,onChange:setTreeData,getNodeKey:getNodeKey,generateNodeProps:({node:node,path:path})=>{const rootLevelIndex=treeData.reduce(((acc,n,index)=>null!==acc?acc:path[0]===n.id?index:null),null)||0,playerColor=TEAM_COLORS[rootLevelIndex];return{style:{boxShadow:`0 0 0 4px ${playerColor.toLowerCase()}`,textShadow:1===path.length?`1px 1px 1px ${playerColor.toLowerCase()}`:"none"},title:`${playerColor} ${1===path.length?"Captain":node.position}`,onClick:()=>{setTreeData((0,src.Gm)({treeData:treeData,path:path,getNodeKey:getNodeKey,newNode:{...node,expanded:!node.expanded}}))}}}})})};GenerateNodeProps.displayName="GenerateNodeProps";var generate_node_props=GenerateNodeProps;try{generatenodeprops.displayName="generatenodeprops",generatenodeprops.__docgenInfo={description:"",displayName:"generatenodeprops",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/generate-node-props.tsx#generatenodeprops"]={docgenInfo:generatenodeprops.__docgenInfo,name:"generatenodeprops",path:"src/stories/advanced/generate-node-props.tsx#generatenodeprops"})}catch(__react_docgen_typescript_loader_error){}const OnlyExpandSearchedNodes=()=>{const getStack=(left,hasNeedle=!1)=>0===left?hasNeedle?{title:"Needle"}:{title:"Hay"}:{title:"Hay",children:[{title:"Hay",children:[getStack(left-1,hasNeedle&&left%2),{title:"Hay"}]},{title:"Hay"},{title:"Hay",children:[{title:"Hay"},getStack(left-1,hasNeedle&&(left+1)%2)]}]},[searchString,setSearchString]=(0,react.useState)(""),[searchFocusIndex,setSearchFocusIndex]=(0,react.useState)(0),[searchFoundCount,setSearchFoundCount]=(0,react.useState)(0),[treeData,setTreeData]=(0,react.useState)([{title:"Haystack",children:[getStack(3,!0),getStack(3),{title:"Hay"},getStack(2,!0)]}]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h2",{children:"Find the needle!"}),(0,jsx_runtime.jsxs)("form",{style:{display:"inline-block"},onSubmit:event=>{event.preventDefault()},children:[(0,jsx_runtime.jsx)("input",{id:"find-box",type:"text",placeholder:"Search...",style:{fontSize:"1rem"},value:searchString,onChange:event=>setSearchString(event.target.value)}),(0,jsx_runtime.jsx)("button",{type:"button",disabled:!searchFoundCount,onClick:()=>setSearchFocusIndex(null!==searchFocusIndex?(searchFoundCount+searchFocusIndex-1)%searchFoundCount:searchFoundCount-1),children:"<"}),(0,jsx_runtime.jsx)("button",{type:"submit",disabled:!searchFoundCount,onClick:()=>setSearchFocusIndex(null!==searchFocusIndex?(searchFocusIndex+1)%searchFoundCount:0),children:">"}),(0,jsx_runtime.jsxs)("span",{children:[" ",searchFoundCount>0?searchFocusIndex+1:0," / ",searchFoundCount||0]})]}),(0,jsx_runtime.jsx)("div",{style:{height:300,width:700},children:(0,jsx_runtime.jsx)(src.ZP,{treeData:treeData,onChange:setTreeData,searchMethod:({node:node,searchQuery:searchQuery})=>searchQuery&&node.title.toLowerCase().indexOf(searchQuery.toLowerCase())>-1,searchQuery:searchString,searchFocusOffset:searchFocusIndex,searchFinishCallback:matches=>{setSearchFoundCount(matches.length),setSearchFocusIndex(matches.length>0?searchFocusIndex%matches.length:0)},onlyExpandSearchedNodes:!0})})]})};OnlyExpandSearchedNodes.displayName="OnlyExpandSearchedNodes";var only_expand_searched_node=OnlyExpandSearchedNodes;try{onlyexpandsearchednode.displayName="onlyexpandsearchednode",onlyexpandsearchednode.__docgenInfo={description:"",displayName:"onlyexpandsearchednode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/only-expand-searched-node.tsx#onlyexpandsearchednode"]={docgenInfo:onlyexpandsearchednode.__docgenInfo,name:"onlyexpandsearchednode",path:"src/stories/advanced/only-expand-searched-node.tsx#onlyexpandsearchednode"})}catch(__react_docgen_typescript_loader_error){}var dist_esm=__webpack_require__("./node_modules/react-dnd-touch-backend/dist/esm/index.js");const isTouchDevice=!(!("ontouchstart"in window)&&!navigator.maxTouchPoints),dndBackend=isTouchDevice?dist_esm.zr:esm.PD,TouchSupport=()=>{const[treeData,setTreeData]=(0,react.useState)([{title:"Chicken",expanded:!0,children:[{title:"Egg"}]}]);return(0,jsx_runtime.jsx)(DndProvider.W,{backend:dndBackend,children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("span",{children:["This is ",!isTouchDevice&&"not ","a touch-supporting browser"]}),(0,jsx_runtime.jsx)("div",{style:{height:300,width:700},children:(0,jsx_runtime.jsx)(src.oP,{treeData:treeData,onChange:setTreeData})})]})})};TouchSupport.displayName="TouchSupport";var touch_support=TouchSupport;try{touchsupport.displayName="touchsupport",touchsupport.__docgenInfo={description:"",displayName:"touchsupport",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/touch-support.tsx#touchsupport"]={docgenInfo:touchsupport.__docgenInfo,name:"touchsupport",path:"src/stories/advanced/touch-support.tsx#touchsupport"})}catch(__react_docgen_typescript_loader_error){}const TreeToTree=()=>{const[treeData1,setTreeData1]=(0,react.useState)([{title:"node1",children:[{title:"Child node"}]},{title:"node2"}]),[treeData2,setTreeData2]=(0,react.useState)([{title:"node3"},{title:"node4"}]),[shouldCopyOnOutsideDrop,setShouldCopyOnOutsideDrop]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:{height:350,width:350,float:"left",border:"solid black 1px"},children:(0,jsx_runtime.jsx)(src.ZP,{treeData:treeData1,onChange:setTreeData1,dndType:"yourNodeType",shouldCopyOnOutsideDrop:shouldCopyOnOutsideDrop})}),(0,jsx_runtime.jsx)("div",{style:{height:350,width:350,float:"left",border:"solid black 1px"},children:(0,jsx_runtime.jsx)(src.ZP,{treeData:treeData2,onChange:setTreeData2,dndType:"yourNodeType",shouldCopyOnOutsideDrop:shouldCopyOnOutsideDrop})}),(0,jsx_runtime.jsx)("div",{style:{clear:"both"}}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{htmlFor:"should-copy",style:{fontSize:"0.8rem"},children:["Enable node copy via ",(0,jsx_runtime.jsx)("b",{children:"shouldCopyOnOutsideDrop"}),":",(0,jsx_runtime.jsx)("input",{type:"checkbox",id:"should-copy",checked:shouldCopyOnOutsideDrop,onChange:event=>setShouldCopyOnOutsideDrop(event.target.checked)})]})})]})};TreeToTree.displayName="TreeToTree";var tree_to_tree=TreeToTree;try{treetotree.displayName="treetotree",treetotree.__docgenInfo={description:"",displayName:"treetotree",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/advanced/tree-to-tree.tsx#treetotree"]={docgenInfo:treetotree.__docgenInfo,name:"treetotree",path:"src/stories/advanced/tree-to-tree.tsx#treetotree"})}catch(__react_docgen_typescript_loader_error){}var advanced_stories={title:"Advanced",component:external_node};const DragFromExternalSource={render:()=>(0,jsx_runtime.jsx)(external_node,{})},advanced_stories_TouchSupport={render:()=>(0,jsx_runtime.jsx)(touch_support,{})},TreeToTreeDragging={render:()=>(0,jsx_runtime.jsx)(tree_to_tree,{})},PlayingWithGenerateNodeProps={render:()=>(0,jsx_runtime.jsx)(generate_node_props,{})},advanced_stories_DragOutToRemove={render:()=>(0,jsx_runtime.jsx)(drag_out_to_remove,{})},advanced_stories_OnlyExpandSearchedNodes={render:()=>(0,jsx_runtime.jsx)(only_expand_searched_node,{})},PreventSomeNodesFromHavingChildren={render:()=>(0,jsx_runtime.jsx)(childless_nodes,{})},MinimalImplementationWithoutDndContext={render:()=>(0,jsx_runtime.jsx)(barebones_no_context,{})};DragFromExternalSource.parameters={...DragFromExternalSource.parameters,docs:{...DragFromExternalSource.parameters?.docs,source:{originalSource:"{\n  render: () => <ExternalNodeExample />\n}",...DragFromExternalSource.parameters?.docs?.source}}},advanced_stories_TouchSupport.parameters={...advanced_stories_TouchSupport.parameters,docs:{...advanced_stories_TouchSupport.parameters?.docs,source:{originalSource:"{\n  render: () => <TouchSupportExample />\n}",...advanced_stories_TouchSupport.parameters?.docs?.source}}},TreeToTreeDragging.parameters={...TreeToTreeDragging.parameters,docs:{...TreeToTreeDragging.parameters?.docs,source:{originalSource:"{\n  render: () => <TreeToTreeExample />\n}",...TreeToTreeDragging.parameters?.docs?.source}}},PlayingWithGenerateNodeProps.parameters={...PlayingWithGenerateNodeProps.parameters,docs:{...PlayingWithGenerateNodeProps.parameters?.docs,source:{originalSource:"{\n  render: () => <GenerateNodePropsExample />\n}",...PlayingWithGenerateNodeProps.parameters?.docs?.source}}},advanced_stories_DragOutToRemove.parameters={...advanced_stories_DragOutToRemove.parameters,docs:{...advanced_stories_DragOutToRemove.parameters?.docs,source:{originalSource:"{\n  render: () => <DragOutToRemoveExample />\n}",...advanced_stories_DragOutToRemove.parameters?.docs?.source}}},advanced_stories_OnlyExpandSearchedNodes.parameters={...advanced_stories_OnlyExpandSearchedNodes.parameters,docs:{...advanced_stories_OnlyExpandSearchedNodes.parameters?.docs,source:{originalSource:"{\n  render: () => <OnlyExpandSearchedNodesExample />\n}",...advanced_stories_OnlyExpandSearchedNodes.parameters?.docs?.source}}},PreventSomeNodesFromHavingChildren.parameters={...PreventSomeNodesFromHavingChildren.parameters,docs:{...PreventSomeNodesFromHavingChildren.parameters?.docs,source:{originalSource:"{\n  render: () => <ChildlessNodes />\n}",...PreventSomeNodesFromHavingChildren.parameters?.docs?.source}}},MinimalImplementationWithoutDndContext.parameters={...MinimalImplementationWithoutDndContext.parameters,docs:{...MinimalImplementationWithoutDndContext.parameters?.docs,source:{originalSource:"{\n  render: () => <BarebonesExampleNoContext />\n}",...MinimalImplementationWithoutDndContext.parameters?.docs?.source}}};const __namedExportsOrder=["DragFromExternalSource","TouchSupport","TreeToTreeDragging","PlayingWithGenerateNodeProps","DragOutToRemove","OnlyExpandSearchedNodes","PreventSomeNodesFromHavingChildren","MinimalImplementationWithoutDndContext"]}}]);