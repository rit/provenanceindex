<template>
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
</template>

<script>
export default {
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
