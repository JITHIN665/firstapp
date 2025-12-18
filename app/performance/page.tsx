import Hero from "@/components/hero";
import performanceImage from "@/public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imagAlt="welding"
        imgData={performanceImage}
        title="We Provide High Performance Applications"
      />
    </div>
  );
}
