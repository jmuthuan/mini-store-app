import  Footer from "@/app/Components/Footer"
import { cleanup, render, screen } from "@testing-library/react"

describe('should render footer', ()=>{
    afterEach(()=>{
        cleanup();
    })

    test('should display developer name', ()=>{
        const footer = render(<Footer />);
        
        const developer = screen.getByText(/Muthuan/)
        expect(developer).toBeDefined();
    })

    test('should display Copyright and actual year', ()=>{
        const footer = render(<Footer />);
        
        const copyright = screen.getByText(/Copyright/)
        expect(copyright).toBeDefined();

       const year = screen.getByText(new RegExp(`${new Date().getFullYear()}`));
       expect(year).toBeDefined();
    })
})