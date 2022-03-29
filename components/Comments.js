import CommentCard from "./CommentCard";

const Comments = ({ com, currentUser }) => {
    return (
        <div>
            <CommentCard com={com} currentUser={currentUser} />

            <div className="space-y-4 mt-5 lg:ml-10  pl-3 lg:pl-8 border-l-2 lg:border-l-4 border-indigo-100 rounded">
                {com.replies.map((rep) => (
                    <CommentCard
                        key={rep.id}
                        com={rep}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
