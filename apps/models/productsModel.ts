import { IRootModel } from './rootModel'

export interface IProductModel extends IRootModel {
  productId: string
  productName: string
  productDescription: string
  productImages: string
  productPrice: number
  productDiscount: number
  productCategoryId: string
  productTotalSale: number
  productStock: number
  productColors: string
  productSizes: string
}

export interface IProductUpdateRequestModel {
  productId: string
  productName?: string
  productDescription?: string
  productImages?: string
  productPrice?: number
  productCategoryId?: string
  productTotalSale?: number
  productStock?: number
  productColors?: string
  productSizes?: string
}

export interface IProductCreateRequestModel {
  productName: string
  productDescription: string
  productImages: string
  productPrice: number
  productCategoryId: string
  productStock: number
  productColors: string
  productSizes: string
}
