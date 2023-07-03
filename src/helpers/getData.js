export async function getData ()  {
    const res = await fetch("data.json")
    const data = await res.json()
    return data
}

