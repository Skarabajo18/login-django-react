import React from "react";

const Card = (props) => {
  return (
    <div class="col-lg-6">
      <div class="card mb-4">
        <a href="#!">
          <img class="card-img-top" src={props.imageSrc} alt="..." />
        </a>
        <div class="card-body">
          <div class="small text-muted">January 1, 2023</div>
          <h2 class="card-title h4">Post Title</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla.
          </p>
          <a class="btn btn-primary" href="#!">
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
