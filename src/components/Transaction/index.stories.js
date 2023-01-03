import React from 'react';

import Transaction from '.';

export default {
  title: 'Example/Transaction',
  component: Transaction,
};

const Template = (args) => <Transaction {...args} />;

export const Income = Template.bind({});
Income.args = {
  transaction: {
    label: 'Some income',
    value: 23,
  },
};
