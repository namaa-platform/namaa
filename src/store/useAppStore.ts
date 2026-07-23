import { create } from 'zustand'
import type { Category, EpisodeBasic, LearningPath } from '@/types/platform'

export type ViewType = 'home' | 'episode' | 'category' | 'path' | 'search' | 'saved'

interface AppState {
  view: ViewType
  selectedEpisode: EpisodeBasic | null
  selectedCategory: Category | null
  selectedPath: LearningPath | null
  searchQuery: string
  searchResults: EpisodeBasic[]
  isSearchOpen: boolean
  savedEpisodes: string[]
  isPlaying: boolean
  progress: number
  playbackRate: number
  isMuted: boolean

  setView: (view: ViewType) => void
  selectEpisode: (episode: EpisodeBasic) => void
  selectCategory: (category: Category) => void
  selectPath: (path: LearningPath) => void
  setSearchQuery: (query: string) => void
  setSearchResults: (results: EpisodeBasic[]) => void
  setIsSearchOpen: (open: boolean) => void
  setSavedEpisodes: (ids: string[]) => void
  toggleSave: (id: string) => void
  togglePlayback: () => void
  setPlaying: (playing: boolean) => void
  setProgress: (progress: number) => void
  skipPlayback: (seconds: number) => void
  setPlaybackRate: (rate: number) => void
  toggleMute: () => void
  goHome: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  view: 'home',
  selectedEpisode: null,
  selectedCategory: null,
  selectedPath: null,
  searchQuery: '',
  searchResults: [],
  isSearchOpen: false,
  savedEpisodes: [],
  isPlaying: false,
  progress: 0,
  playbackRate: 1,
  isMuted: false,

  setView: (view) => set({ view }),
  selectEpisode: (episode) => {
    const current = get().selectedEpisode
    set({
      selectedEpisode: episode,
      view: 'episode',
      progress: current?.id === episode.id ? get().progress : 0,
      isPlaying: current?.id === episode.id ? get().isPlaying : false,
    })
  },
  selectCategory: (category) => set({ selectedCategory: category, view: 'category' }),
  selectPath: (path) => set({ selectedPath: path, view: 'path' }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSearchResults: (searchResults) => set({ searchResults }),
  setIsSearchOpen: (isSearchOpen) => set({ isSearchOpen }),
  setSavedEpisodes: (savedEpisodes) => set({ savedEpisodes }),
  toggleSave: (id) => set((state) => ({
    savedEpisodes: state.savedEpisodes.includes(id)
      ? state.savedEpisodes.filter((savedId) => savedId !== id)
      : [...state.savedEpisodes, id],
  })),
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlaying: (isPlaying) => set({ isPlaying }),
  setProgress: (progress) => set({ progress: Math.max(0, Math.min(100, progress)) }),
  skipPlayback: (seconds) => {
    const episode = get().selectedEpisode
    if (!episode) return
    const percent = (seconds / (episode.duration * 60)) * 100
    set({ progress: Math.max(0, Math.min(100, get().progress + percent)) })
  },
  setPlaybackRate: (playbackRate) => set({ playbackRate }),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  goHome: () => set({
    view: 'home',
    selectedCategory: null,
    selectedPath: null,
    searchResults: [],
    searchQuery: '',
    isSearchOpen: false,
  }),
}))

export type { EpisodeBasic, Category, LearningPath }
