import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import laFeature from "./la-page.gif"

const images = [
  {
    title: "Laura Ashley feature page",
    src: laFeature,
    alt: "Laura Ashley feature page"
  }
]

export default function LauraAshleyFeature() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Laura Ashley feature page</h2>
        <p className="font-light text-2xl my-6">Working as Junior Digital Designer at Laura Ashley, I was responsible for designing features for both home and
        fashion, creating accompanying promotional graphics, and managing the day-to-day updating of the website.
        </p>
      </div>

      <div className="flex flex-col gap-14 px-[5%] lg:flex-row lg:gap-[5%] lg:items-center 2xl:px-[14%]">
        <div className="lg:w-[50%]">
        <LightboxGallery images={images} />
        </div>

        <div className="lg:w-[50%]">
          <p className="flex flex-col gap-14 text-left font-light text-2xl my-6">This landing page was created to promote the vast choice of fit of the trousers range, with a focus on a
            particular best-selling model sold in two new coming different lengths.

            The UX is meant to provide the easiest and quicker experience: shoppers click through sliding carousels to not
            only see a variety of trouser styles but to transition between outfit inspiration as well. The rich
            photography
            allows customers to see exactly how every pair of trousers can be styled with other items.
          </p>
        </div>
      </div>

      <div className="flex justify-end xl:px-20">
        <Link href="./illustrations" className="flex items-center md:gap-4 mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 30L8 16L20 2" />
          </svg>
          <div>
            <h3 className="text-zinc-900 font-medium text-xl md:text-3xl">Previous project</h3>
          </div>
        </Link>

        <Link href="./laura-ashley-newsletters" className="flex items-center md:gap-4">
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