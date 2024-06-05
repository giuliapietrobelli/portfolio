import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import mintelHome from "./mintel_home.png"
import mintelListing from "./mintel_listing.png"
import mintelProduct from "./mintel_product.png"
import mintelCart from "./mintel_cart.png"
import mintelCheckout from "./mintel_checkout.png"

const images = [
  {
    title: "Homepage",
    src: mintelHome,
    alt: "Mintel homepage",
    className: "shadow-2xl shadow-zinc-400 row-[1/3]",
  },
  {
    title: "Listing page",
    src: mintelListing,
    alt: "Mintel listing page",
    className: "shadow-2xl shadow-zinc-400 row-[1/3]",
  },
  {
    title: "Product page",
    src: mintelProduct,
    alt: "Mintel product page",
    className: "shadow-2xl shadow-zinc-400 row-[1/3]",
  },
  {
    title: "Cart page",
    src: mintelCart,
    alt: "Mintel cart page",
    className: "shadow-2xl shadow-zinc-400 row-[1/2]",
  },
  {
    title: "Checkout page",
    src: mintelCheckout,
    alt: "Mintel checkout page",
    className: "shadow-2xl shadow-zinc-400 col-[4] row-[2]",
  }
]

export default function Mintel() {
  return (
    <div id="page-container" className="container flex flex-col gap-10 md:gap-20 py-14 px-10">

      <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Mintel Store Redesign</h2>
        <p className="font-light text-2xl my-6">Mintel&apos;s mission is to help companies to understand consumers’ behavior and buying orientations. As part of
          the newly formed digital marketing team, I was in charge of redesigning its eCommerce platform that sells consumer
          market reports.
        </p>
      </div>

      <div id="preview" className="self-center md:max-w-[70%]">
        <Image id="preview-pic" className="self-center" src="/mintel_home_thumb.png" alt="Mintel Store preview" width={1021} height={799} priority/>
      </div>

    <div id="text-description" className="text-left md:text-center md:max-w-[60%] self-center">
      <p className="font-light text-2xl my-6">My responsibilities consisted of improving the general look and feel of the existing website running in
        WordPress and give it a more modern look. The challenge was also to improve the UX of some pages to offer a
        better experience for the customers in order to help them easily find the reports they need. I was responsible
        for the communication with the developer and worked closely with the IT team.
      </p>
    </div>

    <div id="mintel-grid" className="grid items-center grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 md:p-[4%]">
      <LightboxGallery images={images} className='h-5/6'/>
      {/* <div id="mintel-grid-one" className="row-[1/3]">
        <Image 
          className="shadow-2xl shadow-zinc-400" 
          src={mintelHome}
          alt="Mintel homepage" 
          priority
          quality={30}
          width={360}
        />
      </div>
      <div id="mintel-grid-two" className="row-[1/3]">
        <Image
          className="max-w-full shadow-2xl shadow-zinc-400"
          src={mintelListing}
          alt="Mintel listing page"
          width={1021}
          height={799}
          priority/>
      </div>
      <div id="mintel-grid-three"
      className="row-[1/3]">
        <Image
          className="max-w-full shadow-2xl shadow-zinc-400"
          src={mintelProduct}
          alt="Mintel product page"
          width={1021}
          height={799}
          priority/>
      </div>
      <div id="mintel-grid-four" className="row-[1/2]">
        <Image
          className="max-w-full shadow-2xl shadow-zinc-400"
          src={mintelCart}
          alt="Mintel cart page"
          width={1021}
          height={799}
          priority/>
      </div>
      <div id="mintel-grid-five" className="col-[4] row-[2]">
        <Image
          className="max-w-full shadow-2xl shadow-zinc-400"
          src={mintelCheckout}
          alt="Mintel checkout page"
          width={1021}
          height={799}
          priority/>
      </div>         */}
    </div>

      <div id="mintel-pagination" className="flex justify-end xl:px-20">
        <Link href="./comperemedia-website" id="item-pagination-link item-pagination-link--next" className="flex items-center md:gap-4">
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