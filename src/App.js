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
            },
            images: {
                PORTLAND: "https://lh6.googleusercontent.com/-6porP9gICeE/AAAAAAAAAAI/AAAAAAAA6g0/UZjJQQnV0w4/s0-c-k-no-ns/photo.jpg",
                DALLAS: "https://pbs.twimg.com/profile_images/790567103614943233/0tDP7UPC_400x400.jpg",
                BOSTON: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png"
            },
            sites: {
                PORTLAND: "http://www.nba.com/blazers/",
                DALLAS: "http://www.nba.com/mavericks/",
                BOSTON: "http://www.nba.com/celtics/"
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
         {OutputCity(this.state.city, this.state.cityList, this.state.images, this.state.sites)}
    </div>


    );
  }
}

export default App;
const OutputCity = (city,cityList,images,sites) => {

    let upCity = city.toUpperCase()

    console.log(cityList[upCity])
    if (cityList[upCity]){
        return <div>
            <br></br>
            <a href={sites[upCity]}>Go {cityList[upCity]}!</a>
            <br></br>
            <img height="100" width="100" src={images[upCity]}/>
        </div>
    }
    if (upCity === " ") {
        return <div>Go ahead, type in a city</div>
    }
    return city + '? Never heard of it.'
}
