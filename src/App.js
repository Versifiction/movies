import React, { Component } from 'react';

import './App.css';
import Title from '../src/components/Title';
import SelectCategory from '../src/components/SelectCategory';
import Films from '../src/components/Films';
import SelectPages from '../src/components/SelectPages';
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
      selectCategoryValue: "all",
      currentPage: 1,
      itemsPerPage: 3,
    };
    this.getNextPage = this.getNextPage.bind(this);
    this.getPreviousPage = this.getPreviousPage.bind(this);
    this.goToPage = this.goToPage.bind(this);
  }

  deleteMovie = id => () => {
    const moviesDeleted = this.state.movies.filter(movie => movie.id !== id);
    this.setState({ movies: moviesDeleted });
  }

  getNextPage = () => {
    let state = this.state;
    if (state.currentPage < 3) {
      this.setState({
        currentPage: state.currentPage + 1,
      });
    }
  }

  getPreviousPage = () => {
    let state = this.state;
    if (state.currentPage > 1) {
      this.setState({
        currentPage: state.currentPage - 1,
      });
    }
  }

  goToPage = (val) => {
    this.setState({
      currentPage: val,
    });
  }

  handleSelectCategoryChange = (event) => {
    this.setState({
      selectCategoryValue: event.target.value
    })
  }

  handleSelectPagesChange = (event) => {
    this.setState({
      itemsPerPage: event.target.value
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
    const { movies, currentPage, itemsPerPage } = this.state;
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    console.log('currentpage: ' + currentPage);
    console.log('itemsperpage: ' + itemsPerPage);
    console.log('idnexoffirstmovie: ' +indexOfFirstMovie);
    console.log('indexoflastmovie: ' +indexOfLastMovie);
    console.log(currentMovies);

    return (
      <div className="App">
        <Title />
        <SelectCategory
          moviesList={movies}
          handleCategoryChange={this.handleSelectCategoryChange}
        />
        <Films
          moviesList={movies}
          currentMovies={currentMovies}
          state={this.state}
          deleteMovie={this.deleteMovie}
          likeMovie={this.likeMovie}
          dislikeMovie={this.dislikeMovie}
        />
        <SelectPages
          filmsPerPages={this.filmsPerPages}
          handlePagesChange={this.handleSelectPagesChange}
        />
        <Pages
          moviesList={movies}
          currentMovies={currentMovies}
          currentPage={currentPage}
          getNextPage={this.getNextPage}
          getPreviousPage={this.getPreviousPage}
          goToPage={this.goToPage}
          itemsPerPage={itemsPerPage}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
