import React from 'react';

const TopicCard = ({name}) => {
    return (
        <div className='bg-green-400 max-w-min px-7 py-4 whitespace-nowrap ml-7 mt-7 rounded-xl shadow-xl shadow-slate-600 '>
            <p className='text-center text-3xl'>{name}</p>
        </div>
    );
}

export default TopicCard;