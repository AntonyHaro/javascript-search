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
    //função para filtrar os itens da pesquisa
    const results = users.filter((user) => {
        const matchName = name
            ? user.nome.toLowerCase().startsWith(name.toLowerCase())
            : true;
        const matchAge = age ? user.idade === age : true;
        const matchEmail = email
            ? user.email.toLowerCase().startsWith(email.toLowerCase())
            : true;

        return matchName && matchAge && matchEmail;
    });

    showResults(results);
}

function showResults(results) {
    //função para renderizar os resultados

    const renderSpace = document.getElementById("render-space");
    renderSpace.innerHTML = "";

    const createElement = (tag, className, text) => {
        const element = document.createElement(tag);
        className ? (element.className = className) : null;
        element.textContent = text;
        return element;
    };

    if (results.length === 0) {
        const noResultsMessage = createElement(
            "p",
            "no-results",
            "Nenhum resultado"
        );
        renderSpace.appendChild(noResultsMessage);
        return;
    }

    results.forEach((user) => {
        const userInfo = createElement("div", "user-info");

        const userName = createElement("p", "", `Nome: ${user.nome}`);
        const userAge = createElement("p", "", `Idade: ${user.idade}`);
        const userEmail = createElement("p", "", `Email: ${user.email}`);

        userInfo.append(userName, userAge, userEmail);
        renderSpace.appendChild(userInfo);
    });
}
