(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{141:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=s(a),O=n,p=d["".concat(c,".").concat(O)]||d[O]||m[O]||b;return a?r.a.createElement(p,l(l({ref:t},o),{},{components:a})):r.a.createElement(p,l({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(141)),c={title:"Klock Matchers",slug:"klock-matchers.html"},l={unversionedId:"assertions/klock",id:"assertions/klock",isDocsHomePage:!1,title:"Klock Matchers",description:"Matchers for the Klock library, provided by the kotest-assertions-klock module.",source:"@site/docs/assertions/klock.md",slug:"/assertions/klock-matchers.html",permalink:"/docs/assertions/klock-matchers.html",editUrl:"https://github.com/kotest/kotest/docs/assertions/klock.md",version:"current",sidebar:"assertions",previous:{title:"Jsoup Matchers",permalink:"/docs/assertions/jsoup-matchers.html"},next:{title:"Konform Matchers",permalink:"/docs/assertions/konform-matchers.html"}},i=[],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Matchers for the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/korlibs/klock"}),"Klock")," library, provided by the ",Object(b.b)("inlineCode",{parentName:"p"},"kotest-assertions-klock")," module."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Matcher"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSameYear(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date has the same year as the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSameMonth(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date has the same month as the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSameDay(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date has the same day of the month as the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeBefore(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is before the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeAfter(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is after the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeBetween(firstDate, secondDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is between firstdate and seconddate.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveYear(year)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct year.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveMonth(month)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct month.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveDay(day)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct day of year.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveHour(hour)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct hour.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveMinute(Minute)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct minute.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSecond(second)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct second.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameHoursAs(time)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same hours as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveHours(hours)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the given hours.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameMinutesAs(time)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same minutes as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveMinutes(minutes)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the given minutes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameSeconds(time)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same seconds as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSeconds(seconds)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the given seconds.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameMillisecondsAs(time)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same milliseconds as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveMilliseconds(millis)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the given millis.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldBeBefore(time)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time is before the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldBeAfter(time)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time is after the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldBeBetween(time, time)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time is between the two given times.")))))}s.isMDXComponent=!0}}]);