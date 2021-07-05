const Photo = ({ photo }) => {
    return (
        <div className='photo'>
            <h2>{photo.title}</h2>
            <img src={photo.thumbnailUrl} alt='thumbnail'/>
        </div>
    )
}

export default Photo
