import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Navbar';

it('testing the navbar', () => {
  const TREE = renderer.create(
    <Router>
      <Nav />
    </Router>
  ).toJSON;
  expect(TREE).toMatchSnapshot();
});
