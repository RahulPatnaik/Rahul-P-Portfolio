import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Patnaik",
  initials: "RP",
  url: "https://www.linkedin.com/in/rahul-patnaik-239980289",
  location: "Bangalore, India",
  locationLink: "https://www.google.co.in/maps/place/Bengaluru+Urban,+Karnataka/@12.9457006,77.2511561,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae16440acd0efd:0x58f093efec8f6c9f!8m2!3d12.9700247!4d77.6536125!16zL20vMDVuNjFo?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D",
  description:
    "Hi, I'm Rahul — a passionate ML researcher and builder, turning ideas into impactful tech through code, community, and curiosity.",
  summary:
    "Second-year Computer Science student at RVCE with hands-on experience in Machine Learning, Quantum ML, and Multimodal AI. Published researcher (IEEE), former CMU research intern, and founder of Mark.AI. Skilled in building efficient ML systems using PyTorch, Hugging Face, and Transformers. Passionate about community-driven AI education, with leadership roles in GenAI workshops and national hackathons.",
  avatarUrl: "https://ibb.co/8nJj57KJ",
  skills: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning",
    "Generative AI",
    "Quantum Machine Learning",
    "Multimodal AI",
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "Transformers",
    "OpenCV",
    "React",
    "Diffusers",
    "Pennylane",
    "Langchain",
    "Flask",
    "LlamaIndex",
    "JavaScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "C",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rpatnaik2005@gmail.com",
    tel: "+91 9686632808",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RahulPatnaik",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-patnaik-239980289",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CMU AI Research",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Student Research Intern",
      logoUrl: "/atomic.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "Researching Diffusion architectures to enhance text generation in state-of-the-art Multimodal AI within images along with its spacial orientation capabilities",
    },
    {
      company: "WIRIN Labs (RVCE)",
      badges: [],
      href: "https://wirin.iisc.ac.in/",
      location: "Bangalore, India",
      title: "Student Developer",
      logoUrl: "",
      start: "Oct 2023",
      end: "Jul 2024",
      description:
        "Fine-tuned Llama-2 7B for Kannada using Hugging Face Transformers + QLORA (32GB VRAM). Built RAG model (1.5s response) with Llamaindex, GPT-4 API, and SerpAPI",
    },
    {
      company: "Mark.AI",
      href: "",
      badges: [],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "",
      start: "May 2023",
      end: "Jan 2024",
      description:
        "Developed Botpress chatbots with Python/JavaScript data logging and knowledge graphs. Successfully piloted at yoga studio and fitness center",
    },
  ],
  education: [
    {
      school: "RV College of Engineering",
      href: "https://rvce.edu.in",
      degree: "Bachelors of Engineering in Computer Science (Data Science)",
      logoUrl: "https://ibb.co/LdMssb4g",
      start: "2023",
      end: "2027",
    },
    {
      school: "Narayana CO-KAVERI Bhavan",
      href: "",
      degree: "Senior High School",
      logoUrl: "",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "https://ibb.co/LdMssb4g",
      href: "https://pypi.org/project/model2gguf/",
      dates: "2024",
      active: true,
      description:
        "CLI tool for converting Hugging Face models to GGUF format with Ollama integration utilizing llama.cpp. Tool allows users to easily convert modelfiles into GGUF format without having to use complex repositories",
      technologies: [
        "Python",
        "transformers",
        "hugging face",
      ],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/model2gguf/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Titan Architecture (Small-scale)",
      href: "https://github.com/RahulPatnaik/Titan-architechture",
      dates: "2025",
      active: true,
      description:
        "PyTorch implementation achieving 79% val accuracy on SST2 with memory efficiency insights. One of the first Titan architecture implementation on DistilBERT (first small-scale deployment)",
      technologies: [
        "PyTorch",
        "transformers",
        "hugging face",
        "datasets",
        "accelerate",
        "Natural Language Processing",
        "Deep Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RahulPatnaik/Titan-architechture",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Parkinson’s Freezing of Gait Detection",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Predicted FOG events (70.9GB dataset) with 65% RAM reduction for data loading via float optimization. Achieved 0.7567 MAP using the LSTM model architecture within a highly constrained kaggle notebook environment",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "TensorFlow",
        "Supervised Learning",
      ],
      links: [
      ],
      image: "",
      video: "",
    },
    {
      title: "Reinforcement Learning (Laptop-scale)",
      href: "https://github.com/RahulPatnaik/Reinforcement-Learning-on-a-small-scale",
      dates: "2023",
      active: true,
      description:
        "30-40% memory optimization over PPO with Flask API (<500ms response). Runs on 16GB RAM with 25% relevance improvement via custom rewards.",
      technologies: [
        "PyTorch",
        "Flask",
        "FastAPI",
        "Streamlit",
        "Python",
        "transformers",
        "huggging face",
        "datasets",
        "accelerate",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/RahulPatnaik/Reinforcement-Learning-on-a-small-scale",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Unisys Campus Connect, RVCE",
      href: "https://github.com/RahulPatnaik/Reinforcement-Learning-on-a-small-scale",
      dates: "2023",
      active: true,
      description:
        "Developing quantum machine learning models using PennyLane to leverage qubit superposition for enhanced feature extraction. Applied quantum ML approach to brain tumor classification from MRI scans. Designed a PyTorch-based architecture for general-purpose image classification with quantum enhancements to achieve 95%+ accuracy while also helping in segmenting the tumor location, Achieved comparable accuracy to classical models while demonstrating quantum advantage potential with an increase of 3% accuracy from the classical models",
      technologies: [
        "PyTorch",
        "PennyLane",
        "Quantum Machine Learning",
        "Python",
      ],
      links: [
      ],
      image: "",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Charcha, Hack4Skill",
      dates: "November 2023",
      location: "Delhu, India",
      description:
        "Developed an application similar to sage.io in that it allows users to interact and network with people from various domain via an LLM.",
      image:
        "",
      mlh: "",
      links: [],
    },
  ],
} as const;
