function handlerOf(_chai, utils) {
  let Assertion = _chai.Assertion

  Assertion.addMethod('handlerOf', function($el) {
    let expected = this._obj._uid
    let actual = $el.get(0).__vue__.handler._uid
    this.assert(
      expected === actual,
      `expected vm._uid ${expected} to equal vm.handler._uid ${actual}`,
      `expected vm._uid ${expected} not to equal vm.handler._uid ${actual}`,
    )
  })
}

chai.use(handlerOf)
