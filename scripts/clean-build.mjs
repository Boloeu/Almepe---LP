import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();

const dirsToClean = [
  join(projectRoot, '.next'),
  join(projectRoot, 'node_modules', '.cache'),
];

for (const dir of dirsToClean) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`Removed: ${dir}`);
  } else {
    console.log(`Skipped (not found): ${dir}`);
  }
}

console.log('Build cache cleaned successfully.');
