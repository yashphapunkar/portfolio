import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from "../assets/icons/index"

const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>
      {text}
      </p>
    <Link
    className='neo-brutalism-white neo-btn'
    to={link} 
    >
      {btnText}
      <img src={arrow}/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi! I'm <span className='font-semibold'>Yash Phapunkar</span>
      <br />
      A Software Engineer from India
      <br />

      <div className="mt-0 flex flex-col gap-3 text-white">
                <p className='text-xs'>(click and drag your mouse to left to learn more! )
                </p>
               </div>
    </h1>
  ),
  2: (
    <InfoBox 
    text={"From sotware engineering to music to Art want to know more about me? "}
    link={"/about"}
    btnText={"Learn more"}
    />
  ),
  3: (

    <InfoBox 
    text={"Lead multiple projects to sucess over the years want to know about them? "}
    link={"/projects"}
    btnText={"Visit my portfolio"}
    />

  ),
  4: (
    <InfoBox 
    text={"Need a project done or looking for a dev? I'm just a few stpes away"}
    link={"contact"}
    btnText={"Contact Me"}
    />
  )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo