import Image from "next/image"


const Comment = () => {
    return (
        <div className="px-6 mt-10">
            {/* Main Comment Input */}
            <div className=" bg-white  p-4 mb-4">
                <div className="flex items-center mb-2">
                    <Image src="https://i.ibb.co.com/pzB9Ysr/almas.png" alt="user-avatar" width={100} height={100} className="w-10 h-10 rounded-full mr-3" />
                    <p className="font-semibold text-gray-800">Harun353@gmail.com</p>
                </div>
                <textarea
                    cols={5}
                    rows={5}
                    placeholder="Add a comment"
                    className="w-full p-2 border outline-none"
                ></textarea>
                <div className="text-right mt-2">
                    <button className="border border-primary font-semibold text-primary px-4 py-1  ">
                        Add a comment
                    </button>
                </div>
            </div>

            {/* Replies one */}
            <div className=" bg-white  p-4 mb-4">
                <div className="flex mb-4">
                    <Image src="https://i.pravatar.cc/40" alt="user-avatar" width={100} height={100} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="font-semibold text-gray-800">Joan543@gmail.com</p>
                        <p className="text-gray-600 text-sm mt-1">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vitae purus non mi facilisis convallis id eget nulla. Fusce vulputate elit id odio ultricies, in cursus dui aliquet.
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <button className="text-primary text-sm font-medium border border-primary px-4">
                        Reply
                    </button>
                </div>
            </div>
            {/* Replies two */}
            <div className=" bg-white  p-4 mb-4">
                <div className="flex mb-4">
                    <Image src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="user-avatar" width={100} height={100} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="font-semibold text-gray-800">mstkhushiakter333@gmail.com</p>
                        <p className="text-gray-600 text-sm mt-1">
                            Suspendisse potenti. Donec dictum malesuada nisi, a dapibus tortor condimentum nec. Mauris euismod volutpat risus, in luctus orci scelerisque eget. Vivamus id fermentum libero. Integer cursus finibus diam eget tristique.
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <button className="text-primary text-sm font-medium border border-primary px-4">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comment