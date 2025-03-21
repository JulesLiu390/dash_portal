import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { about, Leaf1, Leaf2 } from '../assets';
// import { ProjectsData } from '../utils/helper';
// import { FaGithub } from 'react-icons/fa6';

// import { addDoc, collection } from "firebase/firestore"
// import { db } from "../config/firebase.config"
import Alert from './Alert';

export const Contact = () => {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:"",
    })

    const handleTextChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);

        // update the state for the corresponding input values
        setData((prevDate) => ({... prevDate, [name] : value}))
    }

    const sendMessage = async() => {
        if(data.email === "" || data.email === null) {
            // throw an alert
            setAlert({isAlert:true, messsage:"Required fields cannot be empty", status:"warning"})

        } else {
            // await addDoc(collection(db, "messages"), {...data}).then(() => {
            //     setAlert({isAlert:true, messsage:"Thanks for contacting me.", status:"success"})

            //     console.log("success")
            // }).catch(err => {
            //     setAlert({isAlert:true, messsage:"Sorry, there is something wrong here.", status:"danger"})

            //     // throw an alert
            //     console.log("error")
            // });
        }

        setTimeout(() => {
            setAlert({
                firstName:"",
                lastName:"",
                email:"",
                message:"",
            })
        }, 4000);
    }

    const [alert, setAlert] = useState({
        isAlert: false,
        messsage: "",
        status: null,
    })


  return (
    <section id='contact'
    className='flex items-center justify-center flex-col gap-12 relative'>

        {/* alert */}
        <AnimatePresence>
            {alert.isAlert &&
                (<Alert status={alert.status} message={alert.messsage}/>)
            }
        </AnimatePresence>

        {/* title */}
        <div className='w-full flex items-center justify-center py-24'>
            <motion.div className='flex items-center justify-around w-52'
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:200}}
            exit={{opacity:0, width:0}}
            transition={{delay:0.4}}
            >
                <img src={Leaf1} className='w-6 h-auto object-contain' alt='' />
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900'>Contact me</p>
                <img src={Leaf2} className='w-6 h-auto object-contain' alt='' />
            </motion.div>
        </div>

        {/* main content */}
        <div className='w-full flex flex-col items-center justify-start gap-4'>
            <div className='w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type='text' name='firstName' value={data.firstName} onChange={handleTextChange} placeholder='First Name' className='w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] outline-none bg-transparent focus:border-red-500 text-gray-300'>
                    </input>
                    <input type='text' name='lastName'value={data.lastName} onChange={handleTextChange} placeholder='Last Name' className='w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] outline-none bg-transparent focus:border-red-500 text-gray-300'>
                    </input>
                </div>

                {/* email field */}
                <input type='email' name='email' value={data.email} onChange={handleTextChange} placeholder='Email' className='w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] outline-none bg-transparent focus:border-red-500 text-gray-300'>
                </input>
                <textarea name='message'
                value={data.message} onChange={handleTextChange}
                cols='0'
                rows='10' placeholder='Message here...' className='w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] outline-none bg-transparent focus:border-red-500 text-gray-300'>
                </textarea>

                <div className='w-full flex items-center justify-center lg:justify-end'>
                    <button className='px-12 py-3 bg-gradient-to-br from-red-500 to-red-900 rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black  hover:to-black hover:border hover:border-red-500 hover:text-red-500'
                    onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;