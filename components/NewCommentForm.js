import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

function NewCommentForm({
    currentUser,
    onSubmit,
    isReply,
    replyingTo,
    onReply,
}) {
    const [input, setInput] = useState("");

    const newCommentHandler = (event) => {
        event.preventDefault();

        if (!isReply) {
            onSubmit({
                id: Math.random().toString(),
                content: input,
                createdAt: "just now",
                score: 0,
                user: currentUser,
                replies: [],
            });
            setInput("");
            return;
        }

        onSubmit({
            id: Math.random().toString(),
            content: input,
            createdAt: "just now",
            score: 0,
            replyingTo: replyingTo,
            user: currentUser,
        });
        setInput("");
        onReply();
    };

    return (
        <form onSubmit={newCommentHandler}>
            <div>
                <textarea
                    rows="3"
                    placeholder="Add a comment..."
                    className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white border border-solid border-gray-300 transition m-0 focus:text-gray-700  focus:border-blue-500 focus:outline-none resize-none rounded-lg selection:bg-blue-500 selection:text-white"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></textarea>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <Image
                    src={currentUser?.image?.webp}
                    alt={currentUser.username}
                    height={30}
                    width={30}
                />

                <Button type="submit">SEND</Button>
            </div>
        </form>
    );
}

export default NewCommentForm;
