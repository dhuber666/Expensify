
// returns filtered Expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || startDate >= expense.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate <= expense.createdAt;
        const textMatch = expense.title.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    })
}