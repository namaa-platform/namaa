import { NextResponse } from 'next/server'
import { episodes } from '@/data/demo'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const category = searchParams.get('category')
  const featured = searchParams.get('featured') === 'true'
  const isNew = searchParams.get('new') === 'true'
  const top = searchParams.get('top') === 'true'
  const pathId = searchParams.get('pathId')
  const limit = Number.parseInt(searchParams.get('limit') || '50', 10)

  if (slug) {
    const episode = episodes.find((item) => item.slug === slug)
    return episode
      ? NextResponse.json(episode)
      : NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  let result = [...episodes]
  if (category) result = result.filter((item) => item.categoryId === category)
  if (featured) result = result.filter((item) => item.isFeatured)
  if (isNew) result = result.filter((item) => item.isNew)
  if (pathId) result = result.filter((item) => item.pathId === pathId)
  if (top) result.sort((a, b) => b.listenCount - a.listenCount)

  return NextResponse.json(result.slice(0, Number.isFinite(limit) ? limit : 50))
}
