import React from "react";

function Ticket(props) {
  return (
    <React.Fragment>
      <hr />
      <h3>{props.names}</h3>
      <p>{props.location}</p>
      <p>
        <em>{props.issue}</em>
      </p>
    </React.Fragment>
  );
}

export default Ticket;
