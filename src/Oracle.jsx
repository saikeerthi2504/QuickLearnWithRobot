import React from 'react';
import "./java.css";

function Oracle() {
  return (
    <div className='setting'>
      <h1>Oracle Learning Resources</h1>
      <div className="card-container">
        <div className="card">
          <a
            href="https://www.tutorialspoint.com/oracle/oracle_tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oracle Tutorial by TutorialsPoint (PDF)
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.oracle.com/a/ocom/docs/database/pdf/oracle-database-12c-sql.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oracle Database 12c: SQL Fundamentals (PDF)
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.oracle.com/a/ocom/docs/database/pdf/oracle-plsql-tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oracle PL/SQL Tutorial (PDF)
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.cs.virginia.edu/~evans/cs1120/oldoracle.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oracle SQL Programming Notes
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.guru99.com/oracle-tutorials.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guru99 Oracle Tutorials (Web-based)
          </a>
        </div>
      </div>

      
      <div class="container py-5">
    <h2 class="text-center mb-4 text-primary fw-bold">Oracle Tutorials</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/ibOzwFRm32w?si=4Gv-wWvMKYPlORgk"
            title="C Programming Tutorial for Beginners" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Oracle for Beginners</h5>
            <p class="card-text">A complete introduction to the Oracle for beginners.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/ObbNGhcxXJA?si=GgyGiaBDeeCoGx_I&amp;controls=0"  
            title="C Programming Full Course" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Oracle Full Course</h5>
            <p class="card-text">Learn Oracle step by step with real examples and exercises.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/QHYuuXPdQNM?si=uLmuMy5AHaksitS9" 
            title="Pointers in C" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">FullCourse Explained</h5>
            <p class="card-text">Understand how  work in Oracle and how to use them efficiently.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
    </div>
  );
}

export default Oracle;
