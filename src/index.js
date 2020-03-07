module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let open = [];
    let close =[];

    for(let i=0; i<bracketsConfig.length; i++) {
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }

    for(let i=0; i<str.length; i++) {
        if(open.includes(str[i]) & close.includes(str[i])) {
            if(stack[stack.length-1]!=str[i]) {
                stack.push(str[i]);
            }
            else {
                if(stack[stack.length-1]==str[i]) {
                    stack.splice(stack.length-1, 1);
                }
            }
            continue;
        }

        if(open.indexOf(str[i])>-1 ) {                     // open bracket
            stack.push(str[i]);
        }
        else {                                          // closed bracket
            if(open.indexOf(stack[stack.length-1])>-1 & 
            open.indexOf(stack[stack.length-1])==close.indexOf(str[i])) {
                stack.splice(stack.length-1, 1);
            }
            else {
                return false;
            }
        }
    }
     if(stack.length>0) {
         return false;
     }

    return true;
}
