function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === '' || email === '' || password === '') {
        alert('Semua field harus diisi!');
        return false; // Mencegah form di-submit
    }
    
    alert('Form berhasil di-submit!');
    return true; // Mengizinkan form untuk di-submit jika semua field diisi
}
