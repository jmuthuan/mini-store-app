import { render, prettyDOM, screen } from '@testing-library/react'
import Header from '../app/Components/Header'


describe('Header', ()=>{
    test('should show title, "home" and "about" links in header', ()=>{
        const app = render(<Header />)
       
        const img = screen.getByRole('img')
        expect(img).toBeDefined();

        const link = screen.getAllByRole('link');
        expect(link.length).toBe(2); 
        
        const home = screen.getByText('Home');
        expect(home).toBeDefined();

        const about = screen.getByText('About');
        expect(about).toBeDefined();
    })
})