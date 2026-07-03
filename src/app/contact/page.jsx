"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    title: "Email",
    value: "itsasmaulhosna@gmail.com",
    icon: <FaEnvelope />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "Mobile Phone",
    value: "015184554665",
    icon: <FaPhoneAlt />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "WhatsApp",
    value: "01918261904",
    icon: <FaWhatsapp />,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Location",
    value: "Dhaka, Bangladesh",
    icon: <FaMapMarkerAlt />,
    color: "from-purple-500 to-pink-500",
  },
];

const socials = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/itsasmaulhosna",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/asma-ul-hosna-99a7553b4/",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <FaTwitter />,
    link: "#",
  },
  {
    id: 4,
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/iamAsmaULHosna",
  },
  {
    id: 5,
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "#",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pt-20">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Have a project in mind? Let&apos;s work together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-8">
          {/* Left Sidebar */}
          <div className={`
rounded-[32px]
border border-gray-200 dark:border-white/10
bg-white dark:bg-gradient-to-b dark:from-[#0B0B0B] dark:to-[#050505]
shadow-lg dark:shadow-none
transition-colors duration-300
`}>
            {/* Glow */}
            <div className="absolute -top-24 -left-24 w-52 h-52 bg-cyan-500/20 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3">
                Contact Information
              </h3>

              <p className="text-gray-400 mb-10 text-base leading-relaxed">
                Feel free to reach out through any channel.
              </p>

              {/* Contact Cards */}
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div
                    key={item.id}
                    className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-gray-100 dark:bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Smaller Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl shadow-lg transition-all duration-500`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="uppercase tracking-[3px] text-[11px] text-gray-500 mb-1 font-semibold">
                        {item.title}
                      </p>

                      {/* Smaller Font */}
                      <h4 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-200 break-all">
                        {item.value}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Follow Me */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6">Follow Me</h4>

                <div className="grid grid-cols-2 gap-4">
                  {socials.map((social) => (
                    <a
                      href={social.link}
                      key={social.id}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-500"
                    >
                      <div className="text-lg text-cyan-400 group-hover:scale-110 transition-all duration-500">
                        {social.icon}
                      </div>

                      <span className="font-medium text-gray-300 group-hover:text-white transition-all duration-500">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="relative rounded-[32px] border border-white/10 bg-gray-100 dark:bg-white/[0.03] p-8 md:p-10 overflow-hidden">
            {/* Glow */}
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-3">
                Send a Message
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
                I&apos;ll get back to you as soon as possible.
              </p>

              <form className="space-y-7">
                {/* Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-3 text-gray-300 font-medium">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`
w-full
h-16
rounded-2xl
bg-gray-100 dark:bg-white/[0.03]
border border-gray-300 dark:border-white/10
text-gray-900 dark:text-white
placeholder:text-gray-500
focus:border-cyan-400
transition-all
`} />
                  </div>

                  <div>
                    <label className="block mb-3 text-gray-300 font-medium">
                      Your Email
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-16 rounded-2xl bg-gray-100 dark:bg-white/[0.03] border border-white/10 px-6 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block mb-3 text-gray-300 font-medium">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project discussion"
                    className="w-full h-16 rounded-2xl bg-gray-100 dark:bg-white/[0.03] border border-white/10 px-6 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all duration-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-3 text-gray-300 font-medium">
                    Message
                  </label>

                  <textarea
                    rows={7}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-2xl bg-gray-100 dark:bg-white/[0.03] border border-white/10 px-6 py-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all duration-500 resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="relative overflow-hidden flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.45)]"
                >
                  <FaPaperPlane className="text-base" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}