import { useState } from "react";

function Vote({ score }) {
    const [votes, setVotes] = useState(score);

    const upVoteHandler = () => {
        setVotes((prev) => prev + 1);
    };

    const downVoteHandler = () => {
        setVotes((prev) => prev - 1);
    };

    return (
        <div className="flex lg:flex-col justify-between items-center w-20 h-8 lg:h-20 lg:w-8 bg-indigo-50 rounded-md">
            <button
                onClick={upVoteHandler}
                className="lg:w-full lg:h-auto h-full flex justify-center items-center p-2"
            >
                <img src="/images/icon-plus.svg" alt="" />
            </button>

            <span className="font-semibold text-indigo-600">{votes}</span>

            <button
                onClick={downVoteHandler}
                className="lg:w-full lg:h-auto h-full flex justify-center items-center p-3"
            >
                <img src="/images/icon-minus.svg" alt="" />
            </button>
        </div>
    );
}

export default Vote;
