function solve(args) {
    var people = [];
    for (var i = 0; i < args.length; i += 3) {
        people.push({
            firstname: args[i],
            lastname: args[i + 1],
            age: +args[i + 2]
        });
    }
    var youngestPerson = people[0];

    for (var person in people) {
        if (people[person].age < youngestPerson.age) {
            youngestPerson = people[person].age;
            youngestPerson = people[person];
        }
    }
    return youngestPerson.firstname + ' ' + youngestPerson.lastname;
}

console.log(solve([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]));

console.log(solve([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]));