export interface Project {
  id: string
  image?: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  { id: "proj-1", tags: ["Landing Page", "Web Design"] },
  { id: "proj-2", tags: ["UI/UX", "Freelancer"] },
  { id: "proj-3", tags: ["Voluntário", "Web Design"] },
]

export const PROJECT_TAGS = Array.from(
  new Set(PROJECTS.flatMap((project) => project.tags))
)
