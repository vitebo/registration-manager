export function replaceByKey<T>(list: T[], key: keyof T, item: T): T[] {
    return list.map(i => {
        if(i[key] === item[key]) {
            return item
        }
        return i
    })
}