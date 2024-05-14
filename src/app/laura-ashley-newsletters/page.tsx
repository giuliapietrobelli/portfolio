import Image from 'next/image'
import Link from 'next/link'

export default function LauraAshleyNewsletters() {
  return (
    <div id="page-container" className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Laura Ashley newsletters</h2>
        <p className="font-light text-2xl my-6">As Email Designer at Laura Ashley, I was in charge of creating engaging and meaningful content to promote the
        brand and its products. Working closely with the copywriter and digital marketing coordinator, the aim was to
        create work that is both aesthetically pleasing and functional.
        </p>
      </div>

      <div id="preview" className="self-center md:max-w-[70%]">
        <Image id="preview-pic" className="self-center" src="/la-emails-thumb.jpeg" alt="Laura Ashley newsletters" width={1021} height={799} priority/>
      </div>

    <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
      <p className="font-light text-2xl my-6">A selection of newsletters designed and sent on a daily basis.
      </p>
    </div>

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

      <div id="la-grid" className="grid items-center grid-cols-4 gap-2 md:gap-8 lg:px-[10%]">
        <div id="la-grid-one">
          <Image id="la-lighting" className="max-w-full shadow-2xl shadow-zinc-350" src="/la-lighting-email.png" alt="Lighting selectin newsletter" width={405} height={1890} priority/>
        </div>
        <div id="la-grid-two">
          <Image id="la-autumn" className="max-w-full shadow-2xl shadow-zinc-350" src="/la-autumn-walks-email.png" alt="Autumn collection newsletter" width={405} height={1890} priority/>
        </div>
        <div id="la-grid-three">
          <Image id="la-christmas" className="max-w-full shadow-2xl shadow-zinc-350" src="/la-xmas-email.png" alt="Christmas gifts newsletter" width={405} height={1890} priority/>
        </div>
        <div id="la-grid-four">
          <Image id="la-hebrides" className="max-w-full shadow-2xl shadow-zinc-350" src="/la-hebrides-email.png" alt="Hebrides collection newsletter" width={405} height={1890} priority/>
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