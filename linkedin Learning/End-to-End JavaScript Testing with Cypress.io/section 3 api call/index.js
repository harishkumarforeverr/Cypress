/**
 *
 *
 * 1. cy.spy("")
 * 2. cy.stub("")
 *
 * import {api} from "./my-api"
 * // api.getUser()
 *
 * sy.stub(api,'getUser').return({name:"Bill"})
 *
 * sy.stub(api,'getUser').resolves({name:"Bill"})
 *
 * sy.stub(api,'getUser').rejects()
 */


/**
 * 
 * 
 * import {api} from "./my-api"
 * // api.getUser()
 * 
 * const myspy=cy.spy(api,'getUser')
 * 
 * expect(myspy).to.be.called;
 */