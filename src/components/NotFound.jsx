import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styles/NotFound.scss";

const NotFound = () => {
  const { push } = useHistory();
  return (
    <div className="not-found">
      <div className="container">
        <h1>404</h1>
        <p>Ooop! Looks like you got lost.</p>
        <Button content="Go Back" onClick={() => push('/')} />
      </div>
    </div>
  );
};

export default NotFound;
