import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true, id: ''}

  componentDidMount = () => {
    this.getTeamListData()
  }

  getTeamListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="insideContainer">
            <div className="iplLogoContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="iplImg"
              />
              <h1 className="MainHeading">IPL DASHBOARD</h1>
            </div>
            <ul className="unordered">
              {teamList.map(each => (
                <TeamCard key={each.id} item={each} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
