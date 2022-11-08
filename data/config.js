const config = {
  defaultTitle: "Mitech - MoneyInternational",
  apiURL:
    process.env.NODE_ENV !== "development"
      ? process.env.NEXT_PUBLIC_API_URL
      : "http://localhost:3000/proerties.json",
};

export default config;
