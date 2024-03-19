"use client";
import React, { useEffect, useState } from "react";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "@/public/helper/gitPreserve";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");

  const sendEmail = (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        setStateMessage("Your message has been sent!");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage("");
        }, 3000);
      },
      (error) => {
        setStateMessage("Something went wrong. Please try again!");
        console.log(error);

        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage("");
        }, 3000);
      }
    );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="md:space-y-12 space-y-6">
        <div className="border-b border-gray-900/10 pb-12">
          <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
            I&apos;m always eager to connect with fellow developers, industry
            professionals, and enthusiasts. <br />
            lets collaborate to create something extraordinary
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 md:gap-y-8 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="user_name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full outline-none rounded-md border-2 border-lightGreen bg-transparent py-1.5 text-gray-600 indent-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  required
                  name="user_email"
                  id="email"
                  autoComplete="email"
                  className="block w-full outline-none rounded-md border-2 border-lightGreen bg-transparent py-1.5 text-gray-600 indent-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Message
              </label>
              <div>
                <textarea
                  id="about"
                  name="message"
                  required
                  rows={3}
                  className="block w-full outline-none rounded-md border-2 border-lightGreen bg-transparent py-1.5 text-gray-600 indent-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {stateMessage && <p className="text-gray-600">{stateMessage}</p>}
      <div className="md:mt-6 mt-2 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-lightGreen px-3 py-2 text-sm font-semibold text-ashBlack shadow-sm hover:bg-burgundry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
