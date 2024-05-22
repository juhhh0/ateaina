import HeroVideo from "@/components/HeroVideo";
import TextEffect from "@/components/TextEffect";
import WorksSlider from "@/components/WorksSlider/WorksSlider";
import { getHomeData } from "@/data/loaders";

export default async function Home() {
  const data = await getHomeData();
  return (
    <main>
      <HeroVideo/>
      <TextEffect text={data.presentation}/>
      <WorksSlider />
    </main>
    
  );
}
