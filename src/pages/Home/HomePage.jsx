import { HomeSectionCarousel } from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { men_shirts } from "../../Data/Men/men_shirts.js";
import { women_jeans } from "../../Data/Women/women_jeans.js";


export const HomePage = () => {
  return (
    <>
      <main className="hero-section flex flex-col items-start justify-center">
        <h1 className='text-5xl text-left lg:text-5xl font-bold max-w-44 lg:max-w-3xl pl-14 lg:pl-48'>Explore, Find, Enjoy: Your Virtual Marketplace</h1>
        <button className="mt-4 font-semibold bg-indigo-600 text-white py-2 px-8 ml-14 lg:ml-48 rounded">Start Exploring</button>
      </main>

      <section className="space-y-10 py-14 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={men_shirts} sectionName={"Men's Shirts"} />
        <HomeSectionCarousel data={women_jeans} sectionName={"Women's Jeans"} />
      </section>

    </>
  )
}

