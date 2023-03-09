// string separation 
// MAJOR MINOR PATCH BUILD COMPILATION


// if version 1 is less than version 2  RETURN -1
// if Version 1 = Version 2 RETURN 0
// if version 1 > version 2 RETURN 1


// compare the values of the two arrays after they are split from their strings

function VersionCompare(version1, version2) {
    //Insert your code here 

    // turn the strings into arrays
    let firstVersion = version1.split('.');
    console.log('First Version is:', firstVersion);
    let secondVersion = version2.split('.');
    console.log('Second Version is:', secondVersion);
    console.log('First Version @ 0:', Number(firstVersion[0]));
    console.log('Second Version @ 0:', Number(secondVersion[0]));

    // example array = [Major, Minor, Patch, Build, Compilation]

    for (let i = 0; i < firstVersion.length; i++) {
        if (Number(i) === Number(secondVersion[i])) {
            for (let j = i + 1; j < firstVersion.length; j++) {
                if (Number(j) > Number(secondVersion[j])) {
                    return 1
                }
                else if (Number(j) < Number(secondVersion[j])) {
                    return -1
                } else {
                    return 0
                }
            }

        }
        else if (Number(firstVersion[i]) > Number(secondVersion[i])) {
            return 1
        } else if (Number(firstVersion[i]) < Number(secondVersion[i])) {
            return -1
        }
    }
}

console.log(VersionCompare('2.1.0', '2.0.1'))