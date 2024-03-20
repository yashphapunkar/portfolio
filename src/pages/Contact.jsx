import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox"
import Loader from "../components/Loader"
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";


const Contact = () => {
const formRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
 const [currentAnimation, setCurrentAnimation] = useState('idle');
 const {alert, showAlert, hideAlert} = useAlert();
  const handleChange = (e) => {
    // console.log(e.target.name)
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleFocus = (e) => {
    e.preventDefault();
    setCurrentAnimation("walk")
  };

  const handleBlur = () => {
    setCurrentAnimation('idle')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

    emailjs.sendForm(
        "service_kgeu86w",
        "template_6hobgf8",
        {
            form_name: form.name,
            to_name: "Yash",
            from_email: form.email,
            to_email: 'yashphapunkar@gmail.com',
            message: form.message,
        },
        "IptkscbUafIMC4tbH",
    ).then((res) => {
      showAlert({show: true, text:"Message sent successfully!", type: "success"})
        setIsLoading(false);

        setTimeout(() => {
          hideAlert(); 
          setForm({name: "", email: "",  message: ""})
          setCurrentAnimation('idle');

        }, 3000)

    }).catch((err) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        showAlert({show: true, text:"Message not sent!", type: "danger"})
        console.log(err)

    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form action="" className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
         >
          <label htmlFor="" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label htmlFor="" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label htmlFor="" className="text-black-500 font-semibold">
            Your Message
            <textarea
              type="text"
              name="message"
              className="textarea"
              placeholder="Your message"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
          type="submit"
          className="btn"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]" >
        <Canvas
        camera={{
          position: [0,0,5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader />}>
            <Fox
            position={[0.5,.035,0]} 
            rotation={[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}
            currentAnimation={currentAnimation}
            />
          </Suspense>

        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
