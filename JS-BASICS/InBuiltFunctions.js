const todos = [
    {
        name: 'name1',
        lastName: 'lastName1'
    },
    {
        name: 'name2',
        lastName: 'lastName2'
    },
    {
        name: 'name3',
        lastName: 'lastName3'
    }
]

let stringedJsonResult = JSON.stringify(todos);
console.log(stringedJsonResult);