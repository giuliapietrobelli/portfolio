import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import compereHome from "./compere_home.png"
import compereAbout from "./compere_about.png"
import compereSolutions from "./compere_solutions.png"
import compereBlogListing from "./compere_blog_listing.png"
import compereBlog from "./compere_blog.png"
import compereContacts from "./compere_contacts.png"

const images = [
  {
    title: "Homepage",
    src: compereHome,
    alt: "Comperemedia homepage",
    className: "shadow-2xl shadow-zinc-400"
  },
  {
    title: "About page",
    src: compereAbout,
    alt: "Comperemedia about homepage",
    className: "shadow-2xl shadow-zinc-400"
  },
  {
    title: "Solutions page",
    src: compereSolutions,
    alt: "Comperemedia solutions page",
    className: "shadow-2xl shadow-zinc-400"
  },
  {
    title: "Blog listing page",
    src: compereBlogListing,
    alt: "Comperemedia blog listing page",
    className: "shadow-2xl shadow-zinc-400"
  },
  {
    title: "Blog page",
    src: compereBlog,
    alt: "Comperemedia blog page",
    className: "shadow-2xl shadow-zinc-400"
  },
  {
    title: "Contact page",
    src: compereContacts,
    alt: "Comperemedia contact page",
    className: "shadow-2xl shadow-zinc-400"
  }
]

export default function Comperemedia() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Comperemedia Website</h2>
        <p className="font-light text-2xl my-6">During my time at Mintel, I was asked to collaborate on the design of the marketing website for Comperemedia.
        Working closely with the designers of the marketing team, I was responsible for the finalization of the design
        and the handoff to the developer.
        </p>
      </div>

      <div className="self-center md:max-w-[70%]">
        <Image className="self-center" src="/comperemedia_thumb.jpg" alt="Comperemedia website preview" width={1021} height={799} priority/>
      </div>

    {/* <div className="text-left md:text-center md:max-w-[60%] self-center">
      <p className="font-light text-2xl my-6">My responsibilities consisted of improving the general look and feel of the existing website running in
        WordPress and give it a more modern look. The challenge was also to improve the UX of some pages to offer a
        better experience for the customers in order to help them easily find the reports they need. I was responsible
        for the communication with the developer and worked closely with the IT team.
      </p>
    </div> */}

      <div className="grid items-center grid-cols-6 gap-3 md:gap-8 md:p-[4%]">
        <LightboxGallery images={images} />
      </div>

      <div className="flex justify-end xl:px-20">
        <Link href="./mintel-store-redesign" className="flex items-center md:gap-4 mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 30L8 16L20 2" />
          </svg>
          <div>
            <h3 className="text-zinc-900 font-medium text-xl md:text-3xl">Previous project</h3>
          </div>
        </Link>

        <Link href="./mintel-digital-advertising" className="flex items-center md:gap-4">
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