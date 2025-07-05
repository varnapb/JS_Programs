function mostFrequentItem(arr) {
    if (arr.length === 0) {
        return null;
    }

    const frequencyMap = {};

 
    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    let maxCount = 0;
    let mostFrequentItem = null;

    for (const [item, count] of Object.entries(frequencyMap)) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;
}


const items = [3, 5, 3, 2, 5, 5, 1];
const result = mostFrequentItem(items);
console.log(`Most frequent item: ${result}`);
