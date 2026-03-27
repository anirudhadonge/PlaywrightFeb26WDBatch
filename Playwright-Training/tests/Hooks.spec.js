import {test} from '@playwright/test'

test.beforeAll("Before All",async()=>{
    console.log("This is before all");
})
test.afterAll('After All',async()=>{
    console.log("This is After all");
})

test.beforeEach('Before each',async()=>{
    console.log('This is before each');
})

test.afterEach('After Each',async()=>{
    console.log('This is a After Each method');
})

test("Test1",async()=>{
    console.log('It is test one')
})

test("Test2",async()=>{
    console.log('It is test two')
})
test("Test3",async()=>{
    console.log('It is test three')
})

