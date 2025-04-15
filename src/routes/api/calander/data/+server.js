import { readFile, writeFile } from 'fs/promises';
import path from 'path';

// Resolve the JSON file path
const dataFilePath = path.join(process.cwd(), 'src/lib/calendar/data.json');

// GET: Read the JSON file and send its contents
export async function GET() {
	try {
		const jsonData = await readFile(dataFilePath, 'utf-8');
		return new Response(jsonData, {
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error('Error reading JSON file:', error);
		// Fall back to an empty array if error occurs
		return new Response('[]', {
			headers: { "Content-Type": "application/json" }
		});
	}
}

// POST: Save incoming data to the JSON file
export async function POST({ request }) {
	try {
		const newData = await request.json();
		await writeFile(dataFilePath, JSON.stringify(newData, null, 2), 'utf-8');
		return new Response(JSON.stringify({ status: "success" }), {
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error('Error writing JSON file:', error);
		return new Response(JSON.stringify({ status: "error", message: error.message }), {
			headers: { "Content-Type": "application/json" },
			status: 500
		});
	}
}
