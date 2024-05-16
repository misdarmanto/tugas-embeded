import { IRootModel } from './rootModel'

export interface IBankSettingModel extends IRootModel {
  bankSettingId: string
  bankSettingName: string
  bankSettingNumber: string
  bankSettingOwnerName: string
}
