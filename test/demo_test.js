let assert = require('assert')

describe('some demo tests', ()=> {

    it('adds two numbers', ()=>{
        assert(2+6 === 8),
        assert(2+4 === 6),
        assert(6+78 === 84)
    })

    it('subtracts two numbers', ()=>{
        assert(7-2 === 5),
        assert(2-4 === -2),
        assert(6-7 === -1)
    })
})