import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Homer and Bart",
      location: "Moe's",
      issue: "Out of beer",
    },
    {
      names: "Marge and Lisa",
      location: "Try 'n Save",
      issue: "Car keys lost",
    },
  ];
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
