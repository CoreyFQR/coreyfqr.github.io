import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Locale = "zh" | "en";

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const profile = {
  // Replace these values when you want to update your name or photo.
  name: "Quanrui Fu / Corey Fu",
  photo: "/profile_photo.jpg",
  photoAlt: "Quanrui Fu standing by the waterfront",
};

export const portfolioContent = {
  zh: {
    languageName: "中文",
    languageToggleLabel: "切换语言",
    navAriaLabel: "主导航",
    eyebrow: "个人作品集",
    slogan: "保持思考。保持学习。保持创造。",
    intro: "一个持续探索软件、设计与想法的创作者，正在把学习转化为有用的作品。",
    primaryCta: "查看作品",
    secondaryCta: "联系我",
    selectedWorkLabel: "项目占位",
    footerNote: "保持思考。保持学习。保持创造。",
    navLinks: [
      { label: "关于", href: "#about" },
      { label: "项目", href: "#projects" },
      { label: "技能", href: "#skills" },
      { label: "联系", href: "#contact" },
    ],
    about: {
      // 之后可以把这里替换成更具体的个人介绍。
      heading: "关于我",
      body: "这里是一个简单的个人介绍占位段落。之后可以写下我的背景、兴趣方向、正在学习的内容，以及我希望通过作品表达和解决的问题。",
    },
    projects: [
      // 项目准备好后，把这些占位卡片替换成真实项目。
      {
        title: "项目标题一",
        description: "未来项目、案例研究或实验的简短介绍占位。",
        tags: ["标签", "工具", "方向"],
      },
      {
        title: "项目标题二",
        description: "用一句话说明项目目标、我的角色或最终成果。",
        tags: ["研究", "构建", "设计"],
      },
      {
        title: "项目标题三",
        description: "准备添加更多内容时，可以用这张卡片放另一个项目。",
        tags: ["学习", "原型", "想法"],
      },
    ] satisfies Project[],
    skills: [
      // 直接编辑这个数组来更新技能标签。
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "产品思维",
      "设计系统",
      "研究",
      "问题解决",
    ],
    contactLinks: [
      // 把 href 替换成你的真实邮箱、GitHub、LinkedIn 或其他链接。
      { label: "邮箱", href: "mailto:quanrui.fu@foxmail.com", icon: Mail },
      { label: "GitHub", href: "https://github.com/CoreyFQR", icon: Github },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/quanrui-fu-b2b694324/",
        icon: Linkedin,
      },
    ] satisfies ContactLink[],
  },
  en: {
    languageName: "English",
    languageToggleLabel: "Switch language",
    navAriaLabel: "Main navigation",
    eyebrow: "Personal Portfolio",
    slogan: "Keep thinking. Keep learning. Keep creating.",
    intro:
      "A curious builder exploring software, design, and ideas that turn learning into useful things.",
    primaryCta: "View Work",
    secondaryCta: "Contact",
    selectedWorkLabel: "Project Placeholder",
    footerNote: "Keep thinking. Keep learning. Keep creating.",
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    about: {
      // Replace this paragraph with a more personal introduction later.
      heading: "About",
      body: "This is a simple placeholder paragraph for a personal introduction. Later, it can describe my background, interests, current learning direction, and the kinds of problems I want to explore through my work.",
    },
    projects: [
      // Replace these placeholder cards with real projects when they are ready.
      {
        title: "Project Title One",
        description:
          "A short placeholder summary for a future project, case study, or experiment.",
        tags: ["Tag", "Tool", "Focus"],
      },
      {
        title: "Project Title Two",
        description:
          "A concise description can explain the goal, role, or result in one sentence.",
        tags: ["Research", "Build", "Design"],
      },
      {
        title: "Project Title Three",
        description:
          "Use this card for another project once you are ready to add more detail.",
        tags: ["Learning", "Prototype", "Idea"],
      },
    ] satisfies Project[],
    skills: [
      // Edit this list to keep the skills section up to date.
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Product Thinking",
      "Design Systems",
      "Research",
      "Problem Solving",
    ],
    contactLinks: [
      // Replace the href values with your real links when you are ready.
      { label: "Email", href: "mailto:quanrui.fu@foxmail.com", icon: Mail },
      { label: "GitHub", href: "https://github.com/CoreyFQR", icon: Github },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/quanrui-fu-b2b694324/",
        icon: Linkedin,
      },
    ] satisfies ContactLink[],
  },
} satisfies Record<
  Locale,
  {
    languageName: string;
    languageToggleLabel: string;
    navAriaLabel: string;
    eyebrow: string;
    slogan: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    selectedWorkLabel: string;
    footerNote: string;
    navLinks: { label: string; href: string }[];
    about: { heading: string; body: string };
    projects: Project[];
    skills: string[];
    contactLinks: ContactLink[];
  }
>;

export const locales: Locale[] = ["zh", "en"];
