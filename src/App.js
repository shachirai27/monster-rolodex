import { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    const log = (data) => console.log(data);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }));
  }

  searchString = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLowerCase() }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const searchMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App" >
        {/* <input className='search-box' type='search' placeholder='Type to search..'
          onChange={this.searchString} /> */}
        {/* {searchMonsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })} */}
        <h1>Search You Favorite Monsters</h1>
        <SearchBox onChangeHandler={this.searchString} placeholder="Type to search monsters!" />
        <CardList monsters={searchMonsters} />
      </div>
    );
  }
}

export default App;
