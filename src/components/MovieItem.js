import React from 'react'

class MovieItem extends React.Component {
  constructor() {
    super()

    this.state = {
      willWatch: false,
    }
  }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch,
    } = this.props
    return (
      <div className="border p-1 my-2">
        <img
          className="img-fluid"
          src={`./img/${movie.poster_name}`}
          alt={movie.original_title}
        ></img>
        <p>{movie.title}</p>
        <div className="d-flex justify-content-between px-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              removeMovie(movie)
              removeMovieFromWillWatch(movie)
            }}
          >
            Удалить
          </button>
          {this.state.willWatch ? (
            <button
              className="btn btn-success"
              tupe="button"
              onClick={() => {
                this.setState({ willWatch: false })
                removeMovieFromWillWatch(movie)
              }}
            >
              Remove Will watch
            </button>
          ) : (
            <button
              className="btn btn-secondary"
              tupe="button"
              onClick={() => {
                this.setState({ willWatch: true })
                addMovieToWillWatch(movie)
              }}
            >
              Will watch
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default MovieItem
