import { useEffect, useState } from "react";

import ListaProdutos from "./componentes/ListaProdutos";
import Loading from "./componentes/Loading";



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

    return(
        <div>
            
        </div>
    );
}