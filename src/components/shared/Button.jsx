
const Button = ({ text }) => {
    return (
        <div>
            <button className="bg-black text-white hover:text-primary font-semibold font-noto lg:mx-5 px-8 py-2">
                <span className='font-montserrat transition-all '>{text}</span>
            </button>
        </div>
    );
};

export default Button;