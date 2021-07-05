import Photo from "./Photo";

const Photos = ({ photos }) => {
    return (
        <>
            {photos.map((photo) => (
                <Photo 
                    key={photo.id}
                    photo={photo}
                />
            ))}
        </>
    )
}

export default Photos
