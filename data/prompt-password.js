var inpt = document.getElementById('rnd-password')
inpt.addEventListener('change', function(event){
    self.port.emit('password-changed', {
        'password': this.value
    });
});

self.port.on('show', function() {
    inpt.focus();
});
