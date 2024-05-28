"use client";

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type Image = {
  src: StaticImageData,
  title: string,
  alt: string,
  className?: string;
}

export default function LightboxGallery(props: { images: Image[], colWidth?: number, contentClassName?: string }) {
  const [currentIndex, setIndex] = React.useState<number | undefined>(undefined);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIndex(undefined);
    }
  }

  const [api, setApi] = React.useState<CarouselApi>()
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", ({  selectedScrollSnap }) => {
      // reset slide scroll position after slide change
      api.slideNodes()[selectedScrollSnap()].scrollTo(0, 0);
    })
  }, [api])

  return (
    <Dialog onOpenChange={handleOpenChange}>
      {props.images.map((image, index) => (
         <div className={image.className} key={image.title}>
          <DialogTrigger onClick={() => setIndex(index)}>
            <Image className="max-w-full object-contain hover:opacity-75 hover:transition-opacity duration-500" src={image.src} alt={image.alt} width={props.colWidth} quality={10} priority/>
          </DialogTrigger>
        </div>
      ))}
      
      <DialogContent
        className={cn(
          "block top-[10%] h-5/6",
          props.contentClassName
        )}
      >
        <Carousel setApi={setApi} opts={{ startIndex: currentIndex }} className="h-full [&>*:first-child]:h-full">
          <CarouselContent className="h-full">
            {props.images.map((image) => (
              <CarouselItem key={image.title} className="overflow-y-auto">
                <Image src={image.src} alt={image.alt} priority/>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}