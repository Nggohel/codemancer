import React from "react";

function AboutPage() {
  return (
    <div className="about-page">
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and empower home cooks with a diverse
          collection of recipes, cooking tips, and culinary inspiration.
        </p>
      </div>
      <div className="team-section">
        <h2>Meet the Team</h2>
        <p>
          Receptor is brought to you by a team of passionate food enthusiasts
          and experienced chefs who are dedicated to bringing you the best
          recipes and culinary content.
        </p>
      </div>
      <div className="story-section">
        <h2>Our Story</h2>
        <p>
          Our journey began with a shared love for cooking and a desire to share
          our favorite recipes with the world...
        </p>
      </div>
      <div className="values-section">
        <h2>Our Values</h2>
        <p>
          At Receptor, we believe in authenticity, inclusivity, creativity,
          sustainability, and community.
        </p>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have a question or feedback? We'd love to hear from you! Contact us at
          gohelnidhi15898@gmail.com or fill out the form below.
        </p>
        <from>
          <table>
            <br></br>
            <tr>
              <td>
                <lable>Your Email : </lable>
              </td>
              <td>
                <input type="email" placeholder="Enter your mail"></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td></td>
              <td>
                <textarea
                  placeholder="Enter your question or feedback?"
                  rows={5}
                  cols={50}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit"></input>
              </td>
            </tr>
          </table>
        </from>
      </div>
    </div>
  );
}

export default AboutPage;
