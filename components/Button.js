function Button({ onClick, children, type }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-indigo-500 text-white px-5 py-2 text-xs font-semibold rounded-md"
        >
            {children}
        </button>
    );
}

export default Button;
