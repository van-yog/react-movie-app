import React from 'react'

class WillWatch extends React.Component {
  render() {
    console.log('WillWatch->render')
    const { index, movieWillWatch, removeMovieFromWillWatch } = this.props
    return (
      <div className="border rounded border-success m-2 p-2 d-flex justify-content-between align-items-center">
        <div>
          {index + 1}. {this.props.movieWillWatch.title},{' '}
          {movieWillWatch.vote_average}
        </div>
        <div>
          <button
            type="button"
            className="rounded btn btn-danger"
            onClick={() => removeMovieFromWillWatch(movieWillWatch)}
          >
            &#10006;
          </button>
        </div>
      </div>
    )
  }
}

export default WillWatch
