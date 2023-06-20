import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const TopicCard = ({name, data, updateQuizData}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [newQuizData, setNewQuizData] = useState(data);
    const [currentQuestion, setCurrentQuestion] = useState(true);




    function closeModal() {
        setIsOpen(false);
    }


    function openModal() {
        const unsolvedQuestion = newQuizData[name].find(question => !question.solved);
        
        if(unsolvedQuestion) {
            setCurrentQuestion(unsolvedQuestion);
        } else {
            setCurrentQuestion(false);
        }

        // console.log(currentQuestion);

        setIsOpen(true);
        // console.log(data);
        // console.log(name);
    }


    
    function markAsSolved() {
        if(currentQuestion) {

            setNewQuizData(prevData => {
                // Create a copy of the previous state
                const newData = { ...prevData };

                // Find the category (e.g., 'sports' or 'fitness')
                const topicData = newData[name];

                // Find the question by its ID
                const question = topicData.find(item => item.id === currentQuestion.id);

                // Update the 'solved' property for the question
                if (question) {
                    question.solved = true; // Set the value to true or toggle it as needed
                }

                return newData; // Return the updated state
            });

            setCurrentQuestion(false);

            updateQuizData(newQuizData);
            setIsOpen(false);
            // console.log(newQuizData);
            
        }
    }


    return (
        <>
            <div 
                className={`${currentQuestion ? "bg-green-800 text-white" : "bg-gray-400 text-gray-800"} hover:text-black w-80 px-7 py-7 whitespace-nowrap ml-7 mt-7 rounded-xl shadow-xl shadow-slate-600 hover:cursor-pointer hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                onClick={openModal}
                style={{ pointerEvents: currentQuestion ? 'auto' : 'none'}}
            >

                <p className='text-center text-3xl'>{name.toUpperCase()}</p>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="mt-4 text-3xl font-medium leading-6 text-gray-900"
                        >
                            {currentQuestion.question}
                        </Dialog.Title>

                        <div className="mt-16 mb-5">
                            <button
                                type="button"
                                className="mr-5 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-md font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                onClick={markAsSolved}
                            >
                                Solve
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
            {/* <div className='bg-green-400 w-80 px-7 py-7 whitespace-nowrap ml-7 mt-7 rounded-xl shadow-xl shadow-slate-600 '>
                <p className='text-center text-3xl'>{name}</p>
            </div> */}
        </>


    );
}

export default TopicCard;