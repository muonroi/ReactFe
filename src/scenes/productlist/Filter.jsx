import React from 'react'

export default function Filter(props) {
    var handleFilterByName = props.handleFilterByName;
    var handleFilterByMaxPrice = props.handleFilterByMaxPrice;
    var handleFilterByMinPrice = props.handleFilterByMinPrice;
  return (
    <div className="well well-small">
  <input type="text" placeholder="Filter" onChange={handleFilterByName}/> <br/>
  By Min Price <input type="text" placeholder="Filter" onChange={handleFilterByMinPrice}/>
  By Max Price <input type="text" placeholder="Filter" onChange={handleFilterByMaxPrice}/>
</div>  
  )
}
