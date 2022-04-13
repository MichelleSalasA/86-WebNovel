

const ImageContainer = ({ chapter, imgs }) => {
    return (
        <div>
            {imgs[chapter - 1]}
        </div>
    )
};

export default ImageContainer;