import React from "react";
import Ticket from "./Ticket";

function TicketList(props) {
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      {props.ticketList.map((ticket) => (
        <Ticket onClickingTicket={props.onSelectingTicket} names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
      <hr />
    </React.Fragment>
  );
}

export default TicketList;
