async function fetchData() {
    //função que lê e retorna os dados de um json
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
    //função para lidar com a pesquisa, define variaveis do form para serem pesquisadas
    event.preventDefault();
    try {
        const data = await fetchData();
        const form = event.target;

        const name = form.elements["name"].value.toLowerCase();
        const age = Number(form.elements["age"].value);
        const email = form.elements["email"].value.toLowerCase();

        //chama a função que faz a filtração dos campos pesquisados
        searchItems(data.users, name, age, email);
    } catch (error) {
        console.error("Erro ao pesquisar:", error);
    }
}

function searchItems(users, name, age, email) {
    //função para definir o padrão a ser testado
    const setStringPattern = (string) => {
        return new RegExp(`^${string}`, "i");
    };

    //definindo as variaveis que serão testadas
    const namePattern = name ? setStringPattern(name) : null;
    const emailPattern = email ? setStringPattern(email) : null;

    //filtração dos dados para a variavel results
    const results = users.filter((user) => {
        const userName = user.nome.toLowerCase();
        const userEmail = user.email.toLowerCase();

        return (
            (!namePattern || namePattern.test(userName)) &&
            (!age || user.idade === age) &&
            (!emailPattern || emailPattern.test(userEmail))
        );
    });

    console.log(results);
}
