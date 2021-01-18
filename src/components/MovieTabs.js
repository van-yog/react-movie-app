import React from 'react'

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props
  const handleClick = (value) => () => updateSortBy(value)

  const getClassLink = (value) => {
    return `nav-link ${sort_by === value ? 'active' : ''}`
  }

  return (
    <div>
      <ul className="tabs nav nav-pills mt-4">
        <li className="nav-item mx-2">
          <div
            className={getClassLink('popularity.desc')}
            onClick={handleClick('popularity.desc')}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item mx-2">
          <div
            className={getClassLink('revenue.desc')}
            onClick={handleClick('revenue.desc')}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item mx-2">
          <div
            className={getClassLink('vote_average.desc')}
            onClick={handleClick('vote_average.desc')}
          >
            Vote average
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MovieTabs
