import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string) {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
    this.client = null
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (mongoCollection: any): any => {
    const { _id, ...rest } = mongoCollection
    return { ...rest, id: _id.toString() }
  },

  mapCollections: (mongoCollections: any[]): any => {
    return mongoCollections.map(collection => MongoHelper.map(collection))
  }
}
