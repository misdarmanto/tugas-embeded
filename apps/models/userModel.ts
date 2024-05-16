import { IRootModel } from './rootModel'

export interface IUserModel extends IRootModel {
  userId: string
  userName: string
  userEmail: string
  userPassword: string
  userWhatsAppNumber: string
  userWhatsAppNumberVerified: boolean
  userPhoto: string
  userCoin: number
  userRole: 'user' | 'admin' | 'superAdmin'
  userGender: 'pria' | 'wanita'
  userPartnerCode: string
}

export interface IUserUpdateRequestModel {
  userId: string
  userName?: string
  userEmail?: string
  userWhatsAppNumber?: string
  userWhatsAppNumberVerified?: boolean
  userPhoto?: string
  userCoin?: number
  userRole?: 'user' | 'admin' | 'superAdmin' | string
  userGender?: 'pria' | 'wanita'
  userPartnerCode: string
}

export interface IUserCreateRequestModel {
  userName: string
  userEmail: string
  userPassword: string
  userWhatsAppNumber?: string
  userGender: 'pria' | 'wanita' | string
}

export interface IUserLoginRequestModel {
  userEmail: string
  userPassword: string
}
