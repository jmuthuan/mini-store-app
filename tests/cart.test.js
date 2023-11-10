import { default as Cart } from "@/app/cart/page"
import { render, screen } from "@testing-library/react"
import { localStorageTest } from "@/src/data/test-buy-cart"

describe('test Cart component/page', ()=>{
    test('should render Item list from localStorage ', ()=>{
        render(<Cart />)
        
        const items = screen.getAllByRole('application');
        const length = JSON.parse(localStorageTest).length     ;  

        expect(items.length).toBe(length);
    })
})