'use client'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ElementType } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Brain,
  ChevronDown,
  ChevronUp,
  Clock,
  GraduationCap,
  Headphones,
  Lightbulb,
  ListChecks,
  Megaphone,
  Pause,
  Play,
  Rocket,
  Search,
  SkipBack,
  SkipForward,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { categories, episodes, learningPaths, searchEpisodes } from '@/data/demo'
import { useAppStore, type Category, type EpisodeBasic, type LearningPath } from '@/store/useAppStore'

const iconMap: Record<string, ElementType> = {
  Rocket,
  Megaphone,
  TrendingUp,
  Users,
  Target,
  Brain,
  BookOpen,
  GraduationCap,
}

function formatTime(totalSeconds: number) {
  const safeSeconds = Math.max(0, Math.round(totalSeconds))
  const minutes = Math.floor(safeSeconds / 60)
  const seconds = safeSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function Header() {
  const {
    view,
    isSearchOpen,
    setIsSearchOpen,
    goHome,
    searchQuery,
    setSearchQuery,
    setSearchResults,
    setView,
    savedEpisodes,
  } = useAppStore()
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isSearchOpen) inputRef.current?.focus()
  }, [isSearchOpen])
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    setSearchResults(searchEpisodes(query))
  }, [setSearchQuery, setSearchResults])
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-5 sm:px-7">
        <button type="button" onClick={goHome} className="flex items-center gap-2.5" aria-label="العودة إلى الرئيسية">
          <Image src="/brand/logo-mark.svg" alt="نماء" width={35} height={35} priority />
          <span className="text-[21px] font-extrabold tracking-tight text-foreground">نماء</span>
        </button>
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'min(520px, 65vw)' }}
              exit={{ opacity: 0, width: 0 }}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 overflow-hidden"
            >
              <Input
                ref={inputRef}
                value={searchQuery}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder="ابحث عن حلقة أو مؤلف أو موضوع..."
                className="h-10 rounded-xl bg-background"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsSearchOpen(false)
                  setSearchQuery('')
                  setSearchResults([])
                  setView('home')
                }}
                aria-label="إغلاق البحث"
              >
                <X className="size-4.5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        {!isSearchOpen && (
          <div className="flex items-center gap-0.5">
            {view !== 'home' && (
              <Button type="button" variant="ghost" size="sm" onClick={goHome} className="ml-2 hidden gap-1 text-muted-foreground sm:flex">
                <ArrowRight className="size-4" /> الرئيسية
              </Button>
            )}
            <Button type="button" variant="ghost" size="icon" onClick={() => { setIsSearchOpen(true); setView('search') }} aria-label="البحث">
              <Search className="size-[18px]" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="relative" onClick={() => setView('saved')} aria-label="المحفوظات">
              <Bookmark className="size-[18px]" />
              {savedEpisodes.length > 0 && (
                <span className="absolute left-0 top-0 grid size-4 place-items-center rounded-full bg-accent text-[9px] font-extrabold text-white">
                  {savedEpisodes.length}
                </span>
              )}
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

function episodeTone(episode: EpisodeBasic) {
  const tones = [
    'from-[#102431] to-[#18222C]',
    'from-[#073B4C] to-[#0B2630]',
    'from-[#70358A] to-[#442256]',
    'from-[#1D533D] to-[#0E3527]',
    'from-[#A34310] to-[#7E2E08]',
    'from-[#7A241B] to-[#541711]',
    'from-[#1E5F84] to-[#133D57]',
    'from-[#8C6E00] to-[#665000]',
    'from-[#8C4E14] to-[#62330B]',
  ]
  const number = Number.parseInt(episode.id.replace(/\D/g, '').slice(-3) || '0', 10)
  return tones[number % tones.length]
}

function EpisodeArtwork({ episode, compact = false }: { episode: EpisodeBasic; compact?: boolean }) {
  if (compact) {
    return (
      <div className={`grid size-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${episodeTone(episode)}`}>
        <BookOpen className="size-7 text-white/40" />
      </div>
    )
  }
  return (
    <div className={`relative h-[148px] overflow-hidden bg-gradient-to-br ${episodeTone(episode)}`}>
      <BookOpen className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 text-white/[0.35]" strokeWidth={2.1} />
      <p className="absolute bottom-3 right-4 max-w-[75%] truncate text-[11px] font-medium text-white/70">{episode.author}</p>
    </div>
  )
}

