import React from 'react'

const Rating = ({ score, handleRating }) => {
    const stars = (n) => {
      let star = []
      for (let i = 1; i <= 5; i++) {
        if (i <= n) {
          star.push(
            <span
              key={i}
              onClick={() => handleRating(i)}
              style={{ color: "gold", fontSize: "22px", cursor: "pointer"}}
              >★</span>
          )
        } else
          star.push(
            <span
              key={i}
              onClick={() => handleRating(i)}
              style={{ color: "white", fontSize: "22px", cursor: "pointer"}}
            >★</span>
          )
      }
      return star
    }
    return (
      <div>{stars(score)}</div>
    )
  }
  Rating.defaultProps = {
    score: 1,
    handleRating: () => {},
  }

export default Rating