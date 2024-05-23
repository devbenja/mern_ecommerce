import { HomeSectionCarousel } from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { men_shirts } from "../../Data/Men/men_shirts.js";
import { women_jeans } from "../../Data/Women/women_jeans.js";


export const HomePage = () => {
  return (
    <>
      <div className="relative hero-section">
        <div className="absolute top-1/2 left-10 lg:left-40 transform -translate-y-1/2 p-4">
          <h1 className='text-5xl text-left lg:text-5xl font-bold max-w-44 lg:max-w-3xl italic tracking-wide'>Explore, Find, Enjoy: Your Virtual Marketplace</h1>
          <button className="mt-4 font-semibold bg-indigo-600 text-white py-2 px-8 rounded">Start Exploring</button>
        </div>
      </div>

      <div className="space-y-10 py-14 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={men_shirts} sectionName={"Men's Shirts"}/>
        <HomeSectionCarousel data={women_jeans} sectionName={"Women's Jeans"}/>
      </div>

    </>
  )
}

