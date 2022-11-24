import React from "react";
import PropTypes from "prop-types";

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

Ticket.propTypes = {
  onClickingTicket: PropTypes.func,
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
};

export default Ticket;
