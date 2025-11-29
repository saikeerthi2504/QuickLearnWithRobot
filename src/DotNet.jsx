import React from 'react';
import "./java.css"
function DotNet() {
  return (
    <div className='setting'>
      <h1>.NET Learning Resources</h1>
      <div className="card-container">
        <div className="card">
          <a style={{backgroundColor:"yellow"}}
            href="https://download.microsoft.com/download/8/e/7/8e725d96-7ec3-498b-9fa7-86779aed101f/dotnet%20tutorial%20for%20beginners.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            .NET Tutorial for Beginners by Microsoft
          </a>
        </div>
        <div className="card">
          <a style={{backgroundColor:"yellow"}}
            href="https://www.tutorialspoint.com/asp.net/asp.net_tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASP.NET Tutorial by TutorialsPoint
          </a>
         </div>
       <div className="card">
          <a style={{backgroundColor:"yellow"}}
            href="https://www.tutorialspoint.com/vb.net/vb.net_tutorial.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            VB.NET Tutorial by TutorialsPoint
          </a>
         </div>
       <div className="card">
          <a style={{backgroundColor:"yellow"}}
            href="https://www.halvorsen.blog/documents/programming/csharp/textbook/aspnet/Web%20Programming%20-%20ASP.NET%20Core.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Programming with ASP.NET Core
          </a>
         </div>
      <div className="card">
          <a style={{backgroundColor:"yellow"}}
            href="https://s3.amazonaws.com/recaffeinate-files/LittleAspNetCoreBook.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Little ASP.NET Core Book
          </a>
        </div>
      </div>

      
      <div class="container py-5">
    <h2 class="text-center mb-4 text-primary fw-bold">Dotnet Tutorials</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/8ew1LgfWV6s?si=bUHKYjiGdPOf_imX" 
            title="C Programming Tutorial for Beginners" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Dotnet for Beginners</h5>
            <p class="card-text">A complete introduction to the dotnet for beginners.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/1c0tcb-QTnU?si=Yn97rKYXr56Qiz58&amp;controls=0" 
            title="C Programming Full Course" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">Dotnet Full Course</h5>
            <p class="card-text">Learn dotnet step by step with real examples and exercises.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/skj2ii0pgss?si=kmt9RRirN1mDQI6T"
            title="Pointers in C" frameborder="0" allowfullscreen></iframe>
          <div class="card-body">
            <h5 class="card-title">FullCourse Explained</h5>
            <p class="card-text">Understand how  work in Dotnet and how to use them efficiently.</p>
          </div>
        </div>
      </div>

    </div>
  </div>

    </div>
  );
}

export default DotNet;
