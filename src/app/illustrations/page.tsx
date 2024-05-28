import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import illo1 from "./illustration1.png"
import illo2 from "./illustration2.png"
import illo3 from "./illustration3.png"
import illo4 from "./illustration4.png"
import illo5 from "./illustration5.png"
import illo6 from "./illustration6.png"
import illo7 from "./illustration7.png"
import illo8 from "./illustration8.png"
import illo9 from "./illustration9.png"
import illo10 from "./illustration10.png"
import illo11 from "./illustration11.png"
import illo12 from "./illustration12.png"

const images = [
  {
    title: "Skater Boy",
    src: illo1,
    alt: "Skater Boy Illustration",
    className: "max-w-full"
  },
  {
    title: "Bloom",
    src: illo2,
    alt: "Bloom Illustration",
    className: "max-w-full"
  },
  {
    title: "Yoga",
    src: illo3,
    alt: "Yoga Illustration",
    className: "max-w-full"
  },
  {
    title: "Lipari Postcard",
    src: illo4,
    alt: "Lipari postcard Illustration",
    className: "max-w-full"
  },
  {
    title: "Preraphaelites",
    src: illo5,
    alt: "Preraphaelites Illustration",
    className: "max-w-full"
  },
  {
    title: "Lotus bowl",
    src: illo6,
    alt: "Lotus bowl Illustration",
    className: "max-w-full"
  },
  {
    title: "Pixie girl",
    src: illo7,
    alt: "Pixie girl Illustration",
    className: "max-w-full"
  },
  {
    title: "Buttercup floral pattern",
    src: illo8,
    alt: "Buttercup floral pattern Illustration",
    className: "max-w-full"
  },
  {
    title: "Fashion illustration",
    src: illo9,
    alt: "Fashion Illustration",
    className: "max-w-full"
  },
  {
    title: "Deer",
    src: illo10,
    alt: "Deer Illustration",
    className: "max-w-full"
  },
  {
    title: "Nymph Illustration",
    src: illo11,
    alt: "Nymph Illustration",
    className: "max-w-full"
  },
  {
    title: "Bubblegum girl",
    src: illo12,
    alt: "Bubblegum girl Illustration",
    className: "max-w-full"
  }
]

export default function Illustrations() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 py-14 px-80">

      <div className="text-left md:text-center md:max-w-[60%] self-center">
        <h2 className="font-medium text-5xl">Illustrations</h2>
        <p className="font-light text-2xl my-6">A selection of illustrations made with Procreate, Illustrator, and Photoshop
        </p>
      </div>

      <div className="grid items-center grid-cols-2 md:grid-cols-3 gap-9 md:gap-12 px-[6%]">
        <LightboxGallery images={images} contentClassName="h-auto"/>
      </div>

      <div className="flex justify-end xl:px-20">
        <Link href="./mintel-digital-advertising" className="flex items-center md:gap-4 mr-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M20 30L8 16L20 2" />
            </svg>
            <div>
              <h3 className="text-zinc-900 font-medium text-xl md:text-3xl">Previous project</h3>
            </div>
        </Link>

        <Link href="./laura-ashley-feature-page" className="flex items-center md:gap-4">
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