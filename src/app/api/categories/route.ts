import { NextResponse } from 'next/server'
import { categories } from '@/data/demo'

export async function GET() {
  return NextResponse.json(categories)
}
