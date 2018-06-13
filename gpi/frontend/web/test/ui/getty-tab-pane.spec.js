import GettyTabs from '@ui/getty-tabs'
import GettyTabPane from '@ui/getty-tab-pane'
import { div, byData } from 'iso/vspec'
import { vspecMount } from '@testing'
import Vue from 'vue'

const SampleParent = 
  {
    name: 'SampleParent',
    data () {
      return {
        currentPane: null,
        panes: [],
      }
    },
    methods: {
      addPanes (pane) {}
    },
    render(h) {
      return (
        <div class="getty-tabs">
          { this.$slots.default }
        </div>)
    }
  }

const components = {
  'sample-parent': SampleParent,
  'getty-tab-pane': GettyTabPane,
}

const template = div`
  <sample-parent>
    <getty-tab-pane
      label="Tab 1"
      data-cy="tab-pane">
      Tab one content
    </getty-tab-pane>
  </sample-parent>`

describe('GettyTabPane', () => {
  context('handler', () => {
    it('throws an error if GettyTabs is not parent', () => {
      let constructor = Vue.extend(GettyTabPane)
      let vm = new constructor()
      vm.$parent = {}
      expect(() => {vm.$mount()}).to.throw(TypeError)
    }), 
    it('adds itself to the handler', () => {
      let constructor = Vue.extend(GettyTabPane)
      let vm = new constructor()
      let addPanes = cy.spy()
      vm.$parent = {addPanes}
      vm.$mount()
      expect(addPanes).to.have.been.calledWith(vm)
    })
  }),
  context('visibility', () => {
    it('does not display content if not active', () => {
      vspecMount({ template, components })
      cy.get(byData`tab-pane`).should('not.be.visible')
    })
    it('displays content if active', () => {
      vspecMount({ template, components }, (vm) => {
        cy.get(byData`tab-pane`).then($el => {
          let pane = $el[0].__vue__
          vm.currentPane = pane
        })
        cy.get(byData`tab-pane`).should('be.visible')
      })
    })
  })
})
