// deze code is onleesbaar gemaakt met https://obfuscator.io

var _0x8c233=function(){var _0xca27d9=!![];return function(_0x3b54c2,_0x23799e){var _0x240db6=_0xca27d9?function(){if(_0x23799e){var _0x11de22=_0x23799e['apply'](_0x3b54c2,arguments);_0x23799e=null;return _0x11de22;}}:function(){};_0xca27d9=![];return _0x240db6;};}();var _0x328583=_0x8c233(this,function(){var _0x35e4c6=function(){return'\x64\x65\x76';},_0x3bb9b7=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x18291d=function(){var _0x4ee4e4=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x4ee4e4['\x74\x65\x73\x74'](_0x35e4c6['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x492bd6=function(){var _0x26278f=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x26278f['\x74\x65\x73\x74'](_0x3bb9b7['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x54d6cc=function(_0x32d50e){var _0xd51110=~-0x1>>0x1+0xff%0x0;if(_0x32d50e['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0xd51110)){_0x53e5ba(_0x32d50e);}};var _0x53e5ba=function(_0xc6e841){var _0x43d622=~-0x4>>0x1+0xff%0x0;if(_0xc6e841['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x43d622){_0x54d6cc(_0xc6e841);}};if(!_0x18291d()){if(!_0x492bd6()){_0x54d6cc('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x54d6cc('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x54d6cc('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x328583();var aantal=0x5;var Nbloemen=0x6;function setup(){var _0x239c58=createCanvas(0x3e8,0xc8);_0x239c58['\x70\x61\x72\x65\x6e\x74']('\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67');frameRate(0xa);colorMode(RGB,0xff,0xff,0xff,0x1);angleMode(DEGREES);rectMode(CENTER);noStroke();}function draw(){background('\x6c\x61\x76\x65\x6e\x64\x65\x72');fill('\x62\x6c\x61\x63\x6b');text('\x61\x61\x6e\x74\x61\x6c\x20\x3d\x20'+aantal,0xa,0x14);translate(width/(0x2*Nbloemen),0x64);for(b=0x0;b<Nbloemen;b++){tekenBloem(0.4);translate(width/Nbloemen,0x0);}if(keyIsDown(LEFT_ARROW)&&aantal>=0x2){aantal--;}if(keyIsDown(RIGHT_ARROW)){aantal++;}}function tekenBloem(_0x312b72){push();scale(_0x312b72);fill(0xb2,0x22,0x22,0.7);for(n=0x0;n<aantal;n++){ellipse(0x0,0x0,0x190,0x32);rotate(0x168/aantal);}fill(0xff,0xc3,0x0,0.5);for(n=0x0;n<aantal;n++){rect(0x0,0x0,0x4b,0x4b);rotate(0x168/aantal);}pop();}