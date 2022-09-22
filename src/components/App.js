import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";


const posts= [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ]
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <h1>My Articles List</h1>
      {posts.map((post) => {
          const {title, date, minutes, preview}= post;
          return(
            <ArticleList title={title} date={date} minutes={minutes} preview={preview}/>
          )
          
      })}
      </div>
)}

export default App;
