import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogHome = () => {
  const IntroSection = () => (
    <div className="pb-4 mb-8 border-b border-primary">
      <div className="ml-4">
        <div className=" grid grid-cols-1 space-y-4 md:space-x-6 md:grid-cols-[auto_1fr]">
          <div className="flex justify-center">
            <Image
              src={"/me.webp"}
              alt={"my picture"}
              width={150}
              height={80}
            ></Image>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div>
              <div className="font-bold text-3xl text-primary mb-1">
                Yunsuk Jeung
              </div>
              <ul className="ml-1 space-y-2">
                <li>MS in Computer Science (Data Science and AI) @ USYD</li>
                <li>ex - Software Engineer @ MarsAuto</li>
                <li>ex - Software Engineer @ Maxst</li>
                <li>
                  contact:{" "}
                  <a
                    href="mailto:yunsukjeung@snu.ac.kr"
                    className="text-blue-600  hover:text-blue-800"
                  >
                    yunsukjeung@snu.ac.kr
                  </a>
                </li>
                <li>
                  <div className="flex items-start space-x-2">
                    <a
                      href=""
                      className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
                    >
                      [LinkedIn]
                    </a>

                    <a
                      href=""
                      className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
                    >
                      [GitHub]
                    </a>
                  </div>
                </li>
                <li></li>
                <li>
                  <Button asChild className="">
                    <Link href={"/projects"}>
                      Projects <ArrowRight />
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const WelcomSection = () => (
    <div className="w-full border-b border-primary pb-4 mb-8">
      <p>Welcome to my blog!</p>
      <br />
      <p>
        {`Hello! I'm a software engineer passionate about designing and building
        robust and efficient systems. I enjoy digging into low-level performance
        tuning, memory efficiency, and system resilience to ensure software
        behaves predictably even under real-world constraints.`}
        <br />
        <br />
        {`In my past roles, I honed my problem-solving skills by implementing
        technologies such as real-time SLAM, enabling systems to perceive and
        navigate complex environments.`}
        <br />
        <br />
        {`To further develop my technical capabilities, I'm currently pursuing a
        Master’s degree at the University of Sydney.`}
      </p>
    </div>
    // <br />
    // This experience deepened my appreciation for building optimized,
    // reliable, and scalable software — from the ground up. To further develop
    // my technical capabilities, I'm currently pursuing a Master’s degree at
    // the University of Sydney.
  );

  const WorkExperience = () => {
    return (
      <div className="border-b border-primary pb-4 mb-8">
        <div className="font-bold text-primary text-2xl mb-2">
          Work Experience
        </div>
        <div className="mb-4">
          <div className="font-bold text-xl">MarsAuto </div>
          <div className="ml-2">
            <span className="font-bold mb-2">Software Engineer </span>
            <span className=""> | Sep. 2024 - Feb. 2025 </span>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Engineered an automated pipeline generating high-fidelity 3D
                ground truth data, reducing data labeling time by 60% and
                accelerating
              </li>
              <li>
                Implemented a deep learning-based matching framework and least
                squares refinement, improving 3D bounding box precision by 25%
                and reducing false positives by 18% in validation.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-xl">Maxst </span>
          <div className="ml-2">
            <span className="font-bold mb-2">Software Engineer </span>
            <span className="">| Feb. 2021 - Aug. 2024</span>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Engineered high-performance SLAM and 3D reconstruction systems
                on smart glasses and mobile devices, achieving 90Hz
                visual-inertial SLAM with sub-centimeter accuracy and 30 FPS
                dense reconstructions with 4mm voxel resolution.
              </li>
              <li>
                Improved localization for AR and autonomous vehicles by
                optimizing AR pipelines (reducing latency by 33ms) and fusing
                IMU–LiDAR–camera data, leading to 22% accuracy gain and 2×
                faster convergence
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const Publication = () => {
    return (
      <>
        <div className="font-bold text-primary text-2xl mb-2">Publication</div>
        <div className="ml-4">
          <ul className="list-disc">
            <li>
              {`S. Choi, H. -W. Chae, Y. Jeung, S. Kim, K. Cho and T. -w. Kim,
              "Fast and Versatile Feature-Based LiDAR Odometry via Efficient
              Local Quadratic Surface Approximation," in IEEE Robotics and
              Automation Letters, vol. 8, no. 2, pp. 640-647, Feb. 2023`}
            </li>
          </ul>
        </div>
      </>
    );
  };

  const Project = () => <>Projects</>;
  return (
    <div className="w-full">
      <IntroSection />
      <WelcomSection />
      <WorkExperience />
      <Publication />
      <Project />
    </div>
  );
};

export default BlogHome;
