import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import WishListView from './components/wishListView'

class App extends Component {
  static defaultProps = {
    group: {}
  }

  constructor(props) {
    super()
    this.state = { selectedUser: null }
  }

  render() {
    const { group } = this.props
    const selectedUser = group.users.get(this.state.selectedUser)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WishList</h1>
        </header>
        <main>
          <select onChange={this.onSelectUser}>
            <option>- Select User -</option>
            {group.users.values().map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          {selectedUser && <WishListView wishList={selectedUser.wishList} />}
        </main>
      </div>
    );
  }

  onSelectUser = event => {
    this.setState({ selectedUser: event.target.value })
  }
}

export default App;
