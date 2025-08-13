export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tech: string;
  status?: 'Completed' | 'In Progress' | 'Planning';
  githubUrl?: string;
  liveUrl?: string;
  previewUrl?: string;
} 