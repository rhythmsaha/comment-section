import Image from "next/image";
import Actions from "./Actions";

const CommentCard = () => {
    return (
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm lg:flex lg:space-x-4">
            <div className="hidden lg:block">
                <div className="flex flex-col justify-between items-center bg-indigo-50 h-20 w-8 p-3 rounded-md">
                    <img src="/images/icon-plus.svg" alt="" />

                    <span className="font-semibold text-indigo-600">4</span>

                    <img src="/images/icon-minus.svg" alt="" />
                </div>
            </div>

            <div>
                <div className="flex items-center space-x-2">
                    <div className="flex space-x-2 items-center ">
                        <Image
                            src="/images/avatars/image-amyrobson.webp"
                            alt="amyrobson"
                            height={30}
                            width={30}
                        />
                        <span className="font-semibold">amyrobson</span>

                        <span className="text-white text-xs font-semibold bg-blue-500 px-2 pb-1 pt-0.5 rounded-lg ">
                            you
                        </span>
                    </div>

                    <span className="text-gray-500  text-sm flex-1">
                        1 month ago
                    </span>

                    <div className="hidden lg:block">
                        <Actions />
                    </div>
                </div>

                <div className="mt-4 text-sm sm:text-base text-gray-800 tracking-wide">
                    Impressive! Though it seems the drag feature could be
                    improved. But overall it looks incredible. You&apos;ve
                    nailed the design and the responsiveness at various
                    breakpoints works really well.
                </div>
            </div>

            <div className="mt-4 flex lg:hidden space-x-4 justify-between items-center">
                <div className="flex items-center justify-between bg-indigo-50 w-20 h-8 px-3 rounded-md">
                    <img src="/images/icon-plus.svg" alt="" />

                    <span className="font-semibold text-indigo-600">4</span>

                    <img src="/images/icon-minus.svg" alt="" />
                </div>

                <Actions />
            </div>
        </div>
    );
};

export default CommentCard;
