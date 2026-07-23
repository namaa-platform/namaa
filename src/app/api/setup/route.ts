import { NextResponse } from 'next/server'
import { categories, episodes, learningPaths, tags } from '@/data/demo'

export async function GET() {
  return NextResponse.json({
    mode: 'live-simulation',
    message: 'هذه النسخة لا تحتاج إلى قاعدة بيانات أو عملية تهيئة.',
    categories: categories.length,
    tags: tags.length,
    episodes: episodes.length,
    paths: learningPaths.length,
  })
}

export async function POST() {
  return GET()
}
