"use client"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="container mx-auto px-4 lg:px-20 mt-16 md:mt-80">
      <h1 className="text-2xl md:text-5xl text-primary font-semibold font-noto text-center pb-3 md:pb-10">Frequently Asked Questions</h1>
      <div className="accordion-group">
        {/* Accordion 1 */}
        <div className="accordion pb-4 border-b border-solid border-gray-200">
          <button
            className="accordion-toggle group accordion-active:text-text-primary inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-primary active:text-text-primary"
            onClick={() => toggleAccordion(1)} // Accordion toggle function
            aria-expanded={openAccordion === 1}
            aria-controls="basic-collapse-one-default"
          >
            <h5>What are the benefits of regular exercise?</h5>
            <IoIosArrowDown  className={`text-primary text-xl border-2 border-primary rounded-full transition duration-500 group-hover:text-primary ${
                openAccordion === 1 ? "rotate-180" : ""
              }`}/>
          </button>
          <div
            id="basic-collapse-one-default"
            className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500 ${
              openAccordion === 1 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-base text-gray-600 leading-6">
              To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using
              the platform.
            </p>
          </div>
        </div>

        {/* Accordion 2 */}
        <div className="accordion pb-4 border-b border-solid border-gray-200">
          <button
            className="accordion-toggle group accordion-active:text-text-primary inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-primary active:text-text-primary"
            onClick={() => toggleAccordion(2)} // Accordion toggle function
            aria-expanded={openAccordion === 2}
            aria-controls="basic-collapse-one-default"
          >
            <h5>How often should I work out each week?</h5>
            <IoIosArrowDown  className={`text-primary text-xl border-2 border-primary rounded-full transition duration-500 group-hover:text-primary ${
                openAccordion === 2 ? "rotate-180" : ""
              }`}/>
          </button>
          <div
            id="basic-collapse-one-default"
            className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500 ${
              openAccordion === 2 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-base text-gray-600 leading-6">
              To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using
              the platform.
            </p>
          </div>
        </div>

        {/* Accordion 3 */}
        <div className="accordion pb-4 border-b border-solid border-gray-200">
          <button
            className="accordion-toggle group accordion-active:text-text-primary inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-primary active:text-text-primary"
            onClick={() => toggleAccordion(3)} // Accordion toggle function
            aria-expanded={openAccordion === 3}
            aria-controls="basic-collapse-one-default"
          >
            <h5>What type of exercise is best for weight loss?</h5>
            <IoIosArrowDown  className={`text-primary text-xl border-2 border-primary rounded-full transition duration-500 group-hover:text-primary ${
                openAccordion === 3 ? "rotate-180" : ""
              }`}/>
          </button>
          <div
            id="basic-collapse-one-default"
            className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500 ${
              openAccordion === 3 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-base text-gray-600 leading-6">
              To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using
              the platform.
            </p>
          </div>
        </div>

        {/* Accordion 4 */}
        <div className="accordion pb-4 border-b border-solid border-gray-200">
          <button
            className="accordion-toggle group accordion-active:text-text-primary inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-primary active:text-text-primary"
            onClick={() => toggleAccordion(4)} // Accordion toggle function
            aria-expanded={openAccordion === 4}
            aria-controls="basic-collapse-one-default"
          >
            <h5>What should I eat before and after a workout?</h5>
            <IoIosArrowDown  className={`text-primary text-xl border-2 border-primary rounded-full transition duration-500 group-hover:text-primary ${
                openAccordion === 4 ? "rotate-180" : ""
              }`}/>
          </button>
          <div
            id="basic-collapse-one-default"
            className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500 ${
              openAccordion === 4 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-base text-gray-600 leading-6">
              To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using
              the platform.
            </p>
          </div>
        </div>

        {/* Accordion 5 */}
        <div className="accordion pb-4 border-b border-solid border-gray-200">
          <button
            className="accordion-toggle group accordion-active:text-text-primary inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-primary active:text-text-primary"
            onClick={() => toggleAccordion(5)} // Accordion toggle function
            aria-expanded={openAccordion === 5}
            aria-controls="basic-collapse-one-default"
          >
            <h5>How can I stay motivated to exercise regularly?</h5>
            <IoIosArrowDown  className={`text-primary text-xl border-2 border-primary rounded-full transition duration-500 group-hover:text-primary ${
                openAccordion === 5 ? "rotate-180" : ""
              }`}/>
          </button>
          <div
            id="basic-collapse-one-default"
            className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500 ${
              openAccordion === 5 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-base text-gray-600 leading-6">
              To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal
              information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using
              the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
