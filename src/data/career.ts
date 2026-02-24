import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Server,
  Shield,
  Rocket,
  Cloud,
  Terminal,
  Database,
  Globe,
  Code2,
  Cpu,
  Network,
  Container,
  Layers,
  Wrench,
  BarChart3,
  Zap,
} from "lucide-react";

/* ─────────────────────── Career Phases ─────────────────────── */

export interface CareerPhase {
  id: string;
  color: string;
  glowClass: string;
  label: string;
  years: string;
  title: string;
  project: string;
  impact: string;
  techSpecs: string[];
  icon: LucideIcon;
}

export const careerPhases: CareerPhase[] = [
  {
    id: "intelligence-era",
    color: "#BD00FF",
    glowClass: "glow-purple",
    label: "The Intelligence Era",
    years: "2024 – 2026",
    title: "Principal Platform Engineer & DevOps",
    project: "M365 Service Engineering & AI Transformation",
    impact:
      'Architecting the "Self-Healing Cloud" using LLMs and Agentic Infrastructure.',
    techSpecs: [
      "LLMOps",
      "Azure AI Foundry",
      "GPT-4",
      "Phi 3.5 Reinforcement Training",
      "RAG Architecture",
      "ChromaDB",
      "LangChain",
      "AutoGen 2.0",
      "Semantic Kernel",
      "Modular Terraform (Site-level)",
      "GoLang",
      "Python",
    ],
    icon: Brain,
  },
  {
    id: "fleet-commander",
    color: "#8E44AD",
    glowClass: "glow-deep-purple",
    label: "The Fleet Commander",
    years: "2021 – 2023",
    title: "Senior SRE & Bare-Metal Orchestration Lead",
    project: "Operators Nexus & Deep SRE",
    impact:
      "Deployed 250+ sites (50 Greenfield, 200+ Brownfield) on Bare-Metal at global scale.",
    techSpecs: [
      "Airship (Shipyard, Promenade, Drydock, Deckhand)",
      "OpenStack-Helm",
      "Kubernetes Internals (CRDs, Operators, Kind)",
      "ClusterAPI",
      "Azure Arc",
      "Ceph",
      "Calico",
      "Gerrit",
      "Keystone RBAC Webhooks",
    ],
    icon: Server,
  },
  {
    id: "architect",
    color: "#2E86C1",
    glowClass: "glow-blue",
    label: "The Platform Engineer",
    years: "2014 – 2020",
    title: "Platform Engineer with DevOps & Undercloud",
    project: "D-Engine & IaC Revolution",
    impact:
      "Created Mindtree IP (D-Engine) to abstract multi-cloud complexity for multimillion-dollar projects.",
    techSpecs: [
      "Chef (Custom Knife Plugins, Policy files, Test Kitchen, Foodcritic)",
      "Ruby",
      "Ansible",
      "Puppet",
      "AWS / Azure Migrations",
      "Nginx (300+ sites)",
      "Jenkins Groovy Pipelines",
    ],
    icon: Layers,
  },
  {
    id: "foundation",
    color: "#FF5C00",
    glowClass: "glow-orange",
    label: "The Foundation",
    years: "2008 – 2014",
    title: "Systems Engineer & Startup Developer",
    project: "Startup Genesis: ezrecharge & Wipro",
    impact:
      "From PHP Product Development to Mission-Critical Banking Support.",
    techSpecs: [
      "Startup Dev: ezrecharge (PHP, MySQL, Mobile APIs)",
      "IIS 6.0",
      "Active Directory",
      "Windows Server 2003/2008",
      "UC4 Automation",
      "SharePoint",
    ],
    icon: Rocket,
  },
];

/* ─────────────────────── Technology Matrix ─────────────────────── */

export interface TechCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  items: string[];
}

export const techMatrix: TechCategory[] = [
  {
    category: "Languages",
    icon: Code2,
    color: "#BD00FF",
    items: ["GoLang", "Python", "PHP", "Ruby", "C#", "C++", "Bash", "PowerShell"],
  },
  {
    category: "Orchestration",
    icon: Container,
    color: "#8E44AD",
    items: ["Kubernetes", "Docker", "Airship", "OpenStack", "Terraform", "Helm"],
  },
  {
    category: "AI / ML",
    icon: Brain,
    color: "#BD00FF",
    items: ["GPT-4", "Llama 3.X", "Phi 3.5", "RAG", "Vector DBs"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    color: "#2E86C1",
    items: ["Azure", "AWS", "M365 Service Infra", "Azure Arc"],
  },
  {
    category: "SRE & Observability",
    icon: BarChart3,
    color: "#FF5C00",
    items: ["DataDog", "Splunk", "Nagios", "Kibana", "ThousandEyes", "Akamai", "Geneva"],
  },
  {
    category: "Infrastructure",
    icon: Network,
    color: "#2E86C1",
    items: ["Ceph", "Calico", "Nginx", "IIS", "Active Directory"],
  },
];

/* ─────────────────────── Bento Highlights ─────────────────────── */

export interface BentoItem {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  span?: "wide" | "tall" | "normal";
}

export const bentoHighlights: BentoItem[] = [
  {
    title: "Years of Mastery",
    value: "16+",
    subtitle: "Infrastructure, DevOps & AI",
    icon: Zap,
    color: "#BD00FF",
    span: "normal",
  },
  {
    title: "Sites Deployed",
    value: "250+",
    subtitle: "Bare-Metal global fleet",
    icon: Globe,
    color: "#8E44AD",
    span: "wide",
  },
  {
    title: "Intellectual Property",
    value: "D-Engine",
    subtitle: "Multi-cloud IaC abstraction",
    icon: Cpu,
    color: "#2E86C1",
    span: "normal",
  },
  {
    title: "AI Models Deployed",
    value: "GPT-4 / Phi 3.5",
    subtitle: "Self-healing infrastructure",
    icon: Brain,
    color: "#BD00FF",
    span: "wide",
  },
  {
    title: "Config Management",
    value: "Chef + Ansible",
    subtitle: "Enterprise-scale automation",
    icon: Wrench,
    color: "#FF5C00",
    span: "normal",
  },
  {
    title: "Kubernetes",
    value: "CRDs & Operators",
    subtitle: "Bare-metal to cloud-native",
    icon: Container,
    color: "#8E44AD",
    span: "normal",
  },
  {
    title: "SRE Toolchain",
    value: "Full-Stack Observability",
    subtitle: "DataDog, Splunk, Geneva",
    icon: Shield,
    color: "#FF5C00",
    span: "wide",
  },
  {
    title: "Languages",
    value: "8+",
    subtitle: "Go, Python, Ruby, PHP, C#…",
    icon: Terminal,
    color: "#2E86C1",
    span: "normal",
  },
  {
    title: "Cloud Migrations",
    value: "AWS ↔ Azure",
    subtitle: "Multi-million dollar workloads",
    icon: Database,
    color: "#2E86C1",
    span: "normal",
  },
];
