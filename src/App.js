import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import WishListView from './components/wishListView'

class App extends Component {
  static defaultProps = {
    wishList: { items: [] }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WishList</h1>
        </header>
        <main>
          <WishListView wishList={this.props.wishList} />
        </main>
      </div>
    );
  }
}

export default App;
