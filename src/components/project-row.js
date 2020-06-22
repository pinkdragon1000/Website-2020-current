import React, { Component } from "react";

class ProjRow extends Component {
  render() {
    return this.props.index % 3 <= 0 ? (
      <div className="row">{this.props.children}</div>
    ) : (
      <div>
        {this.props.children}
        {console.log(this.props.children, this.props.index)}
      </div>
    );
  }
}

export default ProjRow;
