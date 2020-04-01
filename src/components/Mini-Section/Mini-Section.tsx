import React from'react';
import './Mini-Section.css';

interface Props {
    text: string,
    image: string,
}

const MiniSection: React.FC<Props> = (props: Props) => {
    return (
        <div className="mini-section" style={{backgroundImage: `url(${props.image})`}}>
            <h2 className={"center-text"}>{props.text}</h2>
        </div>
    );
};

export default MiniSection;