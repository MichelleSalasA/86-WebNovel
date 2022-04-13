import './ButtonsContainer.css';

const ButtonsContainer = ({ chapter, onNextBtnHandler, novelLength, onPrevBtnHandler }) => {
    const getButtons = () => {
        if (chapter === 1) {
            return (
                <>
                    <button
                        onClick={onNextBtnHandler}
                        className="btn-next"
                    >
                        Next
                    </button>
                </>
            )
        } else if (chapter >= novelLength) {
            return (
                <button
                    onClick={onPrevBtnHandler}
                    className="btn-prev"
                >
                    Prev
                </button>
            )
        } else {
            return (
                <>
                    <button
                        onClick={onPrevBtnHandler}
                        className="btn-prev"
                    >
                        Prev
                    </button>

                    <button
                        onClick={onNextBtnHandler}
                        className="btn-next"
                    >
                        Next
                    </button>
                </>
            )
        }
    }

    return (
        <div className="buttons-container">
            {getButtons()}
        </div>
    );
};

export default ButtonsContainer;