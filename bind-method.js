
const student = {
    id: 101,
    name: 'Fahim',
    money: 5000,
    major: 'mathematics',
    expense: function (expense) {
        this.money = this.money - expense
        console.log(this)
        return this.money;
    }
}
// const exp = student.expense(2000)
// console.log(exp)

const student2 = {
    id: 102,
    name: 'Madani',
    money: 6000,
    major: 'mathematics',

}
const student3 = {
    id: 103,
    name: 'Singh',
    money: 7000,
    major: 'physics',

}
const expense2 = student.expense.bind(student2)
expense2(1000)
const expense3 = student.expense.bind(student3)
expense3(2000)
student.expense(1000)

