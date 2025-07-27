import YoutubePlayer from "@/components/youtube";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

const StereoPage = () => {
  const stereo = PROJECT_THUMBNAILS.stereo;

  return (
    <div className="flex flex-col items-start md:items-start gap-4">
      <h1 className="w-full text-3xl text-primary font-bold border-b border-primary pb-2">
        {stereo.title}
      </h1>
      <p>{stereo.description}</p>{" "}
      <div className="w-4/5 md:max-w-4/5 mx-auto mb-2 ">
        <YoutubePlayer url={stereo.url} />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Abstract</h2>
        <p>
          Developed a lightweight stereo visual-inertial SLAM system for mobile
          XR platforms with these features:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Real-time tracking at <span className="font-bold">90Hz</span> on
            resource-limited devices.
          </li>
          <li>
            Accurate pose estimation with
            <span className="font-bold"> {"<1cm"} drift over 50m. </span>
          </li>
          <li>
            Support for multiple operating systems: Android, Windows, Linux,
            macOS, ROS.
          </li>
          <li>
            Modular architecture for integration with smart glasses and XR
            systems.
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Problem</h2>
        Smart glasses and mobile XR devices face key challenges:
        <ul className="list-disc ml-6">
          <li>Limited CPU/GPU power for heavy SLAM computations</li>
          <li>Need for high-frequency (90Hz) real-time tracking</li>
          <li>Sensor fusion complexities with stereo cameras and IMUs</li>
          <li>Cross-platform deployment difficulties</li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Contribution</h2>{" "}
        <ul className="list-disc ml-6">
          <li>
            Designed and implemented a{" "}
            <span className="font-bold">
              modular, multithreaded SLAM pipeline
            </span>{" "}
            optimized for ARM-based mobile SoCs
          </li>
          <li>
            Built a <span className="font-bold">sensor fusion system</span>{" "}
            integrating stereo vision and IMU data for stable 6DoF pose
            estimation
          </li>
          <li>
            Tuned performance to run efficiently on{" "}
            <span className="font-bold">embedded and mobile</span>
            platforms (Galaxy S8–S22, Realsense D435i)
          </li>
          <li>
            Developed cross-platform abstractions supporting Android, Linux,
            macOS, Windows, and ROS
          </li>
        </ul>
      </div>
      <div className="w-4/5 md:max-w-3/5 mx-auto mb-2 ">
        <YoutubePlayer url="https://youtu.be/81EN00zAKXo" />
        <div className="flex">
          <YoutubePlayer url="https://www.youtube.com/shorts/_kZH7Gbe2R0?feature=share" />
          <YoutubePlayer url="https://www.youtube.com/shorts/2bFZqzzupN0?feature=share" />
        </div>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Result</h2>
        <ul className="list-disc ml-6">
          <li>
            Achieved{" "}
            <span className="font-bold">
              {"<1cm"} pose drift over 50 meters
            </span>
            in indoor/outdoor tests
          </li>
          <li>
            <span className="font-bold">Enabled 90Hz real-time SLAM</span> on
            various mobile devices including Galaxy S8–S22
          </li>
          <li>
            Successfully integrated with tethered smart glasses for XR
            applications
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StereoPage;
