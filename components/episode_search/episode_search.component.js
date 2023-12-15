import styles from './episode_search.module.css'

import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the search results page with the search query
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Our Episode Library"
        
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;