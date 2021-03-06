import dbConnect from '../../../utils/dbConnect';
import Pet from '../../../models/Pet';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const pets = await Pet.find({});

				res.status(200).json({ success: true, data: pets });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const pet = await Pet.create(req.body);

				res.status(201).json({ success: true, data: pet });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
