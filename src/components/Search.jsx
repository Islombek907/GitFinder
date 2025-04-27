import { useState } from 'react';
import useStore from '../store/store';

const Search = () => {
  const [username, setUsername] = useState('');
  const fetchUserData = useStore((state) => state.fetchUserData);

  const handleSearch = () => {
    if (username.trim()) {
      fetchUserData(username);
    }
  };

  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Введите имя пользователя"
        autoFocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Найти</button>
    </section>
  );
};

export default Search;