import GettyTabPane from '@ui/getty-tab-pane'
import { div, byData, wrap } from 'iso/vspec'
import { vspecMount } from '@testing'
import Vue from 'vue'


describe('GettyTabPane', () => {
  let SampleParent, components, addedPane, template

  beforeEach(function() {
    SampleParent = {
      name: 'SampleParent',
      data () {
        return {
          currentPane: null,
        }
      },
      methods: {
        addPanes (pane) {
          addedPane = pane
        },
      },
      template: wrap`<slot/>`
    }

    components = {
      'sample-parent': SampleParent,
      'getty-tab-pane': GettyTabPane,
    }

    template = div`
      <sample-parent>
        <getty-tab-pane
          label="Tab 1"
          data-cy="tab-pane">
          Tab one content
        </getty-tab-pane>
      </sample-parent>
    `
  })
  
  context('visibility', () => {
    it('does not display content if not active', () => {
      vspecMount({ template, components })
      cy.get(byData`tab-pane`).should('not.be.visible')
    })

    it('displays content if active', () => {
      vspecMount({ template, components }, (vm) => {
        vm.currentPane = addedPane
      })
      cy.get(byData`tab-pane`).should('be.visible')
    })
  })
})

describe('GettyTabPane handler', () => {
  let Klass

  beforeEach(function() {
    Klass = Vue.extend(GettyTabPane)
  })
  
  context('handler', () => {
    it('throws an error if parent cannot add itself', () => {
      let vm = new Klass()
      vm.$parent = {}
      expect(() => { vm.$mount() }).to.throw(TypeError)
    })

    it('adds itself to the handler', () => {
      let vm = new Klass()
      let addPanes = cy.spy()
      vm.$parent = { addPanes }
      vm.$mount()
      expect(addPanes).to.have.been.calledWith(vm)
    })
  })
})
