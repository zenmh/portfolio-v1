import { Skill, SkillsCategory } from "@/types/skill";

const LANGUAGES: Skill[] = [
  { name: "Html", image: "/common/html" },
  { name: "Css", image: "/common/css" },
  { name: "C", image: "/languages/c" },
  { name: "C++", image: "/languages/cpp" },
  { name: "Javascript", image: "/common/js" },
  { name: "Typescript", image: "/common/ts" },
  { name: "Rust", image: "/common/rs" },
];

const FRONTEND_SKILLS: Skill[] = [
  { name: "Html 5", image: "/common/html" },
  { name: "Css 3", image: "/common/css" },
  { name: "Javascript", image: "/common/js" },
  { name: "Typescript", image: "/common/ts" },
  { name: "React Js", image: "/frontend/react" },
  { name: "Next Js", image: "/frontend/next" },
  { name: "Firebase Auth", image: "/common/firebase" },
  { name: "Next Auth", image: "/frontend/nextauth" },
  { name: "Redux & RTK Query", image: "/frontend/redux" },
  { name: "React Router DOM", image: "/frontend/react-router-dom" },
  { name: "TanStack Query", image: "/frontend/tanstack" },
  { name: "React Hook Form", image: "/frontend/react-hook-form" },
  { name: "Axios", image: "/frontend/axios" },
  { name: "Material UI", image: "/frontend/mui" },
  { name: "Ant Design", image: "/frontend/antd" },
  { name: "Tailwind Css", image: "/frontend/tailwind" },
  { name: "NextUI", image: "/frontend/next-ui" },
  { name: "ShadCn UI", image: "/frontend/shadcn" },
];

const BACKEND_SKILLS: Skill[] = [
  { name: "Javascript", image: "/common/js" },
  { name: "Typescript", image: "/common/ts" },
  { name: "Node Js", image: "/backend/node" },
  { name: "Express Js", image: "/backend/express" },
  { name: "MongoDB", image: "/backend/mongodb" },
  { name: "Mongoose", image: "/backend/mongoose" },
  { name: "PostgreSQL", image: "/backend/postgres" },
  { name: "Prisma", image: "/backend/prisma" },
  { name: "Zod", image: "/backend/zod" },
  { name: "JWT", image: "/backend/jwt" },
  { name: "Bcrypt", image: "/backend/bcrypt" },
];

const TOOLS: Skill[] = [
  { name: "VS Code", image: "/tools/vs-code" },
  { name: "Git", image: "/tools/git" },
  { name: "GitHub", image: "/tools/github" },
  { name: "Trello", image: "/tools/trello" },
  { name: "Jira", image: "/tools/jira" },
  { name: "Figma", image: "/tools/figma" },
  { name: "Supabase", image: "/tools/supabase" },
  { name: "Firebase", image: "/common/firebase" },
  { name: "Netlify", image: "/tools/netlify" },
  { name: "Vercel", image: "/tools/vercel" },
  { name: "Postman", image: "/tools/postman" },
  { name: "Draw SQL", image: "/tools/draw-sql" },
  { name: "Chrome Dev Tools", image: "/tools/chrome-dev-tool" },
  { name: "Prettier", image: "/tools/prettier" },
  { name: "ESlint", image: "/tools/eslint" },
  { name: "Husky", image: "/tools/husky" },
];

const SKILLS_CATEGORIES: SkillsCategory[] = [
  { value: "languages", label: "Languages", skills: LANGUAGES },
  { value: "frontend", label: "Frontend", skills: FRONTEND_SKILLS },
  { value: "backend", label: "Backend", skills: BACKEND_SKILLS },
  { value: "tools", label: "Tools", skills: TOOLS },
];

export { SKILLS_CATEGORIES };