import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSize() {
  return (
    <div className=" pt-5 justify-center  bg-amber-400 items-center h-screen flex ">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[240px]"
    >
      <CarouselContent>
        {Array.from({ length: 100 }).map((_, index) => (
// 50% on small screens and 33% on larger screens.
<Carousel>

<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="/public/vite.svg" className=" w-90%"/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>

</Carousel>


        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
