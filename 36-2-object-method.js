// 36-2 OBject Method Property Review

const student = {
    id: 101,
    name: 'Fahim',
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math101', 'calculus'],
    bestFriend: {
        name: 'Sadi',
        major: 'mathematics',
        subjects: ['english', 'economics', 'math101', 'calculus']

    },
    // you can have function as your property value and its called METHOD.
    takeExam: function () {
        console.log(this.name, 'is taking an exam')
    },
    expense: function (expense) {
        const result = this.money - expense
        return result;
    }
}
student.takeExam()
const exp = student.expense(1000)
console.log(exp)