<script>
export default {
  name: 'GettyTabs',
  data () {
    return {
      currentName: 0,
      panes: [],
    }
  },
  methods: {
    handleTabClick (tabName, e) {
      e.preventDefault()
      this.currentName = tabName
    },
    addPanes (item) {
      const index = this.$slots.default.filter(item => {
        return typeof item.elm !== 'undefined' && /\bpi-tab-pane\b/.test(item.elm.className)
      }).indexOf(item.$vnode)
      this.panes.splice(index, 0, item)
    },
  },
  render (h) {
    let {
      currentName,
      panes,
    } = this

    const panels = (
      this.$slots.default
    )

    return (
      <div>
        <div class="level pi-related">
          <div class="level-item is-narrow">
            RELATED RESOURCES:
          </div>
          <div class="level-item">
            <div class="tabs is-boxed is-centered">
              <ul>
                { panes.map(pane => {
                  return (
                    <li
                      class={{ 'is-active': currentName === pane.name }}
                      onClick={ (e) => { this.handleTabClick(pane.name, e) }}>
                      <a class="pi-tab-label">
                        <span class="icon">
                          <font-awesome-icon
                            icon={ pane.icon } />
                        </span>
                        { pane.label }
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