function EpisodeCard({ episode, compact = false, wide = false }: { episode: EpisodeBasic; compact?: boolean; wide?: boolean }) {
  const { selectEpisode, savedEpisodes, toggleSave } = useAppStore()
  const isSaved = savedEpisodes.includes(episode.id)
  return (
    <motion.article
      whileHover={{ y: -2 }}
      className={`relative overflow-hidden rounded-[13px] border border-border bg-card transition-all hover:border-primary/25 hover:shadow-[0_10px_35px_rgba(17,27,54,.07)] ${compact ? 'flex items-center gap-3 p-3' : ''}`}
    >
      <button type="button" onClick={() => selectEpisode(episode)} className={`group block w-full text-right ${compact ? 'flex min-w-0 items-center gap-3 pl-11' : ''}`}>
        <EpisodeArtwork episode={episode} compact={compact} />
        <div className={compact ? 'min-w-0 flex-1' : `${wide ? 'px-4 pb-4 pt-3.5' : 'px-3.5 pb-3.5 pt-3'}`}>
          <h3 className={`font-extrabold leading-[1.55] text-foreground transition-colors group-hover:text-primary ${compact ? 'line-clamp-1 text-sm' : wide ? 'mb-2 line-clamp-2 text-[16px]' : 'mb-2 line-clamp-2 text-[14px]'}`}>
            {episode.title}
          </h3>
          {!compact && <p className={`line-clamp-2 leading-6 text-muted-foreground ${wide ? 'mb-4 text-[13px]' : 'mb-3 text-[12px]'}`}>{episode.description}</p>}
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="size-3" />{episode.duration} د</span>
            <Badge variant="secondary" className="h-5 rounded-full border-0 bg-[#F8F3E8] px-2 text-[9px] font-medium text-[#514833]">{episode.category.name}</Badge>
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => toggleSave(episode.id)}
        className={`absolute grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary ${compact ? 'left-2.5 top-1/2 -translate-y-1/2' : 'bottom-2.5 left-2.5'}`}
        aria-label={isSaved ? `إزالة ${episode.title} من المحفوظات` : `حفظ ${episode.title}`}
      >
        {isSaved ? <BookmarkCheck className="size-4 text-primary" /> : <Bookmark className="size-3.5" />}
      </button>
      {episode.isNew && !compact && <Badge className="absolute right-3 top-3 h-5 rounded-full bg-[#008C67] px-2 text-[9px] font-bold text-white">جديد</Badge>}
    </motion.article>
  )
}

function HeroSection({ episode }: { episode: EpisodeBasic }) {
  const { selectEpisode } = useAppStore()
  return (
    <section className="relative mb-9 overflow-hidden rounded-[26px] bg-[linear-gradient(105deg,#102F2C_0%,#174A45_45%,#2A6A62_100%)] text-white">
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_13%_25%,rgba(200,164,109,.38),transparent_25%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,.11),transparent_28%)]" />
      <div className="relative flex min-h-[315px] items-center justify-end px-7 py-10 sm:px-12 lg:px-14">
        <div className="max-w-[610px] text-right">
          <div className="mb-3 flex items-center justify-start gap-2 text-[12px] font-bold text-[#F0C468]">
            <Sparkles className="size-4" />
            <span>اختيار اليوم</span>
          </div>
          <h1 className="mb-2 text-[28px] font-extrabold leading-[1.55] sm:text-[34px] lg:text-[38px]">{episode.title}</h1>
          <p className="mb-2 text-[14px] font-medium text-white/[0.65]">{episode.author}</p>
          <p className="mb-5 max-w-[590px] text-[13px] leading-7 text-white/[0.62] sm:text-[14px]">{episode.description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button type="button" onClick={() => selectEpisode(episode)} className="h-11 gap-2 rounded-xl bg-white px-5 text-[15px] font-extrabold text-[#10213A] hover:bg-white/90">
              <Play className="size-4 fill-current" /> ابدأ الاستماع
            </Button>
            <span className="flex items-center gap-1.5 text-[12px] text-white/[0.65]"><Clock className="size-3.5" />{episode.duration} دقيقة</span>
            <Badge className="h-5 rounded-full bg-white/[0.15] px-2 text-[10px] font-medium text-white">{episode.category.name}</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ icon: Icon, title }: { icon: ElementType; title: string; eyebrow?: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="grid size-8 place-items-center rounded-[11px] bg-[#FBF3DF]">
        <Icon className="size-4 text-accent" />
      </div>
      <h2 className="text-[20px] font-extrabold leading-none text-foreground">{title}</h2>
    </div>
  )
}

