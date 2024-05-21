// import {Component} from 'react'

// class Speedometer extends Component {
//   state = {speed: 0}

//   state = {acc: 0, brake: 0}

//   accelerateButton = () => {
//     this.setState(prevState => ({speed: prevState.acc + 10}))
//   }

//   brakeButton = () => {
//     this.setState(prevState => ({speed: prevState.break - 10}))
//   }

//   render() {
//     const {speed} = this.state
//     const {acc, brake} = this.state

//     return (
//       <div className="container">
//         <h1 className="heading">SPEEDOMETER</h1>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
//           alt="acc"
//           className="image"
//         />
//         <h1 className="heading">Speed is {speed}mph</h1>
//         <p className="description">Min Limit is 0mph,Max Limit is 200mph</p>
//         <button
//           className="button"
//           onClick={this.accelerateButton}
//           type="button"
//         >
//           Acclerate
//         </button>
//         <button className="button2" onClick={this.brakeButton} type="button">
//           Apply Brake
//         </button>
//       </div>
//     )
//   }
// }
// export default Speedometer

import {Component} from 'react'
import './index.css' // Ensure this is the correct path to your CSS file

class Speedometer extends Component {
  state = {speed: 0} // Initialize only the speed state variable

  accelerateButton = () => {
    this.setState(prevState => ({
      speed: Math.min(prevState.speed + 10, 200), // Ensure speed does not exceed 200
    }))
  }

  brakeButton = () => {
    this.setState(prevState => ({
      speed: Math.max(prevState.speed - 10, 0), // Ensure speed does not go below 0
    }))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <button
          className="button"
          onClick={this.accelerateButton}
          type="button"
        >
          Accelerate
        </button>
        <button className="button2" onClick={this.brakeButton} type="button">
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
