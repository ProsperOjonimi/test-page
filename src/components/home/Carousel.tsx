/* tslint:disable-next-line */
import CarouselCard from "../ui/CarouselCard";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/src/Draggable";

gsap.registerPlugin(Draggable);

function HomeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      imageUrl:
        "https://cdn.sanity.io/images/k0dlbavy/production/4df05e24196e89740ab1a0f7477d03246be8412b-544x601.png",
      title: "Reddit",
      pillOne: "Ad Creative",
      pillTwo: "Social media Creative",
    },
    {
      imageUrl:
        "https://cdn.sanity.io/images/k0dlbavy/production/4df05e24196e89740ab1a0f7477d03246be8412b-544x601.png",
      title: "Oyster",
      pillOne: "Illustration design",
      pillTwo: "eBook & design",
    },
    {
      imageUrl:
        "https://cdn.sanity.io/images/k0dlbavy/production/05dc11bc80fd092a6a3e4145f6ff5d96d13483e2-1920x1921.png",
      title: "Antler",
      pillOne: "Brand identity",
      pillTwo: "Motion design",
    },
    {
      imageUrl:
        "https://cdn.sanity.io/images/k0dlbavy/production/1b177f7b2e7dbf89b3f876f44b78666d60dab698-1920x1921.png?q=100&amp;auto=format&amp;w=828&amp;fit=min",
      title: "Reddit",
      pillOne: "Motion design",
      pillTwo: "Social media Creative",
    },
    {
      imageUrl:
        "https://cdn.sanity.io/images/k0dlbavy/production/05dc11bc80fd092a6a3e4145f6ff5d96d13483e2-1920x1921.png",
      title: "Antler",
      pillOne: "Brand identity",
      pillTwo: "Motion design",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: `-${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    Draggable.create(track, {
      type: "x",
      inertia: true,
      onPress() {
        tween.pause();
      },
      onRelease() {
        tween.resume();
      },
      onDrag() {
        gsap.set(track, {
          x: gsap.utils.wrap(-totalWidth, 0, this.x),
        });
      },
      onThrowUpdate() {
        gsap.set(track, {
          x: gsap.utils.wrap(-totalWidth, 0, this.x),
        });
      },
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div ref={trackRef} className="flex gap-6">
        {cards.map((card, i) => (
          <CarouselCard key={i} {...card} />
        ))}

        {cards.map((card, i) => (
          <CarouselCard key={`dup-${i}`} {...card} />
        ))}
      </div>
    </div>
  );
}

export default HomeCarousel;
