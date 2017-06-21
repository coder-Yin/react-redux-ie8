# react-redux-ie8

> react-redux-demo 兼容ie8

### 一、项目说明
	
	技术栈：
	react+redux+webpack
	
	功能点：
	简易todoList(增加、筛选、列表）
	
	启动说明：
	npm install
	npm start
	
	访问地址：
	http://localhost:3000/
	
![react-redux-ie8效果图](http://upload-images.jianshu.io/upload_images/712523-4e25af241e225add.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
	
### 二、环境依赖
	
	- react 版本不高于v0.14
	- jQuery版本是1.x.x的版本，IE8不支持Juqery2.x的版本
	- webpack-hot-middleware不支持（我们开发也不会一直在ie8上开发，可以忽略...）

### 三、准备工作

- 1.es3ify解决es3环境兼容

	对于一些保留字的使用做了es3兼容,以及一些额外的处理，比如去除数组尾部的多余逗号。
	
	```
	//转换前
	var a = {
    	class: "haha"
	}
	a.class = "bb";
	var arr = [1,2,3,];
	//转换后
	var a = {
    	"class": "haha"
	}
	a["class"] = "bb";
	var arr = [1,2,3];
	```
	
	目前比较快捷的方式就是使用es3ify，在webpack中就是添加es3ify-loader。
	
	```
	webpack中就是添加es3ify-loader写法
	{
        test: /\.js$/,
        loaders: [  'es3ify-loader' ,'babel']
    }
	```
	
	有了它，其它的一些插件transform-es3-property-literals，transform-es3-member-expression-literal,add-module-exports 就没有必要了，你会发现这些插件就是在解决部分问题:
	
	```
	transform-es3-property-literals：保证在对象属性中的保留字正确;
	transform-es3-member-expression-literal：保证在对象属性访问中的保留字正确;
	add-module-exports：仅仅解决default的问题;
	```
	
- 2.引入polyfill 解决缺失API问题
	
	console-polyfill
	
	```
	Browser console polyfill. Makes it safe to do console.log().
	```
	
	es5-shim、es5-shim/es5-sham [es5-shim做了这些事情](https://github.com/es-shims/es5-shim)
	
	```
	babel 把 export * from 'xxx' 编译成了 Object.defineProperty，而 IE8 中不支持 accessor property.
	把 require('es5-shim') require('es5-shim/es5-sham') 插入到入口文件的最上方，并且在代码中不要使用 export * from 'xxx'
	```
	
	es6-promise polyfill
	
	```
	var Promise = require('es6-promise').Promise;
	```
	
	core-js polyfill [core-js官方地址](https://github.com/zloirock/core-js)
	
	```
	Includes polyfills for ECMAScript 5, ECMAScript 6: promises, symbols, collections, iterators, typed arrays, ECMAScript 7+ proposals, setImmediate。比如修复Object.assign.
	```

	不要在代码中用Object.defineProperty设置访问器属性，若第三方包中有，找到，改之。

### 四、写法注意点

- 不使用import 

	```
	import will be transformed to `Object.defineProperty` by babel,Object.defineProperty` doesn't exists in IE8
	```
	
	### attention1:
	
	origin:	
	
	```
	import React, { Component } from 'react';
	```
	
	now:
	
	```
	const React = require('react');
	const ReactDom = require('react-dom');
	```

	### attention2:
	
	origin:	
	
	```
	actionTypes.js:
		export const SET_REPORTINFO = "SET_REPORTINFO";
		export const SET_ISERROR = "SET_ISERROR";
	
	reducer.js:
		import * as actionTypes from '../actionTypes';
		export function reportInfo(state = {...initialState}, action) {
			switch (action.type) {
				case actionTypes.SET_REPORTINFO:
					return {...action.config, isLoading: false};
				default:
					return state;
			}
		}
	```
	
	now:
	
	```
	actionTypes.js:
		const SET_STUDENTLIST = 'SET_STUDENTLIST';
		const SET_STUDENTGENDERTYPE = 'SET_STUDENTGENDERTYPE';
		const actionTypes = {
  			SET_STUDENTLIST,
  			SET_STUDENTGENDERTYPE,
		};
		module.exports = actionTypes;
	
	reducer.js:
		const actionTypes = require('../actionType');
		...
	```
	
- 组件声明

	origin：
	
	```
	ComponentA:
	export default class Head extends Component {
	}
	
	ComponentB:
	import Head from '../head';
	```
	
	now:
	
	```
	ComponentA:
	class Head extends Component {
	}
	module.exports = Head;
	
	ComponentB:
	const Head = require('head');
	```
- npm包版本固定（以免安装时安装其他新的版本导致ie8下出错）
- react-css-module在ie8下不支持，用cssModule就可以了
	
- 参考文档(排名不分先后)

	[xcatliu/react-ie8](https://github.com/xcatliu/react-ie8) <br />
	[阿里巴巴国际UED团队](http://www.aliued.com/?p=3240)	
	



