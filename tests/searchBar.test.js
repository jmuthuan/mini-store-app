import SearchBar from "@/app/Components/SearchBar"
import { prettyDOM, render, screen } from "@testing-library/react"

jest.mock('next/navigation', () => ({
    useRouter() {
      return {
        pathname: '',
        // ... whatever else you you call on `router`
      };
    },
  }));


describe('search bar component', ()=>{
    test('should show input', ()=>{
       const app = render(<SearchBar />)
       expect(app).toBeDefined()

       const input = screen.getByRole('textbox');
       expect(input).toBeDefined();

       const button = screen.getAllByRole('button')
       expect(button.length).toBe(2);
       
        
    })
})