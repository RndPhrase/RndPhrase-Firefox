var self = require('sdk/self');
var panel = require("sdk/panel");
var pageMod = require('sdk/page-mod');
var RndPhrase = require("rndphrase");

var seed = undefined;
var dataUrl = self.data.url;

//This is the stuff dreams are made of. Or at least just RndPhrase
pageMod.PageMod({
    include: "*",
    contentScriptFile: dataUrl("eventhandler.js"),
    contentScriptWhen: "ready",
    onAttach: function(worker) {
        // Ensure the seed has been set
        if(undefined === seed){
            var seedPanel = panel.Panel({
                height: 60,
                width: 300,
                contentURL: dataUrl("prompt-seed.html"),
                contentScriptFile: [dataUrl('prompt-seed.js')]
            });

            seedPanel.show();
            seedPanel.port.emit('show');
            seedPanel.port.on('seed-changed', function(new_seed) {
                seed = new_seed; //needs to go through a hash
                seedPanel.hide();
            });
        }

        // Setup port event-handling
        worker.port.on("generate", function(message) {
            var domain = message.domain;
            var passwordPanel = panel.Panel({
                height: 60,
                contentURL: dataUrl("prompt-password.html"),
                contentScriptFile: [dataUrl('prompt-password.js')]
            });

            passwordPanel.port.on('password-changed', function(message) {
                var r = new RndPhrase({
                        'seed': seed,
                        'uri': domain
                });
                hash = r.generate(message.password);
                worker.port.emit('hash', {
                    'hash': hash
                 });
                passwordPanel.hide();
            });
            passwordPanel.show();
            passwordPanel.port.emit('show');
        });
    }
});
