export type User = {
  id: number,
  name: string,
  cpf: number,
  birthday: string,
  balance: number,
  statement: BankStatement[],
}

type BankStatement = {
  value: number,
  date: number,
  description: string,
}