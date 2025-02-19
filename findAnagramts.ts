

function checkAnagram(str1:string, str2:string): string {

    let isAnagram:boolean = true;
    let str1Length: number = str1.length
    let str2Length: number = str2.length

    if(str1Length !== str2Length) {
        return "Given strings are not anagrams"
    }

    for(let i: number =0; i< str1Length; i++) {

        if(!str2.includes(str1[i])) {
            isAnagram = false
            break;
        }
    }

    if(!isAnagram) {
        return "Given strings are not anagrams";
    } else {
        return "Given strings are anagrams";
    }

}


console.log(checkAnagram('listen', 'silenh'))