/**
 INPUT : string , length
 OUTPUT : string (modified)

 IF length of string > length
    MODIFY
 ELSE 
    RETURN original str
 */


function truncate(str,length) {

    if (str.length > length) {
        let modifyString = str.slice(0, length - 1) + "..."
        // HelloMyFriend.slice(0,4)
        return modifyString
    } else {
        return str
    }
}

console.log(truncate("HelloMyFriend",8))