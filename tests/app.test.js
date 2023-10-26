import Home from "../app/page"
import { prettyDOM, render, screen } from "@testing-library/react"




describe('App', ()=>{
    test('should show input', ()=>{
       const app = render(<Home />)
       expect(app).toBeDefined()

       const input = screen.getByRole('textbox');
       expect(input).toBeDefined();

       const button = screen.getByRole('button')
       expect(button).toBeDefined();
        
    })
})