import Contact from "../models/Contact.js";

const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            message
        });

        res.status(201).json(contact);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default createContact;