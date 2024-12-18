
const Button = ({ text }) => {
    return (
        <div>
            <button className="bg-[#2F2F2F] text-white hover:text-primary font-semibold font-noto lg:mx-5 px-2 md:px-4 lg:px-8 py-2 md:py-3">
                <span className='font-montserrat transition-all '>{text}</span>
            </button>
        </div>
    );
};

export default Button;