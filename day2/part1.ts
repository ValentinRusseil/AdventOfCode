export default async function part1() {
    const data = await Deno.readTextFile("./day2/input.txt");
    const lines = data.split("\n");

    let totalSafe = 0;

    lines.forEach((line) => {
        const parts = line.split(" ");
        
        let isSafe = true;
        const isIncrease = parseInt(parts[0]) < parseInt(parts[1]);

        parts.forEach((part, index) => {
            if (parts[index+1] !== undefined) {
                const result = parseInt(part) < parseInt(parts[index+1]);
                
                if (result === isIncrease) {
                    if (isIncrease) {
                        const add = parseInt(parts[index+1]) - parseInt(part);
                        if (!(add >= 1 && add <=3)) isSafe = false;
                    } else {
                        const sub = parseInt(part) - parseInt(parts[index+1]);
                        if (!(sub >=1 && sub <= 2)) isSafe = false;
                    }
                } else {
                    isSafe = false;
                }
            } else {
                if (isSafe) {
                    totalSafe += 1;
                }
            }
        })
    });

    return totalSafe;
}