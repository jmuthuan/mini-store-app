import BuyCart from "@/app/Components/BuyCart"
import { render, screen } from "@testing-library/react"
import productTest from '@/src/data/products.json';

describe('should display render component',()=>{
    test('should render cart image and button role/function', ()=>{
        render(<BuyCart />)
        const button = screen.getByRole('button')
        const cart = screen.getAllByRole('application')

        const itemCount = screen.getByText(productTest.products.length)
        expect(itemCount.innerHTML).toBe(productTest.products.length.toString());

        
    })
})