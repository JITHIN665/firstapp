import Hero from "@/components/hero";
import scaleImage from "@/public/scale.jpg";

export default function Scale() {
  return (
    <div>
      <Hero
        imagAlt="factory"
        imgData={scaleImage}
        title="Scale your App to Infinity"
      />
    </div>
  );
}
