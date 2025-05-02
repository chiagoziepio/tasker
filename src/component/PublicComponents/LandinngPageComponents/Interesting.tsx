import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Interesting = () => {
  return (
    <MaxWidthWrapper>
      <div className="bg-white p-4 flex flex-col gap-6 rounded-2xl shadow-lg shadow-black/75">
        <h2 className="font-roboto !font-extrabold md:text-3xl text-2xl">
          Guess what...! 🙂‍↕️
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-center text-xl">
            You wont be spending a dime to start using{" "}
            <span className="text-primary text-2xl">Tasker</span>!
          </p>
          <span className="text-center">
            Tasker is free at the momemnt, so hurry and onbaord your
            organization
          </span>
          <Link
            href={"/contact"}
            className={buttonVariants({
              variant: "default",
              className: "w-fit mx-auto",
            })}
          >
            Get Started
          </Link>
        </div>
        <div className="relative flex ">
          <Image
            src={"/project-illustrastor.jpg"}
            alt="project-illustrator"
            width={500}
            height={500}
            className="mx-auto "
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Interesting;
