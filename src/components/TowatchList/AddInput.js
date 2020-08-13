import React, { Component } from 'react';

class AddInput extends Component {
  render () {
    return (
      <div className='AddInput'>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <button type='submit'>Add</button>
        </form>
        <p>To Watch list:</p>
      </div>
    );
  }
}

export default AddInput;