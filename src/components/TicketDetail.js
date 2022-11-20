import React from "react";

function TicketDetail(props) {
  const { ticket } = props;
  return (
    <React.Fragment>
      <h2>Ticket Detail</h2>
      <h3>{ticket.names}</h3>
      <p>{ticket.location}</p>
      <p>
        <em>{ticket.issue}</em>
      </p>
    </React.Fragment>
  );
}

export default TicketDetail;
