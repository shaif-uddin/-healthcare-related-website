import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="container-fluid bg-cover p-5">
      <div className="row p-5 text-white">
        <div className="jumbotron">
          <h1>It's time for better help.</h1>
          <p>Your great smile begins with a great dentist</p>
          <p>
            <Link className="btn btn-lg btn-info" to="/about" role="button">
              Read More »
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
