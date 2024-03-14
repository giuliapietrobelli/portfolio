import Image from 'next/image'
import Link from 'next/link'

export default function Illustrations() {
  return (
    <div id="page-container" className="flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Illustrations</h2>
        <p className="font-light text-2xl my-6">A selection of illustrations made with Procreate, Illustrator, and Photoshop
        </p>
      </div>

      <div id="illustrations-grid" className="grid items-center grid-cols-2 md:grid-cols-3 gap-9 md:gap-12 px-[6%]">
        <div id="illustrations-grid-one">
          <Image id="illustrations-1" className="max-w-full" src="/illustrations-skater-boy.png" alt="skater boy illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-two">
          <Image id="illustrations-2" className="max-w-full" src="/illustrations-bloom.png" alt="bloom illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-three">
          <Image id="illustrations-3" className="max-w-full" src="/illustrations-yoga.png" alt="yoga illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-four">
          <Image id="illustrations-4" className="max-w-full" src="/illustrations-lipari.png" alt="lipari illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-five">
          <Image id="illustrations-5" className="max-w-full" src="/illustrations-preraphaelites.png" alt="preraphaelites illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-six">
          <Image id="illustrations-6" className="max-w-full" src="/illustrations-lotus-flower.png" alt="lotus flower illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-seven">
          <Image id="illustrations-7" className="max-w-full" src="/illustrations-pixie-girl.png" alt="pixie girl illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-eight">
          <Image id="illustrations-8" className="max-w-full" src="/illustrations-pattern-buttercup.png" alt="pattern buttercup illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-nine">
          <Image id="illustrations-9" className="max-w-full" src="/illustrations-fashion.png" alt="fashion illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-ten">
          <Image id="illustrations-10" className="max-w-full" src="/illustrations-deer.png" alt="deer illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-eleven">
          <Image id="illustrations-11" className="max-w-full" src="/illustrations-fairy.png" alt="fairy illustration" width={1000} height={1000} priority/>
        </div>
        <div id="illustrations-grid-twelve">
          <Image id="illustrations-12" className="max-w-full" src="/illustrations-bubblegum-girl.png" alt="glitch girl illustration" width={1000} height={1000} priority/>
        </div>
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