function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + "   the        Great    ";
    }
}
var magicians2 = ["Mina", "Nida", "Omar"];
make_great(magicians2);
show_magicians(magicians2);
