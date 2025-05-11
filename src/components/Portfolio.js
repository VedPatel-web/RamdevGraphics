import React from 'react';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";
import img9 from "./images/img9.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Portfolio(props) {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ fontFamily: "cursive" }}>
        {props.heading}
      </h1>
      <div className="row g-4">
        {images.map((img, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img src={img} alt={`Portfolio ${index + 1}`} className="card-img-top img-fluid rounded-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
