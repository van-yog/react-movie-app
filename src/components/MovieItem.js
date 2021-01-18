import React from 'react'

class MovieItem extends React.Component {
  constructor({ movie, movieWillWatch }) {
    console.log('MovieItem->constructor->props', movie.id)
    console.log('MovieItem->constructor->props', movieWillWatch)
    super()

    let isWillWatch = false

    movieWillWatch.forEach((element) => {
      if (element.id === movie.id) {
        console.log(
          'Фильм уже добавлен для просмортра! Нужно поменять его цвет',
          movie.title
        )
        isWillWatch = true
      }
    })
    this.state = {
      willWatch: isWillWatch,
    }
  }

  componentDidMount() {
    // console.log('MovieItem->componentDidMount')
  }

  componentDidUpdate() {
    // console.log('MovieItem->componentDidUpdate')
  }

  render() {
    // console.log('MovieItem->render')
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch,
    } = this.props

    const classBorder = 'border rounded p-2 my-2 bg-light'
    const classBorderWillWatch =
      'border rounded p-2 my-2 bg-light border-success'
    const classTitle = 'text-center font-weight-bold my-3 h5'
    const classTitleWillWatch =
      'text-center font-weight-bold my-3 h5 border border-success rounded '
    return (
      <div
        className={this.state.willWatch ? classBorderWillWatch : classBorder}
      >
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
        />

        <p className={this.state.willWatch ? classTitleWillWatch : classTitle}>
          {movie.title}
        </p>
        <p className="text-center"> Vote average: {movie.vote_average}</p>

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
              className="btn btn-warning"
              tupe="button"
              onClick={() => {
                this.setState({ willWatch: false })
                removeMovieFromWillWatch(movie)
              }}
            >
              Won't watch
            </button>
          ) : (
            <button
              className="btn btn-success"
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
