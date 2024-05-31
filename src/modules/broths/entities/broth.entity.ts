import { Decimal } from '@prisma/client/runtime/library'

export interface BrothEntity {
  id: string
  imageInactive: string
  imageActive: string
  name: string
  description: string
  price: Decimal
}
