import React from 'react';
import './master.css'

function List(props){
  const searchedLink = props.search
  return(
    <div className="display">
      <p className="actual-link">{searchedLink}</p>
      <hr className="line2"></hr>
      <p className="shtrn-link">
      <a href={props.link}>{props.link}</a>
      </p>
    </div>
  )
};

export default List;
