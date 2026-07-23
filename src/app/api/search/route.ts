import { NextResponse } from 'next/server'
import { searchEpisodes } from '@/data/demo'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  return NextResponse.json(searchEpisodes(searchParams.get('q') || ''))
}
