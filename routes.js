export default {
  home: "/",
  accounts: {
    login: "/login",
  },
  transactions: {
    orders: {
      review: (id) => `/transactions/orders/${id}/review`,
      payment: (id) => `/transactions/orders/${id}/make-payment`,
      help: (id) => `/transactions/orders/${id}/need-help`,
      cancel: (id) => `/transactions/orders/${id}/cancel`,
      transferred: (id) => `/transactions/orders/${id}/transferred`,
    },
  },
};
