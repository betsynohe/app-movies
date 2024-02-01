import React from "react";
import { Container, Image } from "react-bootstrap";
import SpinnerGif from '../assets/gif-spinner.gif';

const SpinnerMovie = () => {
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center mt-5">
        <Image src={SpinnerGif} alt="Loading..." className="w-50px lg:w-100px" />
      </div>
    </Container>
  );
}

export default SpinnerMovie;
