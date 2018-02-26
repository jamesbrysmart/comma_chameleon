import React from 'react';
import { shallow } from 'enzyme';

import Quiz from  '../../../client/components/Quiz'

describe('Quiz', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Quiz/>, div)
  })
})