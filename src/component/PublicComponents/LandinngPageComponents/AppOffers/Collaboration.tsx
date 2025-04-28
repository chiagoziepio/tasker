import React from "react";
import FallingAimate from "./FallingAnimation";
import Image from "next/image";

const Collaboration = () => {
  return (
    <FallingAimate>
      <section className="bg-white shadow-black/35 shadow-md rounded-lg p-5 flex flex-col  gap-5">
        <h2 className="text-2xl font-bold">
          With <span className="text-primaryBlue">Tasker</span>...
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="lg:w-1/2 w-full ">
              <Image
                src={"/collaboration.gif"}
                alt="collaboration"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <h3 className="text-xl font-bold">Collaborate</h3>
              <p className="text-muted-foreground">
                Having a large team can be a challenge. With{" "}
                <span className="text-primaryBlue">Tasker</span>, you can
                collaborate with your team members and keep track of their
                progress. You can also assign tasks to your team members and
                keep track of their progress.
              </p>
              <p className="mt-4 text-muted-foreground">
                A large team, with{" "}
                <span className="text-primaryBlue">Tasker</span> becomes an
                asset. Get much done with less time
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-5">
            <div className="lg:w-1/2 w-full">
              <h3 className="text-xl font-bold">Speed and On-time delivery</h3>
              <p className="text-muted-foreground">
                Project delivery is time bound and every passing time counts.
                With <span className="text-primaryBlue">Tasker</span>, you
                choose the right pace of your project and we will make sure that
                you get your project on time.
              </p>
              <p className="mt-4 text-muted-foreground">
                With our agile methodology, our analytical tools, you get to
                know the status of your project at any point in time. Know when
                the initial pace has decreased and take the necessary steps to
                get back on track.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                src={"/clock.gif"}
                alt="collaboration"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </FallingAimate>
  );
};

export default Collaboration;
