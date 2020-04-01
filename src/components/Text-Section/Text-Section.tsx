import React from "react";
import './Text-Section.css';

interface Props {
    title: string,
    paragraph: string,
    backgroundColor: string,
    textColor: string,
}

const TextSection: React.FC<Props> = (props: Props) => {
    const style = {
        backgroundColor:`${props.backgroundColor}`,
        color: `${props.textColor}`
    };
    return (
        <div className="container" style={style}>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </div>
    );
};

export default TextSection;