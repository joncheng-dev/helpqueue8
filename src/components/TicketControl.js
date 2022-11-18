import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };
  }

  handleClick = () => {
    this.setState;
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.formShowing) {
      currentlyDisplayed = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplayed = <TicketList />;
      buttonText = "Create New Help Ticket";
    }

    return (
      <React.Fragment>
        {currentlyDisplayed}
        <button>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
