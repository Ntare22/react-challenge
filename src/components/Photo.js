const Photo = ({ photo }) => {
    return (
        <div className='photo'>
            <h5>{photo.title}</h5>
            <img src={photo.thumbnailUrl} alt='thumbnail'/>
        </div>
    )
}

export default Photo
