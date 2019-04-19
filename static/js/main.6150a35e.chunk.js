(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},28:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(3),s=t(4),l=t(6),u=t(5),m=t(7),d=t(2),h=t(1);function p(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  width: 80%;\n  margin: 2rem auto;\n  color: ",";\n  @media (max-width: 780px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  > p {\n    margin: 0;\n  }\n"]);return p=function(){return e},e}function f(){var e=Object(d.a)(["\n  color: ",';\n  font-family: "','";\n  font-size: ',";\n  border-radius: 5px;\n  box-sizing: border-box;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  scroll-snap-align: start;\n  overflow: auto;\n  height: 100%;\n  > p {\n    font-family: ",";\n    margin: 0;\n    > a {\n      margin: 0 0.5rem;\n    }\n  }\n"]);return f=function(){return e},e}var g=h.c.div(f(),function(e){return e.theme.text},function(e){return e.theme.mainFont},function(e){return e.theme.pSize},function(e){return e.theme.subFont}),v=h.c.div(p(),function(e){return e.theme.accent}),b=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=["Javascript","React","Redux","Node","Express","SQL","MongoDB","Jest","Enzyme","jQuery"].map(function(e,n){return a.a.createElement("p",{key:n},e)});return a.a.createElement(g,{id:"about"},a.a.createElement("h1",null,"Hi my name is ",a.a.createElement("span",{style:{color:"#ff9007"}},"Brian")),a.a.createElement("p",null,"I'm from the Bay Area and I'm a full stack web developer specializing in React."),a.a.createElement("p",null,"Find me here:",a.a.createElement("a",{href:"https://github.com/brianqian/",rel:"noopener noreferrer",target:"_blank"},a.a.createElement("img",{src:"./img/social_icons/GitHub-Light-64px.png",height:"30px",alt:""})),a.a.createElement("a",{href:"https://www.linkedin.com/in/brian-qian/",rel:"noopener noreferrer",target:"_blank"},a.a.createElement("img",{src:"./img/social_icons/In-White-41px.png",height:"30px",alt:""}))),a.a.createElement(v,null,e),a.a.createElement("p",null,"I've always been drawn to complicated systems and how they work. My passion for problem solving and optimizing systems are what led me to computer engineering. I'm always looking to learn more to become a better programmer. Currently I'm working on picking up Postgres, GraphQL, and making an online Codenames based game. I've always liked to build things by hand; if I can avoid using a library, I'd prefer to do make it myself."))}}]),n}(r.Component);function w(){var e=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin: 0.5rem 0;\n  > a {\n    height: 100%;\n    display: flex;\n    margin: 0 1rem;\n    align-items: center;\n    text-decoration: none;\n    > p {\n      font-size: 0.75em;\n      color: ",";\n      margin: 0 0.5rem;\n      :hover {\n        color: ",";\n      }\n    }\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n  align-items: end;\n  @media (max-width: 780px) {\n    grid-template-columns: 1fr;\n  }\n  > img {\n    margin: 1.5rem 0 0 0;\n    box-sizing: border-box;\n    width: 100%;\n    max-height: 150px;\n    object-fit: contain;\n    position: relative;\n    left: 0;\n    top: 0;\n    @media (max-width: 780px) {\n      margin: 0;\n      display: none;\n      :nth-child(1) {\n        display: block;\n      }\n    }\n  }\n"]);return y=function(){return e},e}function x(){var e=Object(d.a)(["\n  font-family: ",";\n  align-self: center;\n  margin: 1rem 0;\n"]);return x=function(){return e},e}function E(){var e=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  cursor: default;\n  > p {\n    display: none;\n    font-size: 0.65em;\n    @media (max-width: 780px) {\n      display: block;\n    }\n  }\n  > span {\n    background-color: ",";\n    font-size: 0.65em;\n    border-radius: 3px;\n    padding: 4px 8px;\n    margin: 0 5px;\n    @media (max-width: 780px) {\n      display: none;\n    }\n  }\n"]);return E=function(){return e},e}function j(){var e=Object(d.a)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  min-width: 100%;\n  max-width: 100%;\n  scroll-snap-align: start;\n  display: flex;\n  flex-direction: column;\n  > h1 {\n    margin: 0;\n  }\n"]);return j=function(){return e},e}var k=h.c.div(j(),function(e){return e.theme.mainFont},function(e){return e.theme.pSize},function(e){return e.theme.text}),O=h.c.div(E(),function(e){return e.theme.accent}),S=h.c.div(x(),function(e){return e.theme.subFont}),z=h.c.div(y()),C=h.c.div(w(),function(e){return e.theme.text},function(e){return e.theme.accent}),L=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.stack,r=e.description,o=e.gitURL,i=e.deployURL,c=e.img1,s=e.img2,l=e.img3,u=t.map(function(e,t){return a.a.createElement("span",{key:"".concat(n,"-").concat(t)},e)}),m=[a.a.createElement("p",{key:n},"Built with: ",t.join(", "))];return a.a.createElement(k,null,a.a.createElement("h1",null,n," "),a.a.createElement(O,null,u,m),a.a.createElement(z,{onClick:this.onClick},c&&a.a.createElement("img",{src:c,alt:""}),s&&a.a.createElement("img",{src:s,alt:""}),l&&a.a.createElement("img",{src:l,alt:""})),a.a.createElement(C,null,a.a.createElement("a",{href:o,rel:"noopener noreferrer",target:"_blank"},a.a.createElement("img",{src:"./img/social_icons/GitHub-Light-64px.png",height:"14px",alt:""}),a.a.createElement("p",null,"view code")),a.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},a.a.createElement("img",{src:"./img/internet.svg",height:"14px",alt:""}),a.a.createElement("p",null,"view deployment"))),a.a.createElement(S,null,r))}}]),n}(r.Component),R=[{title:"nSuns Calculator",stack:["HTML/CSS","Javascript","React","Redux","Node/Express","SQL","Jest","Enzyme"],description:"This is a calculator for the nSuns workout program. Features include interchangeable training and rep maxs, rest timer, workout tracker, mobile responsiveness, and a customizable accessory tracker. This webapp uses React/Redux and Styled Components for the front end with Node and SQL for the backend. The app uses JWT (JSON Web Tokens) to persist user authorization. Tests are written with Jest/Enzyme",img1:"./img/screenshots/nsuns1.png",img2:"./img/screenshots/nsuns2.png",img3:"./img/screenshots/nsuns3.png",gitURL:"https://github.com/brianqian/nsuns-react",deployURL:"http://nsuns-app.herokuapp.com"},{title:"SnackTime",stack:["HTML/CSS","Javascript","React","Node/Express","SQL"],description:"A CRM platform built for parents and caretakers of young children. Snacktime provides a solution for busy parents and daycares by creating an easy way to transfer and log information. I was responsible for building our reused custom components and handling user authentication on the front end. A test account is available using the credentials admin@example.org / password",img1:"./img/screenshots/snacktime1.png",img2:"./img/screenshots/snacktime2.png",img3:"./img/screenshots/snacktime3.png",gitURL:"https://github.com/brianqian/SnackTime",deployURL:"http://timetosnack.herokuapp.com"},{title:"DevLab",stack:["HTML/CSS","Javascript","jQuery","Node/Express","SQL"],description:"DevLab is a collaborative resource dedicated to help people learn web development. Resources are pooled into a library where individual users can save content to their own library. Each time content is saved, it's ranked to provide easy access to the most popular resources. I was responsible for our initial idea, our front end structure and API calls, and our database models. You can try a pre-loaded library with the following credentials: admin@example.org / password",img1:"./img/screenshots/devlab1.png",img2:"./img/screenshots/devlab2.png",img3:"./img/screenshots/devlab3.png",gitURL:"https://github.com/sajeelmalik/Dev-Lab",deployURL:"http://devlab.herokuapp.com/"},{title:"EventSpotter",stack:["HTML/CSS","Javascript","jQuery"],description:"EventSpotter uses both the Spotify API and SeatGeek API to provide upcoming tour dates for your favorite artists or to search by location. Spotify allows the user to listen to artists during your search. A calendar is also provided to help the user plan their dates. I was responsible for our front end design and our API calls. As a first project I wanted to use this opportunity to learn CSS Grid and get more exposure to jQuery.",img1:"./img/screenshots/eventspotter1.png",img2:"./img/screenshots/eventspotter2.png",img3:"./img/screenshots/eventspotter3.png",gitURL:"https://github.com/brianqian/SpotifyEvents",deployURL:"https://brianqian.github.io/SpotifyEvents/"},{title:"Google Books API",stack:["HTML/CSS","Javascript","React","HTML","CSS","Node"],description:"A project done for 8th Light. A basic application that searches the Google Books API and cross references searches with Wikipedia. This project is built with React and ",img1:"./img/screenshots/books1.png ",img2:"",img3:"",gitURL:"https://github.com/brianqian/8thlight-react",deployURL:"http://bq-8thlight-react.herokuapp.com"}];function H(){var e=Object(d.a)(["\n  padding: 0 2em;\n  color: ",";\n  font-family: ",";\n  display: flex;\n  max-width: 100%;\n  user-select: none;\n  justify-content: space-evenly;\n  margin: 1rem 0;\n  > * {\n    cursor: pointer;\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  @media (max-width: 780px) {\n    padding: 0;\n  }\n"]);return H=function(){return e},e}var I=h.c.div(H(),function(e){return e.theme.text},function(e){return e.theme.mainFont});var T=function(e){var n=e.children;return a.a.createElement(I,null,n)};function M(){var e=Object(d.a)(["\n  color: ",";\n  text-decoration: ",";\n"]);return M=function(){return e},e}function A(){var e=Object(d.a)(["\n  margin: 0;\n  scroll-snap-type: x mandatory;\n  display: flex;\n  width: 100%;\n  overflow: auto;\n  height: 90%;\n"]);return A=function(){return e},e}function P(){var e=Object(d.a)(["\n  max-width: 100%;\n  min-height: 100%;\n  grid-row: 2;\n  grid-column: 2;\n  overflow: auto;\n  scroll-snap-align: start;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 780px) {\n    grid-column: 1;\n  }\n"]);return P=function(){return e},e}var U=h.c.div(P()),V=h.c.div(A()),B=h.c.span(M(),function(e){return e.selected?e.theme.accent:e.theme.text},function(e){return e.selected?"underline":"none"}),J=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={selectedProject:0,numOfProjects:0,prevWidth:0},t.componentDidMount=function(){t.setState({numOfProjects:R.length}),window.addEventListener("resize",t.onResize)},t.componentWillUnmount=function(){window.removeEventListener("resize")},t.onResize=function(){var e=document.getElementById("portfolio"),n=document.getElementById("content"),r=t.state,a=r.prevWidth,o=r.numOfProjects,i=r.selectedProject,c=e.scrollWidth;if(!(c<a+50&&c>a-50)){var s=e.scrollWidth/o;e.scrollLeft=s*i;var l=n.scrollHeight/3;n.scrollTop=l*t.props.currentPage,t.setState({prevWidth:e.scrollWidth})}},t.onScroll=function(e){e.stopPropagation();var n=e.target,r=n.scrollWidth/n.scrollLeft,a=Math.round(R.length/r);a!==t.state.selectedProject&&t.setState({selectedProject:a})},t.navBarOnClick=function(e){var n=document.getElementById("portfolio"),r=n.scrollWidth,a=t.state,o=a.selectedProject,i=r/a.numOfProjects*(e-o);n.scrollBy({left:i,behavior:"smooth"})},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=[],t=[];return R.forEach(function(r,o){n.push(a.a.createElement(B,{onClick:function(){return e.navBarOnClick(o)},selected:e.state.selectedProject===o,key:"project-title-".concat(o)},r.title)),t.push(a.a.createElement(L,Object.assign({},r,{key:"project-".concat(o)})))}),a.a.createElement(U,null,a.a.createElement(T,null,n),a.a.createElement(V,{id:"portfolio",onScroll:this.onScroll},t))}}]),n}(r.Component);function F(){var e=Object(d.a)(["\n  margin: 0;\n  width: 3rem;\n  display: flex;\n  grid-row: 1;\n  overflow: hidden;\n  max-height: 100%;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  flex-direction: column;\n  @media (max-width: 780px) {\n    grid-column: 2;\n  }\n  > li {\n    list-style: none;\n    padding: 1rem 0;\n    > img {\n      cursor: pointer;\n    }\n  }\n"]);return F=function(){return e},e}var W=h.c.div(F());var G=function(e){var n=e.selected,t=e.scrollFn;return a.a.createElement(W,null,a.a.createElement("li",null,a.a.createElement("img",{onClick:function(){return t(0)},src:"./img/circle-".concat(0===n?"fill":"outline","-white.svg"),height:"20em",alt:""})),a.a.createElement("li",null,a.a.createElement("img",{onClick:function(){return t(1)},src:"./img/circle-".concat(1===n?"fill":"outline","-white.svg"),height:"20em",alt:""})),a.a.createElement("li",null,a.a.createElement("img",{onClick:function(){return t(2)},src:"./img/circle-".concat(2===n?"fill":"outline","-white.svg"),height:"20em",alt:""})))},Q=t(15);function q(){var e=Object(d.a)(["\n  padding: 5px 8px;\n  color: ",";\n  border: 1px solid ",";\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 0.55em;\n  margin: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :hover {\n    background-color: white;\n    color: black;\n  }\n"]);return q=function(){return e},e}function D(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: -100%;\n  padding: 1.75rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  user-select: none;\n  align-items: center;\n  font-family: ",";\n  background-color: #00000065;\n  color: ",";\n  transition: all 250ms;\n  ",":hover & {\n    transform: translateY(100%);\n    z-index: 3;\n  }\n  > a {\n    color: ",";\n    text-decoration: none;\n    :hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n"]);return D=function(){return e},e}function N(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #009efa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ",":hover & {\n    opacity: 0.2;\n  }\n"]);return N=function(){return e},e}function _(){var e=Object(d.a)(["\n  height: 200px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n"]);return _=function(){return e},e}function Y(){var e=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n"]);return Y=function(){return e},e}var K=h.c.div(Y()),X=h.c.div(_()),Z=h.c.div(N(),X),$=h.c.div(D(),function(e){return e.theme.subFont},function(e){return e.theme.text},X,function(e){return e.theme.text},function(e){return e.theme.accent}),ee=h.c.div(q(),function(e){return e.theme.text},function(e){return e.theme.text}),ne=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={expandInfo:!1},t.handleClick=function(){t.setState({expandInfo:!t.state.expandInfo})},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state.expandInfo,n=this.props,t=n.title,r=n.description,o=n.subTitle,i=n.subURLs,c=o.map(function(e,n){return a.a.createElement("a",{href:"".concat(i[n]),target:"_blank",rel:"noopener noreferrer"},e)});return a.a.createElement(K,null,a.a.createElement(X,null,a.a.createElement($,null,e&&c,!e&&r,a.a.createElement(ee,{onClick:this.handleClick},e?"Back":"More Info")),a.a.createElement(Z,{style:{backgroundColor:this.props.color}},a.a.createElement("h2",null,t))))}}]),n}(r.Component),te=[{title:"General",description:"A collection of sites that focus on breadth over depth. Each give a brief overview of important concepts",subTitle:["Code Academy","FreeCodeCamp","Front-End Roadmap","MDN Web Docs","Javascript.info"],subURLs:["https://www.codecademy.com/learn/introduction-to-javascript","https://www.freecodecamp.org/","https://github.com/kamranahmedse/developer-roadmap","https://developer.mozilla.org/en-US/","http://javascript.info/"]},{title:"CS50 @ Harvard",description:"David Malan's original CS50 focuses on computer science fundamentals over web development, primarily using C to teach.",subTitle:["Intro to Computer Science","Web Programming with Python and Javascript"],subURLs:["https://www.edx.org/course/cs50s-introduction-to-computer-science","https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"]},{title:"Wes Bos",description:"Wes Bos is an excellent teacher and a developer that has many courses across various fields of web development. Also co-host of the podcast 'Syntax' along with LevelUpTutorials' Scott Tolinski",subTitle:["Learn Redux","Advanced React & GraphQL","CSS Grid","Javascript 30 for 30","Javascript ES6","Flexbox"],subURLs:["https://learnredux.com/","https://advancedreact.com/","https://cssgrid.io/","https://javascript30.com/","https://es6.io/","https://flexbox.io/"]},{title:"Reddit",description:"Reddit's various web development subreddits provide an interactive resource for new and seasoned developers.",subTitle:["/r/webdev","/r/learnjavascript","/r/learnprogramming"],subURLs:["https://www.reddit.com/r/webdev/","https://www.reddit.com/r/learnjavascript/","https://www.reddit.com/r/learnprogramming/"]},{title:"Data Structures & Algorithms",description:"Here are some of the resources I used to practice and learn data structures and algorithms",subTitle:["Algorithms in Javascript","100 top LeetCode Problems","Udemy Course with Stephen Grider","Udemy Course with Colt Steele"],subURLs:["https://github.com/trekhleb/javascript-algorithms","https://www.teamblind.com/article/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU","https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/","https://www.udemy.com/js-algorithms-and-data-structures-masterclass/"]},{title:"Misc.",description:"More useful resources",subTitle:["Open Source React Project","Fisher-Yates Shuffle","Sieve of Eratosthenes","Testing with Jest & Enzyme"],subURLs:["https://react.explore-tech.org/","https://bost.ocks.org/mike/shuffle/","https://www.craigrodrigues.com/blog/the-sieve-of-eratosthenes-in-javascript","https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875"]}];function re(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1rem;\n  margin: 1rem;\n"]);return re=function(){return e},e}function ae(){var e=Object(d.a)(["\n  min-height: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n  scroll-snap-align: start;\n  color: ",";\n  font-family: ",";\n  padding: 1rem;\n  overflow: auto;\n  > p {\n    font-family: ",";\n    font-size: 1.15em;\n    margin: 0;\n  }\n"]);return ae=function(){return e},e}var oe=h.c.div(ae(),function(e){return e.theme.text},function(e){return e.theme.mainFont},function(e){return e.theme.subFont}),ie=h.c.div(re()),ce=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={colors:["#009efa","#91009e","#006941","#fa7000","#a50000","#484e6d"]},t.componentDidMount=function(){for(var e=Object(Q.a)(t.state.colors),n=e.length;n;){var r=Math.floor(Math.random()*n--),a=[e[n],e[r]];e[r]=a[0],e[n]=a[1]}t.setState({colors:e})},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=te.map(function(n,t){return a.a.createElement(ne,Object.assign({color:e.state.colors[t]},n))});return a.a.createElement(oe,null,a.a.createElement("h1",null,"Resource Page"),a.a.createElement("p",null,"I'm personally not a fan of the contact page usually found here. If you want to reach me, I'm on"," ",a.a.createElement("a",{href:"https://www.linkedin.com/in/brian-qian/",rel:"noopener noreferrer",target:"_blank"},"LinkedIn")," ","or email me at qian.brian@gmail.com."),a.a.createElement("p",null,"I thought I would use that space to give a better idea of how I became a programmer by listing some of the resources I've used and currently use."),a.a.createElement(ie,null,n))}}]),n}(r.Component),se={text:"white",accent:"#ff9007",bg:"#263a47",fg:"#0c1821",pSize:"1.25em",mainFont:"Economica",subFont:"Markazi Text"};function le(){var e=Object(d.a)(["\n  min-height: 100%;\n  overflow: auto;\n  scroll-snap-type: y mandatory;\n  grid-column: 2;\n  padding: 0 1rem;\n  @media (max-width: 780px) {\n    grid-column: 1;\n  }\n"]);return le=function(){return e},e}function ue(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 5% 90% 5%;\n  grid-template-rows: 100%;\n  background-color: ",";\n  font-size: ",";\n  text-align: center;\n  align-self: center;\n  justify-self: center;\n  max-height: 95vh;\n  width: 95vw;\n  margin: auto;\n  border-radius: 20px;\n  border: 5px solid ",";\n  box-sizing: border-box;\n  @media (max-width: 780px) {\n    grid-template-columns: 92% 8%;\n    min-width: 100vw;\n    min-height: 100vh;\n    border: none;\n  }\n"]);return ue=function(){return e},e}function me(){var e=Object(d.a)(["\n  background-color: ",";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23648ca7' fill-opacity='0.13'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  background-repeat: repeat;\n  z-index: -1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-height: 100vh;\n  min-width: 100vw;\n"]);return me=function(){return e},e}function de(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n  min-height: 100vh;\n"]);return de=function(){return e},e}function he(){var e=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css?family=Economica|Markazi+Text');\nbody, html{\n  margin: 0;\n\n}\na{\n  color: ",";\n}\n::-webkit-scrollbar{\n  width: 0;\n  background: transparent;\n}\n"]);return he=function(){return e},e}var pe=Object(h.b)(he(),function(e){return e.theme.text}),fe=h.c.div(de()),ge=h.c.div(me(),function(e){return e.theme.bg}),ve=h.c.div(ue(),function(e){return e.theme.fg},function(e){return e.theme.pSize},function(e){return e.theme.text}),be=h.c.div(le()),we=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={selectedSection:0,scrollTop:0,numOfSections:3},t.selectActiveOnScroll=function(e){var n=e.currentTarget,r=n.scrollHeight,a=n.scrollTop,o=r/a,i=Math.round(t.state.numOfSections/o);i!==t.state.selectedSection&&t.setState({selectedSection:i,scrollTop:a})},t.navBarOnClick=function(e){var n=t.state,r=n.selectedSection,a=n.numOfSections,o=document.getElementById("content"),i=(e-r)*(o.scrollHeight/a);o.scrollBy({top:i,behavior:"smooth"})},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(h.a,{theme:se},a.a.createElement(fe,null,a.a.createElement(ge,null),a.a.createElement(pe,null),a.a.createElement(ve,null,a.a.createElement(G,{scrollFn:this.navBarOnClick,selected:this.state.selectedSection}),a.a.createElement(be,{id:"content",onScroll:this.selectActiveOnScroll},a.a.createElement(b,null),a.a.createElement(J,{currentPage:this.state.selectedSection}),a.a.createElement(ce,null)))))}}]),n}(r.Component);i.a.render(a.a.createElement(we,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6150a35e.chunk.js.map