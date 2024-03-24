const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to Home Page using router");
    }
    catch (error) {
        console.error();
    }
}


const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExit = await User.findOne({ email });
        if (userExit) {
            return res.status(400).json({ msg: "email already exist" });
        }
        const userCreated = await User.create({ username, email, phone, password });

        res.status(200).send({ message: "User created successfully", data: userCreated });
    }
    catch (error) {
        console.error();
        res.status(400).send({ error: "User creation failed", reason: error });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by username in the database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare passwords (you may need to use a library like bcrypt for this)
        if (password === user.password) { // This is a basic example, in production, you should use bcrypt to compare hashed passwords
            // Successful login
            res.status(200).json({ message: 'Login successful', user });
        } else {
            // Failed login
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ error: "Internal server error", reason: "Error occurred while processing login" });
    }
};


module.exports = { home, register, login };