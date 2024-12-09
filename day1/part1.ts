export async function processData() {
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

    leftArray.sort();
    rightArray.sort();

    let totalDiff = 0;

    leftArray.forEach((num, i) => {
        const diff = Math.abs(num - rightArray[i]);
        totalDiff += diff;
    })

    return totalDiff;
}
