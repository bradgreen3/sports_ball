import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props)

        this.state= { city: ' ',
            cityList : {
                PORTLAND:'Trail Blazers',
                DALLAS: 'Mavericks',
                BOSTON: 'Celtics'
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({city: event.target.value})
        console.log(this.state.city)


    }


    render() {
    return (
    <div>
          <h1>What is your favorite city?</h1>
          <input type="text" name="city" onChange={this.handleChange}/>
        <br></br><br></br>
         {OutputCity(this.state.city, this.state.cityList)}
    </div>


    );
  }
}

export default App;
const OutputCity = (city,cityList) => {

    console.log(cityList[city.toUpperCase()])
    if (cityList[city.toUpperCase()]){
        return <div>Go {cityList[city.toUpperCase()]}!</div>
    }
    if (city === " ") {
        return <div>Go ahead, type in a city</div>
    }
    return city + '? Never heard of it.'
}
