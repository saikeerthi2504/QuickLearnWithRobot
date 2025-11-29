import React from 'react';
import "./java.css"
function ReactResource() {
  return (
    <div className='setting'>
      <h1>React Learning Resources</h1>
     
        <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://react.dev/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official React Documentation (Interactive Tutorial)
          </a>
        </div>
          <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS Tutorial by TutorialsPoint (PDF)
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS Official Getting Started Guide
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://www.programiz.com/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Programiz ReactJS Tutorial (Web-based)
          </a>
        </div>
       <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://github.com/vasanthk/react-beginners-book"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Beginners Book (GitHub Repository)
          </a>
       </div>

       <div class="container py-5">
    <h2 class="text-center mb-4 text-primary fw-bold">React Tutorials</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/s2skans2dP4?si=fFT5Q7zisyh1eCaU" 
            title="C Programming Tutorial for Beginners" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">React for Beginners</h5>
            <p class="card-text">A complete introduction to the React for beginners.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/SqcY0GlETPk?si=HK0YncNPHOJ8tv1K&amp;controls=0" 
            title="C Programming Full Course" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">React Full Course</h5>
            <p class="card-text">Learn React step by step with real examples and exercises.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
         <iframe width="100%" height="200" src="https://www.youtube-nocookie.com/embed/QFaFIcGhPoM?si=-ay0-FhmgLpTfq-I&amp;controls=0"
          title="YouTube video player" frameborder="0" allowfullscreen></iframe> 
          <div class="card-body">
            <h5 class="card-title">FullCourse Explained</h5>
            <p class="card-text">Understand how  work in React and how to use them efficiently.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
    </div>
  );
}

export default ReactResource;
