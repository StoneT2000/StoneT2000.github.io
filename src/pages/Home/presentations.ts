interface PresentationData {
  title: string;
  entries: {
    date: string;
    venue: string;
    recording?: string;
  }[];
  slides?: string;
}

export const data: PresentationData[] = [
  {
    title: "Scaling Embodied AI via Simulation and Sim-integrated Robot Learning",
    // date: "Jan, 2025",
    entries: [
      {
        date: "Jan, 2025",
        venue: "Institute for AI Industry Research (AIR), Tsinghua University"
      }
    ]
  },
  {
    title: 'ManiSkill3: Scalable Simulation+Rendering for Generalizable Embodied AI',
    entries: [
      {
        date: "October, 2024",
        venue: "ECHO AI Talk",
        recording: "https://www.youtube.com/watch?v=tIF8xQ2luXA"
      },
      {
        date: "June, 2024",
        venue: "CVPR 2024 Embodied AI Workshop"
      }
    ]
  },
  {
    title: 'Lux AI Season 2 and Reinforcement Learning',
    entries: [
      {
        date: "Feb, 2023",
        venue: "Kaggle Podcast",
        recording: "https://www.youtube.com/watch?v=3QdOTFtQ76U"
      }
    ]
  },
  {
    title: 'AI Competition Design For Multi-Agent Environments / Games',
    slides: 'https://docs.google.com/presentation/d/13EwQQLNcXJRJx0cDTgCoMATbEMWLDyO1HWeUf03x_io/edit?usp=sharing',
    entries: [
      {
        date: "Nov, 2022",
        venue: "Kaggle Podcast"
      },
      {
        date: "Oct, 2022",
        venue: "Learning in Foundation Environments (LIFE)",
      }
    ]
  }
]