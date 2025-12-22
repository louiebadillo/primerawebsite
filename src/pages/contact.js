import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";
import BackgroundSection from "@/components/BackgroundSection";
import SEO from "@/components/SEO";


export default function About() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // Clear form
          setFormData({ name: "", email: "", message: "" });
          // Show success message (you can add a toast notification here)
          alert("Thank you for your message! We'll get back to you soon.");
        } else {
          alert("There was an error sending your message. Please try again.");
        }
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Pluming Eagle Lodge - Get Support Today"
        description="Reach out to Pluming Eagle Lodge for program information or support. Phone: (403) 807-6088 | Email: info@plumingeaglelodge.com | Calgary, Alberta"
        keywords="contact Indigenous services Alberta, Calgary child support, youth program inquiries, Indigenous child care contact, Alberta youth services phone"
        ogUrl="https://plumingeaglelodge.com/contact"
        canonicalUrl="https://plumingeaglelodge.com/contact"
      />

      <TransitionEffect />
      
      <main className={`flex w-full flex-col items-center justify-center dark:text-light`}>
        <BackgroundSection attachment="fixed" image="/images/sky.jpg">
        <Layout className="pt-16 sm:pt-32 mb-32">
          <AnimatedText
            text="Get In Touch"
            className="!text-gray-800 dark:!text-gray-800 sm:mt-8 mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8 text-center"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl xs:p-4">
            <div className="absolute top-0 -right-5 -z-10 h-[103%] w-[101.5%] rounded-[2rem] rounded-br-3xl bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
              <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark text-center w-full">
                We'd love to hear from you
              </h2>

              <div className="w-full"></div>
              <p className="text-lg leading-relaxed text-center">
                Have questions about our programs or need help getting started? Our team is here to support you. Reach out and we'll respond as soon as possible.
              </p>
              <div className="mt-32 text-xl text-dark/80 w-full">
                <div>Phone: (403) 807-6088</div>
                <div>Email: info@plumingeaglelodge.com</div>
                <div>Address: 4715 88 Ave NE #2205, Calgary, AB T3J 2J2</div>
              </div>
            </div>
            <div className="relative col-span-4 h-max xl:col-span-4 md:col-span-8 md:order-2">
              <div className="grid w-full grid-cols-2 sm:gap-6 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 xs:p-4">
                <div className="col-span-8 h-max xl:col-span-6 md:col-span-8 md:order-2">
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="access_key"
                      value="YOUR-WEB3FORMS-ACCESS-KEY"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="New Contact Form Submission - Pluming Eagle Lodge"
                    />
                    <input
                      type="hidden"
                      name="redirect"
                      value="https://web3forms.com/success"
                    />
                    <p className="hidden">
                      <label>
                        Name
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75">
                        Full Name:
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          required
                          autoComplete="name"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75">
                        Email Address:
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          required
                          autoComplete="off"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75">
                        Phone Number:
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          autoComplete="tel"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75">
                        Reason for Contact:
                        <select
                          name="reason"
                          value={formData.reason}
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light"
                          onChange={handleChange}
                        >
                          <option value="">Select a reason</option>
                          <option value="Journey to Belonging Home">Journey to Belonging Home</option>
                          <option value="Early Care Haven">Early Care Haven</option>
                          <option value="Nurturing Mothers Program">Nurturing Mothers Program</option>
                          <option value="Foster/Kinship Care Program">Foster/Kinship Care Program</option>
                          <option value="Inquiry">Inquiry</option>
                          <option value="Others">Others</option>
                        </select>
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark/75"
                      >
                        How Can We Help You?:
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          required
                          rows="4"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light"
                          onChange={handleChange}
                        ></textarea>
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <button
                        type="submit"
                        className="px-4 py-2 font-bold capitalize text-light bg-dark border border-2 border-solid border-dark rounded-md hover:bg-transparent hover:text-dark"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        </BackgroundSection>
      </main>
      
      {/* Background section removed below contact form */}
    </>
  );
}
