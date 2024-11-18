import { useEffect, useState } from "react";
import ListaProdutos from "./componentes/ListaProdutos";

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const data = await resposta.json();
                setProdutos(data);
            } catch (erro) {
                alert("A conexão com a Lista de Produtos falhou");
            }
        };

        receberListaProdutos();
    }, []);

    if (produtos.length === 0) {
        return <h1>Carregando...</h1>;
    }

    const orderAz = () => {
        const listaAux = [...produtos].sort((a, b) => a.title.localeCompare(b.title));
        setProdutos(listaAux);
    };

    const orderZa = () => {
        const listaAux = [...produtos].sort((a, b) => b.title.localeCompare(a.title));
        setProdutos(listaAux);
    };

    const Menor = () => {
        const listaAux = [...produtos].sort((a, b) => b.price.localeCompare(a.price));
        setProdutos(listaAux);
    };

    return (
        <>
            <h1>Lista de Produtos</h1>
            <button onClick={orderAz}>Ordenar A-Z</button>
            <button onClick={orderZa}>Ordenar Z-A</button>
            <button onClick={Menor}>Ordenar Z-A</button>

            <ListaProdutos produtos={produtos} />
        </>
    );
}
