import Item from "@/app/Components/Item"
import { cleanup, render, screen } from "@testing-library/react"
import testItem from '../src/data/test-item.json';

describe('should render an item card', () => {
    afterEach(()=>{
        cleanup()
    })

    test('should render item image', () => {        
        render(<Item thumbnail={testItem.thumbnail}/>)       

        const img = screen.getByRole('img');
        expect(img).toBeDefined();
    })

    test('should display item title and description', ()=>{
        render(<Item 
            thumbnail={testItem.thumbnail}v
            title={testItem.title} 
            description={testItem.description}/>)

        const title = screen.getByText(testItem.title);
        expect(title).toBeDefined();

        const description = screen.getByText(testItem.description);
    })

    test('should display price and rating', ()=>{
        render(<Item 
            thumbnail={testItem.thumbnail}
            price={testItem.price}
            rating={testItem.rating}/>)

        const price = screen.getByText(testItem.price);

        const rating = screen.getByText(testItem.rating);
    } )

    test('should have a Link to show the details', ()=>{
        render(<Item thumbnail={testItem.thumbnail}/>)
        const link = screen.getByRole('link');
    })
})