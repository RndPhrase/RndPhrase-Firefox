var inptSeed = document.getElementById('rnd-seed')
inptSeed.addEventListener('change', function(event){
    self.port.emit('seed-changed', inptSeed.value);
});

self.port.on('show', function() {
    inptSeed.focus();
});
