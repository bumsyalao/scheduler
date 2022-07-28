exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.staffUser = (req, res) => {
    res.status(200).send(" Staff User Content.");
};
exports.adminUser = (req, res) => {
    res.status(200).send("Admin Content.");
};
