import { useState } from 'react';
import Photos from './components/Photos';
import SearchBar from "./components/SearchBar";

function App() {
  const [photos, setPhotos] = useState([]);

  const onSearch = async (userId) => {
    const { id } = userId
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    const data = await res.json();
    setPhotos(data)
  }
  return (
    <div className="container">
      <h1>Code with Nelly Sugu</h1>
      <SearchBar onSearch={onSearch} />
      <Photos photos={photos}/>
    </div>
  );
}

export default App;
