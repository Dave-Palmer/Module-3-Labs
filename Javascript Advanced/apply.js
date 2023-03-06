

const classRoom = {
    takeAttendence: function (...students) {
        console.log(this.name + ' Is taking attendence')
        for (let i in students) {
            console.log(students[i])
        }
    }
}
let teacher = {
    name: 'Mrs. Puff'
}

let students = ['Sponge Bob', 'Patrick', 'Sandy']
students.push('Squidward')
students.unshift('Mr Krabs')

classRoom.takeAttendence.apply(teacher, students)