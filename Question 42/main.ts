function show_magicians(magicians: string[]): void{

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}


function make_great(magician: string[]): void{
    for (let i = 0; i < magician.length; i++){
        magician[i] = magician[i]     +  `   the        Great    `
    }
}
const magicians2: string[] = ["Mina","Nida","Omar"];
make_great(magicians2)
show_magicians(magicians2)