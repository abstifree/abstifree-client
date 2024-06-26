import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../../carrinho/cardCart/CardCart";
import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import cartIcon from "../../../assets/carrinho.png";

function Cart() {
    const navigate = useNavigate();
    const { items, limparCart } = useContext(CartContext);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        setCartItemCount(items.length);
    }, [items]);

    return (
        <div>
            <div className="
                rounded-lg
                bg-blue 
                flex 
                flex-col
                justify-center
                mt-4
                mb-4"
            >

                <div className="flex justify-center">
                    <img src={cartIcon} alt="Cart" className="w-12 h-12 mr-2" />
                    <h1 className="text-3xl font-bold mt-8 my-4 uppercase text-center">
                        Carrinho de Compras ({cartItemCount})
                    </h1>
                </div>
                <h2 className="text-2xl text-center my-4">
                    {items.length === 0 ? 'O Carrinho está vazio!' : ''}
                </h2>
                <div className='container mx-auto my-4 grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-5 gap-4'>
                    {
                        items.map(produto => (
                            <CardCart key={produto.id} item={produto} />
                        ))
                    }
                </div>

                <button className="rounded text-white bg-blue-800 
                    hover:bg-blue-600 w-1/4 py-2 mx-auto flex justify-center"
                    type="submit"
                    disabled={items.length === 0 ? true : false}
                    onClick={limparCart}>
                    Finalizar Compra
                </button>
            </div>
            <div className="fixed bottom-0 w-full">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Cart;