import './index.css'

const NavBar = props => {
  const {scoreUpdate, secValue} = props
  return (
    <nav className="navBG">
      <img
        className="logoCss"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <div className="timerScoreContainer">
        <h1 className="score">
          Score: <span className="scoreSpan">{scoreUpdate}</span>
        </h1>
        <div className="timerContainer">
          <img
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timerimgCss"
          />
          <h1 className="timerText">{`${secValue} secs`}</h1>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
