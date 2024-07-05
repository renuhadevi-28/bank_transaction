let transactions = [];

function addTransaction() {
    const transactionInput = document.getElementById('transaction');
    const transactionValue = parseFloat(transactionInput.value);

    if (isNaN(transactionValue)) {
        alert("Please enter a valid number");
        return;
    }

    transactions.push(transactionValue);
    transactionInput.value = '';
    updateTransactionList();
    updateTotalBalance();
}

function removeTransaction(index) {
    transactions.splice(index, 1);
    updateTransactionList();
    updateTotalBalance();
}

function updateTransactionList() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.textContent = `${transaction >= 0 ? 'Deposit' : 'Withdrawal'}: $${Math.abs(transaction).toFixed(2)}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTransaction(index);

        li.appendChild(removeButton);
        transactionList.appendChild(li);
    });
}

function updateTotalBalance() {
    const totalBalance = transactions.reduce((total, transaction) => total + transaction, 0);
    document.getElementById('total-balance').textContent = totalBalance.toFixed(2);
}
