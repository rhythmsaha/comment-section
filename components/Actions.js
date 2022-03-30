import React from "react";
import Image from "next/image";

const Actions = ({
    currentUser,
    toggleReply,
    com,
    onEdit,
    onDelete,
    editMode,
}) => {
    const deleteCommentHandler = () => {
        onDelete(com.id);
    };

    if (currentUser.username !== com.user?.username) {
        return (
            <div className="flex items-center space-x-4 cursor-pointer">
                <div className="flex items-center space-x-1">
                    <Image
                        src="/images/icon-reply.svg"
                        alt="reply"
                        height={12}
                        width={14}
                    />
                    <span
                        className="text-indigo-500 font-semibold text-sm"
                        onClick={toggleReply}
                    >
                        Reply
                    </span>
                </div>
            </div>
        );
    }
    return (
        <div className="flex items-center space-x-4">
            <button
                className="space-x-1 flex items-center"
                onClick={deleteCommentHandler}
            >
                <Image
                    src={"/images/icon-delete.svg"}
                    alt="deleteIcon"
                    height={12}
                    width={10}
                />
                <span className="text-sm font-semibold text-red-400">
                    Delete
                </span>
            </button>

            <button className="space-x-1 flex items-center" onClick={onEdit}>
                <Image
                    src={"/images/icon-edit.svg"}
                    alt="deleteIcon"
                    height={12}
                    width={10}
                />
                <span className="text-sm font-semibold text-indigo-700">
                    {!editMode && "Edit"}
                    {editMode && "Cancel"}
                </span>
            </button>
        </div>
    );
};

export default Actions;
