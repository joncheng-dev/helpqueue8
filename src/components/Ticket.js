import React from "react";

function Ticket(props) {
  return (
    <React.Fragment>
      <hr />
      <div onClick={() => props.onClickingTicket(props.id)}>
        <h3>{props.names}</h3>
        <p>{props.location}</p>
        <p>
          <em>{props.issue}</em>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Ticket;
