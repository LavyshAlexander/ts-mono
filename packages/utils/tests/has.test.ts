import { has } from '..'
import { expect } from 'chai'


describe('has() tests', () => {

	it('should return true if object has own property', () => {
		const object = {
			prop: 2
		}
		const propName = 'prop'

		const actual = has(object, propName)

		expect(actual).to.be.true
	})

})
