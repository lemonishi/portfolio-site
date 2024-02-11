export default function Intro() {
  return (
    <div className="flex justify-center">
      <div className="text-white py-6 max-w-screen-lg w-full">
        <img
          src="intro-banner.jpg"
          alt="LE SSERAFIM"
          className="h-[373px] object-cover mx-auto mb-6"
        />
        <section className="flex flex-col gap-4 p-8 w-full md:text-xl">
          <h1 className="text-4xl font-bold md:text-5xl">
            Hi, my name is Lennon.
          </h1>
          <p>
            I am an undergraduate in NUS, pursuing a Computer Science Major.
          </p>
          <p className=" ">
            Mostly self taught, I am aspiring to be a{" "}
            <span className="font-bold">fullstack developer</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
