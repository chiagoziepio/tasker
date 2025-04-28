import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-8 ">
      <div className="">
        <h1 className="text-center font-poppins  text-4xl">
          Welcome to{" "}
          <span className="uppercase font-roboto text-primaryBlue ">
            Tasker
          </span>
        </h1>
        <p className="text-center text-2xl">Your project&apos;s best buddy</p>
        <div className="my-5 flex flex-col gap-5">
          <p className="text-center text-muted-foreground text-base max-w-screen-sm mx-auto">
            With <span className="text-primaryBlue text-xl">Tasker</span> your
            project execution becomes a breeze. You dont have to worry about
            anything. Just focus on your project ideas and let us take care of
            the rest.
          </p>
          <Link
            href={"/contact"}
            className={buttonVariants({
              variant: "default",
              className: "mx-auto",
            })}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src={"/taskerHero.png"}
          alt="hero"
          width={500}
          height={500}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
