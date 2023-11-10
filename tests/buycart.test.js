import BuyCart from "@/app/Components/BuyCart";
import { localStorageTest } from "@/src/data/test-buy-cart";
import { render, screen } from "@testing-library/react";


jest.mock('next/navigation', () => ({
    useRouter() {
      return {
        pathname: '',
        // ... whatever else you you call on `router`
      };
    },
  }));

describe('should display render component',()=>{
    test('should render cart image and button role/function', ()=>{
        render(<BuyCart />)
        const button = screen.getByRole('button')
        const cart = screen.getAllByRole('application')

        const itemsMock = JSON.parse(localStorageTest);
        const itemCount = screen.getByText(itemsMock.length)
        expect(itemCount.innerHTML).toBe(itemsMock.length.toString());

        
    })
})


