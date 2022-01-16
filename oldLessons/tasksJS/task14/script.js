let arr= ["davlat","olma","xalq","dasturchi","dasturlash","google","boolean"]

function appleFinder(param) {
    let a = true;
    let i = 0;

    while (a) {
        if (arr[i] === param) {
            console.log(param + " bor")
            a = false;
            return param;
        } else {
            if ((i + 1) === arr.length) {
                console.log(param + " yoq");
                return i;
            } else {
                i++
            }
        }
    }
}

appleFinder("xulq")
