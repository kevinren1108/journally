import { fromJS } from 'immutable'

const defaultState = fromJS({
  journalList: [{
    id: 1,
    title: "Half of all people offered Moderna COVID-19 vaccine refuse it, Ontario pharmacists say",
    journalContent: "The association representing Ontario pharmacists says roughly half of all people who are offered the Moderna vaccine are refusing it. They may cancel their appointment. They may walk out..."
  },
  {
    id: 2,
    title: "Could a new tax on homes worth $1M and up help fix Canada's housing crisis?",
    journalContent: "With home prices in Canada's most expensive markets going up at a dizzying pace, a Vancouver-based think-tank is proposing a new tax on homes valued at over $1 million to help bridge the affordability gap..."
  }
  ]
});

export default (state = defaultState, action) => {
  
  return state;
}