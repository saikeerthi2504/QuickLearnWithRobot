import React from 'react';
import "./java.css"
function SpringResources() {
  return (
    <div className='setting'>
      <h1>Spring Learning Resources</h1>
     <div className="card-container">
        <div className="card">
          <a style={{backgroundColor:"pink"}}
            href="https://www.tutorialspoint.com/spring/spring_tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spring Framework Tutorial by TutorialsPoint (PDF)
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"pink"}}
            href="https://docs.spring.io/spring-framework/docs/current/reference/html/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Spring Framework Documentation
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"pink"}}
            href="https://www.javatpoint.com/spring-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javatpoint Spring Tutorial
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"pink"}}
            href="https://spring.io/guides"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spring Guides (Official, step-by-step tutorials)
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"pink"}}
            href="https://github.com/spring-projects/spring-petclinic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spring PetClinic Sample Project (GitHub)
          </a>
      </div>
      </div>
      
      <div class="container py-5">
    <h2 class="text-center mb-4 text-primary fw-bold">Spring Tutorials</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube-nocookie.com/embed/Nv2DERaMx-4?si=ZyDKVMtiifg6It1z&amp;controls=0"  
            title="C Programming Tutorial for Beginners" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Basic for Spring</h5>
            <p class="card-text">Spring basic Introduction</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube-nocookie.com/embed/gJrjgg1KVL4?si=u77AiNnW8KTq3z3I&amp;controls=0" 
            title="C Programming Full Course" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Full Course </h5>
            <p class="card-text">Learn Spring step by step with real examples and exercises.</p>
          </div>
        </div>
      </div>

     
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube-nocookie.com/embed/35EQXmHKZYs?si=qylSLfRhPf63U4ex&amp;controls=0" 
            title="Pointers in C" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Spring  Explained</h5>
            <p class="card-text">Understand the new features and enhancements in Spring.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
    </div>
  );
}

export default SpringResources;
