import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container flex flex-col md:px-12 lg:px-16 py-20 gap-20 lg:flex-row ">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <h3 className="font-medium text-3xl leading-10">Hi, my name is Giulia,</h3>
        <p className="font-thin text-xl leading-9 text-left">a seasoned web designer based in Italy. 
          My career in design has taken me across diverse cultural landscapes, including experiences in London and collaborations with renowned brands like <b>Diesel</b>, <b>Laura Ashley </b>and <b>Mintel</b>.
        </p>
        <p className="font-thin text-xl leading-9 text-left">
          With over a decade of experience in graphic design, I started my journey crafting compelling visuals and later transitioned into specializing in web design and development.
          I&apos;ve mastered essential technologies such as HTML, CSS, and frameworks like Tailwind, while delving into JavaScript and React to create dynamic user experiences, often within frameworks like Next.js.
        </p>
        <p className="font-thin text-xl leading-9 text-left">
          I believe in the convergence of design and user experience as integral to shaping memorable brand interactions.
          Whether collaborating with startups or established enterprises, I bring a blend of creative vision and technical proficiency to every project.
          My approach combines empathy, creativity, and strategic insight to deliver designs that resonate and inspire.
        </p>
        <p className="font-thin text-xl leading-9 text-left">
          Outside of designing pixels and writing code, you&apos;ll find me exploring illustration, creating digital patterns, strumming my guitar, and seeking inspiration through travel.
          As an <Link className="font-medium text-zinc-500 hover:text-zinc-600" href="https://www.16personalities.com/infp-personality" target="_blank">INFP</Link> personality type, I bring a unique blend of empathy and creativity to my work, aiming always to craft designs that are not only functional but also aesthetically pleasing.
        </p>

      </div>

      <div className="lg:w-1/2 text-center">
        <Image className="max-w-full rounded-full m-auto" src="/profilepic.png" alt="profile picture" width={480} height={480} priority/>
        <button className="self-start py-7 px-10 text-xl bg-zinc-700 hover:bg-zinc-600 transition-all border-0 text-white m-16">Download my CV</button>
      </div>

    </div>
  )
}