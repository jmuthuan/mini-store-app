import { cleanup, prettyDOM, render,screen } from "@testing-library/react";
import testDetail from '../src/data/test-item-detail.json'
import Details from "@/app/Components/Details";

describe('Item Details', ()=>{
    afterEach(()=>{
        cleanup();
    })

    test('should render images', ()=>{
        render(<Details details={testDetail}/>)
        
        const images = screen.getAllByRole('img')
        expect(images.length).toBeGreaterThan(0);
    })

    test('should render title', ()=>{
        render(<Details details={testDetail}/>)
        const title = screen.getByText(testDetail.title)
    })

    test('should render price, rating and stock', ()=>{
        render(<Details details={testDetail}/>)

        const price = screen.getByText(testDetail.price);
        const stock = screen.getByText(testDetail.stock);
        const rating = screen.getByText(testDetail.rating);
    })

    test('should render item description', ()=>{
        render(<Details details={testDetail}/>)

        const description = screen.getByText(testDetail.description)
    })

    test('should render buy button', ()=>{
        render(<Details details={testDetail}/>)

        const button = screen.getByRole('button')
        const buy = screen.getByText('Buy')
    })
})