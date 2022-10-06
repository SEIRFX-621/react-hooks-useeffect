import React, { useState, useEffect } from 'react';

function IntervalTicker() {
  const [handle, setHandle] = useState(null)

  useEffect(() => {
    // This line starts an interval and stores the returned handle in state
    setHandle( setInterval(() => console.log('tick'), 1000) )
    // This line returns a function that clears the interval
    return () => {
      clearInterval(handle)
    }
  }, []) // Don't forget the empty dependency list

  return (
    <p>Our timer is active in the console</p>
  )
}

export default IntervalTicker;