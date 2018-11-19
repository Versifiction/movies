import React, { Component } from 'react';

import './App.css';
import Title from '../src/components/Title';
import Select from '../src/components/Select';
import Films from '../src/components/Films';
import Pages from '../src/components/Pages';
import moviesList from '../src/datas/movies';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: moviesList,
      like: false,
      dislike: false,
      selectValue: "all",
    }
  }

  deleteMovie = id => () => {
    const moviesDeleted = this.state.movies.filter(movie => movie.id !== id);
    this.setState({ movies: moviesDeleted });
  }

  handleSelectChange = (event) => {
    this.setState({
      selectValue: event.target.value
    })
  }

  likeMovie = id => () => {
    if (this.state.like !== true) {
      const movieAddLike = moviesList.map(movie => {
        if (movie.id === id) {
          movie.likes = movie.likes + 1;
          return movie;
        }
          return movie;
      });
      this.setState({ movies: movieAddLike, dislike: false, like: true });
    } else if (this.state.like !== true && this.state.dislike === true) {
      const movieAddLike = moviesList.map(movie => {
        if (movie.id === id) {
          movie.dislikes = movie.dislikes - 1;
          movie.likes = movie.likes + 1;
          return movie;
        }
          return movie;
      });
      this.setState({ movies: movieAddLike, like: false, dislike: true });
    }
  }

  dislikeMovie = id => () => {
    if (this.state.dislike !== true) {
      const movieAddDislike = moviesList.map(movie => {
        if (movie.id === id) {
          movie.dislikes = movie.dislikes + 1;
          return movie;
        }
          return movie;
      });
      this.setState({ movies: movieAddDislike, like: false, dislike: true });
    } else if (this.state.dislike !== true && this.state.like === true) {
      const movieAddDislike = moviesList.map(movie => {
        if (movie.id === id) {
          movie.likes = movie.likes - 1;
          movie.dislikes = movie.dislikes + 1;
          return movie;
        }
          return movie;
      });
      this.setState({ movies: movieAddDislike, like: false, dislike: true });
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Title />
        <Select
          moviesList={movies}
          handleChange={this.handleSelectChange}
          />
        <Films
          moviesList={movies}
          state={this.state}
          deleteMovie={this.deleteMovie}
          likeMovie ={this.likeMovie}
          dislikeMovie ={this.dislikeMovie}
        />
        <Pages />
      </div>
    );
  }
}

export default App;
