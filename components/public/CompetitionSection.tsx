import MotionCTA from "./CustomButton";

export default function CompitionSection() {
  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm brand-text tracking-wider mb-4">
            COMPETITIONS
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium mb-6">
            A Platform for <span className="brand-text">Excellence</span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            From local events to the world stage, our competitions are
            game-based engineering challenges where classroom STEM concepts are
            put to the test. Students learn lifelong skills in teamwork,
            leadership, and communication.
          </p>
        </div>

        {/* ✅ Added auto-rows for mobile too */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[12rem] md:auto-rows-[18rem] gap-4 md:gap-8 mb-12">
  {[
    {
      src: "/images/students3.png",
      title: "African Robotics Championship",
      desc: "Our flagship event with the Ministry of Innovation and Technology, uniting the continent's brightest.",
    },
    {
      src: "/images/students1.png",
      title: "Local Competitions",
      desc: "National events in Addis Ababa where students showcase skills and qualify for international stages.",
    },
    {
      src: "/images/mr2.png",
      title: "International Opportunities",
      desc: "Top teams represent Ethiopia at prestigious events like the VEX World Championship.",
    },
  ].map((card, i) => (
    <div
      key={i}
      className={`relative rounded-xl overflow-hidden border border-gray-700 group ${
        i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="z-10 absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors"></div>
      <div className="z-20 absolute inset-0 flex flex-col p-4 justify-end">
        <h3 className="text-xl md:text-2xl font-medium mb-2 force-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{card.title}</h3>
        <p className="force-gray-100 text-xs md:text-base max-w-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          {card.desc}
        </p>
      </div>
    </div>
  ))}
</div>


        <div className="text-center">
          <MotionCTA href="/competitions">Register Your Team</MotionCTA>
        </div>
      </div>
    </section>
  );
}
