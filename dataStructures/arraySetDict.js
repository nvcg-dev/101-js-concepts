//array for dynamic list
const list = ['cat', 'dog', 'lizard']

//set for collection of unique items
const unique = new Set(list)

//map for key value pairs (or more)
const dict = new Map([
    ['cat', 0],
    ['dog', 1],
    ['lizard', 1]
])

//storing things in maps keeps properties in a reference-able place

//weakSet and weakMap can be used for garbage collecting versions of sets and maps, reduce mem usage
const weakUnique = new WeakSet(list)

const weakDict = new WeakMap([
    ['cat', 0],
    ['dog', 1],
    ['lizard', 1]
])
