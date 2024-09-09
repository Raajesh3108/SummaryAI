import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './services/store.js'
import { QueryClient, QueryClientProvider } from 'react-query'


// Create a QueryClient instance for React Query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap with both Redux and React Query Providers */}
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
