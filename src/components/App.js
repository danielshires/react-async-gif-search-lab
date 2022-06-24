import React from 'react'
import GifListcontainer from './GifListcontainer'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListcontainer fetchData={this.searchData} />
    </div>
  )
}

export default App
