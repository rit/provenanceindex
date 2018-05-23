<!--<template>
  <div class="level pi-related">
    <div class="level-item is-narrow">
      RELATED RESOURCES:
    </div>
    <div class="level-item">
      <div class="tabs is-boxed is-centered pi-tabs">
        <ul>
          <li
            v-for="(resource, index) in relatedResources"
            :key="resource.label"
            :class="[index===activeTab ? 'is-active' : '']"
            @click="updateActive(index)">
            <a>
              <span class="icon">
                <font-awesome-icon
                  :icon="resource.icon" />
              </span>
              <span class="pi-tabLabel">{{ resource.label }} {{ '('+getNum(resource)+')' }}</span>
              <span/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="level-item"/>
  </div>
</template>-->
<!--<template>
  <div>
    <getty-tab-pane v-for="(pane, index) in panes" :label="pane.props.label" :name="index">
      <div>Provenance events here</div>
    </getty-tab-pane>
  </div>
</template>-->

<script>
export default {
  name: 'GettyTabs',
  data () {
    return {
      currentName: this.value || this.activeName,
      panes: [],
    }
  },
  created () {
    if (!this.currentName) {
      this.setCurrentName('0')
    }
  },
  methods: {
    handleTabClick (tab, tabName, event) {
      this.setCurrentName(tabName)
    },
    setCurrentName (value) {
      this.currentName = value
    },
    addPanes (item) {
      console.log(this.$slots.default)
      const index = this.$slots.default.filter(item => {
        return item.elm.nodeType === 1 && /\bpi-tab-pane\b/.test(item.elm.className)
      }).indexOf(item.$vnode)
      this.panes.splice(index, 0, item)
    },
  },
  render (h) {
    const panels = (
      this.$slots.default
    )
    return (
      <div class="level pi-related">
        <div class="level-item is-narrow">
          RELATED RESOURCES:
        </div>
        <div class="level-item">
          <div class="tabs is-boxed is-centered">
            <ul>
              { panels }
            </ul>
          </div>
        </div>
        <div class="level-item"/>
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
.pi-tabLabel {
  color: black;
}
</style>
