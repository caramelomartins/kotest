(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,g=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return n?o.a.createElement(g,l(l({ref:t},p),{},{components:n})):o.a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),i=(n(0),n(141)),a={id:"globalconfig",title:"Global Configuration",slug:"property-test-global-config.html"},l={unversionedId:"proptest/globalconfig",id:"proptest/globalconfig",isDocsHomePage:!1,title:"Global Configuration",description:"Some property test settings can be set globally for all property tests.",source:"@site/docs/proptest/globalconfig.md",slug:"/proptest/property-test-global-config.html",permalink:"/docs/proptest/property-test-global-config.html",editUrl:"https://github.com/kotest/kotest/docs/proptest/globalconfig.md",version:"current",sidebar:"proptest",previous:{title:"Custom Generators",permalink:"/docs/proptest/custom-generators.html"}},s=[{value:"Default Iterations",id:"default-iterations",children:[]},{value:"Printing Shrink Steps",id:"printing-shrink-steps",children:[]}],p={rightToc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Some property test settings can be set globally for all property tests."),Object(i.b)("h3",{id:"default-iterations"},"Default Iterations"),Object(i.b)("p",null,"The standard default iteration count is 1000. This means when you don't specify the iteration count in a property test,\nthe default will be 1000."),Object(i.b)("p",null,"We can override this default either by assigning a value to ",Object(i.b)("inlineCode",{parentName:"p"},"PropertyTesting.defaultIterationCount"),", or by using the system property ",Object(i.b)("inlineCode",{parentName:"p"},"kotest.proptest.default.iteration.count"),"."),Object(i.b)("p",null,"Any test which directly sets the iteration count will of course use that value."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'PropertyTesting.defaultIterationCount = 123\n\n// will use 555 iterations specified in the test\nforAll<String, String>(555) { a,b -> a + b == "$a$b" }\n\n// will use 123 iterations from the global default\nforAll<String, String> { a,b -> a + b == "$a$b" }\n')),Object(i.b)("h3",{id:"printing-shrink-steps"},"Printing Shrink Steps"),Object(i.b)("p",null,"By default, when using shrinking, each shrinking step will not be logged, but only the final shrunk value."),Object(i.b)("p",null,"To enable logging of each intermediate value, assign true to ",Object(i.b)("inlineCode",{parentName:"p"},"PropertyTesting.shouldPrintShrinkSteps"),"\nor use the system property ",Object(i.b)("inlineCode",{parentName:"p"},"kotest.proptest.output.shrink-steps=true"),"."))}c.isMDXComponent=!0}}]);