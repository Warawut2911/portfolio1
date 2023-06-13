import React, { useState } from 'react';
import Title from '../layouts/Title';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { contactImg } from '../../assets';

const Contact = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id='contact' className='w-full py-20 border-b-[1px] border-d-black'>
        <div className='flex justify-center items-center text-center'>
            <Title title="contact" des="contact with me" />
        </div>
        <div className='w-full'>
                <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                        <img className='w-full h-64 object-cover rounded-lg mb-2' src={contactImg} alt='contactImg' />
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-3xl font-bold text-white'>John Doe</h3>
                            <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                            <p className='text-base text-gray-400 tracking-wide'>Nulla irure aliquip pariatur veniam. Exercitation laborum non sint dolore sunt. Consequat veniam dolore ipsum duis ipsum eu velit quis sunt sit. Deserunt culpa Lorem laboris est ad magna esse in tempor excepteur. Ut commodo officia sunt deserunt cupidatat laboris voluptate in Lorem consequat officia. Ipsum labore proident ullamco amet proident sunt ipsum nostrud nisi eiusmod tempor.</p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>Phone: <span className='text-lightText'>+66 906713422</span></p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>Email: <span className='text-lightText'>humz@gmail.com</span></p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-base uppercase font-titleFont mb-4'>Find me In</h2>
                            <div className='flex gap-4'>
                                <span className='bannerIcon'><FaFacebookF /></span>
                                <span className='bannerIcon'><FaTwitter /></span>
                                <span className='bannerIcon'><FaLinkedinIn /></span>
                            </div>
                        </div>
                    </div>

                    {/* {Contact Form} */}
                    <div className='w-full lgl:w-[60%] h-full flex flex-col py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
                        <form className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5'>
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                {successMsg}
                                </p>
                            )}
                            <div className='w-full flex flex-col lgl:flex-row gap-10'>
                                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        className={`${
                                        errMsg === "Username is required!" &&
                                        "outline-designColor"
                                        } contactInput`}
                                        type="text"
                                    />
                                </div>
                                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>phone number</p>
                                    <input
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        className={`${
                                        errMsg === "Phone number is required!" &&
                                        "outline-designColor"
                                        } contactInput`}
                                        type="tel"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>email</p>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`${
                                        errMsg === "Please give your Email!" &&
                                        "outline-designColor"
                                    } contactInput`}
                                    type="email"
                                    />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>subject</p>
                                 <input
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    className={`${
                                        errMsg === "Plese give your Subject!" &&
                                        "outline-designColor"
                                    } contactInput`}
                                    type="text"
                                    />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>message</p>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    className={`${
                                        errMsg === "Message is required!" && "outline-designColor"
                                    } contactTextArea`}
                                    cols="30"
                                    rows="8"
                                    ></textarea>
                            </div>
                            <div className='w-full'>
                                <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
                            </div>
                             {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                {successMsg}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Contact