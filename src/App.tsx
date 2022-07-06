import { useEffect, useState, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export type Monster = {
  id: string;
  name: string;
  email: string
}

const App = () => {
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters?.filter((monster) => monster.name.toLocaleLowerCase().includes(search));
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, search]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>):void => {
    setSearch(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
