import React, { useState, useContext, createContext } from 'react';

import { TicketData } from '../types/interfaces';

interface CartData {
     ticketData: TicketData[];
     handleTicketData(data: TicketData): void;
     handleRemove(id: string): void;
     getTotalAmount(): number;
     getTotalProducts(): number;

}

const CartContext = createContext<CartData>({} as CartData)


const CartProvider: React.FC = ({ children }) =>{;
    const [ticketData,setTicketData] = useState<TicketData[]>([])

    function handleTicketData(data: TicketData){
          
          console.log('is running');
          let productExist = false;
            if(ticketData.length !== 0){
                const newdata = ticketData.map(item => {
                    if(item.id === data.id){
                        productExist = true;
                        item.amount++;
                         return item;
                    }
                    return item;
                });
                productExist ? setTicketData(newdata) : setTicketData([...newdata,{...data,amount: Number(data.amount) + 1 }]);
            }else{
                setTicketData([{...data,amount: Number(data.amount) + 1 }]);
            };
    };
    function handleRemove(id: string){
             const newArrayData = ticketData.reduce( (amt: TicketData[] ,item) => {
                 if(item.id === id){
                     item.amount--;
                     return item.amount <= 0 ? amt : [...amt,item];
                 }else {
                      return [...amt,item];
                 }
             },[]);
             setTicketData(newArrayData);
    }

    function getTotalAmount(){
          const result = ticketData.reduce((amt,item) => {
             return amt + (item.amount * Number(item.value.substring(0,3)));
          },0)
          return result
    }
    function getTotalProducts(){
          const result = ticketData.reduce((amt,item) => {
                return amt + item.amount;
          },0)
          return result;
    }

    return (
        <CartContext.Provider value={{ ticketData, handleTicketData, handleRemove, getTotalAmount, getTotalProducts }} >
             {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export function useCart(){
    return useContext(CartContext);
}