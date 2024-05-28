import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import diesel1 from "./diesel_1.png"
import diesel2 from "./diesel_2.png"
import diesel3 from "./diesel_3.png"
import diesel4 from "./diesel_4.png"
import diesel5 from "./diesel_5.png"
import diesel6 from "./diesel_6.png"
import diesel7 from "./diesel_7.png"
import diesel8 from "./diesel_8.png"
import diesel9 from "./diesel_9.png"
import diesel10 from "./diesel_10.png"

const images = [
  {
    title: "Diesel tribute catalogue",
    src: diesel1,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel2,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel3,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel4,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel5,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel6,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel7,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel8,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel9,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel10,
    alt: "Diesel tribute catalogue"
  },

]

export default function DieselTribute() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Diesel tribute catalogue</h2>
        <p className="font-light text-2xl my-6">Design of Diesel Tribute catalog, a lookbook that presents the capsule collection designed by Nicola
        Formichetti. Designed during my time at Diesel within the Shopping Experience team.
        </p>
      </div>

      <div className="self-center md:max-w-[70%]">
        <Image id="preview-pic" className="self-center" src="/diesel_hero.jpeg" alt="Diesel tribute catalogue cover" width={1400} height={840} priority/>
      </div>

    {/* <div  className="text-left md:text-center md:max-w-[60%] self-center">
      <p className="font-light text-2xl my-6">My responsibilities consisted of improving the general look and feel of the existing website running in
        WordPress and give it a more modern look. The challenge was also to improve the UX of some pages to offer a
        better experience for the customers in order to help them easily find the reports they need. I was responsible
        for the communication with the developer and worked closely with the IT team.
      </p>
    </div> */}


      <div className="grid items-center md:grid-cols-2 md:gap-13 md:px-[10%]">
        <LightboxGallery images={images} />
      </div>

      <div className="flex justify-end xl:px-20">
        <Link href="./find-my-bike" className="flex items-center md:gap-4 mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 30L8 16L20 2" />
          </svg>
          <div>
            <h3 className="text-zinc-900 font-medium text-xl md:text-3xl">Previous project</h3>
          </div>
        </Link>
      </div>

    </div>
  )
}