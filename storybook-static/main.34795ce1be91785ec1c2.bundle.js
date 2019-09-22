(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{281:function(module,exports,__webpack_require__){__webpack_require__(282),__webpack_require__(391),module.exports=__webpack_require__(392)},303:function(module,exports){},392:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(280),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(178);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(596),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.themes.dark},viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__.INITIAL_VIEWPORTS},backgrounds:[{name:"twitter",value:"#00aced",default:!0},{name:"facebook",value:"#3b5998"}]})}.call(this,__webpack_require__(211)(module))},57:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),Button=(__webpack_require__(622),function Button(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",Object.assign({onClick:props.onClick,style:props.style},props),props.label&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,props.label))});__webpack_exports__.a=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src\\components\\Button.js"})},596:function(module,exports,__webpack_require__){var map={"./button.stories.js":597};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=596},597:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(68),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(56),_components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(57),withSourceLoader=__webpack_require__(598).withSource,__STORY__="import React from 'react';\r\nimport { storiesOf } from '@storybook/react';\r\nimport { action } from '@storybook/addon-actions';\r\nimport { withKnobs, text, boolean, number, select, radios } from '@storybook/addon-knobs';\r\n\r\nimport Button from '../components/Button';\r\n\r\nstoriesOf('Button',module)\r\n    .add('with primary',() => <Button \r\n        label=\"Primary Button\"\r\n        onClick={action('click')}\r\n     />, {\r\n         notes: 'A simple example of primary button'\r\n     })\r\n    .add('with secondary',() => <Button \r\n        label=\"Secondary Button\"\r\n        onClick={action('click')}\r\n    />)\r\n    .add('with outline', () => <Button \r\n        label=\"Outline Button\"\r\n        onClick={action('click')}\r\n        style={{ background: '#ccc', border: '3px solid #fecd43' }}\r\n    />)\r\n    .add('with rounded corners', () => <Button \r\n        label=\"Rounded Button\"\r\n        onClick={action('click')}\r\n        style={{ borderRadius: '15px' }}\r\n    />)\r\n    .add('disabled',() => <Button disabled\r\n        label=\"Disabled Button\"\r\n        onClick={action('click')}\r\n        style={{ background: '#ccc' , border: '2px solid gray', cursor: 'not-allowed' }}\r\n    />)\r\n    .addDecorator(withKnobs)\r\n    .add('knobs with button', () => <Button \r\n        disabled={boolean('Disabled',false)}\r\n        label=\"Hello Storybook\"\r\n        ></Button>)\r\n    .add('as dynamic variables', () => {\r\n        const name = text('Name', 'Mitesh Kamat');\r\n        const age = number('Age', 29);\r\n        \r\n        const content = `I am ${name} and I'm ${age} years old.`;\r\n        return (<div>{content}</div>);\r\n    })\r\n    .add('with select options',()=> {\r\n        const label = 'Colors';\r\n        const options = {\r\n            Red: 'red',\r\n            Blue: 'blue',\r\n            Yellow: 'yellow',\r\n            Rainbow: ['red', 'orange', 'etc'],\r\n            None: null,\r\n          };\r\n        const defaultValue = 'red';\r\n        return (<div>{select(label, options, defaultValue)}</div>)\r\n\r\n    })\r\n    .add('with radio buttons',() => {\r\n        const label = 'Fruits';\r\n        const options = {\r\n            Kiwi: 'kiwi',\r\n            Guava: 'guava',\r\n            Watermelon: 'watermelon',\r\n        };\r\n        const defaultValue = 'kiwi';\r\n        return(<div>{radios(label,options,defaultValue)}</div>)\r\n    })",__ADDS_MAP__={"button--with-radio-buttons":{startLoc:{col:9,line:59},endLoc:{col:5,line:68},startBody:{col:30,line:59},endBody:{col:5,line:68}},"button--with-select-options":{startLoc:{col:9,line:46},endLoc:{col:5,line:58},startBody:{col:31,line:46},endBody:{col:5,line:58}},"button--as-dynamic-variables":{startLoc:{col:9,line:39},endLoc:{col:5,line:45},startBody:{col:33,line:39},endBody:{col:5,line:45}},"button--knobs-with-button":{startLoc:{col:9,line:35},endLoc:{col:18,line:38},startBody:{col:30,line:35},endBody:{col:18,line:38}},"button--disabled":{startLoc:{col:9,line:29},endLoc:{col:6,line:33},startBody:{col:20,line:29},endBody:{col:6,line:33}},"button--with-rounded-corners":{startLoc:{col:9,line:24},endLoc:{col:6,line:28},startBody:{col:33,line:24},endBody:{col:6,line:28}},"button--with-outline":{startLoc:{col:9,line:19},endLoc:{col:6,line:23},startBody:{col:25,line:19},endBody:{col:6,line:23}},"button--with-secondary":{startLoc:{col:9,line:15},endLoc:{col:6,line:18},startBody:{col:26,line:15},endBody:{col:6,line:18}},"button--with-primary":{startLoc:{col:9,line:9},endLoc:{col:6,line:14},startBody:{col:24,line:9},endBody:{col:7,line:12}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/button.stories.js",[],{},"C:\\Users\\Mitesh.Kamat\\storybook-app\\src\\stories",{})).add("with primary",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Primary Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click")})}),{notes:"A simple example of primary button"}).add("with secondary",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Secondary Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click")})})).add("with outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Outline Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click"),style:{background:"#ccc",border:"3px solid #fecd43"}})})).add("with rounded corners",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Rounded Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click"),style:{borderRadius:"15px"}})})).add("disabled",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!0,label:"Disabled Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click"),style:{background:"#ccc",border:"2px solid gray",cursor:"not-allowed"}})})).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("knobs with button",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Disabled",!1),label:"Hello Storybook"})})).add("as dynamic variables",(function(){var name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Name","Mitesh Kamat"),age=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Age",29),content="I am ".concat(name," and I'm ").concat(age," years old.");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,content)})).add("with select options",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Colors",{Red:"red",Blue:"blue",Yellow:"yellow",Rainbow:["red","orange","etc"],None:null},"red"))})).add("with radio buttons",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.radios)("Fruits",{Kiwi:"kiwi",Guava:"guava",Watermelon:"watermelon"},"kiwi"))}))}.call(this,__webpack_require__(211)(module))},622:function(module,exports,__webpack_require__){}},[[281,1,2]]]);
//# sourceMappingURL=main.34795ce1be91785ec1c2.bundle.js.map