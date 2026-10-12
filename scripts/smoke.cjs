// Usage: npm run smoke (after installing the project dependencies).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules','.next'].includes(e.name)) walk(p);
    else if (e.isFile() && /\.(ts|tsx)$/.test(e.name) && !e.name.endsWith('.d.ts')) files.push(p);
  }
}
walk(root);
let imports = 0;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  assert.equal(sf.parseDiagnostics.length, 0, `Syntax errors in ${file}`);
  for (const match of text.matchAll(/from\s+['"](@\/[^'"]+|\.\.?\/[^'"]+)['"]/g)) {
    imports++;
    const imported = match[1];
    const base = imported.startsWith('@/') ? path.join(root, imported.slice(2)) : path.resolve(path.dirname(file), imported);
    assert.ok(['','.ts','.tsx','.js','.jsx','/index.ts','/index.tsx'].some(ext=>fs.existsSync(base+ext)), `Missing local import ${imported} from ${file}`);
  }
}
assert.ok(files.filter(f=>f.endsWith('page.tsx')).length >= 10, 'Expected multi-page website');
assert.ok(fs.readFileSync(path.join(root,'lib/data.ts'),'utf8').includes('new-zealand'), 'Destination data not found');
console.log(`PASS: ${files.length} source files parsed, ${imports} local imports resolved, multipage routes and destination data present.`);
console.log('NOTE: Run npm run build as the final compile/runtime check with internet and dependencies available.');
