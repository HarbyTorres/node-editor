
import store from '@/store'

import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'


export default function useDrawflowList(){

  const toast = useToast()

  const fetchDrawflows = (ctx, callback) => {
      store
        .dispatch('app-drawflow/fetchDrawflows', {

        })
        .then(response => {
          const drawflows = response.data.data.queryDrawflow   
          callback(drawflows)
        })
        .catch(() => {
          toast({
            component: ToastificationContent,
            props: {
              title: 'Error fetching Drawflows list',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        })
    }
    return {
      fetchDrawflows
  }
}