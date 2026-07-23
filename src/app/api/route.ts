import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ name: 'Namaa Live Simulation', status: 'ok' })
}
