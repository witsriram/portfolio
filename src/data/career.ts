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
  Zap,
  Wrench,
  BarChart3,
  Workflow,
  GitBranch,
  Settings,
} from "lucide-react";

/* ─────────────────────── Career Phases ─────────────────────── */

export interface SubProject {
  name: string;
  period: string;
  technologies: string[];
  infrastructure: string;
  highlights: string[];
  url?: string;
}

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
  company: string;
  clients: string[];
  subProjects: SubProject[];
}

export const careerPhases: CareerPhase[] = [
  {
    id: "intelligence-era",
    color: "#14B8A6",
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
      "Semantic Kernel",
      "AutoGen 2.0",
      "RAG + ChromaDB",
      "LangChain",
      "Terraform",
      "GoLang",
      "Python",
      "Azure Front Door & CDN",
      "Azure DevOps Pipelines",
    ],
    icon: Brain,
    company: "LTIMindtree Limited",
    clients: ["Microsoft"],
    subProjects: [
      {
        name: "M365 Service Engineering & WordPress Migration",
        period: "Dec 2024 – Present",
        technologies: [
          "Azure Front Door & CDN",
          "Kubernetes Service",
          "Container Registry",
          "Storage Account",
          "Key Vault",
          "Event Grid",
          "Log Analytics Workspace",
          "Network Security Group",
          "Virtual Network",
          "Managed Identity",
          "Service Principal",
          "AI Foundry",
          "Azure Functions",
          "Azure DevOps (Repo, Artifacts, Pipelines)",
          "Terraform",
          "GoLang",
          "Python",
          "Semantic Kernel",
          "AutoGen 2.0",
        ],
        infrastructure: "Azure IaaS, PaaS & AI Service (Foundry)",
        highlights: [
          "Architecting a scalable, reusable framework for WordPress sites deployed in Azure — robust and flexible across deployment models.",
          "Terraform as primary IaC tool for declarative, reusable, and immutable Azure resource provisioning.",
          "Site-level modular Terraform scripts decoupling deployment logic for fully automated, zero-manual-intervention deployments.",
          "Built an LLM-powered chatbot using GPT-4 on Azure AI Services with RAG and ChromaDB for context-aware, vector-similarity-driven responses.",
          "Integrated LangChain to bridge the vector database and LLM for seamless real-time + historical data responses.",
          "Azure Pipeline job to periodically index Azure Wiki content into the vector database — Python script on Azure Web App for scalable indexing.",
          "Declarative YAML pipelines integrated into the codebase for version-controlled pipeline configs and scripts.",
          "Vector Similarity Search script returns raw results → LLM parses and summarizes into human-readable format for Operational Engineers.",
          "RAG system scoped to return only relevant wiki results with custom prompts restricting response boundaries.",
        ],
      },
    ],
  },
  {
    id: "fleet-commander",
    color: "#0D9488",
    glowClass: "glow-deep-purple",
    label: "The Fleet Commander",
    years: "2021 – 2024",
    title: "Senior SRE & Bare-Metal Orchestration Lead",
    project: "Operators Nexus & SRE for MFA",
    impact:
      "Deployed 250+ sites globally on bare-metal and led SRE for Microsoft MFA.",
    techSpecs: [
      "Airship (Shipyard, Promenade, Drydock, Deckhand)",
      "OpenStack-Helm",
      "Kubernetes (CRDs, Operators)",
      "Ceph",
      "Calico",
      "Gerrit",
      "Keystone RBAC Webhooks",
      "Chef",
      "Ansible",
      "Python",
      "C#",
      "ThousandEyes",
      "Geneva",
    ],
    icon: Server,
    company: "LTIMindtree Limited",
    clients: ["Microsoft"],
    subProjects: [
      {
        name: "Operators Nexus",
        period: "Jan 2021 – Dec 2024",
        technologies: [
          "Airship (Shipyard, Promenade, Drydock, Deckhand, Pegleg)",
          "Kubernetes",
          "OpenStack",
          "KeyStone",
          "Calico",
          "Ceph",
          "Jenkins Custom Framework",
        ],
        infrastructure: "Azure Datacenter, Pilot Fish & VMWare",
        highlights: [
          "Deployed and upgraded Kubernetes clusters across datacenters via Jenkins — production kept on latest versions with cert rotations and compliance-driven updates.",
          "Generated site manifest YAMLs via Python tooling — network topology, VLANs, IP ranges, Pure API tokens, SSH keys — encrypted/decrypted with Pegleg salt+passphrase.",
          "Self-taught Airship and all components (Promenade, Shipyard, Deckhand, Armada, Diving Bell, Drydock) with zero knowledge transfer.",
          "Managed CI/CD pipelines using Git, Docker, Jenkins, and ECR — health checks, upgrades, RAID config workflows.",
          "Updated Keystone RBAC webhooks for Role-Based Access Control to Kubernetes (cluster, pod, admin access).",
          "Generated SSL/TLS certificates for all cluster nodes' DNS records — encrypted tunnels for secure data transport.",
          "Pushed all code changes via Gerrit version control — cherry-picking changes to GA and release branches.",
          "Utilized Nagios and Kibana for cluster health monitoring — proactive alerts and AOTS incident reports.",
          "Authored comprehensive documentation for cluster architecture, deployment, and upgrade procedures.",
        ],
      },
      {
        name: "SRE for MFA (Multi-Factor Authentication)",
        period: "Jan 2020 – Jan 2021",
        technologies: [
          "Azure Cloud SDK",
          "MFA Direct SDK",
          "Chef",
          "Ansible",
          "Python",
          "PowerShell",
          "C#",
          "GitHub",
          "MDM",
          "ThousandEyes",
          "Akamai",
          "MDS Tools",
        ],
        infrastructure: "Azure Datacenter, Pilot Fish & VMWare",
        highlights: [
          "Onboarded services to Warm Express V2 deployment for Azure-based portal — meeting customer coding standards.",
          "Developed MDM Metrics, Monitors, and Dashboards for service health using MDS tools.",
          "Built C# runners in Visual Studio sending synthetic traffic to monitor service availability.",
          "Configured ThousandEyes agents, alerts, and tests for network issue monitoring.",
          "Used Kusto and Dgrep queries to investigate service degradation.",
          "Onboarded latest security packs and LSW operations for security compliance.",
          "Performed Beta and Prod testing across Test, Pre-Prod, Prod, and National Clouds.",
          "Developed LiveSite reports and BI dashboards for Geneva monitoring tools.",
        ],
      },
    ],
  },
  {
    id: "architect",
    color: "#047857",
    glowClass: "glow-blue",
    label: "The Platform Engineer",
    years: "2014 – 2020",
    title: "Platform Engineer with DevOps & Undercloud",
    project: "D-Engine & IaC Revolution",
    impact:
      "Created LTIMindtree IP (D-Engine) to abstract multi-cloud complexity — deployed across Intel, AkzoNobel, Amex GBT, and Capital One.",
    techSpecs: [
      "D-Engine (Proprietary IP)",
      "Chef (Knife Plugins, Policy Files, Test Kitchen)",
      "Ansible",
      "Kubernetes",
      "Docker",
      "Jenkins Groovy Pipelines",
      "Ruby",
      "Nginx (300+ sites)",
      "AWS",
      "Azure",
      "Rackspace",
    ],
    icon: Layers,
    company: "LTIMindtree Limited",
    clients: ["Intel", "AkzoNobel", "Amex GBT", "Capital One"],
    subProjects: [
      {
        name: "Private Cloud Benchmarking (Intel)",
        period: "Nov 2018 – Dec 2020",
        technologies: [
          "Intel Proprietary Tools",
          "D-Engine",
          "Kubernetes",
          "Ansible",
        ],
        infrastructure: "Intel Private Cloud, AWS, Azure & VMWare",
        highlights: [
          "Implemented D-Engine framework on Intel hardware to spin up infrastructure objects on demand for benchmarking.",
          "Created comparable objects in competing clouds for performance comparison against Intel's private cloud.",
          "Installed and configured KubeTest on Intel hardware — tested Kubernetes clusters and reported faults.",
          "Automated hardware-related features using Ansible — custom framework for hardware config and OS installation.",
          "Built physical racks in Intel datacenter.",
        ],
      },
      {
        name: "Disaster Recovery & Cloud Migration",
        period: "Dec 2017 – Nov 2018",
        technologies: [
          "D-Engine",
          "AWS (SNS, EBS, Route 53, ELB, Elastic Beanstalk)",
          "Kubernetes",
          "Docker",
          "Jenkins",
          "Ansible",
          "Nagios",
          "Splunk",
          "Python",
          "Ruby",
          "Groovy",
        ],
        infrastructure: "AWS, Azure & VMWare",
        highlights: [
          "D-Engine for provisioning AWS/Azure cloud resources — ELB, Auto Scaling, VM Scale Sets, and more.",
          "Seamless Jenkins integration with D-Engine for CI/CD across 80+ servers.",
          "Ansible Playbooks for Tomcat server setup + Micro Services deployment via D-Engine.",
          "Automated SSL/TLS onboarding for Webserver registry clusters with Nginx.",
          "Wrote Groovy pipelines for Jenkins multi-node builds and deployments.",
          "Kubernetes for containerized app management — Pods, ConfigMaps, Services, namespaced deployments.",
          "Prototyped CI/CD system using D-Engine + Kubernetes + Docker as the runtime.",
          "Designed cloud architectures for customers migrating to AWS PaaS/IaaS.",
        ],
      },
      {
        name: "Chef SWAT & D-Engine Core",
        period: "Oct 2016 – Dec 2017",
        technologies: [
          "Chef",
          "Chef Automate",
          "Knife",
          "JFrog",
          "Test Kitchen",
          "Foodcritic",
          "Chef Policy Files",
          "D-Engine",
          "Chocolatey",
        ],
        infrastructure: "AWS & VMWare",
        highlights: [
          "Developed Chef Cookbooks from scratch — Apache Tomcat, Jenkins, Rundeck installation and deployment automation via D-Engine.",
          "Integrated all developed cookbooks into D-Engine framework.",
          "Created CI/CD pipelines using Git + Chef via D-Engine.",
          "Extensively worked with Chef Policy Files — deployment and group management into infrastructure.",
          "Managed AWS EC2/S3/Route53/ELB/IAM/CloudFormation via D-Engine automation.",
          "Security groups, network ACLs, Internet Gateways, NAT instances — all via D-Engine.",
          "Managed Amazon instances via custom Knife backup plugin and Nagios monitoring.",
        ],
      },
      {
        name: "Global Publish Platform (AkzoNobel)",
        period: "May 2014 – Oct 2016",
        technologies: [
          "Chef",
          "Rackspace",
          "Jenkins",
          "Nexus",
          "Nginx",
          "Drupal",
          "PHP",
          "Foodcritic",
          "Rubocop",
          "Test Kitchen",
          "Berkshelf",
        ],
        infrastructure: "Rackspace & AWS",
        highlights: [
          "Hands-on Chef automation in Rackspace environment — design, creation, config, and delivery of cloud infrastructure.",
          "Managing Chef Knife CLI and building custom knife commands.",
          "Maintained Nginx reverse proxy cookbooks for 300+ production sites.",
          "CI/CD pipeline setup with Jenkins, Nexus, and Chef for deployment.",
          "Validation of cookbooks via Test Kitchen before promotion; compliance via Rubocop and Foodcritic.",
          "Infrastructure-as-Code best practices — highly-available systems and disaster recovery planning.",
          "Research and integration of emerging technologies (Docker containers) into client infrastructure.",
        ],
      },
    ],
  },
  {
    id: "foundation-ltm",
    color: "#D97706",
    glowClass: "glow-orange",
    label: "The Catalyst",
    years: "2013 – 2014",
    title: "Application Support Engineer",
    project: "KPN Netherlands",
    impact:
      "Production support and SharePoint administration for KPN — first project at LTIMindtree.",
    techSpecs: [
      "SharePoint",
      "UC4 Automation",
      "IIS",
      "Apache",
      "ITIL",
    ],
    icon: Rocket,
    company: "LTIMindtree Limited",
    clients: ["KPN Netherlands"],
    subProjects: [
      {
        name: "Application Support (KPN Netherlands)",
        period: "Feb 2013 – May 2014",
        technologies: [
          "SharePoint",
          "UC4 Automation",
          "IIS",
          "Apache",
          "ITIL",
        ],
        infrastructure: "Datacenter",
        highlights: [
          "Production support engineer — 24/7 application availability.",
          "UC4 complete automation of SFTP from various vendors to KPN.",
          "SharePoint Administrator — site creation, sub-sites, and migration.",
          "Application deployment and weekend rolling restarts.",
        ],
      },
    ],
  },
  {
    id: "foundation-wipro",
    color: "#D97706",
    glowClass: "glow-orange",
    label: "The Foundation",
    years: "2010 – 2013",
    title: "Application Support Engineer",
    project: "CapitalOne Banking",
    impact:
      "Level-2 production support for mission-critical banking applications at Capital One.",
    techSpecs: [
      "Windows Server 2003/2008",
      "IIS 6.0",
      "Active Directory",
      "Online Banking",
      "Credit Card Banking",
      "Control-M",
      "ITIL",
    ],
    icon: Rocket,
    company: "Wipro Technologies",
    clients: ["Capital One"],
    subProjects: [
      {
        name: "Integrated Production Support (CapitalOne)",
        period: "Oct 2010 – Feb 2013",
        technologies: [
          "Windows Server 2003/2008",
          "IIS 6.0",
          "Active Directory",
          "Online Banking",
          "Credit Card Banking",
          "Control-M",
          "ITIL",
        ],
        infrastructure: "Datacenter (Wipro Technologies)",
        highlights: [
          "Level-2 Application Support for mission-critical banking front-end applications on Windows Server 2003 & 2008.",
          "Handled SEV2/SEV3/SEV4 incidents — IIS 6.0 Administration and Active Directory management.",
          "ITIL framework-based Level 2 support — Incident Resolution, Change/Problem Management, Release & Deployment.",
          "Supported high-visibility apps: EOS Voyager, Online Banking, Web Methods, Shared Tools & Proph IT.",
          "Monitoring Control-M jobs — Root cause analysis for recurring incidents with L3/SME teams.",
          "Proactive procedures for problem prevention and resolution — interfaced with developers, analyzed issues, designed solutions.",
        ],
      },
    ],
  },
  {
    id: "genesis",
    color: "#B45309",
    glowClass: "glow-purple",
    label: "The Genesis",
    years: "2008 – 2009",
    title: "Full-Stack Developer (Intern)",
    project: "ezrecharge — Online Recharge Platform",
    impact:
      "Part of a 3-member team that designed, developed, and launched a full product from scratch — still live at ezrecharge.in.",
    techSpecs: [
      "PHP",
      "MySQL",
      "JavaScript",
      "AJAX",
      "HTML/CSS",
      "Payment Gateway Integration",
    ],
    icon: Zap,
    company: "ezrecharge",
    clients: ["ezrecharge.in"],
    subProjects: [
      {
        name: "ezrecharge — Online Recharge Platform",
        period: "2008 – 2009",
        url: "https://ezrecharge.in",
        technologies: [
          "PHP",
          "MySQL",
          "JavaScript",
          "AJAX (No-Refresh UI)",
          "HTML/CSS",
          "Payment Gateway API",
        ],
        infrastructure: "Shared Hosting / LAMP Stack",
        highlights: [
          "Team of 3 — designed the entire system architecture from the ground up.",
          "Developed the full-stack web application using PHP and MySQL backend.",
          "Integrated payment gateway for real-time online mobile recharge transactions.",
          "Built AJAX-powered no-refresh UI for seamless user experience — ahead of its time.",
          "Launched the product end-to-end — still live at ezrecharge.in after 17+ years.",
          "Early venture that ignited a passion for building systems at scale.",
        ],
      },
    ],
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
    color: "#14B8A6",
    items: ["GoLang", "Python", "PHP", "Ruby", "C#", "C++", "Bash", "PowerShell"],
  },
  {
    category: "Orchestration",
    icon: Container,
    color: "#0D9488",
    items: ["Kubernetes", "Docker", "Airship", "OpenStack", "Terraform", "Helm"],
  },
  {
    category: "AI / ML",
    icon: Brain,
    color: "#14B8A6",
    items: ["GPT-4", "Llama 3.X", "Phi 3.5", "RAG", "Vector DBs"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    color: "#047857",
    items: ["Azure", "AWS", "M365 Service Infra", "Azure Arc"],
  },
  {
    category: "SRE & Observability",
    icon: BarChart3,
    color: "#D97706",
    items: ["DataDog", "Splunk", "Nagios", "Kibana", "ThousandEyes", "Akamai", "Geneva"],
  },
  {
    category: "Infrastructure",
    icon: Network,
    color: "#047857",
    items: ["Ceph", "Calico", "Nginx", "IIS", "Active Directory"],
  },
  {
    category: "CI/CD & DevOps",
    icon: Workflow,
    color: "#14B8A6",
    items: ["Jenkins", "Pipeline as Code", "Azure DevOps Pipelines", "GitHub Actions", "ArgoCD"],
  },
  {
    category: "Configuration Management",
    icon: Settings,
    color: "#D97706",
    items: ["Chef", "Ansible", "Custom Cookbooks", "Knife Plugins", "Ansible Playbooks"],
  },
  {
    category: "Source Control & GitOps",
    icon: GitBranch,
    color: "#0D9488",
    items: ["Git", "GitHub", "Azure Repos", "GitOps", "Flux", "Gerrit"],
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
    color: "#0EA5E9",
    span: "normal",
  },
  {
    title: "Sites Deployed",
    value: "250+",
    subtitle: "Bare-Metal global fleet",
    icon: Globe,
    color: "#2563EB",
    span: "wide",
  },
  {
    title: "Intellectual Property",
    value: "D-Engine",
    subtitle: "Multi-cloud IaC abstraction",
    icon: Cpu,
    color: "#1E40AF",
    span: "normal",
  },
  {
    title: "AI Models Deployed",
    value: "GPT-4 / Phi 3.5",
    subtitle: "Self-healing infrastructure",
    icon: Brain,
    color: "#0EA5E9",
    span: "wide",
  },
  {
    title: "Config Management",
    value: "Chef + Ansible",
    subtitle: "Enterprise-scale automation",
    icon: Wrench,
    color: "#06B6D4",
    span: "normal",
  },
  {
    title: "Kubernetes",
    value: "CRDs & Operators",
    subtitle: "Bare-metal to cloud-native",
    icon: Container,
    color: "#2563EB",
    span: "normal",
  },
  {
    title: "SRE Toolchain",
    value: "Full-Stack Observability",
    subtitle: "DataDog, Splunk, Geneva",
    icon: Shield,
    color: "#06B6D4",
    span: "wide",
  },
  {
    title: "Languages",
    value: "8+",
    subtitle: "Go, Python, Ruby, PHP, C#…",
    icon: Terminal,
    color: "#1E40AF",
    span: "normal",
  },
  {
    title: "Cloud Migrations",
    value: "AWS ↔ Azure",
    subtitle: "Multi-million dollar workloads",
    icon: Database,
    color: "#1E40AF",
    span: "normal",
  },
];
