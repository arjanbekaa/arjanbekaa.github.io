const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const home = read('index.htm');
const html = read('game-portfolio.html');
const script = read('js/game-portfolio.js');
const data = vm.runInNewContext(script.split('const projectsGrid')[0] + '\nprojectsData');
assert.equal(data.length, 25);
assert.equal(data.filter(p => p.id <= 20).length, 20);
assert.equal(new Set(data.map(p => p.id)).size, 25);
for (const project of data) {
    assert.equal(new URL(project.link).protocol, 'https:');
    if (project.image) assert.ok(fs.existsSync(path.join(root, project.image)), project.image);
}
assert.equal(data.filter(p => p.category.includes('tools')).length, 3);
for (const file of [home, html, script]) {
    assert.doesNotMatch(file, /Jump\s*Together|Request (?:Full )?CV|cv\.html/i);
}
assert.match(home, /href="game-portfolio.html"/);
assert.match(html, /href="index.htm"/);
assert.match(html, /href="https:\/\/bekaforge.com\/"/);
assert.doesNotMatch(html, /50K|20 published|data-percentage/);
for (const [, asset] of html.matchAll(/(?:src|href)="((?:images|css|js)\/[^"?#]+)"/g)) {
    assert.ok(fs.existsSync(path.join(root, asset)), asset);
}
console.log('25 projects, 20 games, all local assets, navigation, tools filter and privacy checks passed.');
