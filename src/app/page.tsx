import Expertises from "@/components/Expertises";
import HeroVideo from "@/components/HeroVideo";
import TextEffect from "@/components/TextEffect";
import WorksSlider from "@/components/WorksSlider/WorksSlider";
import { getHome } from "@/services/data/loaders";

export default async function Home() {
  const { data, expertises } = await getHome();
  return (
    <main>
      <HeroVideo />
      <TextEffect text={data.Presentation} />
      <Expertises data={expertises.data} />
      <WorksSlider />
    </main>
  );
}
