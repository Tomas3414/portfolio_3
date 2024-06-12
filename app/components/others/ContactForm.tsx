import { poppins, robotoMono } from "@/app/utils/Fonts"
import { ServerData } from "@/app/utils/ServerData";
import { FormEvent, RefObject, useRef } from "react"
import { LuSend } from "react-icons/lu";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface props { modalRef: RefObject<HTMLDialogElement> }

const ContactForm = (props: props) => {

    const formRef = useRef<HTMLFormElement>(null)

    async function handelSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formRef.current) {
            const formData = new FormData(formRef.current);

            const serverData = new ServerData({ path: 'sendMail' });
            serverData.get({
                body: {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                    withImg: true,
                }
            }).then(() => {
                props.modalRef.current?.close();
                formRef.current?.reset();
                toast('Your message has been sent successfully to the developer, Kindly wait for response. Thank you!')
            }).catch((err) => {
                props.modalRef.current?.close();
                toast.error("Sorry!, failed to send email to the developer.", {theme: "colored"})
                console.log(err)
            });
        }
    }


    return (
        <>
            <dialog ref={props.modalRef} className="w-4/5 md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-2xl dark:shadow-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none backdrop:bg-black/80">
                <div className='flex justify-between text-slate-500 dark:text-blue-300  p-4'>
                    <h1 className='text-xl lg:text-2xl font-bold' style={poppins.style}>Contact Form</h1>
                    <span onClick={() => props.modalRef.current?.close()} style={robotoMono.style} className='ring-1 rounded-md text-xs h-fit p-1 ring-slate-900/10 dark:ring-slate-700/50 shadow-sm ml-3 cursor-pointer'>
                        Esc
                    </span>
                </div>
                <form ref={formRef} onSubmit={handelSubmit} className='w-full flex p-4 flex-col' style={poppins.style}>
                    <div className="flex flex-col md:flex-row gap-4 w-full mb-4" >
                        <div className="w-full">
                            <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100" placeholder="John Doe" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100" placeholder="john_doe@email.com" />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="subject" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" name="subject" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100" placeholder="Let me know how can i help you" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Your Message</label>
                        <textarea id="message" name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-sm outline-none text-gray-700 p-2 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" style={robotoMono.style} className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded-lg text-lg flex items-center w-fit ml-auto gap-2">
                        <LuSend className="text-xl" />
                        Send
                    </button>
                </form>
            </dialog>
            <ToastContainer position="top-right" pauseOnHover newestOnTop />
        </>
    )
}

export default ContactForm