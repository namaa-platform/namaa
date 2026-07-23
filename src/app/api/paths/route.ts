import { NextResponse } from 'next/server'
import { learningPaths } from '@/data/demo'

export async function GET() {
  return NextResponse.json(learningPaths)
}
