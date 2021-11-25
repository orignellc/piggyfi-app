export default {
  home: "/",
  accounts: {
    login: "/login",
  },
  transactions: {
    orders: {
      review: (id) => `/transactions/orders/${id}/review`,
    },
  },
};
