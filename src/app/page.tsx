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
      <section className="max-width mx-auto flex flex-col md:flex-row items-center pb-10 pt-24 gap-20">
        <div className="md:w-1/2 px-8">

        <h2 className="pb-6">Retrouvez notre dernier documentaire des maintenant</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia blanditiis repudiandae ipsa, sed a, culpa facere quo quas commodi quod, voluptatem nesciunt perferendis est accusamus. Sunt deserunt placeat libero adipisci recusandae fugiat nihil harum!</p>
        </div>
        <iframe
        className="w-full max-w-xl px-4 aspect-video"
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
