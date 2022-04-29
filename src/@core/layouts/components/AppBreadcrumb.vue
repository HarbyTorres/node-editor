<template>
  <b-row
    v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
    class="content-header"
  >

    <!-- Content Left -->
    <b-col
      class="content-header-left mb-2"
      cols="12"
      md="9"
    >
      <b-row class="breadcrumbs-top">
        <b-col cols="12">
          <h2 class="content-header-title float-left pr-1 mb-0">
            {{ $route.meta.pageTitle }}
          </h2>
          <div class="breadcrumb-wrapper">
            <b-breadcrumb>
              <b-breadcrumb-item to="/">
                <feather-icon
                  icon="HomeIcon"
                  size="16"
                  class="align-text-top"
                />
              </b-breadcrumb-item>
              <b-breadcrumb-item
                v-for="item in $route.meta.breadcrumb"
                :key="item.text"
                :active="item.active"
                :to="item.to"
              >
                {{ item.text }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </b-col>
      </b-row>
    </b-col>

    <!-- Content Right -->
    <b-col
      class="content-header-right text-md-right d-md-block d-none mb-1"
      md="3"
      cols="12"
    >
      <b-dropdown
        variant="link"
        no-caret
        toggle-class="p-0"
        right
      >

        <template #button-content>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="btn-icon"
          >
            <feather-icon icon="ArchiveIcon" />
          </b-button>
        </template>

        <b-dropdown-item @click="handleTaskClick(); $emit('close-left-sidebar')">
          <feather-icon
            icon="SaveIcon"
            size="16"
          />
          <span class="align-middle ml-50">Save</span>
        </b-dropdown-item>

        <b-dropdown-item :to="{ name: 'home' }">
          <feather-icon
            icon="CodeIcon"
            size="16"
          />
          <span class="align-middle ml-50">Generate code</span>
        </b-dropdown-item>

        <todo-task-handler-sidebar
          v-model="isTaskHandlerSidebarActive"
        />

      </b-dropdown>
    </b-col>
  </b-row>
</template>

<script>
import {
  ref, watch, computed, onUnmounted,
} from '@vue/composition-api'
import {
  BBreadcrumb, BBreadcrumbItem, BRow, BCol, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import TodoTaskHandlerSidebar from '@/views/form/TodoTaskHandlerSidebar.vue'

export default {
  directives: {
    Ripple,
    TodoTaskHandlerSidebar
  },
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
    BRow,
    BCol,
    BDropdown,
    BDropdownItem,
    BButton,
    TodoTaskHandlerSidebar,
  },

  setup(){
    const isTaskHandlerSidebarActive = ref(false)

    const handleTaskClick = () => {

      isTaskHandlerSidebarActive.value = true
      console.log(isTaskHandlerSidebarActive)
    }
    return {
      isTaskHandlerSidebarActive,
      handleTaskClick
    }
  }
}
</script>
