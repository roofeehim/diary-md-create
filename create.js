const fs = require('fs');
const path = require('path');

function createDateSequence(startDateStr, endDateStr) {
  const dateSequence = [];
  let currentDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  while (currentDate <= endDate) {
    dateSequence.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateSequence;
}

function formatDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}月${day}日`;
}

function createEmptyMarkdownFiles(dateSequence) {
  dateSequence.forEach((date) => {
    const formattedDate = formatDate(date);
    const filePath = path.join(
      '/filePath/',
      `${formattedDate}.md`
    );

    fs.writeFileSync(filePath, '');
  });
}

const dateSequence = createDateSequence('YYYY-MM-DD', 'YYYY-MM-DD');
createEmptyMarkdownFiles(dateSequence);

console.log('Markdown files have been created.');
