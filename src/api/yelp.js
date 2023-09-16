import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3i-1FbWMHCVLQE_749ZRMl39Op3VGgrdjHJXbTR0BrkEL0W_4UMJwC19hUGnLHc0fWEKy9qj80HYM-350-AgZmkwXFHkaXConw5eu0YhBqyAlyPeZwwbayOSYKb5ZHYx",
  },
});
