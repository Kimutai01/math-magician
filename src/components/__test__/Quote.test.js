import renderer from 'react-test-renderer';
import Quote from '../../pages/Quote';

test('Home component testing with snapshot', () => {
  const TREE = renderer.create(<Quote />).toJSON;
  expect(TREE).toMatchSnapshot();
});
