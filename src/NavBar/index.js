import './index.css'

const NavBar = props => {
  const {scoreUpdate, secValue} = props
  return (
    <ul className="navBG">
      <img
        className="logoCss"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <li className="timerScoreContainer">
        <p className="score">
          Score: <span className="scoreSpan">{scoreUpdate}</span>
        </p>
        <li className="timerContainer">
          <img
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timerimgCss"
          />
          <p className="timerText">{`${secValue} secs`}</p>
        </li>
      </li>
    </ul>
  )
}
export default NavBar
