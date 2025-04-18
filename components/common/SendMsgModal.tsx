import contactAction from "@/app/actions/contact";
import { poppins, ubuntu } from "@/app/utils/Fonts";
import { IconReload, IconSend } from "@/icons";
import { RefObject, useRef } from "react";
import { useFormStatus } from "react-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface props { modalRef: RefObject<HTMLDialogElement> }

const SendMsgModal = (props: props) => {

    const formRef = useRef<HTMLFormElement>(null)

    async function action(formData: FormData) {
        try {
            await contactAction(formData);

            props.modalRef.current?.close()
            toast('Your message has been sent successfully to the developer, Kindly wait for response. Thank you!',)
        } catch (error) {
            props.modalRef.current?.close();
            toast.error("Sorry!, failed to send message to the developer.", { theme: "colored" })
        } finally {
            formRef.current?.reset();
        }
    }


    return (
        <>
            <dialog ref={props.modalRef} className="w-4/5 md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-2xl dark:shadow-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none backdrop:bg-black/80">
                <div className='flex justify-between text-slate-500 dark:text-blue-300  p-4'>
                    <h3 className='text-xl lg:text-2xl font-bold' style={poppins.style}>Get in touch</h3>
                    <span onClick={() => props.modalRef.current?.close()} style={ubuntu.style} className='ring-1 rounded-md text-xs h-fit p-1 ring-slate-900/10 dark:ring-slate-700/50 shadow-sm ml-3 cursor-pointer'>
                        Esc
                    </span>
                </div>
                <form ref={formRef} action={action} className='w-full flex p-4 flex-col' style={poppins.style}>
                    <ContactForm />
                </form>
            </dialog>
            <ToastContainer position="top-right" pauseOnHover newestOnTop stacked />
        </>
    )
}

function ContactForm() {

    const { pending } = useFormStatus();

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 w-full mb-4" >
                <div className="w-full">
                    <label htmlFor="visitor-name" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Your Name</label>
                    <input type="text" id="visitor-name" aria-label="visitor-name" name="name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100 disabled:cursor-none" placeholder="John Doe" disabled={pending} />
                </div>
                <div className="w-full">
                    <label htmlFor="visitor-email" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Your Email</label>
                    <input type="email" id="visitor-email" aria-label="visitor-email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100 disabled:cursor-none" placeholder="john_doe@email.com" disabled={pending} />
                </div>
            </div>
            <div className="relative mb-4">
                <label htmlFor="visitor-subject" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Subject</label>
                <input type="text" id="visitor-subject" aria-label="visitor-subject" name="subject" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100 disabled:cursor-none" placeholder="What's this about?" disabled={pending} />
            </div>
            <div className="relative mb-4">
                <label htmlFor="visitor-message" className="block mb-2 text-base font-medium text-gray-600 dark:text-gray-300">Your Message</label>
                <textarea id="visitor-message" aria-label="visitor-message" name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-sm outline-none text-gray-700 p-2 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-900 dark:text-gray-100 disabled:cursor-none" placeholder="Let me know how can I help you ..." disabled={pending}></textarea>
            </div>
            <button type="submit" style={ubuntu.style} className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded-lg text-lg flex items-center w-fit ml-auto gap-2 disabled:cursor-none" disabled={pending}>
                {pending ? <IconReload className="text-xl animate-spin" /> : <IconSend className="text-xl" />}
                {pending ? 'Sending ...' : 'Send'}
            </button>
        </>
    )

}

export default SendMsgModal