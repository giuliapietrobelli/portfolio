import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import fmb1 from "./fmb_userflow.png"
import fmb2 from "./fmb_mockup_mobile.png"
import fmb3 from "./fmb_illo.png"
import fmb4 from "./fmb_ui_elements.png"

const images = [
  {
    title: "Userflow",
    src: fmb1,
    alt: "Userflow"
  },
  {
    title: "Mockup",
    src: fmb2,
    alt: "Mockup"
  },
  {
    title: "Illustrations",
    src: fmb3,
    alt: "Illustrations newsletter"
  },
  {
    title: "Ui elements",
    src: fmb4,
    alt: "Ui elements"
  },
]

export default function FindMyBike() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Find my bike app</h2>
        <p className="font-light text-2xl my-6">Findmybike is a personal project that is on a plan to be developed. It’s a mobile app that allows people to
        compare multiple types of bikes, in order to easily find the right one. I created all the visual parts including
        branding Identity, illustrations, Ux, and Ui design.
        </p>
      </div>

      <div className="self-center md:max-w-[70%]">
        <Image className="self-center" src="/fmb_hero.jpeg" alt="Find my bike cover" width={1400} height={840} priority/>
      </div>

    {/* <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
      <p className="font-light text-2xl my-6">My responsibilities consisted of improving the general look and feel of the existing website running in
        WordPress and give it a more modern look. The challenge was also to improve the UX of some pages to offer a
        better experience for the customers in order to help them easily find the reports they need. I was responsible
        for the communication with the developer and worked closely with the IT team.
      </p>
    </div> */}

      <div className="grid items-center gap-3 md:grid-cols-2 md:gap-8 md:px-[8%]">
        <LightboxGallery images={images} />
      </div>

      <div className="flex justify-end xl:px-20">
        <Link href="./laura-ashley-newsletters" className="flex items-center md:gap-4 mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 30L8 16L20 2" />
          </svg>
          <div>
            <h3 id="item-pagination-title" className="text-zinc-900 font-medium text-xl md:text-3xl">Previous project</h3>
          </div>
        </Link>

        <Link href="./diesel-tribute-catalogue" className="flex items-center md:gap-4">
          <div>
            <h3 className="text-zinc-900 font-medium text-xl md:text-3xl">Next project</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="m12 30l12-14L12 2" />
          </svg>
        </Link>
      </div>

    </div>
  )
}