import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col px-8 md:px-18 py-20 md:pt-[6%] lg:px-16 gap-16 lg:flex-row lg:gap-[15%] lg:items-center xl:px-[14%] 2xl:px-[22%]">
      <div id="text-box" className="flex flex-col gap-6 lg:w-[50%]">
        <h3 className="font-medium text-3xl">Hi, my name is Giulia,</h3>
        <p className="font-light text-base leading-7 text-left">I am a digital designer with a particular interest in illustration. I love to use my creativity to craft
          enjoyable and effective designs that drive user engagement, always striving to improve my skills through
          challenging projects.
          During my free time I enjoy drawing, listening to music and exploring new places. I’m also an animal lover and an <Link className="font-medium text-zinc-500  hover:text-zinc-600" href="https://www.16personalities.com/infp-personality" target="_blank">INFP</Link> type person.
        </p>

        <button className="self-start py-7 px-10 bg-zinc-500 hover:bg-zinc-600 transition-all border-0 text-white">Download my CV</button>
      </div>

      <div className="lg:w-[50%]">
        <Image className="max-w-full" id="profile-pic" src="/profilepic.png" alt="" width={690} height={690} priority/>
      </div>

    </div>
  )
}