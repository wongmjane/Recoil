(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),o=(n(0),n(146));const a={title:"selector(options)",sidebar_label:"selector()"},i={id:"api-reference/core/selector",title:"selector(options)",description:"Returns writeable or read-only Recoil state, depending on the options passed to the function.",source:"@site/docs/api-reference/core/selector.md",permalink:"/docs/api-reference/core/selector",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api-reference/core/selector.md",sidebar_label:"selector()",sidebar:"someSidebar",previous:{title:"isRecoilValue(value)",permalink:"/docs/api-reference/core/isRecoilValue"},next:{title:"useRecoilCallback()",permalink:"/docs/api-reference/core/useRecoilCallback"}},c=[{value:"Example (Synchronous)",id:"example-synchronous",children:[]},{value:"Example (Asynchronous)",id:"example-asynchronous",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns writeable or read-only Recoil state, depending on the options passed to the function."),Object(o.b)("p",null,"Selectors represent ",Object(o.b)("strong",{parentName:"p"},"derived state"),". You can think of derived state as the output of passing state to a pure function that modifies the given state in some way."),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key"),": A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get"),": A function that is passed an object as the first parameter containing the following properties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get"),": a function used to retrieve values from other atoms/selectors. All atoms/selectors passed to this function will be implicitly added to a list of ",Object(o.b)("strong",{parentName:"li"},"dependencies")," for the selector. If any of the selector's dependencies change, the selector will re-evaluate."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set?"),": If this property is set, the selector will return ",Object(o.b)("strong",{parentName:"li"},"writeable")," state. A function that is passed an object as the first parameter containing the following properties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get"),": a function used to retrieve values from other atoms/selectors. This function will not subscribe the selector to the given atoms/selectors."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set"),": a function used to set the values of Recoil state. The first parameter is the Recoil state and the second parameter is the new value.")))))),Object(o.b)("h3",{id:"example-synchronous"},"Example (Synchronous)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {atom, selector, useRecoilState} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelcius = selector({\n  key: 'tempCelcius',\n  get: ({get}) => ((get(temptempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),\n});\n\nfunction TempCelcius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelcius);\n\n  const addTenCelcius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n\n  return (\n    <div>\n      Temp (Celcius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelcius}>Add 10 Celcius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n    </div>\n  );\n}\n")),Object(o.b)("h3",{id:"example-asynchronous"},"Example (Asynchronous)"))}s.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);