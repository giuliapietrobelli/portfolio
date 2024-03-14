import Image from 'next/image'
import Link from 'next/link'

export default function MintelAdv() {
  return (
    <div id="page-container" className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Mintel digital advertising</h2>
        <p className="font-light text-2xl my-6">One of my day-to-day tasks at Mintel was to create engaging digital banners for paid advertising. Working closely with the team the aim was to create engaging visuals and copy that helped to gain leads or sales.
        </p>
      </div>

      <div id="preview" className="self-center md:max-w-[70%]">
        <Image id="preview-pic" className="self-center" src="/mintel_banners_tumb.jpeg" alt="Mintel banners" width={1021} height={799} priority/>
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
              <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                d="M2 30L30 2m0 28L2 2" />
            </svg>
          </div>
        </div>
        <div id="lightbox-container" className="max-w-[70%] w-screen bg-white">
           {/* <h3>lightbox</h3>  */}
        </div>
      </div>

      <div id="preview" className="self-center md:max-w-[70%]">
        <Image id="preview-pic" className="self-center" src="/mintel-banners-linkedin-carousel.png" alt="Mintel banners linkedin carousel" width={1021} height={799} priority/>
      </div>


      <div id="item-pagination" className="flex justify-end xl:px-20">
        <Link href="/" id="item-pagination-link item-pagination-link--next" className="flex items-center md:gap-4 mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
            <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m12 30l12-14L12 2" />
          </svg>
        </Link>


      </div>

    </div>
  )
}