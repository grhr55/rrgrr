self.onmessage = function(e) {
    const byteArray = e.data;
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'payload.elf';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
};