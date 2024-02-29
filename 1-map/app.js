const objects = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' }
]

const uniqueObjects = new Map(objects.map(o => { return [o.id, o.name] }));
console.log(uniqueObjects);