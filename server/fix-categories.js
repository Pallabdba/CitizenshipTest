const fs = require('fs');

const content = fs.readFileSync('official-questions.ts', 'utf8');

// Replace categoryIds based on sourceReference patterns
let fixed = content;

// Find all questions and fix their categoryIds based on sourceReference
const lines = fixed.split('\n');
const newLines = [];
let currentCategoryId = null;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Detect sourceReference and determine correct category
  if (line.includes('sourceReference:')) {
    if (line.includes('"Part 1')) {
      currentCategoryId = 1;
    } else if (line.includes('"Part 2')) {
      currentCategoryId = 2;
    } else if (line.includes('"Part 3')) {
      currentCategoryId = 3;
    } else if (line.includes('"Part 4')) {
      currentCategoryId = 4;
    }
  }
  
  // Fix categoryId if we know the correct one
  if (line.trim().startsWith('categoryId:') && currentCategoryId !== null) {
    line = line.replace(/categoryId:\s*\d+/, `categoryId: ${currentCategoryId}`);
    currentCategoryId = null; // Reset after fixing
  }
  
  newLines.push(line);
}

fs.writeFileSync('official-questions.ts', newLines.join('\n'));
console.log('Categories fixed!');
