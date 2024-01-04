import './index.css'

const LatestMatch = props => {
  const {item} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    id,
    matchStatus,
    result,
    secondInnings,
    venue,
    umpires,
  } = item
  return (
    <div className="LatestMatch">
      <div className="part one">
        <p className="competingTeam">{competingTeam}</p>
        <p className="MatchDate">{date}</p>
        <p className="info">{venue}</p>
        <p className="info">{result}</p>
      </div>
      <div className="part two">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeamLogo"
        />
      </div>
      <div className="part3 three">
        <p className="infoAboutMatch">First Innings</p>
        <p className="info">{firstInnings}</p>
        <p className="infoAboutMatch">Second Innings</p>
        <p className="info">{secondInnings}</p>
        <p className="infoAboutMatch">Man Of The Match</p>
        <p className="info">{manOfTheMatch}</p>
        <p className="infoAboutMatch">Umpires</p>
        <p className="info">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
