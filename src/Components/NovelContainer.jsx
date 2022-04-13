import { useState } from "react";

import ImageContainer from "./ImageContainer";
import ButtonsContainer from "./ButtonsContainer";
import DialogContainer from "./DialogContainer";

import './NovelContainer.css';

const imgs = [
    <img
        height={'450px'}
        width={'450px'}
        className="image-1"
        src="https://otakugo.net/wp-content/uploads/2021/07/6be08546b285f75d_677f7d1e0b49a3d5_16856116248044644769722.jpg"
        alt={"86novel"}
    />,
    <img 
        height={'500px'}
        width={'350px'}
        className="image-2" 
        src="https://animeweb.xyz/wp-content/uploads/2021/09/86-eighty-six-ss2.jpg" 
        alt={"Lena-Shin-Frederica"}
    />
];

const NovelContainer = () => {
    const [chapter, setChapter] = useState(1);

    const nextBtnHandler = (_e) => {
        return setChapter(prev => prev + 1);
    };

    const prevBtnHandler = (_e) => {
        return setChapter(chapter - 1);
    };

    return (
        <div className='novel-container'>
            <ImageContainer imgs={imgs} chapter={chapter}/>
            <ButtonsContainer
                chapter={chapter}
                novelLength={imgs.length}
                onNextBtnHandler={nextBtnHandler}
                onPrevBtnHandler={prevBtnHandler}
            />
            <DialogContainer chapter={chapter} setChapter={setChapter}/>
        </div>
    )
};

export default NovelContainer;