function EpisodeRow({ items, title, icon, columns = 4 }: { items: EpisodeBasic[]; title: string; icon: ElementType; columns?: 4 | 5 }) {
  if (items.length === 0) return null
  const desktopGrid = columns === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'
  const shownItems = columns === 5 ? items.slice(0, 5) : items.slice(0, 4)
  return (
    <section className="mb-11">
      <SectionHeader icon={icon} title={title} />
      <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${desktopGrid}`}>
        {shownItems.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}
      </div>
    </section>
  )
}

function CategoryCard({ category }: { category: Category }) {
  const { selectCategory } = useAppStore()
  const Icon = iconMap[category.icon || 'BookOpen'] || BookOpen
  return (
    <motion.button
      type="button"
      onClick={() => selectCategory(category)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className="group w-full rounded-[14px] border border-border bg-card px-5 py-4 text-right transition-all hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(17,27,54,.05)]"
    >
      <div className="mb-3 grid size-10 place-items-center rounded-[12px] bg-[#FBF3DF]">
        <Icon className="size-5 text-accent" />
      </div>
      <h3 className="mb-1 text-[15px] font-extrabold text-foreground transition-colors group-hover:text-primary">{category.name}</h3>
      <p className="line-clamp-2 min-h-10 text-[11px] leading-5 text-muted-foreground">{category.description}</p>
      <p className="mt-2 text-[10px] font-bold text-accent">{category._count?.episodes ?? 0} حلقة</p>
    </motion.button>
  )
}

function PathCard({ path }: { path: LearningPath }) {
  const { selectPath } = useAppStore()
  const Icon = iconMap[path.icon || 'GraduationCap'] || GraduationCap
  const totalDuration = path.episodes.reduce((total, episode) => total + episode.duration, 0)
  return (
    <motion.button
      type="button"
      onClick={() => selectPath(path)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className="group flex w-full items-start gap-4 rounded-[14px] border border-border bg-card px-5 py-4 text-right transition-all hover:border-primary/25 hover:shadow-[0_10px_30px_rgba(17,27,54,.05)]"
    >
      <div className="grid size-11 shrink-0 place-items-center rounded-[13px] bg-primary/10"><Icon className="size-5 text-primary" /></div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-extrabold text-foreground transition-colors group-hover:text-primary">{path.title}</h3>
        <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-muted-foreground">{path.description}</p>
        <div className="mt-3 flex items-center gap-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><Headphones className="size-3" />{path.episodes.length} حلقات</span>
          <span className="flex items-center gap-1"><Clock className="size-3" />{totalDuration} دقيقة</span>
        </div>
      </div>
    </motion.button>
  )
}

function PlayerControls({ large = false }: { large?: boolean }) {
  const { selectedEpisode, isPlaying, progress, playbackRate, isMuted, togglePlayback, setProgress, skipPlayback, setPlaybackRate, toggleMute } = useAppStore()
  if (!selectedEpisode) return null
  const durationSeconds = selectedEpisode.duration * 60
  const currentSeconds = durationSeconds * (progress / 100)
  return (
    <div className="space-y-4">
      <input
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={progress}
        onChange={(event) => setProgress(Number(event.target.value))}
        className="namaa-range w-full"
        style={{ '--range-progress': `${progress}%` } as CSSProperties}
        aria-label="تقدم الحلقة"
      />
      <div className="flex items-center justify-between text-xs text-muted-foreground"><span>{formatTime(currentSeconds)}</span><span>{selectedEpisode.duration}:00</span></div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button type="button" variant="ghost" size="icon" onClick={() => skipPlayback(-15)} aria-label="رجوع 15 ثانية"><SkipBack className="size-4" /></Button>
        <Button type="button" size="icon" onClick={togglePlayback} className={`${large ? 'size-15' : 'size-12'} rounded-full bg-primary text-primary-foreground hover:bg-primary/90`} aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}>
          {isPlaying ? <Pause className="size-6" /> : <Play className="size-6 fill-current" />}
        </Button>
        <Button type="button" variant="ghost" size="icon" onClick={() => skipPlayback(15)} aria-label="تقديم 15 ثانية"><SkipForward className="size-4" /></Button>
        {large && (
          <>
            <Button type="button" variant="outline" size="sm" onClick={() => setPlaybackRate(playbackRate === 2 ? 0.75 : playbackRate + 0.25)}>{playbackRate}×</Button>
            <Button type="button" variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? 'تشغيل الصوت' : 'كتم الصوت'}>{isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}</Button>
          </>
        )}
      </div>
    </div>
  )
}

function MiniPlayer() {
  const { selectedEpisode, selectEpisode, isPlaying, progress, playbackRate, setProgress, setPlaying, skipPlayback, togglePlayback, isMuted } = useAppStore()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioUrl = (selectedEpisode as any)?.audioUrl as string | undefined

  // Real audio handling
  useEffect(() => {
    if (!audioUrl || !audioRef.current) return
    const audio = audioRef.current
    audio.playbackRate = playbackRate
    audio.muted = isMuted
  }, [audioUrl, playbackRate, isMuted])

  useEffect(() => {
    if (!audioUrl || !audioRef.current) return
    const audio = audioRef.current
    if (isPlaying) {
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying, audioUrl, setPlaying])

  useEffect(() => {
    if (!audioUrl || !audioRef.current) return
    const audio = audioRef.current
    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }
    const onEnded = () => {
      setProgress(100)
      setPlaying(false)
    }
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
    }
  }, [audioUrl, setProgress, setPlaying])

  // Simulation fallback for episodes without audio
  useEffect(() => {
    if (audioUrl || !selectedEpisode || !isPlaying) return
    const timer = window.setInterval(() => {
      const durationSeconds = selectedEpisode.duration * 60
      const simulatedSeconds = 15 * playbackRate
      const next = progress + (simulatedSeconds / durationSeconds) * 100
      if (next >= 100) {
        setProgress(100)
        setPlaying(false)
      } else {
        setProgress(next)
      }
    }, 1000)
    return () => window.clearInterval(timer)
  }, [selectedEpisode, isPlaying, playbackRate, progress, setProgress, setPlaying, audioUrl])

  if (!selectedEpisode) return null

  return (
    <>
      {audioUrl && <audio ref={audioRef} src={audioUrl} preload="metadata" />}
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 shadow-2xl backdrop-blur-xl">
        <div className="h-1 bg-muted"><div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} /></div>
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <button type="button" onClick={() => selectEpisode(selectedEpisode)} className="flex min-w-0 flex-1 items-center gap-3 text-right">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-xl"><Image src={selectedEpisode.coverImage} alt="" fill className="object-cover" unoptimized /></div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{selectedEpisode.title}</p>
              <p className="truncate text-xs text-muted-foreground">
                {audioUrl ? 'صوت حقيقي' : 'محاكاة تشغيل'} • {selectedEpisode.author}
              </p>
            </div>
          </button>
          <div className="flex items-center gap-1.5">
            <Button type="button" variant="ghost" size="icon" onClick={() => skipPlayback(-15)} aria-label="رجوع 15 ثانية"><SkipBack className="size-4" /></Button>
            <Button type="button" size="icon" onClick={togglePlayback} className="size-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}>
              {isPlaying ? <Pause className="size-5" /> : <Play className="size-5 fill-current" />}
            </Button>
            <Button type="button" variant="ghost" size="icon" onClick={() => skipPlayback(15)} aria-label="تقديم 15 ثانية"><SkipForward className="size-4" /></Button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

function EpisodeDetail() {
  const { selectedEpisode, goHome, savedEpisodes, toggleSave } = useAppStore()
  const [showFullDescription, setShowFullDescription] = useState(false)
  if (!selectedEpisode) return null
  const isSaved = savedEpisodes.includes(selectedEpisode.id)
  const hasRealAudio = !!(selectedEpisode as any).audioUrl
  return (
    <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
      <button type="button" onClick={goHome} className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowRight className="size-4" />العودة للرئيسية</button>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-6">
          <div className="grid gap-5 rounded-3xl border border-border/70 bg-card p-5 shadow-sm sm:grid-cols-[220px_1fr]">
            <div className="relative aspect-[7/9] overflow-hidden rounded-2xl"><Image src={selectedEpisode.coverImage} alt={selectedEpisode.title} fill className="object-cover" unoptimized /></div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 flex flex-wrap gap-2"><Badge>{selectedEpisode.category.name}</Badge><Badge variant="outline">{selectedEpisode.level}</Badge><Badge variant="outline">حلقة مسموعة</Badge></div>
              <h1 className="text-2xl font-extrabold leading-[1.45] sm:text-3xl">{selectedEpisode.title}</h1>
              <p className="mt-2 font-semibold text-primary">{selectedEpisode.author}</p>
              <p className={`mt-4 text-sm leading-7 text-muted-foreground ${showFullDescription ? '' : 'line-clamp-3'}`}>{selectedEpisode.description}</p>
              <button type="button" onClick={() => setShowFullDescription((value) => !value)} className="mt-2 flex items-center gap-1 self-start text-sm font-semibold text-accent">
                {showFullDescription ? 'عرض أقل' : 'عرض المزيد'}{showFullDescription ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/15 bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold">مشغل الحلقة</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {hasRealAudio
                    ? 'ملف صوت حقيقي مرتبط بهذه الحلقة.'
                    : 'لا يوجد ملف صوت في هذه النسخة؛ عناصر التحكم تعمل كمحاكاة بصرية.'}
                </p>
              </div>
              <button type="button" onClick={() => toggleSave(selectedEpisode.id)} className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground hover:text-primary" aria-label="حفظ الحلقة">
                {isSaved ? <BookmarkCheck className="size-5 text-primary" /> : <Bookmark className="size-5" />}
              </button>
            </div>
            <PlayerControls large />
          </div>
          <div className="rounded-3xl border border-border/70 bg-card p-6">
            <h2 className="mb-4 text-lg font-extrabold">عن الحلقة</h2>
            <p className="text-sm leading-8 text-muted-foreground">{selectedEpisode.description}</p>
          </div>
        </div>
        <aside className="space-y-4">
          {selectedEpisode.mainIdea && <InfoCard icon={Lightbulb} title="الفكرة الرئيسية" text={selectedEpisode.mainIdea} tone="primary" />}
          {selectedEpisode.targetAudience && <InfoCard icon={Users} title="مناسب لك إذا…" text={selectedEpisode.targetAudience} />}
          {selectedEpisode.whatYouLearn && <InfoCard icon={GraduationCap} title="ستتعلم" text={selectedEpisode.whatYouLearn} />}
          {selectedEpisode.applyAfter && <InfoCard icon={ListChecks} title="طبّق بعد الحلقة" text={selectedEpisode.applyAfter} tone="accent" />}
          {selectedEpisode.listenNext && <InfoCard icon={Headphones} title="استمع بعده إلى…" text={selectedEpisode.listenNext} />}
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h3 className="mb-3 text-sm font-bold">وسوم الحلقة</h3>
            <div className="flex flex-wrap gap-2">{selectedEpisode.tags.map((tag) => <Badge key={tag.id} variant="secondary">{tag.name}</Badge>)}</div>
          </div>
        </aside>
      </div>
    </motion.div>
  )
}

function InfoCard({ icon: Icon, title, text, tone = 'neutral' }: { icon: ElementType; title: string; text: string; tone?: 'neutral' | 'primary' | 'accent' }) {
  const toneClass = tone === 'primary' ? 'border-primary/20 bg-primary/5' : tone === 'accent' ? 'border-accent/25 bg-accent/5' : 'border-border/70 bg-card'
  const iconClass = tone === 'accent' ? 'text-accent' : 'text-primary'
  return (
    <div className={`rounded-2xl border p-5 ${toneClass}`}>
      <div className="mb-3 flex items-center gap-2"><Icon className={`size-5 ${iconClass}`} /><h3 className="text-sm font-bold">{title}</h3></div>
      <p className="text-sm leading-7 text-muted-foreground">{text}</p>
    </div>
  )
}

function CategoryView() {
  const { selectedCategory, goHome } = useAppStore()
  if (!selectedCategory) return null
  const Icon = iconMap[selectedCategory.icon || 'BookOpen'] || BookOpen
  const categoryEpisodes = episodes.filter((episode) => episode.categoryId === selectedCategory.id)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <button type="button" onClick={goHome} className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground"><ArrowRight className="size-4" />العودة للرئيسية</button>
      <div className="mb-8 flex items-center gap-4 rounded-3xl bg-primary/5 p-6">
        <div className="grid size-15 place-items-center rounded-2xl bg-primary/10"><Icon className="size-7 text-primary" /></div>
        <div><h1 className="text-2xl font-extrabold">{selectedCategory.name}</h1><p className="mt-1 text-sm text-muted-foreground">{selectedCategory.description}</p></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categoryEpisodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}</div>
    </motion.div>
  )
}

function PathView() {
  const { selectedPath, selectEpisode, goHome } = useAppStore()
  if (!selectedPath) return null
  const Icon = iconMap[selectedPath.icon || 'GraduationCap'] || GraduationCap
  const totalDuration = selectedPath.episodes.reduce((total, episode) => total + episode.duration, 0)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <button type="button" onClick={goHome} className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground"><ArrowRight className="size-4" />العودة للرئيسية</button>
      <div className="mb-8 rounded-3xl bg-hero p-7 text-white sm:p-10">
        <div className="flex items-start gap-4"><div className="grid size-15 shrink-0 place-items-center rounded-2xl bg-white/10"><Icon className="size-7 text-accent" /></div><div><h1 className="text-2xl font-extrabold">{selectedPath.title}</h1><p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">{selectedPath.description}</p><div className="mt-4 flex gap-4 text-xs text-white/60"><span>{selectedPath.episodes.length} حلقات</span><span>{totalDuration} دقيقة</span></div></div></div>
      </div>
      <div className="space-y-3">
        {selectedPath.episodes.map((episode, index) => (
          <button type="button" key={episode.id} onClick={() => selectEpisode(episode)} className="group flex w-full items-center gap-4 rounded-2xl border border-border/70 bg-card p-4 text-right transition-all hover:border-primary/30 hover:shadow-md">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-extrabold text-primary">{index + 1}</div>
            <div className="min-w-0 flex-1"><h3 className="truncate font-bold transition-colors group-hover:text-primary">{episode.title}</h3><p className="mt-1 text-xs text-muted-foreground">{episode.author} • {episode.duration} دقيقة</p></div>
            <Play className="size-4 text-muted-foreground group-hover:text-primary" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

function SearchView() {
  const { searchQuery, searchResults, isSearchOpen } = useAppStore()
  if (!isSearchOpen) return null
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="py-6">
      {searchQuery.trim().length < 2 ? (
        <EmptyState icon={Search} title="ابحث في مكتبة نماء" text="اكتب اسم كتاب، مؤلف، مهارة، أو مشكلة تريد حلها." />
      ) : searchResults.length === 0 ? (
        <EmptyState icon={Search} title="لا توجد نتائج" text="جرّب كلمة أو موضوعًا مختلفًا." />
      ) : (
        <><p className="mb-5 text-sm text-muted-foreground">{searchResults.length} نتيجة لـ «{searchQuery}»</p><div className="space-y-3">{searchResults.map((episode) => <EpisodeCard key={episode.id} episode={episode} compact />)}</div></>
      )}
    </motion.div>
  )
}

function SavedView() {
  const { savedEpisodes } = useAppStore()
  const saved = episodes.filter((episode) => savedEpisodes.includes(episode.id))
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SectionHeader icon={BookmarkCheck} title="زاويتي" eyebrow="المحفوظات التجريبية" />
      {saved.length === 0 ? <EmptyState icon={Bookmark} title="لا توجد حلقات محفوظة" text="استخدم علامة الحفظ على أي حلقة لتظهر هنا. تُحفظ اختياراتك محليًا في هذا المتصفح." /> : <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{saved.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}</div>}
    </motion.div>
  )
}

function EmptyState({ icon: Icon, title, text }: { icon: ElementType; title: string; text: string }) {
  return <div className="rounded-3xl border border-dashed border-border bg-card/60 py-20 text-center"><Icon className="mx-auto mb-4 size-12 text-muted-foreground/30" /><p className="text-lg font-bold">{title}</p><p className="mx-auto mt-2 max-w-md text-sm leading-7 text-muted-foreground">{text}</p></div>
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="mx-auto max-w-[1040px] px-5 py-10 sm:px-7">
        <div className="grid gap-8 text-right sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5"><Image src="/brand/logo-mark.svg" alt="نماء" width={34} height={34} /><span className="text-xl font-extrabold">نماء</span></div>
            <p className="text-[12px] leading-6 text-muted-foreground">منصة الحلقات المعرفية العربية التي تحوّل أفكار الكتب إلى تجربة سهلة وعملية.</p>
          </div>
          <div><h3 className="mb-3 text-[13px] font-extrabold">التصنيفات</h3><ul className="space-y-2 text-[11px] text-muted-foreground"><li>ريادة أعمال</li><li>تسويق ومبيعات</li><li>اقتصاد ومال</li><li>إدارة وقيادة</li></ul></div>
          <div><h3 className="mb-3 text-[13px] font-extrabold">مسارات تعلم</h3><ul className="space-y-2 text-[11px] text-muted-foreground"><li>إطلاق مشروعك</li><li>التسويق الاحترافي</li><li>فهم الاقتصاد</li></ul></div>
          <div><h3 className="mb-3 text-[13px] font-extrabold">عن المنصة</h3><ul className="space-y-2 text-[11px] text-muted-foreground"><li>من نحن</li><li>سياسة الخصوصية</li><li>تواصل معنا</li><li>Namaa Originals</li></ul></div>
        </div>
      </div>
    </footer>
  )
}

function HomeView() {
  const featured = episodes.filter((episode) => episode.isFeatured)
  const newEpisodes = episodes.filter((episode) => episode.isNew)
  const topEpisodes = [...episodes].sort((a, b) => b.listenCount - a.listenCount)
  return (
    <>
      {featured[0] && <HeroSection episode={featured[0]} />}
      <section className="mb-11">
        <SectionHeader icon={BookOpen} title="تصفح التصنيفات" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <CategoryCard key={category.id} category={category} />)}</div>
      </section>
      <EpisodeRow items={newEpisodes} title="جديد هذا الأسبوع" icon={Sparkles} columns={4} />
      <EpisodeRow items={topEpisodes} title="الأكثر استماعًا" icon={TrendingUp} columns={5} />
      <section id="paths" className="scroll-mt-24 mb-11">
        <SectionHeader icon={GraduationCap} title="مسارات تعلم" />
        <div className="grid gap-3 lg:grid-cols-3">{learningPaths.map((path) => <PathCard key={path.id} path={path} />)}</div>
      </section>
      <section id="discover" className="scroll-mt-24 mb-12">
        <SectionHeader icon={Headphones} title="جميع الحلقات" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{episodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} wide />)}</div>
      </section>
    </>
  )
}

export default function PlatformPage() {
  const { view, savedEpisodes, setSavedEpisodes, selectedEpisode } = useAppStore()
  const hydrated = useRef(false)
  useEffect(() => {
    const stored = window.localStorage.getItem('namaa-demo-saved')
    if (stored) {
      try { setSavedEpisodes(JSON.parse(stored) as string[]) } catch { setSavedEpisodes([]) }
    }
    hydrated.current = true
  }, [setSavedEpisodes])
  useEffect(() => {
    if (hydrated.current) window.localStorage.setItem('namaa-demo-saved', JSON.stringify(savedEpisodes))
  }, [savedEpisodes])
  const content = useMemo(() => {
    if (view === 'episode') return <EpisodeDetail key="episode" />
    if (view === 'category') return <CategoryView key="category" />
    if (view === 'path') return <PathView key="path" />
    if (view === 'search') return <SearchView key="search" />
    if (view === 'saved') return <SavedView key="saved" />
    return <HomeView key="home" />
  }, [view])
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto w-full max-w-[1080px] px-5 py-7 sm:px-7 sm:py-7">
        <AnimatePresence mode="wait">{content}</AnimatePresence>
      </main>
      <Footer />
      <MiniPlayer />
      {selectedEpisode && <div className="h-20" />}
    </div>
  )
}