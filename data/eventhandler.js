var fields = document.getElementsByTagName('input');
var port = self.port;
for (var i in fields) {
    var field = fields[i];
    if('password' === field.type){
        field.addEventListener('keypress', function(evt) {
            var target = this;
            key = evt.which;

            //Don't act on del and backspace
            if (8 == key || 46 == key) return false;

            if ('#' == String.fromCharCode(key)) {
                port.on('hash', function(message) {
                    target.value = message.hash
                });
                port.emit('generate', {
                    'domain': window.location.hostname
                });
            }
        });
    }
}
