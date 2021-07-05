import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [id, setText] = useState('');

  const onSubmit = (e) => {
      e.preventDefault();
      if (!id) {
          alert('Please add photo album id')
          return;
      }
      onSearch({ id })
  }
  return (
    <form className="search-form" onSubmit={onSubmit}>
        <div >
        <input
            className="search-input"
            type="id"
            placeholder="Search Photos"
            value={id}
            onChange={(e) => {
            setText(e.target.value);
            }}
        />
        </div>
        <input type='submit' value='Search' />
    </form>
  );
};

export default SearchBar;
