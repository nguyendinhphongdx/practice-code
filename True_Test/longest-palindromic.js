
function printSubStr(str,low,high)
{
    for (let i = low; i <= high; ++i)
        console.log(str[i]);
}

function longestPalSubstr(str)
{
    let n = str.length;
    let maxLength = 1, start = 0;
  
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let flag = 1;
  
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;
  
            if (flag!=0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
  
    printSubStr(str, start, start + maxLength - 1);

    return maxLength;
}
 
let str = "forgeeksskeegfor";
console.log("Length is: "
         + longestPalSubstr(str));
 