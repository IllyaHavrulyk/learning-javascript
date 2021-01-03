function checkSpam(str) {
    let temp = str.toLowerCase();
    if (temp.includes("viagra") || temp.includes("xxx")) {
        return true;
    }
    return false;
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));