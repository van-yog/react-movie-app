import React from 'react'
import MovieItem from './MovieItem.js'
import WillWatch from './WillWatch.js'
import MoviewTabs from './MovieTabs.js'
import Loader from './Loader.js'

// UI = fn(state, props);

class App extends React.Component {
  constructor() {
    console.log('App->constructor')
    super()

    this.state = {
      movies: [],
      movieWillWatch: [],
      countMoviesWillWatch: 0,
      sort_by: 'revenue.desc',
      isDownload: false,
    }
    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    console.log('App->componentDidMount')
    setTimeout(this.getMovies, 500)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App->componentDidUpdate')

    if (prevState.sort_by !== this.state.sort_by) {
      console.log('call api')
      this.setState({
        isDownload: false,
      })
      setTimeout(this.getMovies, 500)
    }
  }

  getMovies = () => {
    console.log('App->getMovies')
    let api_url =
      'https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397'

    fetch(`${api_url}&sort_by=${this.state.sort_by}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          isDownload: true,
        })
        console.log('App-getMovies->after fetch', this.state.movies)
      })
  }
  removeMovie = (movie) => {
    console.log('App->removeMovie')
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id
    })

    this.setState({
      movies: updateMovies,
    })
  }

  removeMovieFromWillWatch = (movie) => {
    console.log('App->removeMovieFromWillWatch')
    console.log('movieWillWatch', this.state.movieWillWatch)
    const updateMoviesWillWatch = this.state.movieWillWatch.filter(function (
      item
    ) {
      return item.id !== movie.id
    })
    console.log('Mi DOLJNI OBNOVIT STATE I PERERISOVAT', updateMoviesWillWatch)

    this.setState({
      movieWillWatch: updateMoviesWillWatch,
    })
  }

  addMovieToWillWatch = (movie) => {
    // console.log('App->addMovieToWillWatch')
    const updateMoviesWillWatch = [...this.state.movieWillWatch, movie]

    this.setState({
      movieWillWatch: updateMoviesWillWatch,
    })
  }

  updateSortBy = (value) => {
    // console.log('App->updateSortBy')

    this.setState({
      sort_by: value,
    })
  }

  render() {
    // console.log('App->render')
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-12">
                <MoviewTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
              <div className="col-12 text-center">
                {!this.state.isDownload ? <Loader /> : ''}
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      movieWillWatch={this.state.movieWillWatch}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-3  mt-2">
            <p className="font-weight-bold">
              Will watch: {this.state.movieWillWatch.length} movies
            </p>
            {this.state.movieWillWatch.map((movieWillWatch, index) => {
              return (
                <div key={movieWillWatch.id}>
                  <WillWatch
                    movieWillWatch={movieWillWatch}
                    index={index}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App
