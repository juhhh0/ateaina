import Expertises from "@/components/Expertises";
import HeroVideo from "@/components/HeroVideo";
import TextEffect from "@/components/TextEffect";
import WorksSlider from "@/components/WorksSlider/WorksSlider";
import { getHome } from "@/services/data/loaders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ateaina",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan accumsan mollis.",
};

export default async function Home() {
  const { data, expertises } = await getHome();
  return (
    <main>
      <HeroVideo />
      <TextEffect text={data.Presentation} />
      <Expertises data={expertises.data} />
      <WorksSlider />
      <section className="max-width mx-auto flex items-center flex-col py-10">
        <h2 className="pb-6 text-center">Retrouvez notre dernier documentaire des maintenant</h2>
        <iframe
        className="w-full max-w-2xl px-4 aspect-video"
          src="https://www.youtube.com/embed/dI_hiVDvQTA?si=aD6C4uTeBvNuvXwU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
