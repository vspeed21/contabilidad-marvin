export type imagesTypes = 'jpg' | 'png' | 'jpeg'

export interface IService {
  imageUrl: string
  title: string
  caption: string
  imageType: imagesTypes
  imageName: string
}