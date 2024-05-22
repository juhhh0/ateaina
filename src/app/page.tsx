import Expertises from "@/components/Expertises";
import HeroVideo from "@/components/HeroVideo";
import TextEffect from "@/components/TextEffect";
import WorksSlider from "@/components/WorksSlider/WorksSlider";
import { getHomeData } from "@/data/loaders";

export default async function Home() {
  const { data, expertises } = await getHomeData();
  return (
    <main>
      <HeroVideo />
      <TextEffect text={data.presentation} />
      <Expertises data={expertises.data} />
      <WorksSlider />
    </main>
  );
}
