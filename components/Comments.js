import { useState } from "react";
import CommentCard from "./CommentCard";

const Comments = ({ com, currentUser, onDelete }) => {
    const [replies, setReplies] = useState(com.replies);

    const newReplyHandler = (reply) => {
        console.log(replies);
        setReplies([...replies, reply]);
    };

    const deleteCommentHandler = (id) => {
        const commentsArray = [...replies];
        const deletedCommentArray = commentsArray.filter(
            (eachComment) => eachComment.id !== id
        );
        setReplies(deletedCommentArray);
    };

    return (
        <div className="w-full">
            <CommentCard
                com={com}
                currentUser={currentUser}
                onReply={newReplyHandler}
                onDelete={onDelete}
            />

            <div className="space-y-4 mt-5 lg:ml-10  pl-3 lg:pl-8 border-l-2 lg:border-l-4 border-indigo-100 rounded">
                {replies?.map((rep) => (
                    <CommentCard
                        key={rep.id}
                        com={rep}
                        currentUser={currentUser}
                        onReply={newReplyHandler}
                        onDelete={deleteCommentHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
