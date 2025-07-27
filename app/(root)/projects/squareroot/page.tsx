import YoutubePlayer from "@/components/youtube";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

const SquarerootPage = () => {
  const squareroot = PROJECT_THUMBNAILS.squareroot;

  return (
    <div className="flex flex-col items-start md:items-start gap-4">
      <h1 className="w-full text-3xl text-primary font-bold border-b border-primary pb-2">
        {squareroot.title}
      </h1>
      <p>
        {squareroot.description}
        {squareroot.code.length > 0 && (
          <a
            href="https://github.com/yunsuk-jeung/toy_slam.git"
            className="hyperlink"
          >
            [code]
          </a>
        )}
      </p>{" "}
      <div className="w-4/5 md:max-w-4/5 mx-auto mb-2 ">
        <YoutubePlayer url={squareroot.url} />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Abstract</h2>
        <p>
          Implemented a square-root-based bundle adjustment framework optimized
          for real-time odometry use cases:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Avoids explicit Hessian formation by updating square root priors via
            QR decomposition
          </li>
          Uses square root marginalization, algebraically equivalent to Schur
          complement with Moore-Penrose inverse
          <li>
            Handles <span className="font-bold">rank-deficient Jacobians</span>{" "}
            robustly, preserving estimator accuracy
          </li>
          <li>
            chieves <span className="font-bold">36% speed improvement</span>{" "}
            over the traditional Schur-complement-based baseline
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Problem</h2>
        Real-time visual-inertial odometry systems require efficient bundle
        adjustment, but:
        <ul className="list-disc ml-6">
          <li>
            Traditional Schur complement methods can become{" "}
            <span className="font-bold">computationally expensive</span> due to
            full Hessian manipulation
          </li>
          <li>
            Marginalization steps can introduce numerical instability or
            performance bottlenecks
          </li>
          <li>
            Jacobians in real-world systems are often rank-deficient, requiring
            stable treatment to avoid divergence
          </li>
          <li>
            Integration of mathematical algorithms into real-time pipelines
            demands both numerical precision and computational efficiency
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Contribution</h2>{" "}
        <ul className="list-disc ml-6">
          <li>
            Re-implemented the algorithm from{" "}
            <span className="font-bold">
              {
                "Square Root Marginalization for Sliding-Window Bundle Adjustment"
              }
            </span>{" "}
            (Demmel et al., ICCV 2021)
          </li>
          <li>
            Developed a{" "}
            <span className="font-bold">
              real-time compatible square-root BA module
            </span>{" "}
            integrated with visual-inertial odometry systems
          </li>
          <li>
            Carefully handled{" "}
            <span className="font-bold">
              QR decomposition and rank-deficient
            </span>{" "}
            cases using robust linear algebra libraries (e.g., Eigen)
          </li>
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary">Result</h2>
        <ul className="list-disc ml-6">
          <li>
            Achieved <span className="font-bold">~36% reduction</span> in
            computation time compared to conventional Schur-based BA
          </li>
          <li>
            Contributed to{" "}
            <span className="font-bold">low-latency, high-accuracy</span> pose
            estimation in visual-inertial odometry systems
          </li>
          <li>
            Gained deep understanding and practical implementation of{" "}
            <span className="font-bold">
              advanced estimation and optimization
            </span>{" "}
            techniques
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SquarerootPage;
