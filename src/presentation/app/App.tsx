import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../config/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../config/layout/core'
import {MasterInit} from '../config/layout/MasterInit'
import {AuthInit} from './modules/auth2'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
