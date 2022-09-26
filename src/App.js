import React from 'react';
import Navbar from './components/Navbar.js'
import Card from './components/Card.js'
import data from './data.js'




function App() {

  const card = data.map(item => {
    return (
      <Card
        key={item.id}
        // title={item.title}
        // location={item.location}
        // googleMapsUrl={item.googleMapsUrl}
        // startDate={item.startDate}
        // endDate={item.endDate}
        // description={item.description}
        // imageUrl={item.imageUrl}
        item={item}
      />
    )
  })




  return (
    <>
      <Navbar/>
      {card}
    </>
  );
}

export default App;
