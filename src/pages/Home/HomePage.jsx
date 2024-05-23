import { HomeSectionCarousel } from "../../components/HomeSectionCarousel/HomeSectionCarousel"


export const HomePage = () => {
  return (
    <>
      <div className="relative hero-section">
        <div className="absolute top-1/2 left-10 lg:left-40 transform -translate-y-1/2 p-4">
          <h1 className='text-5xl text-left lg:text-6xl font-bold max-w-44 lg:max-w-3xl italic leading-10'>Explore, Find, Enjoy: Your Virtual Marketplace</h1>
          <button className="mt-4 font-semibold bg-indigo-600 text-white py-2 px-8 rounded">Start Exploring</button>
        </div>
      </div>

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
      </div>

    </>
  )
}

