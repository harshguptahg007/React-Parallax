import React from'react';
import './Complete-Section.css';

interface Props {
    buttonText: string,
    image: string,
}

const CompleteSection: React.FC<Props> = (props: Props) => {
    return (
        <div className="complete-section" style={{backgroundImage: `url(${props.image})`}}>
            <a href="#" className="button">{props.buttonText}</a>
        </div>
    );
};

export default CompleteSection;