export interface Category {
  id: string
  name: string
  slug: string
  description?: string | null
  icon?: string | null
  order?: number
  _count?: { episodes: number }
}

export interface Tag {
  id: string
  name: string
  slug: string
}

export interface LearningPathMeta {
  id: string
  title: string
  slug: string
  description: string
  icon?: string | null
  episodeCount?: number
}

export interface EpisodeBasic {
  id: string
  title: string
  slug: string
  author: string
  authorOriginal?: string | null
  duration: number
  description: string
  fullContent?: string | null
  mainIdea?: string | null
  targetAudience?: string | null
  whatYouLearn?: string | null
  applyAfter?: string | null
  listenNext?: string | null
  level: string
  coverColor: string
  coverImage: string
  isFeatured: boolean
  isNew: boolean
  listenCount: number
  completeCount: number
  saveCount: number
  categoryId: string
  pathId?: string | null
  pathOrder?: number | null
  category: Category
  tags: Tag[]
  path?: LearningPathMeta | null
  audioUrl?: string
}

export interface LearningPath extends LearningPathMeta {
  episodes: EpisodeBasic[]
}