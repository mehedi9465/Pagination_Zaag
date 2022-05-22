import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Home from '../components/pages/Home';
import { createMemoryHistory } from "history"

// it('Render Home component', () => {
//     render(<Home />);
//     const home = screen.getByTestId("home");
//     expect(home).toBeInTheDocument();
// });

// test('Home page is rendering on /', () => {

//     const history = createMemoryHistory({ initialEntries: ['/'] });
//     render(
//         <Router history={history}>
//             <Home />
//         </Router>
//     );
//     expect(history.location.pathname).toBe('/');

// }); 

// it('Check Pagination is Rendered', () => {
//     render(<Home />);
//     const pagination = screen.getByTestId("pagination");
//     expect(pagination).toBeInTheDocument();
// });