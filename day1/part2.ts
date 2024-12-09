export async function findingSimilarity() {
    const data = await Deno.readTextFile("./day1/input.txt");
    const lines = data.split("\n");

    const leftArray: number[] = [];
    const rightArray: number[] = [];

    lines.forEach((line) => {
        const parts = line.split(" ");
        const ln = parseInt(parts[0]);
        const rn = parseInt(parts[parts.length - 1]);

        if (isNaN(ln)) return;
        if (isNaN(rn)) return;

        leftArray.push(ln);
        rightArray.push(rn);
    });

    let total = 0;

    leftArray.forEach((numLeft) => {
        let nbOccurrences = 0;
        rightArray.forEach((num) => {
            if (numLeft === num) nbOccurrences += 1;
        })
        total += numLeft * nbOccurrences;
    });

    return total;
}