const CURRRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0
})

export function formatCurrency(amount: number){
  return CURRRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATER = new Intl.NumberFormat("en-US")

export function formatNumber(number: number){
  return NUMBER_FORMATER.format(number)
}