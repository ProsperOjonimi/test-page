function HomeHeader() {
  return (
    <div className="pt-[64px] pb-[32px] mx-[16px] text-center flex flex-col gap-4 items-center">
      <h1 className="text-[36px] md:text-[60px] max-w-[1064px]">
        A dedicated creative team,{" "}
        <em className="font-instrument text-[40px] md:text-[64px]">
          built for your creative team
        </em>
      </h1>
      <button className="text-[14px] bg-[#0A211F] w-[130px] h-[52px] text-white rounded-3xl font-semibold">
        Book a demo
      </button>
    </div>
  );
}
export default HomeHeader;
