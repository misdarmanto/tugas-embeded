import { IProductModel } from './productsModel'
import { IRootModel } from './rootModel'
import { IUserModel } from './userModel'

export interface IOrdersModel extends IRootModel {
  orderId: string
  orderUserId: string
  orderProductId: string
  orderProductPrice: number
  orderTotalProductPrice: number
  orderOngkirPrice: number
  orderProductSizeSelected: string
  orderProductColorSelected: string
  orderTotalItem: number
  orderStatus: 'waiting' | 'process' | 'delivery' | 'done' | 'cancel'
  product: IProductModel
  user: IUserModel
  orderTransferBankImage: string
}

export interface IOrdersCreateRequestModel {
  orderProductId: string
  orderOngkirPrice: number
  orderProductPrice: number
  orderProductSizeSelected: string
  orderProductColorSelected: string
  orderTotalItem: number
}

export interface IOrdersUpdateRequestModel {
  orderId: string
  orderUserId?: string
  orderProductId?: string
  orderProductPrice?: number
  orderTotalProductPrice?: number
  orderOngkirPrice?: number
  orderProductSizeSelected?: string
  orderProductColorSelected?: string
  orderTotalItem?: number
  orderStatus?: 'waiting' | 'process' | 'delivery' | 'done' | 'cancel'
  orderTransferBankImage?: string
}
