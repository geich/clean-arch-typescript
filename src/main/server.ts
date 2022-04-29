import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import app from './config/app'
import { MONGO_DB, MONGO_URL, PORT } from './config/constants'

MongoHelper
  .connect(`${MONGO_URL}/${MONGO_DB}`)
  .then(() => app.listen(
    PORT, () => console.log(`Server is running on http://localhost:${PORT}`
    ))
  )
  .catch(console.error)
