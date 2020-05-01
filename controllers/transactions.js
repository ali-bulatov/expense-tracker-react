// all methods that use the model to interact with the DB

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @acess   Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

// @desc    Add a transactions
// @route   POST /api/v1/transactions
// @acess   Public
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @acess   Public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transactions');
}