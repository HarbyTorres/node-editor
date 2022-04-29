<template>
      <b-card
      no-body
      class="mb-0"
    >

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :items="fetchDrawflows"
        responsive
        :fields="tableColumns"
        primary-key="id"
        show-empty
        empty-text="No matching records found"
      >
        

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              /> 
            </template>
            <b-dropdown-item :to="{ name: 'home', params: { body: data.item.body }  }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
    </b-card>
</template>

<script>
import {

  BCardText, BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import drawflowStoreModule from '@/store/drawflow/index'
import useDrawflowsList from './drawflowsList'
import { avatarText } from '@core/utils/filter'


export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,

    BCardText,
  },
  setup() {
    const DRAWFLOW_APP_STORE_MODULE_NAME = 'app-drawflow'

    // Register module
    if (!store.hasModule(DRAWFLOW_APP_STORE_MODULE_NAME)) store.registerModule(DRAWFLOW_APP_STORE_MODULE_NAME, drawflowStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(DRAWFLOW_APP_STORE_MODULE_NAME)) store.unregisterModule(DRAWFLOW_APP_STORE_MODULE_NAME)
    })


    const {
      fetchDrawflows,
      tableColumns

    } = useDrawflowsList()

    return {
      // Sidebar
      fetchDrawflows,
      tableColumns
    }
  },

}
</script>

<style>

</style>
