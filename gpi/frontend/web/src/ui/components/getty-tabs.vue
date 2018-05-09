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

<script>
export default {
  name: 'GettyTabs',
  props: {
    activeName: String,
    value: {},
  },
  data () {
    return {
      currentName: this.value || this.activeName,
      panes: [],
    }
  },
  provide () {
    return {
      rootTabs: this,
    }
  },
  watch: {
    activeName (value) {
      this.setCurrentName(value)
    },
    value (value) {
      this.setCurrentName(value)
    },
    /*currentName(value) {
        if (this.$refs.nav) {
          this.$nextTick(_ => {
            this.$refs.nav.scrollToActiveTab();
          });
        }
      }*/
  },
  created () {
    if (!this.currentName) {
      this.setCurrentName('0')
    }
  },
  methods: {
    handleTabClick (tab, tabName, event) {
      this.setCurrentName(tabName)
      this.$emit('tab-click', tab, event)
    },
    setCurrentName (value) {
      this.currentName = value
      this.$emit('input', value)
    },
    addPanes(item) {
        const index = this.$slots.default.filter(item => {
          return item.elm.nodeType === 1 && /\bel-tab-pane\b/.test(item.elm.className);
        }).indexOf(item.$vnode);
        this.panes.splice(index, 0, item);
      },
  },
  render (h) {
    let {
      handleTabClick, currentName, panes,
    } = this
    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        panes,
      },
      ref: 'nav',
    }
    const header = (
      <div>
        <getty-tab-nav { ...navData }></getty-tab-nav>
      </div>
    )
    const panels = (
      this.$slots.default
    )
    return (
      <div class=
        'tabs is-boxed is-centered'
      ><ul>
          { [header, panels] }
        </ul>
      </div>
    )
  },
}
/* export default {
  name: 'PersonTabs',
  props: {
    events: {
      type: Number,
      required: true,
    },
    objects: {
      type: Number,
      required: true,
    },
  },
  data () {
    return {
      activeTab: 0,
      relatedResources: [
        {label: 'Provenance Events', icon: 'calendar'},
        {label: 'Objects', icon: 'paint-brush'},
      ],
    }
  },
  methods: {
    updateActive (index) {
      this.activeTab = index
    },
    getNum (resource) {
      if (resource.label === 'Provenance Events') {
        return this.events
      } else if (resource.label === 'Objects') {
        return this.objects
      }
    },
  },
} */
</script>

<style scoped>
/*.pi-related {
  background: #D3D3D3;
  padding-left: 2rem;
}
.icon {
  color: black;
}
.pi-tabLabel {
  color: black;
}*/
</style>
