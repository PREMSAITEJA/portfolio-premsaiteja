import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email using EmailJS
    emailjs
      .send(
        "service_69pzflm",
        "template_zuqpd0i",
        {
          from_name: form.name,
          to_name: form.name,
          from_email: form.email,
          to_email: form.email,
          message: form.message,
        },
        "08vOMnZnVUEz-SvEs"
      )
      .then(
        () => {
          console.log("Email sent via EmailJS");
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );

    // Send email using Nodemailer via API
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Nodemailer Error:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      if (data.success) {
        console.log("Email sent via Nodemailer");
      } else {
        console.error("Nodemailer Error:", data.message);
      }
    } catch (error) {
      console.error("Error sending email via Nodemailer:", error.message);
    }

    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`xl:mt-16 flex xl:flex-row flex-col-reverse gap-14 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-7 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Cont<span className="text-purple-300">act.</span></h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-2 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : success ? "Email Sent!" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
