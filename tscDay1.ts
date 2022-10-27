let value: string
function random(a: string,b: number, c:number): string {
    value = a.slice(c,b)
    console.log(value)
    return value
}

random('Learning Typescript is different than Javascript',19,9)