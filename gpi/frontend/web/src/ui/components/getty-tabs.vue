<script>
export default {
  name: 'GettyTabs',
  data () {
    return {
      currentPane: null,
      panes: [],
    }
  },
  methods: {
    handleTabClick (tab, e) {
      e.preventDefault()
      this.currentPane = tab
      this.$emit('GettyTabPaneSelected', this.currentPane)
    },
    addPanes (pane) {
      this.panes.push(pane)
    },
    activatePane (pane) {
      this.currentPane = pane
    },
  },
  render (h) {
    let {
      currentPane,
      panes,
    } = this

    const panels = (
      this.$slots.default
    )

    return (
      <div class="getty-tabs">
        <div class="level pi-related">
          { this.$slots.tabsLabel }
          <div class="level-item">
            <div class="tabs is-boxed is-centered">
              <ul>
                { panes.map(pane => {
                  return (
                    <li
                      class={{ 'is-active': currentPane === pane }}
                      onClick={ (e) => { this.handleTabClick(pane, e) }}>
                      <a class="pi-tab-label">
                        <span class="icon">
                          <font-awesome-icon
                            icon={ pane.icon } />
                        </span>
                        <translate>{ pane.label }</translate>
                      </a>
                    </li>
                  )
                })
                }
              </ul>
            </div>
          </div>
          <div class="level-item"/>
        </div>
        { panels }
      </div>
    )
  },
}
</script>

<style scoped>
.pi-related {
  background: #D3D3D3;
  padding-left: 2rem;
}
.icon {
  color: black;
}
li.is-active a {
  color: black;
}
</style>
