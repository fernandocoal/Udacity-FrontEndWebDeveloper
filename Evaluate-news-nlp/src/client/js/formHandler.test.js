import { handleSubmit } from './formHandler'


describe('Test, the function "handleSubmit()" should be a function' , () => {
  test('It should be a function', async () => {
    expect(typeof handleSubmit).toBe("function")})});
    
// describe("Test, submited value should have http", () => {
//   test("should have a http on #name",()=>{
//     expect(formText).toContain('http');
//   }
//   )})

