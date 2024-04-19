const User = require('../model/emp');

exports.insertemploy = async (req, res) => {
    const { name, salary, department } = req.body.dataToSend;
    console.log(name, salary, department);

    try {
        await User.create({ name, salary, department });
        res.status(201).send('Employee successfully Created.');


    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating employee.');
    }
};


exports.getemploy = async (req, res) => {
    try {
        // Retrieve all employees from the database
        const employees = await User.find();

        // Send the retrieved employees as a JSON response
        res.status(200).json(employees);
    } catch (err) {
        // Log and send an error response if an error occurs
        console.error('Error fetching employees:', err);
        res.status(500).send('Error fetching employees.');
    }
};
