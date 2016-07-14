import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Radium from "radium"

const styles = {
  example: {
    backgroundColor: "Tomato",
    border: "10px solid Firebrick"
  },
  h1Rolodex: {
    color: "moccasin"
  }
}
@Radium
@connect((state) => {
})
class Rolodex extends Component {

  static propTypes = {
    exampleProps: PropTypes.string
  }

  render () {

    return (
      <div style={styles.example}>
        <h1 style={styles.h1Rolodex}>Rolodex Component</h1>
        <p>{this.props.exampleProps}</p>
      </div>
    )
  }
}

export default Rolodex
