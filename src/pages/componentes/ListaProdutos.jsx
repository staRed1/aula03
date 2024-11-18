import { useEffect } from "react";
import Loading from "./Loading";

export default function ListaProdutos({ produtos }) {

    if (
        produtos.length === 0
    ){
        return<Loading/>
    }
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