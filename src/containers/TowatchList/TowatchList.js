import React, { Component } from 'react';
import AddInput from '../../components/TowatchList/AddInput';
import MovieList from '../../components/TowatchList/MovieList';
import { nanoid } from 'nanoid';

class TowatchList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      movieList: [],
      movie: {
        name: '',
        id: '',
      },
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      movie: {
        name: e.target.value,
        id: nanoid(),
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.movie.name !== '') {
      const newMovies = [...this.state.movieList, this.state.movie];
      this.setState({
        movieList: newMovies,
        movie: {
          name: '',
          id: '',
        },
      });
    }
  };

  handleDelete = (id) => {
    const filteredMovies = this.state.movieList.filter(item => item.id !== id);
    this.setState({
      movieList: filteredMovies,
    });
  };

  handleEdit = (val, id) => {
    const copyList = [...this.state.movieList];
    copyList.map(item => {
      if (item.id === id) {
        item.name = val;
      }
    });
    this.setState({
      movieList: copyList,
    });
  };


  render () {
    return (
      <div>
        <AddInput
          value={this.state.movie.name}
          handleChange={(e) => this.handleChange(e)}
          handleSubmit={(e) => this.handleSubmit(e)}
        />
        {this.state.movieList.map(item => {
          return <MovieList
            key={item.id}
            name={item.name}
            id={item.id}
            handleDelete={() => this.handleDelete(item.id)}
            handleEdit={(e) => this.handleEdit(e.target.value, item.id)}
          />;
        })}
      </div>
    );
  }
}

export default TowatchList;