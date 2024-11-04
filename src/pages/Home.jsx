import { useEffect, useState } from "react";

export default function Home() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try{
                const resposta = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProdutos(data);    
            } catch (erro) {
                alert("A conecxão com a Lista de Produtos falhou");
            }
        }

        receberListaProdutos();
    }, []);

    return (
        <>
        <h1>Lista Produtos</h1>
        <ul>
            {produto.map(produto => (
                <li key={produto.id}>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p>Preço: R${produto.price}</p>
                <img src={produto.image} alt={produto.title} width={100}/>
            </li>
            ))}  
            </ul>
        </>
    );
}