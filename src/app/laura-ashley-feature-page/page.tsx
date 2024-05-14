import Image from 'next/image'
import Link from 'next/link'

export default function LauraAshleyFeature() {
  return (
    <div id="page-container" className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Laura Ashley feature page</h2>
        <p className="font-light text-2xl my-6">Working as Junior Digital Designer at Laura Ashley, I was responsible for designing features for both home and
        fashion, creating accompanying promotional graphics, and managing the day-to-day updating of the website.
        </p>
      </div>

      <div id="la-introduction" className="flex flex-col gap-14 px-[5%] lg:flex-row lg:gap-[5%] lg:items-center 2xl:px-[14%]">
        <div id="preview" className="lg:w-[50%]">
          <Image id="preview-pic" src="/la-page.gif" alt="Laura Ashley feature page" width={719} height={719} priority/>
        </div>

        <div id="text-description" className="lg:w-[50%]">
          <p className="flex flex-col gap-14 text-left font-light text-2xl my-6">This landing page was created to promote the vast choice of fit of the trousers range, with a focus on a
            particular best-selling model sold in two new coming different lengths.

            The UX is meant to provide the easiest and quicker experience: shoppers click through sliding carousels to not
            only see a variety of trouser styles but to transition between outfit inspiration as well. The rich
            photography
            allows customers to see exactly how every pair of trousers can be styled with other items.
          </p>
        </div>
      </div>

      <div id="item-pagination" className="flex justify-end xl:px-20">
        <Link href="/" id="item-pagination-link item-pagination-link--next" className="flex items-center md:gap-4 mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 30L8 16L20 2" />
          </svg>
          <div id="pagination-title-wrapper">
            <h3 id="item-pagination-title" className="text-zinc-900 font-medium text-xl md:text-3xl">Previous project</h3>
          </div>
        </Link>

        <Link href="/" id="item-pagination-link item-pagination-link--next" className="flex items-center md:gap-4">
          <div id="pagination-title-wrapper">
            <h3 id="item-pagination-title" className="text-zinc-900 font-medium text-xl md:text-3xl">Next project</h3>
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