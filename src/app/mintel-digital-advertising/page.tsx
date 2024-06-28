import Image from 'next/image'
import PaginationLinks from '../pagination-links'
import ProjectIntro from '../project-intro'

export default function MintelAdv() {
  return (
  <>
    <div className="container flex flex-col gap-10 md:gap-20 py-14 px-10">

      <ProjectIntro title="Mintel digital advertising">
        One of my day-to-day tasks at Mintel was to create engaging digital banners for paid advertising. Working closely with the team the aim was to create engaging visuals and copy that helped to gain leads or sales.
      </ProjectIntro>

      <div className="self-center">
        <Image id="preview-pic" className="self-center" src="/mintel_banners_tumb.jpeg" alt="Mintel banners" width={1021} height={799} priority/>
      </div>

      <div className="self-center">
        <Image className="self-center" src="/mintel-banners-linkedin-carousel.png" alt="Mintel banners linkedin carousel" width={1021} height={799} priority/>
      </div>

    </div>
      <PaginationLinks
        prev="Comperemedia Website"
        prevLink="./comperemedia-website"
        next="Illustrations"
        nextLink="./illustrations"
      />
    </>
  )
}