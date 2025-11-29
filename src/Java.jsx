import React from "react";
import "./java.css";

function Java() {
  return (
    <div className="setting">
      <h1>Java Learning Resources</h1>
      <div className="card-container">
        <div className="card">
          <a
            href="https://www.tutorialspoint.com/java/java_tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Java Tutorial by TutorialsPoint (PDF)
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teach Yourself Java in 21 Days (PDF)
          </a>
        </div>

        <div className="card">
          <a
            href="https://yourlogix.wordpress.com/wp-content/uploads/2016/10/java-a-beginners-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Java™ - A Beginner's Guide (PDF)
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.cp.eng.chula.ac.th/books/wp-content/uploads/sites/5/2018/01/java101.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning Java with Examples (PDF)
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Programming Using Java (PDF)
          </a>
        </div>
      </div>

      
      <div class="container py-5">
    <h2 class="text-center mb-4 text-primary fw-bold">Java Tutorials</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/SuaaihAwaaQ?si=S4F0e5eLJk3dSZnI" 
            title="C Programming Tutorial for Beginners" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Basic for Java</h5>
            <p class="card-text">Java basic Intro and data types.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/G2nt3wt02XI?si=jQOLpoSsro1yjHKE" 
            title="C Programming Full Course" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Exceptions</h5>
            <p class="card-text">Exceptions Handling in Java</p>
          </div>
        </div>
      </div>

     
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/Klet3haFX74?si=7-HxT_djOhXO4o0b" 
            title="Pointers in C" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Java 8 Explained</h5>
            <p class="card-text">Understand the new features and enhancements in Java 8.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
    </div>
  );
}

export default Java;
