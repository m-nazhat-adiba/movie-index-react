import React from "react";

export default function Banner() {
  return (
    <div className="myCarousel">
      <img className="banner" src="/src/assets/harry-potter-hbp.png"></img>
      <div className="vignette">
        <div className="myCarousel-overlay">
          <div className="myCarousel-text">
            <h1>Harry Potter and The Half Blood Prince</h1>
            <p>
              As Death Eaters wreak havoc in both Muggle and Wizard worlds,
              Hogwarts is no longer a safe haven for students. Though Harry
              (Daniel Radcliffe) suspects there are new dangers lurking within
              the castle walls, Dumbledore is more intent than ever on preparing
              the young wizard for the final battle with Voldemort. Meanwhile,
              teenage hormones run rampant through Hogwarts, presenting a
              different sort of danger. Love may be in the air, but tragedy
              looms, and Hogwarts may never be the same again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
