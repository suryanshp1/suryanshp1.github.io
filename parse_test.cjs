const fs = require('fs');
fetch('https://github.com/users/suryanshp1/contributions').then(r=>r.text()).then(html => {
  const totalMatch = html.match(/<h2[^>]*>\s*([\d,]+)\s*contributions/i);
  console.log("Total:", totalMatch ? totalMatch[1] : "not found");
  const days = [];
  const regex = /data-date="([^"]+)"[^>]*data-level="([0-4])"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    days.push({ date: match[1], level: parseInt(match[2]) });
  }
  console.log("Days parsed:", days.length);
  console.log("First day:", days[0]);
  console.log("Last day:", days[days.length-1]);
});
