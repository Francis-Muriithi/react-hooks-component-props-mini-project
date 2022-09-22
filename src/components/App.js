import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <ArticleList id="1" title="Components 101" date= "December 15, 2020" preview="Setting up the building blocks of your site"  minutes= "5"/>
      <ArticleList id="2" title="React Data Flow" date= "December 1, 2020" preview="Passing props is never passé"  minutes= "15"/>
      <ArticleList id="3" title="Function vs Class Components" date="January 1, 1970" preview="React, meet OOJS."  minutes= "47"/>
    </div>
  )
}

export default App;
