export async function getData ()  {
    const res = await fetch("src/assets/data.json")
    const data = await res.json()
    return data
}

