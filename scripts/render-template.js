import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function renderTemplate(filename, context) {
    const filepath = path.resolve(__dirname, '..', '.template', filename);
    const src = fs.readFileSync(filepath).toString();
    const render = Handlebars.compile(src);

    return render(context);
}
