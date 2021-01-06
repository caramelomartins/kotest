(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(a,".").concat(u)]||m[u]||b[u]||i;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(141)),a={title:"Compiler Matchers",slug:"compiler-matchers.html"},l={unversionedId:"assertions/compiler",id:"assertions/compiler",isDocsHomePage:!1,title:"Compiler Matchers",description:"The `kotest-assertions-compiler` extension provides matchers to assert that given kotlin code snippet compiles or not.",source:"@site/docs/assertions/compiler.md",slug:"/assertions/compiler-matchers.html",permalink:"/docs/assertions/compiler-matchers.html",editUrl:"https://github.com/kotest/kotest/docs/assertions/compiler.md",version:"current",sidebar:"assertions",previous:{title:"Arrow",permalink:"/docs/assertions/arrow.html"},next:{title:"Core Matchers",permalink:"/docs/assertions/core-matchers.html"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"kotest-assertions-compiler")," extension provides matchers to assert that given kotlin code snippet compiles or not.\nThis extension is a wrapper over ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tschuchortdev/kotlin-compile-testing"}),"kotlin-compile-testing")," and provides following matchers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"String.shouldCompile()"),Object(i.b)("li",{parentName:"ul"},"String.shouldNotCompile()"),Object(i.b)("li",{parentName:"ul"},"File.shouldCompile()"),Object(i.b)("li",{parentName:"ul"},"File.shouldNotCompile()")),Object(i.b)("p",null,"To add the compilation matcher, add the following dependency to your project"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy"}),'testImplementation("io.kotest:kotest-assertions-compiler:${version}")\n')),Object(i.b)("p",null,"Usage:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'    class CompilationTest: StringSpec() {\n        init {\n            "shouldCompile test" {\n                val codeSnippet = """ val aString: String = "A valid assignment" """.trimMargin()\n\n                codeSnippet.shouldCompile()\n                File("SourceFile.kt").shouldCompile()\n            }\n\n            "shouldNotCompile test" {\n                val codeSnippet = """ val aInteger: Int = "A invalid assignment" """.trimMargin()\n\n                codeSnippet.shouldNotCompile()\n                File("SourceFile.kt").shouldNotCompile()\n            }\n        }\n    }\n')),Object(i.b)("p",null,"During checking of code snippet compilation the classpath of calling process is inherited, which means any dependencies which are available in calling process will also be available while compiling the code snippet."),Object(i.b)("p",null,"Matchers that verify if a given piece of Kotlin code compiles or not"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Matcher"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string.shouldCompile()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Asserts that the string is a valid Kotlin code.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"file.shouldCompile()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Asserts that the file contains valid Kotlin code.")))))}p.isMDXComponent=!0}}]);