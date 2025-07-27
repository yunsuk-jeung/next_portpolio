import YoutubePlayer from "@/components/youtube";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

const MaxscanPage = () => {
  const maxscan = PROJECT_THUMBNAILS.maxscan;

  return (
    <div className="flex flex-col items-start md:items-start gap-4">
      <h1 className="w-full text-3xl text-primary font-bold border-b border-primary pb-2">
        {maxscan.title}
      </h1>
      <p>{maxscan.description}</p>{" "}
      <div className="w-4/5 md:max-w-4/5 mx-auto mb-2 ">
        <YoutubePlayer url={maxscan.url} />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Abstract</h2>
        <p>
          Designed and implemented a cross-platform mobile mapping system
          featuring:
        </p>
        <ul className="list-disc ml-6">
          <li>Real-time sparse SLAM and localization on Android and iOS</li>
          <li>Dense volumetric reconstruction using LiDAR on iOS devices</li>
          <li>
            <span className="font-bold">GPU-accelerated</span> TSDF integration
            and surface extraction using Swift + Metal
          </li>
          <li>
            Modular architecture for integration with AR frameworks and scalable
            map management
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Problem</h2>
        Mobile XR applications demand high-performance mapping, but:
        <ul className="list-disc ml-6">
          <li>
            Sparse and dense reconstruction are often separated, with limited
            real-time capability on mobile hardware
          </li>
          <li>
            Dense reconstruction on iOS requires{" "}
            <span className="font-bold">low-level GPU programming</span> and
            sensor optimization
          </li>
          <li>
            On Device localization and persistent map merging are technically
            complex and poorly supported in most toolchains
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Contribution</h2>{" "}
        <ul className="list-disc ml-6">
          <li>
            Architected a{" "}
            <span className="font-bold">modular, scalable SLAM system</span> for
            mobile, supporting multiple reconstruction modes (sparse/dense)
          </li>
          <li>
            Implemented{" "}
            <span className="font-bold">GPU-accelerated TSDF pipeline</span>{" "}
            using Metal for dense LiDAR reconstruction
          </li>
          <li>
            Developed a localization and map-merging engine using{" "}
            <span className="font-bold">lightweight data structures</span>{" "}
            suitable for mobile memory constraints
          </li>
          <li>
            Tuned system to run at real-time frame rates by optimizing memory
            access patterns and Metal shader performance
          </li>
          <li>
            Integrated the system into mobile AR frameworks for live deployment
            and testing
          </li>
        </ul>
      </div>
      <div className="w-4/5 md:max-w-3/5 mx-auto mb-2 ">
        <YoutubePlayer url="https://youtu.be/lCokbxJ8NeI" />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Result</h2>
        <ul className="list-disc ml-6">
          <li>
            Achieved real-time sparse SLAM and localization across Android and
            iOS devices
          </li>
          <li>
            Enabled dense 3D reconstruction using LiDAR at high frame rates on
            iOS
          </li>
          <li>
            Delivered {"<1s"} re-localization latency and consistent map merging
            across sessions
          </li>
          <li>
            Deployed internally as a 3D space scanning tool for persistent AR
            use cases
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MaxscanPage;
