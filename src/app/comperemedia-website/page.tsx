import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import ProjectIntro from '../project-intro'
import compereHome from "./compere_home.png"
import compereAbout from "./compere_about.png"
import compereSolutions from "./compere_solutions.png"
import compereBlogListing from "./compere_blog_listing.png"
import compereBlog from "./compere_blog.png"
import compereContacts from "./compere_contacts.png"
import PaginationLinks from '../pagination-links'

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
    <>
      <div className="container flex flex-col gap-10 md:gap-20 py-20">

        <ProjectIntro title="Comperemedia Website">
          During my time at Mintel, I was asked to collaborate on the design of the marketing website for Comperemedia.
          Working closely with the designers of the marketing team, I was responsible for the finalization of the design
          and the handoff to the developer.
        </ProjectIntro>

        <div className="self-center">
          <Image className="self-center" src="/comperemedia_thumb.jpg" alt="Comperemedia website preview" width={1250} height={799} priority />
        </div>

        <div className="grid items-center grid-cols-6 gap-3 md:gap-8">
          <LightboxGallery images={images} className='h-5/6' />
        </div>
      </div>

      <PaginationLinks
          prev="Mintel Store Redesign"
          prevLink="./mintel-store-redesign"
          next="Mintel Digital Advertising"
          nextLink="./mintel-digital-advertising"
        />
    </>
  )
}