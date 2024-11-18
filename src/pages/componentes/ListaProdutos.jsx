import { useEffect } from "react";
import Loading from "./Loading";

export default function ListaProdutos({ produtos }) {

    if (!Array.isArray(produtos) || produtos.length === 0) {
        return <Loading />;
    }

    return (
        <>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <p>Preço: R${produto.price.toFixed(2)}</p>
                        <img src={produto.image} alt={produto.title} width={100} />
                    </li>
                ))}
            </ul>
        </>
    );
}