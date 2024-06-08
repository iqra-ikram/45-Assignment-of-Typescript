function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + '   the   Great');
    }
    return greatMagicians;
}
var magicians3 = ["Mina", "Nida", "Omar"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
