// printMembers.js
import fs from 'fs';

const membersData = fs.readFileSync('./data/Members.json', 'utf8');
const members = JSON.parse(membersData);

function printSection(title, arr) {
  console.log(`\n## ${title}`);
  arr.forEach((m) => {
    console.log(`- ${m.name} — ${m.title}`);
  });
}

function main() {
  printSection("Directors & VPs", members.directorsAndVPs);
  printSection("Engagement Managers", members.engagementManagers);
  printSection("Project Leads", members.projectLeads);
  printSection("Senior Associates", members.seniorAssociates);
  printSection("Associates", members.associates);
  printSection("Advisory", members.advisory);
}

main();
