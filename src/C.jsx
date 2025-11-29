import React from 'react';
import "./java.css";
function C() {
  return (
    <div className='setting'>
      <h1>C Programming Resources</h1>
      <div className="card-container">
        <div className="card">
          <a style={{backgroundColor:"white"}}
            href="https://vardhaman.org/wp-content/uploads/2021/03/CP.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
             C Programming
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"white"}}
            href="https://www.phys.uconn.edu/~rozman/Courses/P2200_13F/downloads/TheBasicsofCProgramming-draft-20131030.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
           The Basics of C Programming
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"white"}}
            href="https://markburgess.org/CTutorial/C-Tut-4.02.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
           C Programming Tutorial (4th Edition)
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"white"}}
            href="https://beej.us/guide/bgc/pdf/bgc_usl_c_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beej's Guide to C Programming
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"white"}}
            href="https://richardson.byu.edu/624/fall_2020/c-tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            The GNU C Programming Tutorial
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"white"}}
            href="https://progforperf.github.io/Expert_C_Programming.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expert C Programming: Deep C Secrets
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"white"}}
            href="https://seriouscomputerist.atariverse.com/media/pdf/book/C%20Programming%20Language%20-%202nd%20Edition%20%28OCR%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            The C Programming Language
          </a>
        </div>
      </div>

      
      <div class="container py-5">
    <h2 class="text-center mb-4 text-primary fw-bold">C Language Tutorials</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/KJgsSFOSQv0" 
            title="C Programming Tutorial for Beginners" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">C Programming for Beginners</h5>
            <p class="card-text">A complete introduction to the C programming language for beginners.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/irqbmMNs2Bo?si=w-XjGtaiSnSf954A"
            title="C Programming Full Course" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">C Programming Full Course</h5>
            <p class="card-text">Learn C programming step by step with real examples and exercises.</p>
          </div>
        </div>
      </div>

     
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/87SH2Cn0s9A"
            title="Pointers in C" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Pointers Explained</h5>
            <p class="card-text">Understand how pointers work in C and how to use them efficiently.</p>
          </div>
        </div>
      </div>

    </div>
  </div>

    </div>
  );
}

export default C;
