import { Decimal } from '@prisma/client/runtime/library'

export interface ProteinEntity {
  id: number
  imageInactive: string
  imageActive: string
  name: string
  description: string
  price: Decimal
}
