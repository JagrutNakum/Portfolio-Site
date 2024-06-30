import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize : "1.2em"}}>
            Hi Everyone, I am{" "}
            <span className="purple" style={{ fontSize: "1.3em" }}>
              Jagrut Nakum{" "}
            </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            <br />A third-year B.E. Information Technology student at GEC
            Gandhinagar. Currently, I'm honing my skills in <span className="purple" style={{ fontSize: "1.1em" }}>MERN Stack</span> and DSA.
            Apart from coding, I love reading, traveling, writing, and sometimes
            doing nothing.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
