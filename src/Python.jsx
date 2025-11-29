import React from "react";
import "./java.css";
function Python() {
  return (
    <div className="setting">
      <h1>Python Learning Resources</h1>
      <div className="card-container">
        <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://www.tutorialspoint.com/python/python_tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python Tutorial by TutorialsPoint (PDF)
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://www.learnpython.org/static/learnpython_guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Python Interactive Guide (PDF)
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://www.programiz.com/sites/programiz/files/python-programming.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Programiz Python Programming (PDF)
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://www.w3schools.com/python/python_pdf.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools Python Tutorial (PDF)
          </a>
        </div>
       <div className="card">
          <a style={{backgroundColor:"orange"}}
            href="https://www.cs.cmu.edu/~112/schedule/Spring19/notes/python/PythonNotes.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CMU Python Notes (PDF)
          </a>
       </div>
      </div>
      
      <div class="container py-5">
    <h2 class="text-center mb-4 text-primary fw-bold">Python Tutorials</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/pIiKuPhPl0A?si=9MfFv0dfZw_yWc-9" 
            title="C Programming Tutorial for Beginners" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Python for Beginners</h5>
            <p class="card-text">A complete introduction to the python for beginners.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/4LLREJHp8FQ?si=CLcZ1oCShPTL9bvp" 
            title="C Programming Full Course" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">python second edition</h5>
            <p class="card-text">Learn Python step by step with real examples and exercises.</p>
          </div>
        </div>
      </div>

     
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/_uQrJ0TkZlc?si=-VpoYpDGJSA96RfY" 
            title="Pointers in C" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Full python</h5>
            <p class="card-text">Understand how the python, how to use them efficiently.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
    </div>
  );
}

export default Python;
