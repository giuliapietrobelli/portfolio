import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container flex flex-col md:px-12 lg:px-16 py-20 gap-20 lg:flex-row lg:items-center">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <h3 className="font-medium text-3xl leading-10">Hi, my name is Giulia,</h3>
        <p className="font-thin text-xl leading-9 text-left">I am a digital designer with a particular interest in illustration. I love to use my creativity to craft
          enjoyable and effective designs that drive user engagement, always striving to improve my skills through
          challenging projects.
          During my free time I enjoy drawing, listening to music and exploring new places. I’m also an animal lover and an <Link className="font-medium text-zinc-500  hover:text-zinc-600" href="https://www.16personalities.com/infp-personality" target="_blank">INFP</Link> type person.
        </p>

        <button className="self-start py-7 px-10 bg-zinc-500 hover:bg-zinc-600 transition-all border-0 text-white">Download my CV</button>
      </div>

      <div className="lg:w-1/2">
        <Image className="max-w-full" id="profile-pic" src="/profilepic.png" alt="" width={690} height={690} priority/>
      </div>

    </div>
  )
}