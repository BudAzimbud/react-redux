import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function ButtonBackComponent() {
  return (
    <Link to={"/"}>
      <Button color="dark" className="mr-2">
        Back
      </Button>
    </Link>
  );
}

export default ButtonBackComponent;
