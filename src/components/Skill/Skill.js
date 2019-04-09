import React from 'react';

const _renderCircle = (total) => {
    let circles = [];
    for (let index = 1; index <= 5; index++) {
        let classname = 'circle circle-active';
        if(index > total)
            classname = 'circle';
        circles.push(<div className={classname}></div>)
    }
    return circles.reverse();
}

const Skill = ({ name, total }) => {
    return (
        <div className={'skill'}>
            { name }
            { _renderCircle(total) }
        </div>
    );
};

export default Skill;