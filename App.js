


/*
<div id="parent">
<div id="child">
<h1 id="heading1">head 1</h1>
<h2 id=" heading2">head2</h1>
</div>


*/ 
const parent =React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
[ React.createElement("h1",{id:"heading1"},"this head one"),React.createElement("h2",{id:"heading2"},"heading two")   ]))
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
