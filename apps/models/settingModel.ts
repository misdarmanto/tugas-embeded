import { IRootModel } from './rootModel'

export interface ISettingModel extends IRootModel {
  settingId: string
  settingBanner: string
  settingWhatsappNumber: string
}
