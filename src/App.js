import { useState } from 'react';
import Photos from './components/Photos';
import SearchBar from "./components/SearchBar";

function App() {
  const [photos, setPhotos] = useState([]);

  const onSearch = async (userId) => {
    const { id } = userId
    const res = await fetch(`https://api-challenge-nest.herokuapp.com/album/${id}/photos`)
    const data = await res.json();
    setPhotos(data)
  }
  return (
    <div className="container">
      <h1>Code with Nelly Sugu</h1>
      <SearchBar onSearch={onSearch} />
      <div className='photos'>
        <Photos photos={photos}/>
      </div>
    </div>
  );
}

export default App;
