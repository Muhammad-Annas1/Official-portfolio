'use client';

import { Send } from 'lucide-react';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/lib/variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const date = new Date();

    emailjs
      .sendForm(
        'service_78r93ca',     // replace with your EmailJS service ID
        'template_mrpigxj',    // replace with your EmailJS template ID
        form.current,
        'ds5opt1guErfHhEAy'      // replace with your EmailJS public key
      )
      .then(
        () => {
          alert('Your message has been sent!');
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="Contact" className="bg-[url(/contact/contact-bg.png)] bg-cover bg-center py-28">
      <div className="container px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Heading Section */}
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-[40px] font-extrabold uppercase leading-tight text-white">
            Let&apos;s work <br /> <span className="under-line text-blue-400">together</span>
          </h1>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          variants={FadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className="w-full max-w-lg bg-white/90 backdrop-blur-lg p-8 rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 outline-none resize-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            {/* Hidden date/time fields */}
            <input type="hidden" name="date" value={new Date().toLocaleDateString('en-GB')} />
            <input type="hidden" name="time" value={new Date().toLocaleTimeString('en-US')} />

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-white font-medium shadow-md transition-all duration-300 hover:bg-blue-600"
            >
              <p className="text-lg capitalize">Send Message</p>
              <Send className="h-5 w-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
