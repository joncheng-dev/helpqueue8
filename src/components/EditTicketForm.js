import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

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

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditingTicket: PropTypes.func,
};

export default EditTicketForm;
