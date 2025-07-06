import React from "react";

const NewLetter = () => {
  return (
    <React.Fragment>
      <section>
        <div className="bg-white p-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-slate-900 text-4xl font-bold">Join With Us</h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mt-6">
              Subscribe to our everyDaylux and stay up to date with the latest
              news, updates, and exclusive offers. Get valuable insights. Join
              our community today!
            </p>

            <div className="max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left border border-gray-200 focus-within:border-blue-600 focus-within:bg-transparent mt-12">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-slate-900 w-full outline-none bg-transparent text-sm px-4 py-3"
              />
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold text-sm rounded-full px-6 py-3 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NewLetter;
