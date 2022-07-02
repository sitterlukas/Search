import { useEffect, useState } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    setSearch(event.target.value.toLocaleLowerCase());
  };

  const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(search));

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
