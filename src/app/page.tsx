import Heros from "@/components/layouts/heros";
import OurStory from "@/components/layouts/ourStory";
import OurCatalogue from "@/components/layouts/ourCatalogue";
import OurExposition from "@/components/layouts/ourExposition";
import OurEvents from "@/components/layouts/ourEvents";

export default function Home() {
  return (
    <main>
      <Heros />
      <OurStory />
      <OurCatalogue />
      <OurExposition />
      <OurEvents />
    </main>
  );
}
