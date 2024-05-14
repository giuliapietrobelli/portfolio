import Image from 'next/image'
import Link from 'next/link'

export default function DieselTribute() {
  return (
    <div id="page-container" className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Diesel tribute catalogue</h2>
        <p className="font-light text-2xl my-6">Design of Diesel Tribute catalog, a lookbook that presents the capsule collection designed by Nicola
        Formichetti. Designed during my time at Diesel within the Shopping Experience team.
        </p>
      </div>

      <div id="preview" className="self-center md:max-w-[70%]">
        <Image id="preview-pic" className="self-center" src="/diesel_hero.jpeg" alt="Diesel tribute catalogue cover" width={1400} height={840} priority/>
      </div>

    {/* <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
      <p className="font-light text-2xl my-6">My responsibilities consisted of improving the general look and feel of the existing website running in
        WordPress and give it a more modern look. The challenge was also to improve the UX of some pages to offer a
        better experience for the customers in order to help them easily find the reports they need. I was responsible
        for the communication with the developer and worked closely with the IT team.
      </p>
    </div> */}

      <div id="lightbox" className="fixed top-0 left-0 w-screen bg-zinc-900/50 hidden flex-col items-center gap-2 overflow-scroll">
        <div id="icon-container" className="flex w-[95%] justify-end fixed top-[5%]">
          <div id="close-lightbox close-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
              <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                d="M2 30L30 2m0 28L2 2" />
            </svg>
          </div>
        </div>
        <div id="lightbox-container" className="max-w-[70%] w-screen bg-white">
           {/* <h3>lightbox</h3>  */}
        </div>
      </div>

      <div id="diesel-grid" className="grid items-center md:grid-cols-2 md:gap-13 md:px-[10%]">
        <div id="diesel-grid-one">
          <Image id="diesel-1" className="max-w-full" src="/diesel_1.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-two">
          <Image id="diesel-2" className="max-w-full" src="/diesel_2.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-three">
          <Image id="diesel-3" className="max-w-full" src="/diesel_3.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-four">
          <Image id="diesel-4" className="max-w-full" src="/diesel_4.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-five">
          <Image id="diesel-5" className="max-w-full" src="/diesel_5.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-six">
          <Image id="diesel-6" className="max-w-full" src="/diesel_6.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-seven">
          <Image id="diesel-7" className="max-w-full" src="/diesel_7.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-eight">
          <Image id="diesel-8" className="max-w-full" src="/diesel_8.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-nine">
          <Image id="diesel-9" className="max-w-full" src="/diesel_9.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
        </div>
        <div id="diesel-grid-ten">
          <Image id="diesel-10" className="max-w-full" src="/diesel_10.png" alt="diesel tribute catalogue" width={1021} height={799} priority/>
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

        {/* <Link href="/" id="item-pagination-link item-pagination-link--next" className="flex items-center md:gap-4">
          <div id="pagination-title-wrapper">
            <h3 id="item-pagination-title" className="text-zinc-900 font-medium text-xl md:text-3xl">Next project</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="m12 30l12-14L12 2" />
          </svg>
        </Link> */}
      </div>

    </div>
  )
}