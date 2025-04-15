import fs from 'fs/promises';
import path from 'path';
import { json } from '@sveltejs/kit';

const DATA_PATH = path.resolve('src/lib/calander/data.json');

export async function GET() {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    const data = JSON.parse(raw);
    return json(data);
}

export async function POST({ request }) {
    const body = await request.json();
    await fs.writeFile(DATA_PATH, JSON.stringify(body, null, 2));
}

