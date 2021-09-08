import React, { Component } from "react";

const ListComponent = (props) => {
  return (
    <div>
      {props.items.map((listItem) =>
        !listItem.isPurchased ? (
          <li key={listItem.item}>
            <span>{listItem.item}</span>
          </li>
        ) : null
      )}
    </div>
  );
};

class FormControlClass extends Component {
  state = {
    inputItem: "",
    inputUnits: "",
    inputQuantity: "",

    groceries: [
      {
        item: "Shopping Tote",
        unit: "pounds",
        quantity: 2,
        isPurchased: false,
      },
      {
        item: "",
        unit: "kg",
        quantity: 5,
        isPurchased: true,
      },
    ],
  };

  handleChange = (event) => {
    this.setState({
      inputItem: document.getElementById("item").value,
      inputUnits: document.getElementById("units").value,
      inputQuantity: document.getElementById("quantity").value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((currentState) => {
      return {
        groceries: currentState.groceries.concat([
          {
            item: this.state.inputItem,
            unit: this.state.inputQuantity,
            quantity: this.state.inputQuantity,
            isPurchased: this.state.isPurchased,
          },
        ]),
      };
    });

    document.getElementById("item").value = "";
    document.getElementById("units").value = "";
    document.getElementById("quantity").value = "";

    //  console.log(this.state.groceries)
  };

  render() {
    return (
      <div className="container_of_all">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="items">Items:</label>
          <input
            type="text"
            id="item"
            onChange={this.handleChange}
            value={this.state.item}
          />
          <label htmlFor="units">Unit:</label>
          <input
            type="text"
            id="units"
            onChange={this.handleChange}
            value={this.state.units}
          />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />
          <input type="submit" value="Submit" />
        </form>
        <div className="shopping_list">
          <h5 className="listHeader">List</h5>
          <ListComponent items={this.state.groceries} />
        </div>
      </div>
    );
  }
}

export default FormControlClass;
