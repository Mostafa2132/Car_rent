import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeComp() {
  const marqueeText = [
    { img: "/imgs/bmw.webp", alt: "BMW" },
    { img: "/imgs/jeep.webp", alt: "Jeep" },
    { img: "/imgs/Mercedes.webp", alt: "Mercedes" },
    { img: "/imgs/Tesla.webp", alt: "Tesla" },
    { img: "/imgs/lamborghini.webp", alt: "Lamborghini" },
    { img: "/imgs/Porsche.webp", alt: "Porsche" },
    { img: "/imgs/Bugatti.webp", alt: "Bugatti" },
    { img: "/imgs/dodge.webp", alt: "Dodge" },
    { img: "/imgs/Ferrari.webp", alt: "Ferrari" },
  ];

  return (
    <div className="py-8 mx-auto bg-slate-950">
      <Marquee gradient={false} speed={80}>
        {marqueeText.map((item, index) => (
          <div key={index} className="mx-12 flex items-center justify-center">
            <Image
              src={item.img}
              alt={item.alt}
              width={80}
              height={80}
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
// ```

// ## المشاكل والحلول:

// ### 🔴 **المشاكل:**
// 1. **Paths غير موحدة**: `./imgs/` vs `/imgs/`
// 2. **Case sensitivity**: `Lamborghini.webp` vs `lamborghini.webp` (تأكد من الأسماء في الـ folder)
// 3. **Public folder**: الصور لازم تكون في `public/imgs/`

// ### ✅ **الحلول:**
// 1. ✨ وحّد كل الـ paths تبدأ بـ `/imgs/` (بدون النقطة)
// 2. ✨ تأكد إن أسماء الملفات case-sensitive صح
// 3. ✨ تأكد إن الـ folder structure كده:
// ```
// project/
// ├── public/
// │   └── imgs/
// │       ├── bmw.webp
// │       ├── jeep.webp
// │       ├── mercedes.webp
// │       ├── tesla.webp
// │       ├── Lamborghini.webp  (أو lamborghini.webp)
// │       ├── porsche.webp
// │       ├── Bugatti.webp       (أو bugatti.webp)
// │       └── dodge.webp
