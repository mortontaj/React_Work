/// Collaborated with Silifat and Yasmine!!

import React, { Component } from "react";
import Div3 from "./DivThree";

export default class Div2 extends Component {
    render() {
        return (
            <div>
                <Div3 name={this.props.name} change={this.props.change} flip={this.flipIt}/>
            </div>
        )
    }
}