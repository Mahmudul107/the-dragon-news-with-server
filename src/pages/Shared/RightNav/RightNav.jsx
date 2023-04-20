import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-4">Login With</h4>
      <Button className="mb-2 px-5" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button className="px-5" variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup className="gap-2">
          <ListGroup.Item>
            {" "}
            <FaFacebook className="text-bg-primary rounded-circle" /> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter className="text-bg-primary rounded-circle" /> Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram className="text-bg-info rounded-circle" /> Instagram{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone />
      <div class="position-relative text-center">
        <img class="img-fluid rounded" src={bg} alt="" />
        <div class="position-absolute top-50 start-50 translate-middle mx-auto">
          <h1 class="text-white fw-bold mb-4">Create an Amazing Newspaper</h1>
          <p>
            <small class="text-white">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </small>
          </p>
          <button class="btn btn-danger">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
