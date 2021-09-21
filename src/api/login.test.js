const login = require("./login")
// @ponicode
describe("login.login", () => {
    test("0", () => {
        let callFunction = () => {
            login.login(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            login.login(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            login.login(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("login.getInfo", () => {
    test("0", () => {
        let callFunction = () => {
            login.getInfo()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("login.getCurrentUserNav", () => {
    test("0", () => {
        let callFunction = () => {
            login.getCurrentUserNav()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("login.logout", () => {
    test("0", () => {
        let callFunction = () => {
            login.logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("login.get2step", () => {
    test("0", () => {
        let callFunction = () => {
            login.get2step(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            login.get2step(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            login.get2step(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
