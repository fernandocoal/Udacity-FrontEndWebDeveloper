import { submitButton } from './submitButton'


describe('Test, the function "submitButton()" should be a function' , () => {
    test("It should be a function", async()=>{
        expect(typeof submitButton).toBe("function");
    });});