import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {item} = props
  const {name, id, teamImageUrl} = item
  return (
    <Link to={`/team-matches/${id}`} className="link-team">
      <li className="listItem">
        <img src={teamImageUrl} alt={name} className="teamImage" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
