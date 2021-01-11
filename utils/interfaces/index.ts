interface Fields {
  title: string,
  richText: any,
  date: string,
  image: any,
  slug: string
}

export type PostData = {
  sys: any,
  fields: Fields
}

export interface IImage {
  fields: {
    description: string,
    file: {
      url: string
    }
  }
}