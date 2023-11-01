import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
// import NewsList from "./news_list";

const App = () => (
    <div>
        <Header/>
        {/* <NewsList/> */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)