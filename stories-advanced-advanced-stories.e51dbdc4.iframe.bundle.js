"use strict";(self.webpackChunk_nosferatu500_react_sortable_tree=self.webpackChunk_nosferatu500_react_sortable_tree||[]).push([[32],{"./src/stories/advanced/advanced.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DragFromExternalSource:()=>DragFromExternalSource,DragOutToRemove:()=>advanced_stories_DragOutToRemove,MinimalImplementationWithoutDndContext:()=>MinimalImplementationWithoutDndContext,OnlyExpandSearchedNodes:()=>advanced_stories_OnlyExpandSearchedNodes,PlayingWithGenerateNodeProps:()=>PlayingWithGenerateNodeProps,PreventSomeNodesFromHavingChildren:()=>PreventSomeNodesFromHavingChildren,TouchSupport:()=>advanced_stories_TouchSupport,TreeToTreeDragging:()=>TreeToTreeDragging,__namedExportsOrder:()=>__namedExportsOrder,default:()=>advanced_stories});var react=__webpack_require__("./node_modules/react/index.js"),DndProvider=__webpack_require__("./node_modules/react-dnd/dist/esm/core/DndProvider.js"),esm=__webpack_require__("./node_modules/react-dnd-html5-backend/dist/esm/index.js"),src=__webpack_require__("./src/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var BarebonesNoContext=function(){var _useState=_sliced_to_array((0,react.useState)([{title:"Chicken",expanded:!0,children:[{title:"Egg"}]}]),2),treeData=_useState[0],setTreeData=_useState[1];return react.createElement("div",{style:{height:300,width:700}},react.createElement(DndProvider.Q,{backend:esm.t2},react.createElement(src.qL,{treeData,onChange:setTreeData})))};const barebones_no_context=BarebonesNoContext;function childless_nodes_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function childless_nodes_sliced_to_array(arr,i){return function childless_nodes_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function childless_nodes_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function childless_nodes_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return childless_nodes_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return childless_nodes_array_like_to_array(o,minLen)}(arr,i)||function childless_nodes_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}BarebonesNoContext.__docgenInfo={description:"",methods:[],displayName:"BarebonesNoContext"};var data=[{title:"Managers",expanded:!0,children:[{title:"Rob",children:[],isPerson:!0},{title:"Joe",children:[],isPerson:!0}]},{title:"Clerks",expanded:!0,children:[{title:"Bertha",children:[],isPerson:!0},{title:"Billy",children:[],isPerson:!0}]}],ChildlessNodes=function(){var _useState=childless_nodes_sliced_to_array((0,react.useState)(data),2),treeData=_useState[0],setTreeData=_useState[1];return react.createElement("div",{style:{height:300,width:700}},react.createElement(src.XF,{canNodeHaveChildren:function(node){return!node.isPerson},treeData,onChange:setTreeData}))};const childless_nodes=ChildlessNodes;ChildlessNodes.__docgenInfo={description:"",methods:[],displayName:"ChildlessNodes"};var DropTarget=__webpack_require__("./node_modules/react-dnd/dist/esm/decorators/DropTarget.js");function drag_out_to_remove_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return _get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_get_prototype_of(o)}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _possible_constructor_return(self,call){return!call||"object"!==function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}(call)&&"function"!=typeof call?function _assert_this_initialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _set_prototype_of(o,p){return _set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o},_set_prototype_of(o,p)}function drag_out_to_remove_sliced_to_array(arr,i){return function drag_out_to_remove_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function drag_out_to_remove_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function drag_out_to_remove_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return drag_out_to_remove_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return drag_out_to_remove_array_like_to_array(o,minLen)}(arr,i)||function drag_out_to_remove_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _create_super(Derived){var hasNativeReflectConstruct=function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var trashAreaSpec={drop:function(props,monitor){return _object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},monitor.getItem()),{treeId:"trash"})}},trashAreaBaseComponent=function(Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}(trashAreaBaseComponent,Component);var _super=_create_super(trashAreaBaseComponent);function trashAreaBaseComponent(){return function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,trashAreaBaseComponent),_super.apply(this,arguments)}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(trashAreaBaseComponent,[{key:"render",value:function render(){var _this_props=this.props,connectDropTarget=_this_props.connectDropTarget,children=_this_props.children,isOver=_this_props.isOver;return connectDropTarget(react.createElement("div",{style:{height:"100vh",padding:50,background:isOver?"pink":"transparent"}},children))}}]),trashAreaBaseComponent}(react.Component),TrashAreaComponent=(0,DropTarget.T)("yourNodeType",trashAreaSpec,(function(connect,monitor){return{connectDropTarget:connect.dropTarget(),isOver:monitor.isOver({shallow:!0})}}))(trashAreaBaseComponent),DragOutToRemove=function(){var _useState=drag_out_to_remove_sliced_to_array((0,react.useState)([{title:"1"},{title:"2"},{title:"3"},{title:"4",expanded:!0,children:[{title:"5"}]}]),2),treeData=_useState[0],setTreeData=_useState[1];return react.createElement(DndProvider.Q,{backend:esm.t2},react.createElement("div",null,react.createElement(TrashAreaComponent,null,react.createElement("div",{style:{height:300,width:700}},react.createElement(src.qL,{treeData,onChange:setTreeData,dndType:"yourNodeType"})))))};const drag_out_to_remove=DragOutToRemove;DragOutToRemove.__docgenInfo={description:"",methods:[],displayName:"DragOutToRemove"};var DragSource=__webpack_require__("./node_modules/react-dnd/dist/esm/decorators/DragSource.js");function external_node_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function external_node_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function external_node_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function external_node_get_prototype_of(o){return external_node_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},external_node_get_prototype_of(o)}function external_node_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){external_node_define_property(target,key,source[key])}))}return target}function external_node_possible_constructor_return(self,call){return!call||"object"!==function external_node_type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}(call)&&"function"!=typeof call?function external_node_assert_this_initialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function external_node_set_prototype_of(o,p){return external_node_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o},external_node_set_prototype_of(o,p)}function external_node_sliced_to_array(arr,i){return function external_node_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function external_node_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function external_node_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return external_node_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return external_node_array_like_to_array(o,minLen)}(arr,i)||function external_node_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function external_node_create_super(Derived){var hasNativeReflectConstruct=function external_node_is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=external_node_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=external_node_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return external_node_possible_constructor_return(this,result)}}var externalNodeSpec={beginDrag:function(componentProps){return{node:external_node_object_spread({},componentProps.node)}}},externalNodeBaseComponent=function(Component){!function external_node_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&external_node_set_prototype_of(subClass,superClass)}(externalNodeBaseComponent,Component);var _super=external_node_create_super(externalNodeBaseComponent);function externalNodeBaseComponent(){return function external_node_class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,externalNodeBaseComponent),_super.apply(this,arguments)}return function external_node_create_class(Constructor,protoProps,staticProps){return protoProps&&external_node_defineProperties(Constructor.prototype,protoProps),staticProps&&external_node_defineProperties(Constructor,staticProps),Constructor}(externalNodeBaseComponent,[{key:"render",value:function render(){var _this_props=this.props,connectDragSource=_this_props.connectDragSource,node=_this_props.node;return connectDragSource(react.createElement("div",{style:{display:"inline-block",padding:"3px 5px",background:"blue",color:"white"}},node.title),{dropEffect:"copy"})}}]),externalNodeBaseComponent}(react.Component),YourExternalNodeComponent=(0,DragSource.I)("yourNodeType",externalNodeSpec,(function(connect){return{connectDragSource:connect.dragSource()}}))(externalNodeBaseComponent),ExternalNode=function(){var _useState=external_node_sliced_to_array((0,react.useState)([{title:"Mama Rabbit"},{title:"Papa Rabbit"}]),2),treeData=_useState[0],setTreeData=_useState[1];return react.createElement(DndProvider.Q,{backend:esm.t2},react.createElement("div",null,react.createElement("div",{style:{height:300,width:700}},react.createElement(src.qL,{treeData,onChange:setTreeData,dndType:"yourNodeType"})),react.createElement(YourExternalNodeComponent,{node:{title:"Baby Rabbit"}}),"← drag this"))};const external_node=ExternalNode;function generate_node_props_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function generate_node_props_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function generate_node_props_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){generate_node_props_define_property(target,key,source[key])}))}return target}function generate_node_props_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function generate_node_props_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function generate_node_props_sliced_to_array(arr,i){return function generate_node_props_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function generate_node_props_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function generate_node_props_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return generate_node_props_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return generate_node_props_array_like_to_array(o,minLen)}(arr,i)||function generate_node_props_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}ExternalNode.__docgenInfo={description:"",methods:[],displayName:"ExternalNode"};var generate_node_props_data=[{id:1,position:"Goalkeeper"},{id:2,position:"Wing-back"},{id:3,position:"Striker",children:[{id:4,position:"Full-back"}]}],TEAM_COLORS=["Red","Black","Green","Blue"],GenerateNodeProps=function(){var _useState=generate_node_props_sliced_to_array((0,react.useState)(generate_node_props_data),2),treeData=_useState[0],setTreeData=_useState[1],getNodeKey=function(param){return param.node.id};return react.createElement("div",{style:{height:300,width:700}},react.createElement(src.XF,{treeData,onChange:setTreeData,getNodeKey,generateNodeProps:function(param){var node=param.node,path=param.path,rootLevelIndex=treeData.reduce((function(acc,n,index){return null!==acc?acc:path[0]===n.id?index:null}),null)||0,playerColor=TEAM_COLORS[rootLevelIndex];return{style:{boxShadow:"0 0 0 4px ".concat(playerColor.toLowerCase()),textShadow:1===path.length?"1px 1px 1px ".concat(playerColor.toLowerCase()):"none"},title:"".concat(playerColor," ").concat(1===path.length?"Captain":node.position),onClick:function(){setTreeData((0,src.rc)({treeData,path,getNodeKey,newNode:generate_node_props_object_spread_props(generate_node_props_object_spread({},node),{expanded:!node.expanded})}))}}}}))};const generate_node_props=GenerateNodeProps;function only_expand_searched_node_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function only_expand_searched_node_sliced_to_array(arr,i){return function only_expand_searched_node_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function only_expand_searched_node_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function only_expand_searched_node_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return only_expand_searched_node_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return only_expand_searched_node_array_like_to_array(o,minLen)}(arr,i)||function only_expand_searched_node_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}GenerateNodeProps.__docgenInfo={description:"",methods:[],displayName:"GenerateNodeProps"};var OnlyExpandSearchedNodes=function(){var getStack=function(left){var hasNeedle=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 0===left?hasNeedle?{title:"Needle"}:{title:"Hay"}:{title:"Hay",children:[{title:"Hay",children:[getStack(left-1,hasNeedle&&left%2),{title:"Hay"}]},{title:"Hay"},{title:"Hay",children:[{title:"Hay"},getStack(left-1,hasNeedle&&(left+1)%2)]}]}},_useState=only_expand_searched_node_sliced_to_array((0,react.useState)(""),2),searchString=_useState[0],setSearchString=_useState[1],_useState1=only_expand_searched_node_sliced_to_array((0,react.useState)(0),2),searchFocusIndex=_useState1[0],setSearchFocusIndex=_useState1[1],_useState2=only_expand_searched_node_sliced_to_array((0,react.useState)(0),2),searchFoundCount=_useState2[0],setSearchFoundCount=_useState2[1],_useState3=only_expand_searched_node_sliced_to_array((0,react.useState)([{title:"Haystack",children:[getStack(3,!0),getStack(3),{title:"Hay"},getStack(2,!0)]}]),2),treeData=_useState3[0],setTreeData=_useState3[1];return react.createElement("div",null,react.createElement("h2",null,"Find the needle!"),react.createElement("form",{style:{display:"inline-block"},onSubmit:function(event){event.preventDefault()}},react.createElement("input",{id:"find-box",type:"text",placeholder:"Search...",style:{fontSize:"1rem"},value:searchString,onChange:function(event){return setSearchString(event.target.value)}}),react.createElement("button",{type:"button",disabled:!searchFoundCount,onClick:function(){return setSearchFocusIndex(null!==searchFocusIndex?(searchFoundCount+searchFocusIndex-1)%searchFoundCount:searchFoundCount-1)}},"<"),react.createElement("button",{type:"submit",disabled:!searchFoundCount,onClick:function(){return setSearchFocusIndex(null!==searchFocusIndex?(searchFocusIndex+1)%searchFoundCount:0)}},">"),react.createElement("span",null," ",searchFoundCount>0?searchFocusIndex+1:0," / ",searchFoundCount||0)),react.createElement("div",{style:{height:300,width:700}},react.createElement(src.XF,{treeData,onChange:setTreeData,searchMethod:function(param){var node=param.node,searchQuery=param.searchQuery;return searchQuery&&node.title.toLowerCase().indexOf(searchQuery.toLowerCase())>-1},searchQuery:searchString,searchFocusOffset:searchFocusIndex,searchFinishCallback:function(matches){setSearchFoundCount(matches.length),setSearchFocusIndex(matches.length>0?searchFocusIndex%matches.length:0)},onlyExpandSearchedNodes:!0})))};const only_expand_searched_node=OnlyExpandSearchedNodes;OnlyExpandSearchedNodes.__docgenInfo={description:"",methods:[],displayName:"OnlyExpandSearchedNodes"};var dist_esm=__webpack_require__("./node_modules/react-dnd-touch-backend/dist/esm/index.js");function touch_support_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function touch_support_sliced_to_array(arr,i){return function touch_support_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function touch_support_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function touch_support_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return touch_support_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return touch_support_array_like_to_array(o,minLen)}(arr,i)||function touch_support_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var isTouchDevice=!(!("ontouchstart"in window)&&!navigator.maxTouchPoints),dndBackend=isTouchDevice?dist_esm.qi:esm.t2,TouchSupport=function(){var _useState=touch_support_sliced_to_array((0,react.useState)([{title:"Chicken",expanded:!0,children:[{title:"Egg"}]}]),2),treeData=_useState[0],setTreeData=_useState[1];return react.createElement(DndProvider.Q,{backend:dndBackend},react.createElement("div",null,react.createElement("span",null,"This is ",!isTouchDevice&&"not ","a touch-supporting browser"),react.createElement("div",{style:{height:300,width:700}},react.createElement(src.qL,{treeData,onChange:setTreeData}))))};const touch_support=TouchSupport;function tree_to_tree_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function tree_to_tree_sliced_to_array(arr,i){return function tree_to_tree_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function tree_to_tree_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function tree_to_tree_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return tree_to_tree_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tree_to_tree_array_like_to_array(o,minLen)}(arr,i)||function tree_to_tree_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}TouchSupport.__docgenInfo={description:"",methods:[],displayName:"TouchSupport"};var TreeToTree=function(){var _useState=tree_to_tree_sliced_to_array((0,react.useState)([{title:"node1",children:[{title:"Child node"}]},{title:"node2"}]),2),treeData1=_useState[0],setTreeData1=_useState[1],_useState1=tree_to_tree_sliced_to_array((0,react.useState)([{title:"node3"},{title:"node4"}]),2),treeData2=_useState1[0],setTreeData2=_useState1[1],_useState2=tree_to_tree_sliced_to_array((0,react.useState)(!1),2),shouldCopyOnOutsideDrop=_useState2[0],setShouldCopyOnOutsideDrop=_useState2[1];return react.createElement("div",null,react.createElement("div",{style:{height:350,width:350,float:"left",border:"solid black 1px"}},react.createElement(src.XF,{treeData:treeData1,onChange:setTreeData1,dndType:"yourNodeType",shouldCopyOnOutsideDrop})),react.createElement("div",{style:{height:350,width:350,float:"left",border:"solid black 1px"}},react.createElement(src.XF,{treeData:treeData2,onChange:setTreeData2,dndType:"yourNodeType",shouldCopyOnOutsideDrop})),react.createElement("div",{style:{clear:"both"}}),react.createElement("div",null,react.createElement("label",{htmlFor:"should-copy",style:{fontSize:"0.8rem"}},"Enable node copy via ",react.createElement("b",null,"shouldCopyOnOutsideDrop"),":",react.createElement("input",{type:"checkbox",id:"should-copy",checked:shouldCopyOnOutsideDrop,onChange:function(event){return setShouldCopyOnOutsideDrop(event.target.checked)}}))))};const tree_to_tree=TreeToTree;TreeToTree.__docgenInfo={description:"",methods:[],displayName:"TreeToTree"};const advanced_stories={title:"Advanced",component:external_node};var DragFromExternalSource={render:function(){return react.createElement(external_node,null)}},advanced_stories_TouchSupport={render:function(){return react.createElement(touch_support,null)}},TreeToTreeDragging={render:function(){return react.createElement(tree_to_tree,null)}},PlayingWithGenerateNodeProps={render:function(){return react.createElement(generate_node_props,null)}},advanced_stories_DragOutToRemove={render:function(){return react.createElement(drag_out_to_remove,null)}},advanced_stories_OnlyExpandSearchedNodes={render:function(){return react.createElement(only_expand_searched_node,null)}},PreventSomeNodesFromHavingChildren={render:function(){return react.createElement(childless_nodes,null)}},MinimalImplementationWithoutDndContext={render:function(){return react.createElement(barebones_no_context,null)}};DragFromExternalSource.parameters={...DragFromExternalSource.parameters,docs:{...DragFromExternalSource.parameters?.docs,source:{originalSource:"{\n  render: () => <ExternalNodeExample />\n}",...DragFromExternalSource.parameters?.docs?.source}}},advanced_stories_TouchSupport.parameters={...advanced_stories_TouchSupport.parameters,docs:{...advanced_stories_TouchSupport.parameters?.docs,source:{originalSource:"{\n  render: () => <TouchSupportExample />\n}",...advanced_stories_TouchSupport.parameters?.docs?.source}}},TreeToTreeDragging.parameters={...TreeToTreeDragging.parameters,docs:{...TreeToTreeDragging.parameters?.docs,source:{originalSource:"{\n  render: () => <TreeToTreeExample />\n}",...TreeToTreeDragging.parameters?.docs?.source}}},PlayingWithGenerateNodeProps.parameters={...PlayingWithGenerateNodeProps.parameters,docs:{...PlayingWithGenerateNodeProps.parameters?.docs,source:{originalSource:"{\n  render: () => <GenerateNodePropsExample />\n}",...PlayingWithGenerateNodeProps.parameters?.docs?.source}}},advanced_stories_DragOutToRemove.parameters={...advanced_stories_DragOutToRemove.parameters,docs:{...advanced_stories_DragOutToRemove.parameters?.docs,source:{originalSource:"{\n  render: () => <DragOutToRemoveExample />\n}",...advanced_stories_DragOutToRemove.parameters?.docs?.source}}},advanced_stories_OnlyExpandSearchedNodes.parameters={...advanced_stories_OnlyExpandSearchedNodes.parameters,docs:{...advanced_stories_OnlyExpandSearchedNodes.parameters?.docs,source:{originalSource:"{\n  render: () => <OnlyExpandSearchedNodesExample />\n}",...advanced_stories_OnlyExpandSearchedNodes.parameters?.docs?.source}}},PreventSomeNodesFromHavingChildren.parameters={...PreventSomeNodesFromHavingChildren.parameters,docs:{...PreventSomeNodesFromHavingChildren.parameters?.docs,source:{originalSource:"{\n  render: () => <ChildlessNodes />\n}",...PreventSomeNodesFromHavingChildren.parameters?.docs?.source}}},MinimalImplementationWithoutDndContext.parameters={...MinimalImplementationWithoutDndContext.parameters,docs:{...MinimalImplementationWithoutDndContext.parameters?.docs,source:{originalSource:"{\n  render: () => <BarebonesExampleNoContext />\n}",...MinimalImplementationWithoutDndContext.parameters?.docs?.source}}};const __namedExportsOrder=["DragFromExternalSource","TouchSupport","TreeToTreeDragging","PlayingWithGenerateNodeProps","DragOutToRemove","OnlyExpandSearchedNodes","PreventSomeNodesFromHavingChildren","MinimalImplementationWithoutDndContext"]}}]);