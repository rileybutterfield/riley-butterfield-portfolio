import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <a
    href={projectLink ? projectLink : "#"}
    target="_blank"
    style={{textDecoration:"none"}}
  >
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")", backgroundSize: "cover"
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
         Explore
        </a>
      </div>
    </div>
    </a>
  )
}

export default Card
