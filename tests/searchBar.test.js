import SearchBar from "@/app/Components/SearchBar"
import { prettyDOM, render, screen } from "@testing-library/react"




describe('search bar component', ()=>{
    test('should show input', ()=>{
       const app = render(<SearchBar />)
       expect(app).toBeDefined()

       const input = screen.getByRole('textbox');
       expect(input).toBeDefined();

       const button = screen.getByRole('button')
       expect(button).toBeDefined();
        
    })
})