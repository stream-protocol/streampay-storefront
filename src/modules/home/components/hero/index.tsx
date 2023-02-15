import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Build on Stream Protocol: A decentralized e-commerce and payment platform
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
        A Blockchain-As-A-Service Platform allows businesses to start accepting cryptocurrency payments. Our store is built on the Solana blockchain, which provides a secure checkout experience for customers. The solution is easy to use and can be set up in just a few clicks, making it a convenient option for businesses looking to start accepting crypto payments.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={95}
        objectFit="cover"
        alt="Photo by @streampay https://unsplash.com/
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
