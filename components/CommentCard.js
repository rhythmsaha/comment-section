import Image from "next/image";
import { useState } from "react";
import Actions from "./Actions";
import NewCommentForm from "./NewCommentForm";
import Vote from "./Vote";

const CommentCard = ({ com, currentUser, onReply }) => {
    const [replyMode, setReplyMode] = useState(false);

    const replyToggleHandler = () => {
        setReplyMode((prev) => !prev);
    };

    return (
        <>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm lg:flex lg:space-x-4 w-full">
                <div className="hidden lg:block">
                    <Vote score={com?.score} />
                </div>

                <div className="w-full">
                    <div className="flex items-center space-x-2 w-full">
                        <div className="flex space-x-2 items-center cursor-pointer">
                            <Image
                                src={com.user?.image?.webp}
                                alt={com.user?.username}
                                height={30}
                                width={30}
                            />
                            <span className="font-bold text-sm lg:text-base  text-gray-600">
                                {com.user?.username}
                            </span>

                            {currentUser.username === com.user?.username && (
                                <span className="text-white text-xs font-semibold bg-blue-500 px-2 pb-1 pt-0.5 rounded-lg ">
                                    you
                                </span>
                            )}
                        </div>

                        <span className="text-gray-400  text-xs sm:text-sm font-semibold flex-1">
                            {com?.createdAt}
                        </span>

                        <div className="hidden lg:block">
                            <Actions
                                currentUser={currentUser}
                                com={com}
                                toggleReply={replyToggleHandler}
                            />
                        </div>
                    </div>

                    <div className="mt-4 text-sm sm:text-base text-gray-800 tracking-wide">
                        {com?.replyingTo && (
                            <span className="text-blue-500 font-semibold">{`@${com.replyingTo} `}</span>
                        )}
                        {com.content}
                    </div>
                </div>

                <div className="mt-4 flex lg:hidden space-x-4 justify-between items-center">
                    <Vote score={com?.score} />

                    <Actions
                        currentUser={currentUser}
                        com={com}
                        toggleReply={replyToggleHandler}
                    />
                </div>
            </div>

            {replyMode && (
                <div className="mt-4 bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm">
                    <NewCommentForm
                        currentUser={currentUser}
                        onSubmit={onReply}
                        isReply={true}
                        replyingTo={com.user?.username}
                        onReply={replyToggleHandler}
                    />
                </div>
            )}
        </>
    );
};

export default CommentCard;
