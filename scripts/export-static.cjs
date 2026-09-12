const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const root = path.resolve(__dirname, '..');
const req = createRequire(path.join(root, 'package.json'));
const esbuild = req('esbuild');
const React = req('react');
const { renderToStaticMarkup } = req('react-dom/server');
const out = root;
fs.mkdirSync(out, { recursive: true });
const compiled = esbuild.transformSync(fs.readFileSync(path.join(root,'app/page.tsx'),'utf8'),{loader:'tsx',format:'cjs',jsx:'automatic'}).code; const loaded={exports:{}}; new Function('require','module','exports',compiled)(req,loaded,loaded.exports);
const Page = loaded.exports.default;
const html = renderToStaticMarkup(React.createElement(Page)).replaceAll('src="/', 'src="./').replaceAll('href="/estefania.webp"', 'href="./estefania.webp"');
function files(dir) { return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]); }
const styles=files(path.join(root,'dist/client')).filter(p=>p.endsWith('.css'));
if(!styles.length) throw new Error('Compiled stylesheet missing');
fs.writeFileSync(path.join(out,'styles.css'),styles.map(p=>fs.readFileSync(p,'utf8')).join('
'));
for(const name of ['estefania.webp','vidafit-logo.png','flujo-tareas.svg','modelo-java.svg','icon.svg'])fs.copyFileSync(path.join(root,'public',name),path.join(out,name));
fs.writeFileSync(path.join(out,'index.html'),'<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Estefania Mancipe Montañez | Full Stack Junior</title><meta name="description" content="Portafolio de Estefania Mancipe: interfaces, lógica con Java y trabajo en equipo."><meta name="robots" content="noindex,nofollow"><link rel="icon" href="./icon.svg"><link rel="stylesheet" href="./styles.css"></head><body>'+html+'</body></html>');
console.log('GitHub Pages: index.html, styles.css y recursos actualizados.');
