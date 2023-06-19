import React from 'react';
import TopicCard from '../components/TopicCard';
import { useState, useEffect } from 'react';



const Cards = () => {

    const [quizData, setQuizData] = useState(null);
    const [topics, setTopics] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/quiz.json');
                const jsonString = await response.text();
                const jsonData = JSON.parse(jsonString);
                setQuizData(jsonData);
            } catch (error) {
                console.log(error);
            }
            
        }

        if(quizData != null) {
            setTopics(Object.keys(quizData));
        } else {
            fetchData();
        }
  }, [quizData]);


    


    return (
        <div className='grid grid-cols-4 gap-1'>
            {
                topics ? topics.map((key, index) => (
                    <TopicCard key={index} name={key.toUpperCase()} />
                )) : <></>
            }
        </div>
    )
}

export default Cards;