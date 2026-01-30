type CarouselCardProps = {
  imageUrl: string;
  title: string;
  pillOne: string;
  pillTwo: string;
};

function CarouselCard({
  imageUrl,
  title,
  pillOne,
  pillTwo,
}: CarouselCardProps) {
  return (
    <div className="w-[256px] h-[372px] flex-shrink-0 md:w-[464px] md:h-[587px]">
      <div>
        <img
          src={imageUrl}
          alt={`${title} image`}
          className="rounded-lg rounded-b-none w-full h-[250px] md:h-[411px] object-cover"
        />
      </div>
      <div className="bg-[#0A211F] p-4 rounded-b-lg md:h-[176px] md:pt-[55px]">
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-instrument text-[24px] md:text-[32px]">
            {title}
          </h4>
          <div className="flex gap-4 overflow-hidden relative">
            <div className="text-[#F7F9F2] border border-[#F7F9F2] rounded-2xl px-3 flex-shrink-0 z-10 text-[14px] md:text-[16px]">
              {pillOne}
            </div>
            <div className="text-[#F7F9F2] flex-shrink-0 z-0 -ml-2 border border-[#F7F9F2] rounded-2xl px-3 text-[14px] md:text-[16px]">
              {pillTwo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
