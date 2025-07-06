import React from "react";
import ContactForm from "../components/base/ContactForm";

const ContactPage = () => {
  return (
    <React.Fragment>
      <section className="flex flex-col  justify-center items-center w-full h-screen">
        <ContactForm />
      </section>
    </React.Fragment>
  );
};

export default ContactPage;
