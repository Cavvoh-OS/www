import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import a14logo from "../../assets/android14.png"
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation.tsx"
import { Meteors } from "../../components/ui/meteors.tsx"
import cavloading from "../../assets/cavloading.gif"
import cavvoh from "../../assets/cavvoh.svg"

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [screenshots, setScreenshots] = useState([])

  const fetchSS = async () => {
    const url =
      "https://raw.githubusercontent.com/Cavvoh-OS/www_gitres/refs/heads/udc/screenshots/screenshots.json"
    try {
      const response = await fetch(url)
      const fetchedSS = await response.json()
      return fetchedSS
    } catch (error) {
      console.error(`Error fetching data for ${fetchSS}:`, error)
      return null // Return null in case of an error
    }
  }

  useEffect(() => {
    const loadSS = async () => {
      const data = await fetchSS()
      setScreenshots(data) // Set state after fetching the device list
    }
    loadSS() // Call the async function inside useEffect
  }, [])

  useEffect(() => {
    if (screenshots.length > 0) {
      setLoading(false)
    }
  }, [screenshots])

  return (
    <>
      {loading && (
        <>
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
          <img className="z-50 m-auto" src={cavloading} alt="loading ..." />
        </>
      )}
      {!loading && (
        <>
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
          <div className="TOP z-10 flex flex-col items-center justify-center space-y-6 font-[Prod-bold]">
            <div className="inline-flex flex-col items-center text-4xl leading-tight sm:text-5xl lg:text-6xl">
              <p>
                <span className="cavoshighlight">Evolve</span> your
              </p>
              <p>Android device</p>
            </div>
            <div className="inline-flex flex-col items-center text-center font-[Prod-light] text-lg leading-tight sm:text-xl lg:text-2xl">
              <p>Pixel UI, Customization & more.</p>
              <p>
                We are{" "}
                <span>
                  <img className="h-7" src={cavvoh} alt="" />
                </span>
              </p>
            </div>
            <div className="inline-flex flex-col items-center gap-2 pt-3 text-center sm:flex-row sm:gap-3 lg:flex-row lg:gap-6">
              <Link
                to="/downloads"
                className="homebutton min-w-[11rem] border-[0.13rem] px-7 py-3 md:border-none"
              >
                <div className="">Download ROM</div>
              </Link>
              <Link
                className="min-w-[11rem] rounded-full border-[0.13rem] bg-transparent px-7 py-3 text-white"
                to="https://wiki.evolution-x.org/"
                target="_blank"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="MIDDLE z-40 inline-flex flex-col rounded-3xl px-8 pb-16 lg:px-16 lg:py-16">
            <div className="inline-flex flex-col gap-9">
              <div className="middleshadow flex flex-col gap-10 rounded-3xl bg-black px-10 py-10 sm:flex-row lg:min-h-[28rem] lg:flex-row lg:gap-20 lg:px-16 lg:py-16">
                <div className="space-y-5 sm:w-3/4 lg:space-y-10">
                  <p className="font-[Prod-bold] text-3xl lg:text-5xl">
                    <span className="cavoshighlight">About</span> Cavvoh OS
                  </p>
                  <p className="text-xl lg:text-2xl">
                    Cavvoh OS aims to provide users with a Pixel-like feel at
                    first glance, with additional features at their disposal.
                  </p>
                  <div>
                    <p className="font-[Prod-normal] text-gray-400 lg:text-start lg:text-2xl">
                      Get Android 14 for your device now
                    </p>
                    <Link to={"downloads"}>
                      <div className="mt-2.5 w-full rounded-full bg-[#f86734] px-7 py-3 text-center text-xl text-white lg:w-fit">
                        Download
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="inline-flex flex-col items-center gap-6 lg:gap-12">
                  <p className="z-40 text-lg italic lg:text-xl">
                    #KeepEvolving
                  </p>
                  <div className="relative flex justify-center lg:w-60">
                    <img
                      src={a14logo}
                      alt="A14"
                      className="z-40 size-[12rem] sm:size-[10rem] lg:size-[12rem]"
                    />
                    <Meteors number={25} className="hidden lg:block" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col gap-9 sm:flex-row md:gap-12 lg:flex-row">
                <div className="middleshadow items-start justify-start rounded-3xl bg-black px-8 py-10 sm:w-1/2 lg:px-12 lg:py-14">
                  <div className="flex flex-col items-start justify-start gap-5 lg:gap-10">
                    <div className="font-[Prod-bold] text-3xl capitalize lg:text-3xl">
                      Frequent updates & latest security patches
                    </div>
                    <div className="text-xl lg:text-2xl">
                      We provide frequent updates amongst most custom ROMs.
                      These updates aim to be in a stable state and are
                      guaranteed to be on the latest security patches.
                    </div>
                  </div>
                </div>
                <div className="middleshadow items-start justify-start rounded-3xl bg-black px-8 py-10 sm:w-1/2 lg:px-12 lg:py-14">
                  <div className="flex flex-col items-start justify-start gap-5 lg:gap-10">
                    <div className="font-[Prod-bold] text-3xl capitalize lg:text-3xl">
                      Pixel look & feel
                    </div>
                    <div className="text-xl lg:text-2xl">
                      Cavvoh OS provides you with the perfect Pixel
                      experience, imitating Google Pixel devices, with
                      additional customizations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-40 flex items-center justify-center rounded-3xl">
            <div className="z-40 grid w-5/6 grid-cols-2 gap-10 md:grid-cols-4">
              {screenshots.map((ss, index) => (
                <div key={index}>
                  <img
                    src={`https://github.com/Cavvoh-OS/www_gitres/blob/udc/screenshots/${ss}?raw=true`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default HomePage
