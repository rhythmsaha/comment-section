import { useState } from "react";
import Button from "./Button";

function EditComment({ content, onEdit }) {
    const [input, setInput] = useState(content);

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const saveEditHandler = () => {
        onEdit(input);
    };

    return (
        <>
            <textarea
                className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white border border-solid border-gray-300 transition m-0 focus:text-gray-700  focus:border-blue-500 focus:outline-none resize-none rounded-lg selection:bg-blue-500 selection:text-white"
                rows={4}
                onChange={inputChangeHandler}
            >
                {input}
            </textarea>

            <div className="mt-4 flex justify-end">
                <Button onClick={saveEditHandler}>UPDATE</Button>
            </div>
        </>
    );
}

export default EditComment;
