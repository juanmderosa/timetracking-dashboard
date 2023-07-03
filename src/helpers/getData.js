export async function getData ()  {
    const res = await fetch("./src/data.json")
    const data = await res.json()
    return data
}

