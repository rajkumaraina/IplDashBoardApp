import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = item
  let isWon
  if (matchStatus === 'Won') {
    isWon = true
  } else {
    isWon = false
  }
  return (
    <li className="matchListItem">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingImgInMatchCard"
      />
      <p className="cardHeading">{competingTeam}</p>
      <p className="cardPara1">{result}</p>
      <p className={isWon ? 'cardPara green' : 'cardPara red'}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
