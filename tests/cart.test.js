import { default as Cart } from "@/app/cart/page"
import { render, screen } from "@testing-library/react"
import { localStorageTest } from "@/src/data/test-buy-cart"

jest.mock('next/navigation', () => ({
    useRouter() {
      return {
        pathname: '',
        // ... whatever else you you call on `router`
      };
    },
  }));
  
describe('test Cart component/page', ()=>{
    test('should render Item list from localStorage ', ()=>{
        render(<Cart />)
        
        const items = screen.getAllByRole('application');
        const length = JSON.parse(localStorageTest).length     ;  

        expect(items.length).toBe(length);
    })
})