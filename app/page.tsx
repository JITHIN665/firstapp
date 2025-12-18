import Hero from "@/components/hero";
import homeImage from "@/public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imagAlt="factory"
        imgData={homeImage}
        title="Proffessional Cloud Hosting"
      />
    </div>
  );
}
