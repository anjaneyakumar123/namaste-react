const heading=React.createElement(
"div",
{id:"heading"},
React.createElement("div",
{id:"child"},[
React.createElement("h1",{},"hello world"),
React.createElement("h2",{},"hello world")
])
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);