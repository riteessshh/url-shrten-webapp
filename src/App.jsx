import React from 'react';
import axios from 'axios';

function App(props) {

  const [search, getsearch] = React.useState("")
  const [links, getLinks] = React.useState("")
  const data = []

  function getLink() {
    axios.get('https://api.shrtco.de/v2/shorten', {
      params: {
        url : search
      }
    })
    .then(function (response) {
      // handle success
      console.log(response.data.result);
      data.push(response.data.result.short_link)
      data.push(response.data.result.short_link2)
      data.push(response.data.result.short_link3)
      getLinks(data)
      console.log(data);
    })
  }
  function handleChange(event) {
    console.log(event.target.value);
    getsearch(event.target.value)
  }


  return (
    <div>
      <input type="text" onChange={handleChange} name="link" value={search}></input>
      <button type="submit" onClick={getLink} name="button">get links</button>
      <h1>{links[0]}</h1>
      <h1>{links[1]}</h1>
      <h1>{links[2]}</h1>
    </div>
  )
}

export default App;
