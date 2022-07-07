import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('testing calculator', () => {
  it('Testing component with snapshot', () => {
    const DOMTREE = renderer.create(<Calculator />).toJSON;
    expect(DOMTREE).toMatchSnapshot();
  });
});
