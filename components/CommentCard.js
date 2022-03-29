import Image from "next/image";
import Actions from "./Actions";
import Vote from "./Vote";

const CommentCard = ({ com, currentUser }) => {
    return (
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm lg:flex lg:space-x-4">
            <div className="hidden lg:block">
                <Vote score={com?.score} />
            </div>

            <div>
                <div className="flex items-center space-x-2">
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
                        1 month ago
                    </span>

                    {currentUser.username === com.user?.username && (
                        <div className="hidden lg:block">
                            <Actions />
                        </div>
                    )}
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
                {currentUser.username === com.user?.username && <Actions />}
            </div>
        </div>
    );
};

export default CommentCard;
