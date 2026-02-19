import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const projectRoot = '/vercel/share/v0-project';

const dirsToClean = [
  join(projectRoot, '.next'),
  join(projectRoot, 'node_modules', '.cache'),
];

for (const dir of dirsToClean) {
  if (existsSync(dir)) {
    console.log(`Removing: ${dir}`);
    rmSync(dir, { recursive: true, force: true });
    console.log(`Removed: ${dir}`);
  } else {
    console.log(`Not found (skipping): ${dir}`);
  }
}

console.log('Clean complete. Next build will start fresh.');
