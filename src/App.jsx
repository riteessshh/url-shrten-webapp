import React from 'react';
import axios from 'axios';
import './master.css'
import List from './List';

function App(props) {

  const [search, getsearch] = React.useState("")
  const [links, getLinks] = React.useState("")
  // const data = []
  let [result, setResult] = React.useState(false)

  function getLink() {
    axios.get('https://api.shrtco.de/v2/shorten', {
      params: {
        url : search
      }
    })
    .then(function (response) {
      // handle success
      console.log(response.data.result);
      // data.push(response.data.result.full_short_link)
      getLinks(response.data.result.full_short_link)
      console.log(response.data.result.full_short_link);
      setResult(true)
      // search
    })
  }
  function handleChange(event) {
    console.log(event.target.value);
    getsearch(event.target.value)
  }


  return (
    <div>
      <div className="form">
      <input className="part inputarea" type="text" onChange={handleChange} name="link" placeholder="Shorten a link here..." value={search}></input>
      <button className="part submitbutton" type="submit" onClick={getLink} name="button">Shorten It!</button>
      </div>
      { result ? <List
        search= {search}
        link= {links}
      /> : null}
    </div>
  )
}

export default App;
