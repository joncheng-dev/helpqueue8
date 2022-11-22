import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainTicketList: [],
      selected: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selected !== null) {
      this.setState({
        formShowing: false,
        selected: null,
      });
    } else {
      this.setState((prevState) => ({
        formShowing: !prevState.formShowing,
      }));
    }
  };

  handleAddNewTicket = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      formShowing: false,
      mainTicketList: newMainTicketList,
    });
  };

  handleSelectTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter((ticket) => ticket.id === id)[0];
    this.setState({
      selected: selectedTicket,
    });
  };

  handleEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleEditTicket = (editedTicket) => {
    const newMainTicketList = this.state.mainTicketList.filter((ticket) => this.state.selected.id !== ticket.id).concat(editedTicket);
    this.setState({
      formShowing: false,
      mainTicketList: newMainTicketList,
      selected: null,
      editing: false,
    });
  };

  handleDeleteTicket = () => {
    const newMainTicketList = this.state.mainTicketList.filter((ticket) => this.state.selected.id !== ticket.id);
    this.setState({
      formShowing: false,
      mainTicketList: newMainTicketList,
      selected: null,
      editing: false,
    });
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyDisplayed = <EditTicketForm ticket={this.state.selected} onEditingTicket={this.handleEditTicket} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.selected !== null) {
      currentlyDisplayed = (
        <TicketDetail ticket={this.state.selected} onClickingEdit={this.handleEditClick} onClickingDelete={this.handleDeleteTicket} />
      );
      buttonText = "Return to Ticket List";
    } else if (this.state.formShowing) {
      currentlyDisplayed = <NewTicketForm onAddingNewTicket={this.handleAddNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplayed = <TicketList ticketList={this.state.mainTicketList} onSelectingTicket={this.handleSelectTicket} />;
      buttonText = "Create New Help Ticket";
    }

    return (
      <React.Fragment>
        {currentlyDisplayed}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
