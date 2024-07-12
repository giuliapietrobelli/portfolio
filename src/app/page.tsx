import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  const textOverlay = 'font-medium text-3xl'
  const portfolioOverlay = 'flex items-center justify-center absolute bg-white opacity-0 w-full h-full hover:opacity-75 hover:transition-opacity'

  return (
    <main className="flex flex-col items-center justify-between pb-11">

      <div className="flex flex-col flex-wrap min-h-52 slide">
        <h1 className="max-w-sm md:max-w-md lg:max-w-xl m-auto text-center sm:py-20 lg:py-24 px-8 text-2xl sm:text-3xl lg:text-4xl leading-snug md:leading-normal lg:leading-snug font-normal text-zinc-900">
          Ciao! I&apos;m Giulia, a <b>digital designer</b> based in Italy.
        </h1>
      </div> 

      <div className="grid gap-10 md:grid-cols-2 px-6 md:px-10">

        <GalleryImage
          title="Mintel Reports Store"
          href="/mintel-store-redesign"
          src="/mintel_home_thumb.png"
          alt="Mintel Store redesign"
        />
        <GalleryImage
          title="Comperemedia Website"
          href="/comperemedia-website"
          src="/comperemedia_thumb.jpg"
          alt="Compreremedia website"
        />
        <GalleryImage
          title="Mintel Digital Advertising"
          href="/mintel-digital-advertising"
          src="/mintel_banners_tumb.jpeg"
          alt="Mintel banners"
        />
        <GalleryImage
          title="Illustrations"
          href="/illustrations"
          src="/illustrations_thumb.jpeg"
          alt="illustrations"
        />
        <GalleryImage
          title="Laura Ashley Feature Page"
          href="/laura-ashley-feature-page"
          src="/la-thumb.gif"
          alt="Laura Ashley landing page"
          unoptimized
        />
        <GalleryImage
          title="Laura Ashley Newsletters"
          href="/laura-ashley-newsletters"
          src="/la-emails-thumb.jpeg"
          alt="Laura Ashley newsletters"
        />
        <GalleryImage
          title="Find My Bike"
          href="/find-my-bike"
          src="/fmb-thumb.gif"
          alt="Find my bike app"
          unoptimized
        />
        <GalleryImage
          title="Diesel Tribute Catalogue"
          href="/diesel-tribute-catalogue"
          src="/diesel_thumb.jpeg"
          alt="Diesel tribute catalogue"
        />

      </div>
    </main>
  )
}


function GalleryImage(props: any) {
  return (
    <Link className='flex relative justify-center items-center' href={props.href}>
      <div className='flex items-center justify-center absolute bg-white opacity-0 w-full h-full hover:opacity-75 hover:transition-opacity duration-500'>
        <div className='font-medium text-2xl lg:text-3xl'>
          {props.title}
        </div>
      </div>
      <Image
        src={props.src} alt={props.alt} width={1400} height={799} priority unoptimized={props.unoptimized}/>
    </Link>
  )
}