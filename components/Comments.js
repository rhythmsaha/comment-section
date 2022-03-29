import { useState } from "react";
import CommentCard from "./CommentCard";

const Comments = ({ com, currentUser }) => {
    const [replies, setReplies] = useState(com.replies);

    const newReplyHandler = (reply) => {
        console.log(replies);
        setReplies([...replies, reply]);
    };

    return (
        <div className="w-full">
            <CommentCard
                com={com}
                currentUser={currentUser}
                onReply={newReplyHandler}
            />

            <div className="space-y-4 mt-5 lg:ml-10  pl-3 lg:pl-8 border-l-2 lg:border-l-4 border-indigo-100 rounded">
                {replies?.map((rep) => (
                    <CommentCard
                        key={rep.id}
                        com={rep}
                        currentUser={currentUser}
                        onReply={newReplyHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
