async function fetchData() {
    try {
        const response = await fetch("data/data.json");
        if (!response.ok) {
            throw new Error(
                `Erro ao carregar o arquivo JSON: ${response.statusText}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON: ", error);
        return null;
    }
}

async function handleSearch(event) {
    event.preventDefault();
    try {
        const data = await fetchData();
        const form = event.target;

        const name = form.elements["name"].value;
        const age = form.elements["age"].value;
        const email = form.elements["email"].value;
        
    } catch (error) {
        console.error("Erro ao pesquisar:", error);
    }
}
