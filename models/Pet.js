import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	age: {
		type: String,
		required: true,
	},
	// dob: {
	// 	type: Date,
	// 	required: true,
	// },
	// imageFile: {
	// 	type: String,
	// },
	// userId: {
	// 	type: String,
	// 	required: true,
	// },
});

export default mongoose.models.Pet || mongoose.model('Pet', PetSchema);
