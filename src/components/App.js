import React from 'react'
import moviesData from '../moviesData'
import MovieItem from './MovieItem.js'

// UI = fn(state, props);

console.log(moviesData)

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: moviesData,
      movieWillWatch: [],
    }
    // this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id
    })

    const inMovieWillWatch = this.state.movieWillWatch.filter(function (item) {
      return item.id !== movie.id
    })

    console.log('Есть ли он в просмотрах ', inMovieWillWatch)
    console.log(updateMovies)
    this.setState({
      movies: updateMovies,
    })
  }

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.movieWillWatch.filter(function (
      item
    ) {
      return item.id !== movie.id
    })
    this.setState({
      movieWillWatch: updateMoviesWillWatch,
    })
  }

  addMovieToWillWatch = (movie) => {
    console.log(movie.title)
    const updateMoviesWillWatch = [...this.state.movieWillWatch, movie]

    this.setState({
      movieWillWatch: updateMoviesWillWatch,
    })
  }

  render() {
    console.log(this)
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.movieWillWatch.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
