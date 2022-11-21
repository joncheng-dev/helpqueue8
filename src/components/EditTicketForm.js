import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  const { ticket } = props;

  function collectUserInput(event) {
    event.preventDefault();

    props.onEditingTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id,
    });
  }

  return (
    <React.Fragment>
      <h3>Edit Ticket</h3>
      <ReusableForm onClickingSubmit={collectUserInput} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;
