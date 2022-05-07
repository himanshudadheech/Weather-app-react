import React from "react";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import SearchingLoading from "./components/SearchingLoading";
import CityNotFound from "./components/CityNotFound";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main_content_: " ",
      temp_value_: "",
      location_: "",
      weatherType_: "",
      windSpeed_: "",
      humidity_: "",
      pressure_: "",
      maxTemp_: "",
      minTemp_: "",
      sunrise_: "",
      sunSet_: "",
      country_: "",
      DataisLoaded: false,
      nameFound: null,
      nameError: false,
    };
    this.searchCity = this.searchCity.bind(this);
  }

  searchCity(name) {
    this.setState({
      DataisLoaded: true,
      nameFound: false,
      nameError: false,
    });

    let that = this;
    const API_key = "2a497d7336788c53b26c7d6af0d48009";
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        name +
        `&appid=${API_key}&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.cod === "404") {
          that.setState({
            nameFound: false,
            nameError: true,
            DataisLoaded: false,
          });
        } else if (response.cod === 200) {
          that.setState({
            main_content_: response.main,
            temp_value_: parseFloat(response.main.temp).toFixed(2),
            location_: response.name,
            weatherType_: response.weather[0].main,
            windSpeed_: response.wind.speed,
            humidity_: response.main.humidity,
            minTemp_: parseFloat(response.main.temp_min).toFixed(2),
            maxTemp_: parseFloat(response.main.temp_max).toFixed(2),
            pressure_: response.main.pressure,
            sunrise_: new Date(
              response.sys.sunrise * 1000
            ).toLocaleTimeString(),
            sunSet_: new Date(response.sys.sunset * 1000).toLocaleTimeString(),
            country_: response.sys.country,
            DataisLoaded: false,
            nameFound: true,
            nameError: false,
          });
        }
      });
  }

  render() {
    // Helps to load data before rendering
    let ErrorData =
      this.state.nameError === true ? (
        <div>
          <CityNotFound />
        </div>
      ) : (
        ""
      );
    let ValidData =
      this.state.nameFound === true ? (
        <div>
          <WeatherCard
            temp_value={this.state.temp_value_}
            location={this.state.location_}
            weatherType={this.state.weatherType_}
            windSpeed={this.state.windSpeed_}
            humidity={this.state.humidity_}
            minTemp={this.state.minTemp_}
            maxTemp={this.state.maxTemp_}
            pressure={this.state.pressure_}
            sunrise={this.state.sunrise_}
            sunSet={this.state.sunSet_}
            country={this.state.country_}
          />
        </div>
      ) : this.state.DataisLoaded === true ? (
        <SearchingLoading />
      ) : (
        " "
      );

    return (
      <div style={{ backgroundColor: "#e4e3e3", height: "100vh" }}>
        <NavBar />
        <br />
        <SearchBox searchCity={this.searchCity} />
        <br />
        {ErrorData}
        {ValidData}
      </div>
    );
  }
}

export default App;
