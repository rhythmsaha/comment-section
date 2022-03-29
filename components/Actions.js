import React from "react";
import Image from "next/image";

const Actions = () => {
    return (
        <div className="flex items-center space-x-4">
            <span className="space-x-1 flex items-center">
                <Image
                    src={"/images/icon-delete.svg"}
                    alt="deleteIcon"
                    height={12}
                    width={10}
                />
                <span className="text-sm font-semibold text-red-400">
                    Delete
                </span>
            </span>
            <span className="space-x-1 flex items-center">
                <Image
                    src={"/images/icon-edit.svg"}
                    alt="deleteIcon"
                    height={12}
                    width={10}
                />
                <span className="text-sm font-semibold text-indigo-700">
                    Edit
                </span>
            </span>
        </div>
    );
};

export default Actions;
