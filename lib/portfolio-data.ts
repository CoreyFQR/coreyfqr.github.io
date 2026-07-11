import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Experience = {
  title: string;
  organization?: string;
  organizationUrl?: string;
  period: string;
  bullets: string[];
};

export type Education = {
  school: string;
  schoolUrl?: string;
  degree: string;
  period: string;
  location: string;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const profile = {
  // Edit these values when you want to update your hero section.
  name: "Corey Foo Quan Rui",
  slogan: "Keep thinking. Keep learning. Keep creating.",
  email: "quanrui.fu@foxmail.com",
  photo: "/profile_photo.jpg",
  photoAlt: "Corey Foo Quan Rui",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project Experience", href: "#project-experience" },
  { label: "Education Background", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const about =
  "I'm an engineer, researcher, and maker passionate about building tools for creativity and learning. Currently a graduate student at Nanyang Technological University in Singapore, majoring in Computer Control & Automation.";

export const experiences: Experience[] = [
  {
    title: "Enhancing mmWave Radar Point Clouds via Low-Rank Optimization",
    organization: "Nanyang Technological University",
    organizationUrl: "https://www.ntu.edu.sg/",
    period: "Jan 2025 - Jan 2026",
    bullets: [
      "Built an experimental platform based on a Texas Instruments cascaded millimeter-wave radar evaluation board, completed firmware connection configuration, and collected test-environment data with Lua scripts. For the problem of overly sparse point clouds and weak target loss in millimeter-wave radar perception, systematically analyzed the limitations of traditional CFAR and threshold filtering, then defined the goal of improving point cloud quality through low-rank optimization.",
      "Extracted raw radar Range-Doppler Maps (RDMs) from captured data and used them as the optimization target. In MATLAB, organized RDMs into optimizable matrix and tensor forms, completing data cleaning, normalization, dimension alignment, and visualization with Range-Doppler and Range-Azimuth heatmaps. Built a stable and reproducible input-output interface.",
      "Designed a low-rank optimization enhancement strategy by leveraging the spatial, temporal, and channel correlations of target echoes. Introduced low-rank constraints to iteratively reconstruct RDMs while suppressing random noise and clutter interference, producing enhanced spectral representations.",
      "Mapped enhanced spectral results back into the point-cloud generation workflow and compared them with original CFAR and threshold outputs under the same conditions. Evaluated changes in point cloud density, continuity, and stability through point-count statistics and structural visualization.",
    ],
  },
  {
    title: "2D LiDAR SLAM and Route Planning for a Mobile Robot",
    organization: "Technological University Dublin",
    organizationUrl: "https://www.tudublin.ie/",
    period: "Oct 2022 - May 2023",
    bullets: [
      "Built a SLAM environment on ROS using the Slamtec RPLiDAR A1M8, a mechanical optical LiDAR with 360-degree scanning, to collect laser data. Completed environment configuration and driver deployment on PC and Raspberry Pi platforms, including Ubuntu MATE, ROS1, RViz, and rosbag recording and playback.",
      "Implemented, compared, and debugged two SLAM approaches: Gmapping, a particle-filter grid-mapping method that depends on sensors such as IMU and odometry, and Hector SLAM, a scan-matching-based laser odometry method. Resolved missing TF transformations and RViz frame-drop or queue-overflow issues by completing the static transform chain among map, odom, base_link, and laser frames, then analyzed the strengths, limitations, and tradeoffs of each method.",
      "Saved generated occupancy grid maps and implemented two types of path planning on top of the maps: full coverage path planning (FCPP), useful for scenarios such as cleaning robots, and shortest-path planning with A* and Dijkstra. Compared path density and coverage performance by configuring robot and tool radius parameters.",
      "Constructed both small-scale obstacle fields and large-scale floor test environments. Collected and evaluated mapping performance and measurement accuracy using a single LiDAR sensor under Hector SLAM, quantified displacement and wall dimensions with a map resolution of 0.05 m per pixel, summarized error sources such as scan range limits, movement speed and acceleration, target material, and boundary overlap caused by the absence of loop closure, and proposed improvement directions.",
    ],
  },
  {
    title: "RoboMaster 2021 University Technical Challenge (RMUT)",
    period: "Nov 2020 - Aug 2021",
    bullets: [
      "Used SolidWorks for vehicle body structural modeling, assembly, and lightweight design. Optimized plates, brackets, and connection methods based on load paths and mounting references. Processed aluminum profiles and acrylic components with CNC machining using PowerMILL and rapid 3D-printed prototyping. Organized dimensional inspection and assembly-error review, then iterated hole positions, clearances, and tolerance fits to improve assembly consistency and maintainability.",
      "Conducted kinematic simulation and interference checks, and worked with the electrical team to optimize the overall vehicle layout, including module placement, assembly sequence, fastening standards, wiring and pneumatic routing, and anti-loosening measures. Reduced weight and improved reliability while maintaining structural strength and stiffness, ensuring the vehicle met competition rules and engineering delivery requirements.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Nanyang Technological University",
    schoolUrl: "https://www.ntu.edu.sg/",
    degree: "Master of Science in Computer Control & Automation",
    period: "Aug 2024 - Jun 2026 (Expected)",
    location: "Singapore",
  },
  {
    school: "Technological University Dublin",
    schoolUrl: "https://www.tudublin.ie/",
    degree: "Bachelor of Engineering (Honours) in Mechanical Engineering",
    period: "Aug 2022 - Jun 2023",
    location: "Dublin, Ireland",
  },
  {
    school: "Nanjing Tech University",
    schoolUrl: "https://www.njtech.edu.cn/",
    degree: "Bachelor of Engineering in Mechanical Engineering",
    period: "Sep 2019 - Jul 2023",
    location: "Nanjing, China",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:quanrui.fu@foxmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/CoreyFQR", icon: Github },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@coreystudio9194",
    icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/quanrui-fu-b2b694324/",
    icon: Linkedin,
  },
];
