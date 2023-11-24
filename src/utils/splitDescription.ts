export const splitDescription = (description:string) => {
    if (!description) {
        return { part1: '', part2: '' };
    }

    const sentences = description.split(/(?<=[.!?])\s+/);
    const middleIndex = Math.ceil(sentences.length / 2);

    const part1 = sentences.slice(0, middleIndex).join(' ');
    const part2 = sentences.slice(middleIndex).join(' ');

    return { part1, part2 };
}