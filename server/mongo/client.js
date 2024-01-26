import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
});

clientSchema.methods.toResponse = function toResponse() {
    return {
        id: this._id,
        name: this.name,
        email: this.email,
        phone: this.phone,
    };
};

export const Client = mongoose.model('Client', clientSchema);