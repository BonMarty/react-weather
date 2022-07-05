import React, { useState } from 'react';
import axios from 'axios';
import backgroundVideo from './assets/background-video.mp4';
import { Search } from './components/UI/Search/Search';
import { Result } from './components/UI/Result/Result';

function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=74a83cb1b3044a95cdbce6270460523f`;

  const searchLocation = (e) => {
    if (e.target.type === 'submit') {
      e.preventDefault();
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation('');
    }

    if (e.target.type === 'text' && e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="App">
      <div className="showcase">
        <video loop muted autoPlay>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <div className="container">
            <Search location={location} setLocation={setLocation} searchLocation={searchLocation} />
            <Result data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
