import { type Params } from "./interfaces.js";

export default ({ price, discount, isInstallment, months }: Params): number => {
  const discountPrice: number = price - price * discount / 100
  const result = isInstallment ? discountPrice / months : discountPrice
  return result
}
