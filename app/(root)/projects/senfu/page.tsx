import YoutubePlayer from "@/components/youtube";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

const SenfuPage = () => {
  const senfu = PROJECT_THUMBNAILS.senfu;

  return (
    <div className="flex flex-col items-start md:items-start gap-4">
      <h1 className="w-full text-3xl text-primary font-bold border-b border-primary pb-2">
        {senfu.title}
      </h1>
      <p>{senfu.description}</p>{" "}
      <div className="w-4/5 md:max-w-4/5 mx-auto mb-2 ">
        <YoutubePlayer url={senfu.url} />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Abstract</h2>
        <p>
          Developed a cross-platform integration of a lightweight monocular
          visual-inertial SLAM system for:
        </p>
        <ul className="list-disc ml-6">
          <li>Mobile devices, self-driving vehicles, and smart glasses</li>
          <li>Supported across Android, iOS, Linux, Windows, macOS, and ROS</li>
          <li>
            Optimized for embedded hardware with real-time constraints and
            limited compute
          </li>
          <li>
            Designed to enable platform-specific deployment with minimal code
            duplication
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Problem</h2>
        Deploying a single SLAM solution across heterogeneous platforms involves
        major challenges:
        <ul className="list-disc ml-6">
          <li>Sensor drivers and APIs differ drastically across OS/hardware</li>
          <li>
            Real-time performance tuning must consider device-specific
            limitations (e.g. ARM mobile vs x86 vehicle platform)
          </li>
          <li>
            Reusability and maintainability degrade without abstraction layers
          </li>
          <li>
            Debugging across embedded systems (e.g. desktops, Android phones) is
            complex and time-consuming{" "}
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Contribution</h2>{" "}
        <ul className="list-disc ml-6">
          <li>
            Refactored and modularized existing SLAM codebase to support
            <span className="font-bold">multi-platform deployment</span>
          </li>
          <li>
            Designed platform abstraction layers (sensors, IMU, camera input)
            for{" "}
            <span className="font-bold">
              code portability and maintainability
            </span>
          </li>
          <li>
            Ported the SLAM system to Android, iOS, and ROS with
            hardware-specific tuning for smart glasses and autonomous vehicles
          </li>
          <li>
            Integrated the{" "}
            <span className="font-bold">
              SLAM pipeline into self-driving vehicle systems
            </span>
            , with real-time pose feedback to navigation modules
          </li>
          <li>
            Improved <span className="font-bold">build/test automation</span>{" "}
            for continuous integration across multiple target environments
          </li>
        </ul>
      </div>
      <div className="w-4/5 md:max-w-3/5 mx-auto mb-2 ">
        <YoutubePlayer url="https://youtu.be/suG_TckEOCU" />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Result</h2>
        <ul className="list-disc ml-6">
          <li>
            Successfully deployed the SLAM system across{" "}
            <span className="font-bold">6+ operating systems</span>
            and multiple hardware targets
          </li>
          <li>
            Enabled{" "}
            <span className="font-bold">
              real-time visual-inertial tracking
            </span>{" "}
            on embedded platforms with limited compute and memory
          </li>
          <li>
            Delivered reliable pose tracking in smart glasses and self-driving
            vehicles under varied conditions
          </li>
          <li>
            educed per-platform maintenance burden through{" "}
            <span className="font-bold">
              abstraction and shared code structure
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SenfuPage;
