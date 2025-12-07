import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Resume(){
return(
<>
<div className="container py-5">
  <div className="resume-card mx-auto" style={{ maxWidth: 900 }}>
    {/* Header */}
    <div className="text-center mb-4">
      <h1 className="fw-bold">Darshan Wagheshvari</h1>
      <div className="d-flex flex-column align-items-center mt-2">
        <div className="info-item">
          <strong>Phone:</strong> +91 83203 67605
        </div>
        <div className="info-item">
          <strong>Email:</strong> darshanwagheshvari12@gmail.com
        </div>
        <div className="info-item">
          <strong>Location:</strong> Bhavnagar, Gujarat, India
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container py-5">
  {/* Professional Summary */}
  <div className="mb-4">
    <div className="section-title">Professional Summary</div>
    <p>
      Motivated and detail-oriented Information Technology Diploma graduate with
      strong foundational skills in programming, problem-solving, and
      communication. Seeking an entry-level Full Stack Developer role in a
      growth-focused IT organization where I can apply my technical knowledge,
      contribute to team success, and continue advancing my skills in modern web
      development.
    </p>
  </div>
  {/* Skills */}
  <div className="mb-4">
    <div className="section-title">Technical Skills</div>
    <ul>
      <li>
        <strong>Programming Languages:</strong> HTML, CSS, Bootstrap,
        JavaScript, MERN
      </li>
      <li>
        <strong>Web Development:</strong> Full Stack Development training in
        progress
      </li>
      <li>
        <strong>Problem Solving:</strong> Logical analysis and creating
        efficient solutions
      </li>
    </ul>
  </div>
  {/* Education */}
  <div className="mb-4">
    <div className="section-title">Education</div>
    <ul>
      <li>
        <strong>Diploma in Information Technology</strong> — Bhavsinhji
        Polytechnic Institute (2024)
      </li>
      <li>
        <strong>Secondary School Certificate (SSC)</strong> — Saint Marry’s High
        School (2021)
      </li>
    </ul>
  </div>
  {/* Certifications */}
  <div className="mb-4">
    <div className="section-title">Certifications &amp; Training</div>
    <ul>
      <li>Full Stack Developer Course — In Progress</li>
    </ul>
  </div>
  {/* Core Competencies */}
  <div className="mb-4">
    <div className="section-title">Core Competencies</div>
    <ul>
      <li>Excellent verbal and written communication</li>
      <li>Strong team collaboration; experienced working cross-functionally</li>
      <li>Leadership ability with proven experience motivating teams</li>
      <li>Efficient task management under pressure</li>
    </ul>
  </div>
  {/* Career Objective */}
  <div className="mb-4">
    <div className="section-title">Career Objective</div>
    <p>
      To contribute effectively in a dynamic IT environment by applying my
      technical knowledge, growing as a Full Stack Developer, and supporting
      team success through dedication, problem-solving, and continuous
      improvement.
    </p>
  </div>
</div>

</>)

}

root.render(<Resume />);


