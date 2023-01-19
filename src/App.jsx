import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Topbar from './layouts/global/Topbar';
import Dashboard from './layouts/dashboard/Dashboard';
import Team from './layouts/Team/Team';
import Contacts from './layouts/Contacts/Contacts';
import Invoices from './layouts/Invoices/Invoices';
import Form from './layouts/Form/Form';
import FAQ from './layouts/FAQ/FAQ';
import Calendar from './layouts/Calendar/Calendar';
// import Bar from './layouts/Bar/Bar';
// import Line from './layouts/Line/Line';
// import Pie from './layouts/Pie/Pie';
// import Geography from './layouts/Geography/Geography';
import NavBar from './layouts/global/NavBar';

export const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <NavBar />

          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
