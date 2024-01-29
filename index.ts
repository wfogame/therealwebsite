import { serve } from 'https://deno.land/std/http/server.ts';
import { join } from 'https://deno.land/std/path/mod.ts';

const server = serve({ port: 3000 });
const __dirname = new URL('.', import.meta.url).pathname;

console.log(`Selenite is running on port 3000`);

for await (const req of server) {
  let filePath = '';

  switch (req.url) {
    case '/projects':
      filePath = 'projects.html';
      break;
    case '/bookmarklets':
      filePath = 'bookmarklets.html';
      break;
    case '/settings':
      filePath = 'settings.html';
      break;
    case '/support':
      filePath = 'support.html';
      break;
    case '/about':
      filePath = 'about.html';
      break;
    case '/transfer':
      filePath = 'transfer.html';
      break;
    case '/suggest':
      filePath = 'suggest.html';
      break;
    case '/contact':
      filePath = 'contact.html';
      break;
    case '/ad':
      filePath = 'ad.html';
      break;
    default:
      filePath = 'index.html';
      break;
  }

  try {
    const file = await Deno.readFile(join(__dirname, filePath));
    const body = new TextDecoder().decode(file);
    const contentType = getFileContentType(filePath);
    req.respond({ body, headers: new Headers({ 'Content-Type': contentType }) });
  } catch (error) {
    req.respond({ status: 500, body: 'Internal Server Error' });
  }
}

function getFileContentType(filePath: string): string {
  const extension = filePath.split('.').pop();
  switch (extension) {
    case 'html':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'js':
      return 'application/javascript';
    // Add more cases as needed
    default:
      return 'text/plain';
  }
}
