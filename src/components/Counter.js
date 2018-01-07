import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { increment } from '../AC'

class Counter extends React.Component {

  render() {
    return (
      <div className='container'>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment me</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.props.increment()
  }

}


Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func
}


export default connect(state => ({ counter: state.count }), { increment })(Counter);