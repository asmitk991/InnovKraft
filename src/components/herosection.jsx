import { Leaf, Sprout, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "./navBar";
const carouselItems = [
  {
    title: "Your Haircare Essentials in One Perfect Kit!",
    image:
      "https://abhyanjana.com/wp-content/uploads/2024/05/Samasti-and-ukti.jpg",
    features: [
      { icon: Sprout, text: "Provides nourishment to hair follicles." },
      { icon: Leaf, text: "Strengthens hair roots." },
      { icon: Droplets, text: "Prevents dryness in hair." },
    ],
  },
  {
    title: "Experience the Power of Nature in Every Drop",
    image:
      "https://abhyanjana.com/wp-content/uploads/2023/08/abhyanjana-background-1.png ",
    features: [
      { icon: Leaf, text: "100% Natural Ingredients" },
      { icon: Sprout, text: "Promotes Healthy Hair Growth" },
      { icon: Droplets, text: "Deep Nourishment for Scalp" },
    ],
  },
  {
    title: "Transform Your Hair Care Routine",
    image: "https://abhyanjana.com/wp-content/uploads/2024/05/Ukti-Banner.jpg",
    features: [
      { icon: Sprout, text: "Revitalizes Damaged Hair" },
      { icon: Leaf, text: "Enhances Hair Texture" },
      { icon: Droplets, text: "Long-lasting Moisture" },
    ],
  },
];

export function HeroSection() {
  return (
    <div className="w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
            >
              <Navbar />
              <br />
              <br />
              <br /> <br />
              <br />
              <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center text-white">
                <div className="space-y-6">
                  <h1
                    className={`text-5xl md:text-6xl lg:text-7xl font-serif leading-tight`}
                  >
                    {item.title}
                  </h1>
                  <div className="space-y-4 ">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <feature.icon className="h-5 w-5 text-[#c4a853]" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-[#c4a853] hover:bg-[#b39743] text-white px-8 py-6 text-lg rounded-full  ">
                    Order now!
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
