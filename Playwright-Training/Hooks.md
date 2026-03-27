# Hooks : Those which are used to prepare the prerequisite for the test.

1. test.describe() : its is used to group test
2. test.BeforeAll() : This method gets executed before all the test execute. It it get execute only once
3. test.BeforeEach()
4. test.afterEach()
5. test.AfterAll();
6. test.step()



## Tags

1. test('@smoke Description',async()=->{})
2. test('description',{tag:'@smoke'},async()=>{})

### Executing the test
command: npx playwright test --grep "@smoke"