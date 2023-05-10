import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {MetronicI18nProvider} from '../presentation/_metronic/i18n/Metronici18n'
import '../presentation/_metronic/assets/fonticon/fonticon.scss'
import '../presentation/_metronic/assets/keenicons/duotone/style.scss'
import '../presentation/_metronic/assets/keenicons/outline/style.scss'
import '../presentation/_metronic/assets/keenicons/solid/style.scss'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import '../presentation/_metronic/assets/sass/style.scss'
import '../presentation/_metronic/assets/sass/plugins.scss'
import '../presentation/_metronic/assets/sass/style.react.scss'
import {AppRoutes} from '../presentation/app/routing/AppRoutes'
import {AuthProvider, setupAxios} from '../presentation/app/modules/auth'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MetronicI18nProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
