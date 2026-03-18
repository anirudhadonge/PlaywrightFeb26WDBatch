Xpath and CSS Locator : Provide us with address of element.

#

/**
 * xpath: //<Htmltag>[@<attribute>='<attributeValue>']
 * partial value of attribute : //<tag>[contains(@<attribute>,<attribute partial Value)]
 * Navigating from one element to other
 * 1. parent to Child
 *         //<Parent tag>[@<attribute>='<attributeValue>']//<Child Tag>[@<attribute>='<attributeValue>']
 * 2. child To parent
 *         //<Child Tag>[@<attribute>='<attributeValue>']//parent::<parent tag>[@<attribute>='<attributeValue>']
 * 3. child to Ancestor
 *    //<Child Tag>[@<attribute>='<attributeValue>']//ancestor::<html tag of ancestor>[@<attribute>='<attributeValue>']
 * 4. Moving between siblings
 *      following-siblings : //<html Tag>[@<attribute>='<attributeValue>']//following-sibling::<sibling html tag>[@<attribute>='<attributeValue>']
 *      preceding-siblings : //<html Tag>[@<attribute>='<attributeValue>']//preceding-sibling::<sibling html tag>[@<attribute>='<attributeValue>']
 * 5. contains() 
 * 6. text()
 * 7. AND OR
 * 
 * css locator
 * class is denote by a .<Class Value>
 * Id is denote by #<Id value>
 * [<attribute>='<attributevalue>']
 * Partial value of attribute then syntax would [attribute*='partial Value']\
 * If attribute starts with a specific values [attribute^='value'];
 * 
 * parent to child
 * sibling to immedate sibling +
 */


/**
 * Absolute : //html//body//
 * relative 
 */

 ## Locator Object
 1. Locate by role: 
 2. Locate by label
 3. Locate by placeholder
 4. Locate by text
 5. Locate by alt text
 6. Locate by title
 7. Locate by test id
 8. Locate by CSS or XPath