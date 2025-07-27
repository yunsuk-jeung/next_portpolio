import Image from "next/image";
import YoutubePlayer from "@/components/youtube";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

const ATWPage = () => {
  const atw = PROJECT_THUMBNAILS.atw;
  return (
    <div className="flex flex-col items-start md:items-start gap-4">
      <h1 className="w-full text-3xl text-primary font-bold border-b border-primary pb-2">
        {atw.title}
      </h1>
      <p>{atw.description}</p>
      <div className="w-4/5 md:max-w-3/5 mx-auto mb-2 ">
        <Image
          src="/oculus_atw.png"
          width={1280}
          height={480}
          alt="ATW project preview"
          className="border border-black dark:border-white border-2 mb-2"
        />
        <YoutubePlayer url={atw.url} />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Abstract</h2>
        <p>
          To enable high-performance XR experiences on mobile smart glasses, I
          developed a real-time rendering engine based on the{" "}
          <span className="font-bold ">Vulkan API</span> with the following
          goals:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-bold">
              Reduce motion-to-photon (MTP) latency
            </span>{" "}
            through IMU (Inertial Measurement Unit) data fusion.
          </li>
          <li>
            Increase framerate using{" "}
            <span className="font-bold">multithreaded stereo rendering.</span>
          </li>
          <li>
            Design a{" "}
            <span className="font-bold">modular software architecture</span>{" "}
            compatible with computer vision systems such as SLAM and Image
            Tracker.
          </li>
          <li>
            Ensure{" "}
            <span className="font-bold">reusability and extensibility</span>{" "}
            across tethered and untethered XR platforms.
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Problem</h2>
        XR applications on mobile smart glasses face several critical
        challenges:
        <ul className="list-disc ml-6">
          <li>
            <span className="font-bold">High MTP latency</span>, which causes
            visual lag and motion sickness.{" "}
          </li>
          <li>
            <span className="font-bold">Low framerates</span>, especially when
            running computationally heavy tasks like SLAM and image tracking.
          </li>
          <li>
            <span className="font-bold">Limited performance</span> of
            traditional rendering pipelines on mobile or embedded hardware.
          </li>
          <li>
            Difficulty <span className="font-bold">integrating CV modules</span>{" "}
            into tightly constrained rendering systems without sacrificing
            responsiveness.
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Contribution</h2>{" "}
        <ul className="list-disc ml-6">
          <li>
            <span className="font-bold">
              Architected the Vulkan rendering pipeline
            </span>{" "}
            from scratch for mobile XR.
          </li>
          <li>
            Applied{" "}
            <span className="font-bold">
              asynchronous programming and concurrency techniques
            </span>{" "}
            to improve real-time performance.
          </li>
          <li>
            Prioritized{" "}
            <span className="font-bold">modular, reusable software design</span>
            , making the system extensible across other applications.
          </li>
          <li>
            Focused on <span className="font-bold">low-level optimization</span>
            , integrating tightly with hardware (IMU, display).
          </li>
          <li>
            Delivered a{" "}
            <span className="font-bold">
              production-ready, cross-platform rendering module
            </span>{" "}
            adaptable to future XR devices.
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Result</h2>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-bold">
              Reduced MTP latency by 92ms (80% reduction)
            </span>
            , enabling more responsive user experience.
          </li>
          <li>
            <span className="font-bold">
              Increased framerate from 30Hz to 90Hz (300% increase)
            </span>{" "}
            in SLAM-integrated scenarios. like SLAM and image tracking.
          </li>
          <li>
            Verified improvements through simulation and hardware-in-the-loop
            testing.
          </li>
        </ul>
        <div className="max-w-full mx-auto mb-2 ">
          <Image
            src="/atw_graph.png"
            width={1280}
            height={200}
            alt="atw_graph"
          />
        </div>
      </div>
    </div>
  );
};

export default ATWPage;
