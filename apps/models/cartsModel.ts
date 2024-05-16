import { IProductModel } from './productsModel'
import { IRootModel } from './rootModel'

export interface ICartsModel extends IRootModel {
  cartId: string
  cartUserId: string
  cartProductId: string
  cartProductSizeSelected: string
  cartProductColorSelected: string
  cartTotalItem: number
  product: IProductModel
}

export interface ICartsUpdateRequestModel {
  cartId?: string
  cartProductId?: string
  cartProductSizeSelected?: string
  cartProductColorSelected?: string
  cartTotalItem?: number
}

export interface ICartsCreateRequestModel {
  cartProductId: string
  cartProductSizeSelected: string
  cartProductColorSelected: string
  cartTotalItem: number
}
