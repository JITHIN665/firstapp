import Hero from "@/components/hero";
import reliabilityImage from "@/public/reliability.jpg";

export default function Reliability() {
  return (
    <div>
      <Hero
        imagAlt="welding"
        imgData={reliabilityImage}
        title="Super High Reliability Hosting"
      />
    </div>
  );
}
