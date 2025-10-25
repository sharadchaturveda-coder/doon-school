import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file || file !== 'prospectus.pdf') {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  try {
    const filePath = join(process.cwd(), 'public', 'assets', 'prospectus.pdf');
    const fileBuffer = readFileSync(filePath);

    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="prospectus.pdf"');
    headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
