export default function HeroSection(){
    return (
        <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-sm brand-text tracking-wider mb-2" >TRUSTED BY</div>
            <h3 className="text-2xl font-medium" >Partners and Institutions</h3>
          </div>
          <div className="logo-strip relative border border-gray-800 rounded-xl bg-gray-900/40">
            <div className="marquee gap-10 py-6 px-4">
              {[
                { src: "/images/partners/minstry%20of%20inovation%20and%20technology.png", name: "Ministry of Innovation & Technology", since: "Since 2021/22" },
                { src: "/images/partners/vex.webp", name: "VEX Robotics", since: "Since 2015/16" },
                { src: "/images/partners/ethiopian_airlines.png", name: "Ethiopian Airlines", since: "Since 2022/23" },
                { src: "/images/partners/ethio-tele.png", name: "Ethio Telecom", since: "Since 2024/25" },
                { src: "/images/partners/aau.png", name: "Addis Ababa University", since: "Since 2024/25" },
                { src: "/images/partners/adama%20scienc%20and%20techology%20university.png", name: "Adama Science & Technology University", since: "Since 2024/25" },
                { src: "/images/partners/university%20of%20gonadar.png", name: "University of Gondar", since: "Since 2025/26" },
                { src: "/images/partners/Tis%20abay%20collage.png", name: "Tis Abay College", since: "Since 2025/26" },
              ].concat([
                { src: "/images/partners/minstry%20of%20inovation%20and%20technology.png", name: "Ministry of Innovation & Technology", since: "Since 2021/22" },
                { src: "/images/partners/vex.webp", name: "VEX Robotics", since: "Since 2015/16" },
                { src: "/images/partners/ethiopian_airlines.png", name: "Ethiopian Airlines", since: "Since 2024/23" },
                { src: "/images/partners/ethio-tele.png", name: "Ethio Telecom", since: "Since 2024/25" },
                { src: "/images/partners/aau.png", name: "Addis Ababa University", since: "Since 2024/25" },
                { src: "/images/partners/adama%20scienc%20and%20techology%20university.png", name: "Adama Science & Technology University", since: "Since 2024/25" },
                { src: "/images/partners/university%20of%20gonadar.png", name: "University of Gondar", since: "Since 2025/26" },
                { src: "/images/partners/Tis%20abay%20collage.png", name: "Tis Abay College", since: "Since 2025/26" },
              ]).map((p, i) => (
                <div key={i} className="shrink-0 w-56 h-28 rounded-xl bg-gray-800 border border-gray-700 flex flex-col items-center justify-center px-3 py-2 text-center">
                  <img src={p.src} alt={`${p.name} logo`} className="max-h-12 max-w-[160px] object-contain" />
                  <div className="mt-1">
                    <div className="text-xs text-white/90 leading-tight">{p.name}</div>
                    <div className="text-[10px] text-gray-400 leading-tight">{p.since}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}