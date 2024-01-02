import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusConstants.initial, vaccinationData: {}}

  componentDidMount = () => this.getCovidVaccinationData()

  getCovidVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok === true) {
      const fetchedData = await response.json()
      const formattedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
          vaccination => ({
            dose1: vaccination.dose_1,
            dose2: vaccination.dose_2,
            vaccineDate: vaccination.vaccine_date,
          }),
        ),
        vaccinationByAge: fetchedData.vaccination_by_age,
        vaccinationByGender: fetchedData.vaccination_by_gender,
      }
      this.setState({
        vaccinationData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderCowinDashboard = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = vaccinationData
    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="text-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="failure-img"
        alt="failure view"
      />
      <h2 className="failure-msg">Something went wrong</h2>
    </div>
  )

  renderCowinDashboardViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCowinDashboard()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-dashboard-container">
        <div className="d-flex align-items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            className="cowin-logo"
            alt="website logo"
          />
          <h1 className="co-win">Co-WIN</h1>
        </div>
        <h1 className="cowin-title">CoWIN Vaccination in India</h1>
        {this.renderCowinDashboardViews()}
      </div>
    )
  }
}

export default CowinDashboard
