## Auto-Wait 
1. WaitforTimeOut : page.waitfortime()
2. WaitFor: It is applied on Locator
    1. "attached" : html element is Attached to DOM
    2. "detached" : html element is removed from the DOM
    3. "visible" : The element should be visible on the Html Page.
    4. "hidden" : The element is Invisible on the html page.
3. WaitForLoadState: Its is applied on Page
    1. Load: Everthing get loaded , DOM , Javascript file, images , fronts
    2. DomContentLoaded : DOM(Document Object Model) has been create and resources are not loaded (js file, styling, Images, font )
    3. NetworkIdle: No more network call in progress.
