function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
   
   
   
   function make_great2(magicians: string[]):  string[] {
    const greatMagicians: string[] = [];
    for(let i = 0; i < magicians.length; i++){
        greatMagicians.push(magicians[i]+ '   the   Great');
    }
    return greatMagicians;
}
const magicians3: string[] = ["Mina", "Nida", "Omar"];


const greatMagicians2: string[] = make_great2 (magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);




