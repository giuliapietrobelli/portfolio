import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import newsletter1 from "./la-lighting-email.png"
import newsletter2 from "./la-autumn-walks-email.png"
import newsletter3 from "./la-xmas-email.png"
import newsletter4 from "./la-hebrides-email.png"

const images = [
  {
    title: "Lighting Looks newsletter",
    src: newsletter1,
    alt: "Lighting Looks newsletter"
  },
  {
    title: "Autumn Walks Collection newsletter",
    src: newsletter2,
    alt: "Autumn Walks Collection newsletter"
  },
  {
    title: "Christmas Gifts Guide",
    src: newsletter3,
    alt: "Christmas Gifts Guide newsletter"
  },
  {
    title: "Hebrides Collection newsletter",
    src: newsletter4,
    alt: "Hebrides Collection newsletter"
  },
]

export default function LauraAshleyNewsletters() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Laura Ashley newsletters</h2>
        <p className="font-light text-2xl my-6">As Email Designer at Laura Ashley, I was in charge of creating engaging and meaningful content to promote the
        brand and its products. Working closely with the copywriter and digital marketing coordinator, the aim was to
        create work that is both aesthetically pleasing and functional.
        </p>
      </div>

      <div className="self-center md:max-w-[70%]">
        <Image className="self-center" src="/la-emails-thumb.jpeg" alt="Laura Ashley newsletters" width={1021} height={799} priority/>
      </div>

    <div className="text-left md:text-center md:max-w-[60%] self-center">
      <p className="font-light text-2xl my-6">A selection of newsletters designed and sent on a daily basis.
      </p>
    </div>


      <div className="grid items-center grid-cols-4 gap-2 md:gap-8 lg:px-[10%]">
      <LightboxGallery images={images} />
      </div>

      <div className="flex justify-end xl:px-20">
        <Link href="./laura-ashley-feature-page" className="flex items-center md:gap-4 mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 30L8 16L20 2" />
          </svg>
          <div>
            <h3 className="text-zinc-900 font-medium text-xl md:text-3xl">Previous project</h3>
          </div>
        </Link>

        <Link href="./find-my-bike" id="item-pagination-link item-pagination-link--next" className="flex items-center md:gap-4">
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