const output = document.getElementById('output');
const input = document.getElementById('commandInput');

const commands = {
  help: `
Available commands:
  - cat about.md      Show info about me
  - cat skills.md     Display my skills
  - cat projects.md   List my projects
  - cat contact.md    Contact information
  - clear             Clear the terminal
  `,
  "cat about.md": `
Hi, I'm Belal
A dedicated CyberSecurity guy. I love developing CLI Tools and over skilled at Web PenTesting,
but it isn't my only skill.
  `,
  "cat skills.md": `
Skills:
-  CLI Tools Developer
-  Web Penetration Testing
-  Frontend Web Developer
-  Networking
-  Proffessional at Linux
  `,
  "cat projects.md": `
Projects:
-  PhishDetect (detects if the URL is suspecious)
-  LockBox (CLI Tool for passwords management)
-  Local Brand Website
-  CLI Tool for automaing CyberSecurity matters
-  and more Wesbites for other matters  `,
  "cat contact.md": `
Contact:
- Email: bm5428794@gmail.com
- GitHub: @belalmostafaaa
- Linkden: linkedin.com/in/belalmostafa37779a243 
  `
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    output.innerHTML += `<span class="prompt">guest@gamefolio:~$</span> ${command}\n`;

    if (command === 'clear') {
      output.innerHTML = '';
    } else if (commands[command]) {
      output.innerHTML += `${commands[command]}\n`;
    } else {
      output.innerHTML += `Command not found: ${command}\nType 'help' to see available commands.\n`;
    }

    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});
