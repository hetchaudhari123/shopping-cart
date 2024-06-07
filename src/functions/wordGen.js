export default function wordGen(desc){
    // let desc = prop.description;
    desc = desc.trim();
    // Use regular expression to split the string into words
    const words = desc.split(" ");
  
    // Select the first 40 words or all if the string has less than 40 words
    const selectedWords = words.slice(0, 20);
    
    // Join the selected words back into a string
    const resultedString = selectedWords.join(' ') + "...";
    return resultedString;
}