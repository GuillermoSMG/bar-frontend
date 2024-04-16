export async function getData() {
    const data = await fetch("../mocks/bebidas.json").then(res=> res.json())
    return data
}