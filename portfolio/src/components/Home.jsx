import React from 'react';
import '../App.css'
import img from '../assets/img1.jpg'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-section">
            <h1 className="title">Hi, This is Heena Kousar</h1>
            <h5 className="subtitle">And I'm A MernStack Developer</h5>
            <p className="description">
              Passionate about building amazing web applications with cutting-edge technologies.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center image-section">
            <img src={img} alt="Profile-photo" className="profile-img img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;