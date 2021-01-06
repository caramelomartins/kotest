(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(141)),s={id:"test_containers",title:"Test Containers",sidebar_label:"Test Containers",slug:"test_containers.html"},i={unversionedId:"framework/extensions/test_containers",id:"framework/extensions/test_containers",isDocsHomePage:!1,title:"Test Containers",description:"Test Containers",source:"@site/docs/framework/extensions/test_containers.md",slug:"/framework/extensions/test_containers.html",permalink:"/docs/framework/extensions/test_containers.html",editUrl:"https://github.com/kotest/kotest/docs/framework/extensions/test_containers.md",version:"current",sidebar_label:"Test Containers",sidebar:"framework",previous:{title:"System Extensions",permalink:"/docs/framework/extensions/system_extensions.html"},next:{title:"MockServer",permalink:"/docs/framework/extensions/mockserver.html"}},c=[{value:"Test Containers",id:"test-containers",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"test-containers"},"Test Containers"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/testcontainers/testcontainers-java"}),"testcontainers-java")," library that provide lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kotest-extensions-testcontainers")," provides integration for using testcontainers-java with kotest."),Object(a.b)("p",null,"For using ",Object(a.b)("inlineCode",{parentName:"p"},"kotest-extensions-testcontainers")," add the below dependency in your build file."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy"}),'testImplementation("io.kotest:kotest-extensions-testcontainers:${version}")\n')),Object(a.b)("p",null,"Having this dependency in test classpath brings in extension method's in scope which let you convert any Startable such as a DockerContainer into a kotest TestListener, which you can register with Kotest and then Kotest will manage lifecycle of container for you."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'\nclass DatabaseRepositoryTest : FunSpec({\n   val redisContainer = GenericContainer<Nothing>("redis:5.0.3-alpine")\n   listener(redisContainer.perTest()) //converts container to listener and registering it with Kotest.\n\n   test("some test which assume to have redis container running") {\n      //\n   }\n})\n')),Object(a.b)("p",null,"In above example ",Object(a.b)("inlineCode",{parentName:"p"},"perTest()")," extension method converts the container into a ",Object(a.b)("inlineCode",{parentName:"p"},"TestListener")," which start's the\nredis container before each test and stop's that after test. Similarly if you want to reuse the container for all tests\nin a single spec class you can use ",Object(a.b)("inlineCode",{parentName:"p"},"perSpec()")," extension method which convert's container into a ",Object(a.b)("inlineCode",{parentName:"p"},"TestListener"),"\nwhich start's the container before running any test in spec and stop's that after all tests, thus a single container is\nused by all tests in spec class."))}p.isMDXComponent=!0}}]);