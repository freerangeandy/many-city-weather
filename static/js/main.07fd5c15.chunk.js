(this["webpackJsonpmany-city-weather"]=this["webpackJsonpmany-city-weather"]||[]).push([[0],{24:function(e,t,a){},40:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a.n(r),l=(a(24),a(37)),i=a(36),u=a(23),s=a(89),m=a(87),d=function(e){var t=e.clickHandler;return c.a.createElement("div",{className:"add-button"},c.a.createElement(s.a,{variant:"contained",color:"primary",startIcon:c.a.createElement(m.a,null,"add_circle"),onClick:t}," Add\xa0Location "))},p=a(35),h=a.n(p),f=function(e){var t=e.suggestionSelect;return c.a.createElement(h.a,{publicKey:"pk.eyJ1IjoiZnJlZXJhbmdlYW5keSIsImEiOiJja2J0bXoxMnAwYmpnMnlxdmYyOTVqNXA0In0.1u16EPjQEgr4LwHinZZKjA",onSuggestionSelect:t,inputClass:"city-input"})},E=function(e){var t=e.suggestionSelect,a=e.addCityDisplay;return c.a.createElement("div",{className:"add-city"},c.a.createElement(f,{suggestionSelect:t}),c.a.createElement(d,{clickHandler:a}))},y=a(88),g=a(90),w=function(e){return e>=21||e<6},v=function(e){var t=9*(e.temp-273.14)/5+32,a=1e3*e.dt,n=new Date(a),c=n.getMonth(),r=n.getDate();return{date:"".concat(c,"/").concat(r),hour:n.getHours(),temp:t,main:e.weather[0].main,description:e.weather[0].description,icon:e.weather[0].icon,cloudCover:e.clouds,windSpeed:e.wind_speed}},b=function(e){var t,a,n=e.weatherInfo,r=(t=n.hour,a=n.icon,w(t)?a.replace("d","n"):a.replace("n","d")),o="http://openweathermap.org/img/wn/".concat(r,"@2x.png"),l=function(e){return w(e)?"night-bg":"day-bg"}(n.hour);return c.a.createElement("div",{className:"weather-info-tile"},c.a.createElement("h3",null,n.date),c.a.createElement("h2",null,function(e){return 0===e?"12am":e>12?"".concat(e-12,"pm"):"".concat(e,"am")}(n.hour)),c.a.createElement("div",{className:"weather-card ".concat(l)},c.a.createElement("h2",null,n.temp.toFixed(0)," \xb0F"),c.a.createElement(g.a,{className:"weather-icon",src:o}),c.a.createElement("h3",null,n.description)))},j=function(e){var t=e.name,a=e.forecasts.slice(0,6).map((function(e,t){return c.a.createElement(y.a,{item:!0,xs:2,key:t},c.a.createElement(b,{weatherInfo:e}))}));return c.a.createElement("li",{className:"city-weather"},c.a.createElement("h1",{className:"city-name"},t),c.a.createElement(y.a,{container:!0,spacing:1},a))},N=function(e){var t=e.cityList.map((function(e,t){var a=e.name,n=e.forecasts;return c.a.createElement(j,{key:t,name:a,forecasts:n})}));return c.a.createElement("div",{className:"city-display"},c.a.createElement("ul",null,t))},S=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)([]),m=Object(u.a)(s,2),d=m[0],p=m[1],h=function(e){var t="lat=".concat(e.coords[0],"&lon=").concat(e.coords[1]);fetch("".concat("https://api.openweathermap.org/data/2.5/","onecall?").concat(t).concat("&exclude=current,minutely,daily","&appid=").concat("85605c622914f5dad8bccbb102c2769c")).then((function(e){if(e.ok)return e;var t="".concat(e.status," (").concat(e.statusText,")");throw new Error(t)})).then((function(e){return e.json()})).then((function(t){var a=t.hourly.map(v),n=[].concat(Object(i.a)(d),[Object(l.a)({},e,{forecasts:a})]);p(n)})).catch((function(e){return console.error("Error in fetch: ".concat(e.message))}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"page-title"},"How's the weather over there?"),c.a.createElement(E,{suggestionSelect:function(e,t,a,n){o({name:e,coords:[t,a],forecasts:null})},addCityDisplay:function(){null!==r&&(h(r),o(null))}}),c.a.createElement(N,{cityList:d}))};var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(S,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.07fd5c15.chunk.js.map