<script>
export default {
  name: 'GettyTabNav',
  inject: ['rootTabs'],
  props: {
    panes: Array,
    currentName: String,
    onTabClick: {
      type: Function,
    },
  },
  methods: {
    changeTab (e) {
      const keyCode = e.keyCode
      let nextIndex
      let currentIndex, tabList
      if ([37, 38, 39, 40].indexOf(keyCode) !== -1) {
        tabList = e.currentTarget.querySelectorAll('[role=tab]')
        currentIndex = Array.prototype.indexOf.call(tabList, e.target)
      } else {
        return
      }
      if (keyCode === 37 || keyCode === 38) { // left
        if (currentIndex === 0) { // first
          nextIndex = tabList.length - 1
        } else {
          nextIndex = currentIndex - 1
        }
      } else { // right
        if (currentIndex < tabList.length - 1) { // not last
          nextIndex = currentIndex + 1
        } else {
          nextIndex = 0
        }
      }
      tabList[nextIndex].click()
    },
  },
  render (h) {
    const {
      panes,
      onTabClick,
      onTabRemove,
      changeTab,
    } = this
    const tabs = this._l(panes, (pane, index) => {
      let tabName = pane.name || pane.index || index
      pane.index = `${index}`
      const tabLabelContent = pane.$slots.label || pane.label
      const tabindex = pane.active ? 0 : -1
      return (
        <div
          class={{
            'is-active': pane.active,
          }}
          id={`tab-${tabName}`}
          aria-controls={`pane-${tabName}`}
          role="tab"
          aria-selected={ pane.active }
          ref="tabs"
          tabindex={tabindex}
          refInFor
          on-click={(ev) => { onTabClick(pane, tabName, ev) }}
        >
          {tabLabelContent}
        </div>
      )
    })
    return (
      <div>
        <div>
          <div ref="nav" role="tablist" on-keydown={ changeTab }>
            <getty-tab-bar tabs={panes}></getty-tab-bar>
            {tabs}
          </div>
        </div>
      </div>
    )
  },

}
</script>
