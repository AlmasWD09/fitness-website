"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state
    const router = useRouter();

    // Load cart data from localStorage 
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    // Add item to cart
    const addToCart = (item) => {
        setLoading(true); 

        // Add current date to the item
        const itemWithDate = {
            ...item,
            addedAt: new Date().toISOString(), 
        };

        const updatedCart = [...cartItems, itemWithDate];
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        
        setTimeout(() => {
            router.push('/cart');
            setLoading(false); 
        }, 1000); 
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, loading }}>
            {children}
        </CartContext.Provider>
    );
};