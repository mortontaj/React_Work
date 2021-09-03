/// Collaborated with Taj and Yasmine!!

import React, { Component } from "react";

export default class Div3 extends Component{
    state = {
        tardis: {
          name: 'Time and Relative Dimension in Space',
          caps: false,
        }
      }
    flipIt = (text) => {
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }
    render() {
        return (
            <div>
                <div>
                    <h3 onClick={() => this.flipIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
                </div>
                <div>
                    <h3 onClick={() => this.props.change(this.props.name)}>{this.props.name}</h3>
                </div>
            </div>
        )
    }
}