import React from 'react';

export default function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">About Us</h2>
      <div className="row g-4 justify-content-center">

        <div className="col-md-4">
          <div className="card h-100 shadow-lg border-0 rounded-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">🖌️ About Us</h5>
              <p className="card-text">
                Ramdev Graphics is a creative design studio based in Ahmedabad, specializing in visually captivating materials for weddings and events. We transform emotions into compelling visual stories—from elegant invitations to vibrant posters.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-lg border-0 rounded-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">🎯 Mission</h5>
              <p className="card-text">
                To empower individuals and organizations with exceptional design solutions that reflect their identity, elevate their presence, and ensure every project is a visual success.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-lg border-0 rounded-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">🌟 Vision</h5>
              <p className="card-text">
                To become India’s top creative design studio, known for innovation, quality, and a client-focused approach—constantly evolving with design trends and technology.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
