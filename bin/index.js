#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = process.argv[2] || 'gemkit-app';
const templateDir = path.join(__dirname, '..', 'template');

fs.mkdirSync(targetDir, { recursive: true });

function copyDir(src, dest) {

    for (const file of fs.readdirSync(src)) {
        
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyDir(srcPath, destPath);
        } else
            fs.copyFileSync(srcPath, destPath);
    }
}

copyDir(templateDir, path.resolve(targetDir));

console.log(`\n✅ Gemkit app created in: ${targetDir}`);
console.log(`\n👉 cd ${targetDir}`);
console.log(`👉 npm install`);
console.log(`👉 npm run dev\n`);