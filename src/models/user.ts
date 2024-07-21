import { model, models, Schema } from 'mongoose'

export interface IUser {
    email: string
    name: string
}
const UserSchema = new Schema<IUser>(
    {
        email: String,
        name: String,
    },
    {
        timestamps: true,
    }
)
const User = models.User || model('User', UserSchema)
export default User
