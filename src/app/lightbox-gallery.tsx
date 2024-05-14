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
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Image = {
  src: StaticImageData,
  title: string,
  alt: string,
}

export default function LightboxGallery(props: { images: Image[] }) {
  const [currentIndex, setIndex] = React.useState<number | undefined>(undefined);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIndex(undefined);
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      {props.images.map((image, index) => (
        <DialogTrigger onClick={() => setIndex(index)} key={image.title}>
          <Image className="max-w-full shadow-2xl shadow-zinc-400" src={image.src} alt={image.alt} width={400} quality={10} priority/>
        </DialogTrigger>
      ))}
      
      <DialogContent>
        <Carousel opts={{ startIndex: currentIndex }}>
          <CarouselContent>
          {props.images.map((image) => (
            <CarouselItem key={image.title}>
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