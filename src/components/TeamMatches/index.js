import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    matchesList: [],
    latestMatchInfo: {},
    recentMatchesInfo: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getMatchesList()
  }

  getMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const latestMatch = updatedData.latestMatchDetails
    const latestMatchDetails = {
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      date: latestMatch.date,
      firstInnings: latestMatch.first_innings,
      manOfTheMatch: latestMatch.man_of_the_match,
      id: latestMatch.id,
      matchStatus: latestMatch.match_status,
      result: latestMatch.result,
      secondInnings: latestMatch.second_innings,
      venue: latestMatch.venue,
      umpires: latestMatch.umpires,
    }

    const recent = updatedData.recentMatches
    const recentMatches = recent.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      venue: each.venue,
      umpires: each.umpires,
    }))
    this.setState({
      matchesList: updatedData,
      isLoading: false,
      latestMatchInfo: latestMatchDetails,
      recentMatchesInfo: recentMatches,
    })
  }

  render() {
    const {
      matchesList,
      isLoading,
      latestMatchInfo,
      recentMatchesInfo,
    } = this.state
    const teamBanner = matchesList.teamBannerUrl
    const {match} = this.props
    const {params} = match
    const {id} = params
    let backgroundColor
    if (id === 'KKR') {
      backgroundColor = 'kkr'
    } else if (id === 'RCB') {
      backgroundColor = 'rcb'
    } else if (id === 'CSK') {
      backgroundColor = 'csk'
    } else if (id === 'MI') {
      backgroundColor = 'mi'
    } else if (id === 'KXP') {
      backgroundColor = 'kxp'
    } else if (id === 'SH') {
      backgroundColor = 'sh'
    } else if (id === 'RR') {
      backgroundColor = 'rr'
    } else if (id === 'DC') {
      backgroundColor = 'dc'
    }
    return (
      <div className={`teamMatchMainContainer ${backgroundColor}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teamMatchInsideContainer">
            <img src={teamBanner} alt="team banner" className="teamMatchImg" />
            <p className="teamNameInTeamMatch">Latest Matches</p>
            <LatestMatch item={latestMatchInfo} />
            <ul className="unorderedList">
              {recentMatchesInfo.map(each => (
                <MatchCard item={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
