import React, { Component } from 'react';

class MovieList extends Component {
  render () {
    return (
      <div className='MovieList'>
        <ul>
          <li>
            <input
              type="text"
              value={this.props.name}
              id={this.props.id}
              onChange={this.props.handleEdit}
            />
            <button onClick={this.props.handleDelete}>X</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default MovieList;